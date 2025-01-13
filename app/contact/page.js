// 'use client';
// import { useState } from 'react';

//     export default function Contact() {
//         const [name, setName] = useState('');
//         const [email, setEmail] = useState('');
//         const [message, setMessage] = useState('');

//         const handleSubmit = (event) => {
//             event.preventDefault();
//             // Handle form submission logic here
//         };

//         return (
//             <div>
//                 <h1>Contact Us</h1>
//                 <form onSubmit={handleSubmit}>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required
//                     />

//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />

//                     <label htmlFor="message">Message:</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         required
//                     ></textarea>

//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         );
//     }

import Head from 'next/head';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Contact Us - SINTARA</title>
        <meta name="description" content="Get in touch with SINTARA for inquiries about our coffee beans and roasting services." />
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

