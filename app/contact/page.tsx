import { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us – Zenicalculator | Get in Touch',
  description:
    'Have a question, bug report, or calculator suggestion? Contact the Zenicalculator team. We respond within 1-2 business days.',
  keywords: [
    'contact zenicalculator',
    'calculator support',
    'report bug calculator',
    'calculator request',
    'zenicalculator help',
  ],
  openGraph: {
    title: 'Contact Us – Zenicalculator',
    description:
      'Reach out to the Zenicalculator team for support, feedback, or new calculator requests.',
    url: 'https://www.zenicalculator.com/contact',
    siteName: 'Zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us – Zenicalculator',
    description: 'Get in touch with Zenicalculator for questions, bug reports, or suggestions.',
  },
  alternates: {
    canonical: 'https://www.zenicalculator.com/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
