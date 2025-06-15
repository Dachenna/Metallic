import React from 'react';

function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="max-w-2xl bg-white rounded-xl shadow-xl p-8 md:p-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4 font-header">About Metallic</h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6 font-body">
          At <span className="font-semibold text-green-700">Metallic</span>, we blend creativity and precision to craft exceptional metalwork for modern spaces. 
          From custom railings and gates to innovative architectural features, our skilled artisans are passionate about turning your vision into reality.
        </p>
        <p className="text-gray-600 mb-6 font-body">
          Since our founding, we’ve been committed to quality, reliability, and customer satisfaction. 
          Every project is a collaboration, and every detail matters. Let’s build something remarkable together.
        </p>
        <div className="flex justify-center gap-4">
          <a href="/#services" className="px-6 py-2 rounded bg-green-700 text-white font-semibold hover:bg-green-800 transition">Our Services</a>
          <a href="/contact" className="px-6 py-2 rounded border border-green-700 text-green-700 font-semibold hover:bg-green-50 transition">Contact Us</a>
        </div>
      </div>
    </section>
  );
}

export default About;

