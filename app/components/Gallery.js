import Image from 'next/image';

const Gallery = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-6">เมล็ดกาแฟของเรา</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <figure>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body text-center">
              <h3 className="card-title text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-gray-500">{product.price}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;