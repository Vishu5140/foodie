import { useNavigate } from "react-router";
import appback from "/appback.jpg";
const Home = () => {
  const navigate=useNavigate();
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          `url('${appback}')`,
      }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-6 perspective">
  <img
    src="/food.png"
    alt="Logo"
    className="w-14 h-14 animate-rotateY rounded-full"
  />
</div>

      {/* Overlay */}
      <div className="h-full w-full bg-black/60 flex flex-col justify-center items-center text-center px-4">
        
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-4
            bg-linear-to-r from-red-400 via-orange-400 to-yellow-300
            bg-clip-text text-transparent
            animate-slideIn"
        >
          Delicious Food, Delivered Fast
        </h1>

        <p
          className="text-white text-lg md:text-xl mb-8 opacity-90 animate-slideInDelay"
        >
          Fresh meals • Best prices • Fast delivery
        </p>

        <button
          onClick={()=>navigate('/welcome')}
          className="bg-white text-black px-10 py-3 rounded-full 
          text-lg font-semibold hover:bg-gray-200 transition animate-slideInBtn"
        >
          Visit
        </button>
      </div>
    </div>
  );
};

export default Home;
