'use client';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
    {/* <div className="relative bg-gray-900 overflow-hidden">
  <div className="absolute inset-0">
    <img src="/path-to-your-coffee-image.jpg" alt="Roasting Coffee" className="w-full h-full object-cover opacity-50" />
  </div>
  <div className="relative z-10 max-w-4xl mx-auto p-6 text-center text-white">
    <h1 className="text-4xl font-bold mb-4">SINTARA</h1>
    <p className="text-lg">Crafting the perfect cup of coffee, simply and authentically.</p>
  </div>
</div> */}

<div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Us - SINTARA</title>
        <meta name="description" content="Learn more about SINTARA, a passionate coffee roaster who believes in the simplicity of coffee." />
      </Head>
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8" data-aos="fade-up">About Us</h1>
        <div className="bg-white p-8 shadow-lg rounded-lg" data-aos="fade-right">
          <p className="text-lg text-gray-700 leading-relaxed">
            Welcome to SINTARA, where coffee meets passion. As a dedicated coffee roaster, I believe that coffee should be simple and not complicated. Each bean tells a story, and my mission is to bring out the natural flavors in the most authentic way.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At SINTARA, we take pride in carefully selecting and roasting coffee beans to create a perfect cup that speaks of simplicity and purity. Whether you're a coffee enthusiast or a casual drinker, we aim to deliver a memorable coffee experience with every sip.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Join us in our journey to explore the world of coffee, one cup at a time. Let's celebrate the beauty of simplicity together.
          </p>
        </div>
      </main>
      
      <div className="testimonial-container" data-aos="fade-up">
  <p className="text-lg text-gray-700">"The best coffee experience I've ever had. SINTARA truly brings out the natural flavors."</p>
  <p className="text-sm text-gray-500">- Happy Customer</p>
</div>
    </div>
    </>
  );
}
