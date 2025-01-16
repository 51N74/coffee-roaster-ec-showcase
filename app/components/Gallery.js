"use client";
import Image from "next/image";
import { useState } from "react";

const Gallery = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null); // เพิ่มตัวแปรนี้เพื่อจัดการป๊อปอัป

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 4 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 4 : prevIndex - 1
    );
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="container mx-auto px-16 py-16 bg-gray-100">
        <div>
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-left text-coffee-medium  mb-6">
              Best Seller
            </h2>
            <h2 className="text-xl font-bold text-right text-black hover:text-coffee-medium  mb-6">
              <a href="#">View All</a>
            </h2>
          </div>
          <div className="divider divider-neutral"></div>
        </div>

        <div className="container carousel relative">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {products.slice(currentIndex, currentIndex + 4).map((product) => (
                <div
                  key={product.id}
                  className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
                  onClick={() => handleViewDetails(product)}
                >
                  <figure className="relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  </figure>
                  <div className="card-body p-4 bg-coffee-light text-center">
                    <h3 className="card-title text-xl font-semibold text-coffee-dark group-hover:text-coffee-darker">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button className="btn btn-circle" onClick={handlePrev}>
              ❮
            </button>
            <button className="btn btn-circle" onClick={handleNext}>
              ❯
            </button>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                {/* Add more images if available */}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-coffee-dark">{selectedProduct.name}</h3>
                <p className="text-base font-bold text-black">ระดับการคั่ว : เข้ม (Second Crack)</p>
                <p className="text-base font-bold text-black">รสชาติ : เปรี้ยวน้อยมาก เข้มกลางๆ ติดหวาน ไม่ขมไหม้</p>
                <p className="text-base font-bold text-black" > เมนูแนะนำ : กาแฟเย็นผสมหวานได้,มอคค่า</p>
                <p className="text-base font-bold text-black">ขนาด 250g ราคา 310 บาท</p>
                <p className="text-base font-bold text-black">ขนาด 500g ราคา 350 บาท</p>
                <p className="text-base font-bold text-black" >ขนาด 1kg ราคา 400 บาท</p>
                              
                <p className="mt-4">{selectedProduct.description}</p>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button className="btn btn-secondary" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
