import React from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in a variety of metal works, including custom wheelchair designs, railings, and gates. Our skilled artisans ensure each piece meets high-quality standards. Whether you need functional or decorative metalwork, we have you covered.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times vary based on the complexity of the project. Typically, you can expect your order within 2 to 4 weeks. We will provide you with a more precise timeline during the consultation.",
  },
  {
    question: "Do you offer warranties?",
    answer:
      "Yes, we offer warranties on our products to ensure your satisfaction. Our warranties cover defects in materials and workmanship. Please inquire for specific terms related to your project.",
  },
  {
    question: "Can I customize designs?",
    answer:
      "Absolutely! We encourage customization to meet your specific needs and preferences. Our team will work closely with you to create a design that reflects your vision.",
  },
];

function Question() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Column */}
        <div className="md:col-span-1">
          <h2 className="font-header text-3xl font-bold mb-4 text-gray-900">FAQs</h2>
          <p className="text-gray-700 mb-6 font-body">
            Find answers to your most pressing questions about our metalwork services and processes.
          </p>
          <button className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-100 font-medium transition">
            Contact
          </button>
        </div>
        {/* Right Column */}
        <div className="md:col-span-2 space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b pb-6"
            >
              <h3 className="font-header text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600 font-body">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Question;