import Link from "next/link";
export default function Contact() {
  return (
    <>
      <section className="container mx-auto px-4 py-4 ">
        <h2 className="text-center text-3xl font-bold mb-4">
        Great Drip Coffee and Roasted Coffee Start with Quality Beans
        </h2>
        <p className="text-center text-base">
        Our primary reason for establishing ourselves as
          a 'coffee roastery' was to develop coffee beans that satisfy coffee
          lovers worldwide, especially in Thailand, a country with a significant
          coffee-drinking culture. Our freshly roasted ground coffee comes in a
          complete variety to suit any preference. Once you have top-notch
          roasted coffee beans, it becomes easier for baristas to create a
          delightful experience for customers without the headache of learning
          complex roasting techniques. Suitable for all types of coffee
          businesses, from large chains across Thailand to small cafes, coffee
          franchises, or coffee enthusiasts wanting to enjoy a perfect cup at
          home. There's no need to worry about drip coffee – whether you prefer
          instant drip or a specific style, we provide it all. Light roast, dark
          roast, and more, our roasted coffee beans deliver a premium taste akin
          to enjoying coffee in a luxurious café. We also offer consultancy
          services for those interested in starting a coffee business but
          lacking knowledge or expertise in coffee beans.
        </p>
      </section>

      <div className="container mx-auto px-4 py-4 ">
        <div className="columns-2">
          <Link href="/about">
            <div className="card bg-base-100 image-full shadow-xl">
              <figure>
                <img
                  src="/images/other/coffee_beans_hands-3698937492.jpg"
                  alt="company"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </Link>

          <Link href="/contact">
            <div className="card bg-base-100 image-full shadow-xl">
              <figure>
                <img
                  src="/images/other/Coffogenic-60ml.jpg"
                  alt="contactus"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
