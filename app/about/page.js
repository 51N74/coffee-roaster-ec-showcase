import Head from 'next/head';
import Link from 'next/link';
export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Us - SINTARA</title>
        <meta name="description" content="Learn about SINTARA, a passionate coffee roaster dedicated to simplicity and the natural flavors of coffee." />
      </Head>
      <main className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <section className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About SINTARA</h1>
          <p className="text-gray-700 text-lg mb-8">Where coffee meets passion. We believe in simplicity, purity, and the art of authentic coffee roasting.</p>
        </section>

        {/* Image Section */}
        <section className="relative mb-12">
          <img src="/images/other/fimg-5.jpg" alt="Coffee Roasting at SINTARA" className="rounded-lg shadow-lg w-full h-64 object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white">Crafting the Perfect Roast</h2>
          </div>
        </section>

        {/* Story Section */}
        <section className="space-y-6">
          <p className="text-gray-600 text-lg">
            Welcome to <span className="font-semibold">SINTARA</span>, where coffee meets passion. As a dedicated coffee roaster, I believe that coffee should be simple and not complicated. Each bean tells a story, and my mission is to bring out the natural flavors in the most authentic way.
          </p>
          <p className="text-gray-600 text-lg">
            At SINTARA, we take pride in carefully selecting and roasting coffee beans to create a perfect cup that speaks of simplicity and purity. Whether you're a coffee enthusiast or a casual drinker, we aim to deliver a memorable coffee experience with every sip.
          </p>
          <p className="text-gray-600 text-lg">
            Join us in our journey to explore the world of coffee, one cup at a time. Let's celebrate the beauty of simplicity together.
          </p>
        </section>

        {/* Values Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quality */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quality</h3>
              <p className="text-gray-600">We source the best beans and roast them to perfection to ensure every cup is rich, smooth, and full of flavor.</p>
            </div>

            {/* Simplicity */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Simplicity</h3>
              <p className="text-gray-600">Our approach is simple: bring out the natural flavors of coffee without overcomplicating the process.</p>
            </div>

            {/* Community */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-600">We work closely with local farmers and engage with coffee lovers to build a community around our shared passion for coffee.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Coffee Journey</h2>
          <p className="text-gray-700 mb-8">Stay connected with us for the latest updates, new roasts, and coffee stories. Let's explore the world of coffee together!</p>
          
          <Link href="/contact">
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Contact Us
          </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
