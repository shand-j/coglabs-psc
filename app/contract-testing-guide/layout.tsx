import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contract Testing Guide - Knowledge Base | Cognition Laboratories',
  description: 'Enterprise Contract Testing: Strategic Implementation Guide - Part of our comprehensive Knowledge Base for quality engineering best practices.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}