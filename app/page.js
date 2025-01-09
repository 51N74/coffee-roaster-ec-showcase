import Image from "next/image";
import Hero from './components/Hero'
import Body from './components/Body'
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from './components/Contact'
export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: '$20.00',
      image: '/images/product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$35.00',
      image: '/images/product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$25.00',
      image: '/images/product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$25.00',
      image: '/images/product4.jpg',
    },
    // Add more products here...
  ];

  const posts=[
    {
      id: 1,
      title: 'Blog Post 1',
      date: '2023-06-01',
      summary: 'This is the summary of Blog Post 1.',
      image: '/images/blog1.jpg',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      date: '2023-06-02',
      summary: 'This is the summary of Blog Post 2.',
      image: '/images/blog2.jpg',
    },
    // Add more blog posts here...
  ];

  return (
    <>
      <Hero />
      <Body />
      <Gallery products={products} />
      <Blog posts={posts} />
      <Contact />

</>
  );
}
