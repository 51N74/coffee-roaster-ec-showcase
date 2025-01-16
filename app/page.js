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
      image: '/images/products/product_1.jpg',
    
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$35.00',
      image: '/images/products/product_2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: '$25.00',
      image: '/images/products/product_3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: '$25.00',
      image: '/images/products/product_4.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: '$25.00',
      image: '/images/bestSeller/bestSeller_1.jpg',
    },
    {
      id: 6,
      name: 'Product 6',
      price: '$25.00',
      image: '/images/bestSeller/bestSeller_2.jpg',
    },
    {
      id: 7,
      name: 'Product 7',
      price: '$25.00',
      image: '/images/bestSeller/bestSeller_3.jpg',
    },
    {
      id: 8,
      name: 'Product 8',
      price: '$25.00',
      image: '/images/bestSeller/bestSeller_4.jpg',
    },
    {
      id: 9,
      name: 'Product 9',
      price: '$25.00',
      image: '/images/bestSeller/bestSeller_5.jpg',
    },
    // Add more products here...
  ];

 
  const posts=[
    {
      id: 1,
      title: 'Blog Post 1',
      date: '2023-06-01',
      summary: 'This is the summary of Blog Post 1.',
      image: '/images/blog/blog_1.jpg',
    },
    {
      id: 2,
      title: 'Blog Post 2',
      date: '2023-06-02',
      summary: 'This is the summary of Blog Post 2.',
      image: '/images/blog/blog_2.jpg',
    },
    {
      id: 3,
      title: 'Blog Post 3',
      date: '2023-06-03',
      summary: 'This is the summary of Blog Post 3.',
      image: '/images/blog/blog_3.jpg',
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
