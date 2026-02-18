const Welcome = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c')",
      }}
    >
      {/* Light Overlay */}
      <div className="h-full w-full bg-white/70 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to Foodies 🍽️
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-xl">
          Discover delicious meals, crafted with love and delivered fresh to your doorstep.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
