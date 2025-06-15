import React from 'react';

function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Decorative rotating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-600 rounded-full opacity-30 animate-spin-slow" />
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-spin-reverse" />
      <div className="absolute top-1/3 left-1/2 w-40 h-20 bg-blue-400 rounded-b-full opacity-30 animate-spin-slow" style={{transform: 'translate(-50%, -50%)'}} />
      <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-pink-400 rounded-lg opacity-20 animate-spin" />
      <div className='absolute left-6 top-30 w-20 h-20 bg-black rounded-br-md' />
      <div className="absolute top-1/4 right-1/4 w-20 h-10 bg-purple-500 rounded-tl-full rounded-br-full opacity-20 animate-spin-reverse" />
      <div className="absolute bottom-1/3 right-1/3 w-24 h-12 bg-indigo-400 rounded-bl-full opacity-20 animate-spin" />

      {/* Contact Form */}
      <div className="relative z-10 bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1 font-medium">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              rows={4}
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded font-semibold hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Custom animation keyframes */}
      <style>
        {`
          .animate-spin-slow {
            animation: spin 10s linear infinite;
          }
          .animate-spin-reverse {
            animation: spin-reverse 12s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          @keyframes spin-reverse {
            0% { transform: rotate(360deg);}
            100% { transform: rotate(0deg);}
          }
        `}
      </style>
    </div>
  );
}

export default Contact;
