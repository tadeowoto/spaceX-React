import VideoBackground from "../atoms/VideoBackground";
import HeroSection from "../organism/HeroSection";
import MainTitle from "../atoms/MainTitle";
import MainText from "../atoms/MainText";
import MainBtn from "../atoms/MainBtn";
const Home = () => {
  return (
    <div className="relative z-[1]">
      <VideoBackground />
      <div className="relative text-white flex items-center justify-start h-screen ml-10 z-10 ">
        <div className="flex flex-col gap-4">
          <MainText text="Lets test the future" />
          <MainTitle title="Welcome to SpaceX" />
          <MainBtn  route="/explore" isVideo={false} />
        </div>
      </div>
      <div className="relative z-10">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
