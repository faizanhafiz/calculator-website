import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Volume Calculator – Volume of 3D Shapes | zenicalculator',
  description: 'Calculate volume of any 3D shape: cube, sphere, cylinder, cone, pyramid. Free online volume calculator with formulas and examples.',
  keywords: ["volume calculator", "volume of sphere", "volume of cylinder", "cube volume formula"],
  openGraph: {
    title: 'Volume Calculator – Volume of 3D Shapes',
    description: 'Calculate volume of any 3D shape: cube, sphere, cylinder, cone, pyramid. Free online volume calculator with formulas and examples.',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Volume Calculator – Volume of 3D Shapes',
    description: 'Calculate volume of any 3D shape: cube, sphere, cylinder, cone, pyramid. Free online volume calculator with formulas and examples.',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">Volume Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate the volume of cubes, spheres, cylinders, cones, and more.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
