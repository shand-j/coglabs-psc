import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Cognition Laboratories',
  description: 'Insights, tutorials, and best practices in quality engineering and software testing.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}