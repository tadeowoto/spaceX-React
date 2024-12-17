import ImagesSection from "../molecules/ImagesSection";
import BgImages from "../../data/BgImages";
import BackgroundImage from "../atoms/BackgroundImage";
const HeroSection = () => {
  return (
    <>
      {BgImages.map((section) => (
        <ImagesSection
          key={section.id}
          videoState={section.watched}
          MainImage={
            <div className="h-full w-full">
              <BackgroundImage url={section.url} alt={section.alt} />
            </div>
          }
        />
      ))}
    </>
  );
};

export default HeroSection;
