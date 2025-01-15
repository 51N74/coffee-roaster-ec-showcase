import Head from 'next/head';

export default function OurBean() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Head>
        <title>Our Bean - SINTARA</title>
        <meta name="description" content="Discover the story behind SINTARA's coffee beans, sourced directly from farmers in Thailand." />
      </Head>
      <main className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <section className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Bean</h1>
          <p className="text-gray-700 text-lg mb-8">Experience the rich flavors of Thailand, brought to you by the dedication of our local farmers.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="relative">
            <img src="/images/other/Coffee plantation.jpg" alt="Coffee farm in Thailand" className="rounded-lg shadow-lg w-full h-full object-cover" />
          </div>

          {/* Text Content Section */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">From Farm to Cup</h2>
            <p className="text-gray-600 mb-6">
              Our beans are carefully sourced from the lush coffee-growing regions of Thailand, where the perfect climate and rich soil create the ideal conditions for coffee cultivation.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in sustainable and ethical sourcing, working closely with local farmers to ensure that every bean is harvested with care and dedication. By supporting these farmers, we help to preserve traditional farming methods and contribute to the local economy.
            </p>
            <p className="text-gray-600 mb-6">
              Each cup of SINTARA coffee tells a story of passion, tradition, and a deep connection to the land. We invite you to taste the difference and join us on this journey from farm to cup.
            </p>
          </div>
        </section>

        {/* Farmer Testimonials Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Our Farmers' Voices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Farmer Testimonial 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-600 mb-4">"Working with SINTARA has allowed us to grow coffee sustainably while supporting our community." - Farmer A</p>
            </div>

            {/* Farmer Testimonial 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-600 mb-4">"We take pride in every bean we harvest, knowing it will bring joy to coffee lovers worldwide." - Farmer B</p>
            </div>

            {/* Farmer Testimonial 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-600 mb-4">"SINTARA's commitment to quality and sustainability has transformed our farming practices." - Farmer C</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
