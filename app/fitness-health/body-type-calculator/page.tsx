import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import StaticContent from './StaticContent';
import WaistHipCalculator from './WaistHipCalculator'

export const metadata: Metadata = {
  title: 'Body Type Calculator – Find Your Ectomorph, Mesomorph, or Endomorph Type',
  description:
    "Discover your body type with our free Body Type Calculator. Quickly find out if you're an ectomorph, mesomorph, or endomorph based on your measurements. Get personalized fitness, diet, and workout tips tailored to your body type. Start your health journey today!",
    keywords: [
      'body type',
      'body type calculator',
      'body shape'
    ],
  openGraph: {
    title: 'Body Type Calculator – Find Your Ectomorph, Mesomorph, or Endomorph Type',
    description: 'Find your body type – ectomorph, mesomorph, or endomorph – with our free Body Type Calculator. Get custom fitness and diet tips today!',
    url: 'https://Zenicalculator.com/fitness-health/body-type-caculator',
    siteName: 'CalculatorHub',
    images: [
      {
        url: 'https://Zenicalculator.com/og-images/bmi.png',
        width: 1200,
        height: 630,
        alt: 'BMI Calculator on CalculatorHub',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Body Type Calculator – Find Your Ectomorph, Mesomorph, or Endomorph Type',
    description: 'Find your body type – ectomorph, mesomorph, or endomorph – with our free Body Type Calculator. Get custom fitness and diet tips today!',
    images: ['https://Zenicalculator.com/og-images/bmi.png'],
  },
};

// const WaistHipCalculator = dynamic(() => import('./WaistHipCalculator'), { ssr: true });

export default function Page() {
  return (
    <main className="pt-24  md:px-8 lg:px-16 max-w-7xl mx-auto space-y-10">

     

      {/* Page Heading */}
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
          Body Type Calculator
        </h1>
        <p className="text-gray-700 text-base md:text-lg text-center md:text-left">
   Use this Body Type Calculator for women to quickly identify your natural body shape—banana, apple, pear, ectomorph or hourglass. Based on your bust, waist, and hip measureme
</p>

      </section>


     {/* Top Ad */}
     <div className="w-full">
        <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg" aria-label="Advertisement">
          Google Ad (Top Banner)
        </div>
      </div>


      {/* Calculator Section */}
      <div className="w-full">
        <WaistHipCalculator />
      </div>

      {/* Static SEO Content */}
      <StaticContent />

      {/* Bottom Ad */}
      <div className="w-full">
        <div className="bg-gray-200 h-28 flex items-center justify-center text-gray-500 rounded-lg" aria-label="Advertisement">
          Google Ad (Bottom Banner)
        </div>
      </div>
    </main>
  );
}
