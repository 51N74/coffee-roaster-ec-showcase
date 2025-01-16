export default function Hero() {
  return (
    <div className="hero min-h-screen relative">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/coffee-roaster.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 text-center text-white p-8">
        <h1 className="text-5xl font-bold">Welcome to Our Roastery</h1>
        <p className="mt-4 text-lg">
          Experience the richness and aroma of premium coffee.
        </p>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
}
