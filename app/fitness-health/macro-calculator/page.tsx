import { Metadata } from 'next';
import MacroCalculator from './MacroCalculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Free & Easy Macronutrient Calculator - Find Your Daily Macros| Zenicalculator',
  description: 'New to tracking macros? Our simple macronutrient calculator makes it easy to find your ideal protein, carb, and fat intake. Get your free calculation instantly!',
  keywords: [
    'Macro Calculator',
    'Macronutrient Calculator',
    'Daily Macros',
    'Fitness Calculator',
    'Nutrition Calculator'
  ],
  openGraph: {
    title: 'Free & Easy Macronutrient Calculator - Find Your Daily Macros| Zenicalculator',
    description: 'New to tracking macros? Our simple macronutrient calculator makes it easy to find your ideal protein, carb, and fat intake. Get your free calculation instantly!',
    url: 'https://zenicalculator.com/fitness-health/macro-calculator',
    siteName: 'CalculatorHub',
    images: [
      {
        url: 'https://zenicalculator.com/og-images/macro-calculator.png',
        width: 1200,
        height: 630,
        alt: 'Macronutrient Calculator on Zenicalculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free & Easy Macronutrient Calculator - Find Your Daily Macros| Zenicalculator',
    description: 'New to tracking macros? Our simple macronutrient calculator makes it easy to find your ideal protein, carb, and fat intake. Get your free calculation instantly!',
    images: ['https://zenicalculator.com/og-images/macro-calculator.png'],
  },
};

export default function Page() {
  return (
    <main className="pt-24 md:px-8 lg:px-16 max-w-7xl mx-auto space-y-10">
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
          Macronutrient Calculator
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Calculate your daily macronutrient needs based on your age, height, weight, gender, and activity level.
        </p>
      </section>

      <div className="space-y-8">
        <MacroCalculator />
        <StaticContent />
      </div>
    </main>
  );
}
