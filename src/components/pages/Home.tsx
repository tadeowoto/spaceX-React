import VideoBackground from "../atoms/VideoBackground";
import HeroSection from "../organism/HeroSection";
const Home = () => {
  return (
    <div className="relative pointer-events-none z-[1]">
      <VideoBackground />
      <div className="relative z-10 text-white flex items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to SpaceX</h1>
      </div>
      <div className="relative z-10">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
