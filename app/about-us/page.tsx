import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us – Zenicalculator | Free Online Calculators for Everyone',
  description:
    'Learn about Zenicalculator — a free, accurate, and easy-to-use online calculator platform covering finance, fitness, math, and everyday calculations. Built for students, professionals, and curious minds.',
  keywords: [
    'about zenicalculator',
    'free online calculators',
    'calculator website',
    'finance calculator',
    'health calculator',
    'math calculator',
  ],
  openGraph: {
    title: 'About Us – Zenicalculator',
    description:
      'Zenicalculator provides free, accurate online calculators for finance, fitness, math, and more. Learn about our mission and what we offer.',
    url: 'https://www.zenicalculator.com/about-us',
    siteName: 'Zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – Zenicalculator',
    description:
      'Free, accurate calculators for finance, fitness, math, and everyday use. Learn about Zenicalculator.',
  },
  alternates: {
    canonical: 'https://www.zenicalculator.com/about-us',
  },
};

const stats = [
  { value: '80+', label: 'Free Calculators' },
  { value: '4', label: 'Categories' },
  { value: '100%', label: 'Free Forever' },
  { value: '0', label: 'Sign-ups Required' },
];

const categories = [
  {
    title: 'Finance',
    href: '/finance',
    icon: '💰',
    description:
      'Loan, mortgage, compound interest, EMI, SIP, retirement, and investment calculators to help you make informed money decisions.',
  },
  {
    title: 'Fitness & Health',
    href: '/fitness-health',
    icon: '❤️',
    description:
      'BMI, calorie, body fat, macro, heart rate, and body type calculators to support your health and fitness journey.',
  },
  {
    title: 'Math',
    href: '/math',
    icon: '📐',
    description:
      'Percentage, area, volume, fractions, algebra, perimeter, and equation solvers for students and professionals alike.',
  },
  {
    title: 'Other Tools',
    href: '/other',
    icon: '🔧',
    description:
      'Age, tip, time, unit conversion, GPA, password generator, and 40+ more everyday utility calculators.',
  },
];

const values = [
  {
    icon: '✅',
    title: 'Accuracy First',
    description:
      'Every calculator is built on verified formulas from established scientific, financial, and academic sources.',
  },
  {
    icon: '⚡',
    title: 'Instant Results',
    description:
      'All calculations happen in real time in your browser — no waiting, no server round-trips, no delays.',
  },
  {
    icon: '🔒',
    title: 'Privacy by Design',
    description:
      'We do not collect or store any data you enter. Everything stays on your device. No accounts, no tracking.',
  },
  {
    icon: '📱',
    title: 'Works Everywhere',
    description:
      'Fully responsive and optimized for smartphones, tablets, and desktops. Use it on any device, anytime.',
  },
  {
    icon: '🆓',
    title: 'Always Free',
    description:
      'Every calculator is completely free — no subscriptions, no paywalls, no premium tiers. Ever.',
  },
  {
    icon: '📖',
    title: 'Educational Content',
    description:
      'Each page includes explanations, formulas, and FAQs so you understand the reasoning behind every result.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24 md:px-8 lg:px-16 max-w-7xl mx-auto font-inter">

      {/* Hero */}
      <section className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-5">
          About Zenicalculator
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Free, accurate, and easy-to-use online calculators — built for students,
          professionals, and anyone who needs a reliable answer fast.
        </p>
      </section>

      <div className="w-full px-4">
        <div className="w-full space-y-16">

          {/* Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center shadow-sm">
                <p className="text-4xl font-extrabold text-blue-700 mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
              </div>
            ))}
          </section>

          {/* Mission */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                At <strong>Zenicalculator</strong>, our mission is simple: make powerful calculation tools
                available to everyone, completely free of charge. Whether you are a student solving
                homework problems, a professional making financial decisions, or someone curious about
                their health metrics, you deserve fast and accurate tools without barriers.
              </p>
              <p>
                We built Zenicalculator because we believe access to reliable calculators should not depend
                on a subscription or an account sign-up. Good tools should just work — instantly, on any device,
                without getting in your way.
              </p>
              <p>
                From calculating your monthly mortgage payment to finding your ideal calorie intake, estimating
                concrete for a project, or converting Roman numerals — Zenicalculator covers the full spectrum
                of everyday calculation needs across four core categories: Finance, Fitness &amp; Health, Math, and Other Tools.
              </p>
            </div>
          </section>

          {/* What We Offer */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="group block bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{cat.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors">{cat.title}</h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">{cat.description}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-6">
                  <span className="text-3xl flex-shrink-0">{v.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">{v.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Who We Serve */}
          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">Who Uses Zenicalculator?</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p><strong>Students</strong> use our math and algebra tools to check homework, understand formulas, and practice problem-solving.</p>
              <p><strong>Homebuyers and borrowers</strong> rely on our mortgage, loan, and EMI calculators to compare financing options before signing anything.</p>
              <p><strong>Fitness enthusiasts</strong> track BMI, daily calorie targets, and macro splits using our health tools — all based on clinically established formulas.</p>
              <p><strong>Professionals and tradespeople</strong> use our construction, electrical, and engineering calculators for quick on-site estimates.</p>
              <p><strong>Curious individuals</strong> explore tools like the love calculator, Roman numeral converter, and dice roller just for fun.</p>
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">A Note on Our Calculators</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              All results provided by Zenicalculator are for informational and educational purposes only.
              While we strive for accuracy using established formulas, our calculators are not a substitute
              for professional financial, medical, legal, or engineering advice. For decisions with significant
              consequences, always consult a qualified professional.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center pb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Have a question or suggestion?</h2>
            <p className="text-gray-600 text-lg mb-6">
              We would love to hear from you — whether it is a bug report, a calculator request, or general feedback.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-md"
            >
              Contact Us →
            </Link>
          </section>

        </div>
      </div>
    </main>
  );
}
