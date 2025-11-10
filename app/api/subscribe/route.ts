import { NextRequest, NextResponse } from 'next/server';

const MAILERLITE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiODYzNDU4ZjE1MDQwZDZhMzg3MGQwZWQzODE4Njc1ZTUzMGQ0OWE3NDQzNGRhNGVmMjI1N2ZkZWQ4OGI1OGUzMTEyYjAwNjgzNTEzNDNjYzQiLCJpYXQiOjE3NjIyNzIxNTMuMTYxMjkzLCJuYmYiOjE3NjIyNzIxNTMuMTYxMjk2LCJleHAiOjQ5MTc5NDU3NTMuMTU3MTQxLCJzdWIiOiIxOTE1NjEyIiwic2NvcGVzIjpbXX0.odtEx4kodFsoyQTBFGZotMoLweAiVMECP2Kt0iV7HRSRA1DLI-ifDTM8xErdwl_Xi2pVNZBRvHYu6oyrIhNzoiVPc8Y9JXP323E87Gk-fumD-hggoQXm0ZsgbBBlDpzMTwIGIDl8UqNC_dHM20hRZxFm5vdRbpTnHndkKG4JKdpYt_EgSpwLTysYk9YBDn97OT9qMNDubd8OxilNpe2fgRjJb38WezIQVJvZLdafEhh6F7AwkfW5Dm3DTD-AHxx6xyoEsmzzuSTLYxNJv_4r2tZJ8NY1qla3e9bN3KR50QQIryBKFwxy0GxjzMjGNaUOwd-QBghLgQJ04BgLHZZFRMSRiLfEeE0kUyYDCZrRHPWjoq4yWWGTZ4ftX6GfkeF-AN4dqhi6C_yoMYKCBg1JuwmoEKxUAu9qO_9_Zx595oU_x188ZFZ6OTkhRo3M-K_V49Y_QKqPy2gE4yS9sjhUkeSyLwN8jSsbZSSOzNYbhhYZu_aocRR99cNoFNpk5a0vNrMwfjyauMyfHQh35X6YJRA26N-WIWomy_paLj2CAXK5E6jJQZuuES260ik8rU9lDBRTJrfLi7_J9uySfnML3qpU0O7CbzVh7rkszdGYHLO9etOlVqKUc6ldWj__4yup6kgfgoNZwhG-K2AaIQajV1zTtga1kILiR2MgT72OAdY';

// You'll need to create a group/list in MailerLite and get its ID
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID || 'your-group-id-here';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Add subscriber to MailerLite
    const response = await fetch(`https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': MAILERLITE_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        resubscribe: true, // Allow resubscription if already unsubscribed
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('MailerLite API error:', errorData);

      // Handle specific MailerLite errors
      if (response.status === 400 && errorData.error?.message?.includes('already exists')) {
        return NextResponse.json({
          error: 'This email is already subscribed to our newsletter.'
        }, { status: 400 });
      }

      return NextResponse.json({
        error: 'Failed to subscribe. Please try again later.'
      }, { status: 500 });
    }

    const subscriberData = await response.json();

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!',
      subscriber: subscriberData
    });

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json({
      error: 'Internal server error. Please try again later.'
    }, { status: 500 });
  }
}