import { Metadata } from 'next';
import Calculator from './Calculator';
import StaticContent from './StaticContent';

export const metadata: Metadata = {
  title: 'Area Calculator – Calculate Area of Any Shape | zenicalculator',
  description: 'Calculate the area of rectangles, circles, triangles, trapezoids, and more with our free online area calculator. Includes all formulas and step-by-step explanations.',
  keywords: ["area calculator", "area of a circle", "area of a rectangle", "calculate area"],
  openGraph: {
    title: 'Area Calculator – Calculate Area of Any Shape',
    description: 'Calculate the area of rectangles, circles, triangles, trapezoids, and more with our free online area calculator. Includes all formulas and step-by-ste',
    siteName: 'zenicalculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Area Calculator – Calculate Area of Any Shape',
    description: 'Calculate the area of rectangles, circles, triangles, trapezoids, and more with our free online area calculator. Includes all formulas and step-by-ste',
  },
};

export default function Page() {
  return (
    <main className="pt-24 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto space-y-10">
      <section className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-3">Area Calculator</h1>
        <p className="text-gray-700 text-base md:text-lg">Calculate the area of rectangles, circles, triangles, and more.</p>
      </section>
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Top)</div>
      <Calculator />
      <StaticContent />
      <div className="w-full bg-gray-200 h-24 flex items-center justify-center text-gray-500 rounded-lg">Google Ad (Bottom)</div>
    </main>
  );
}
