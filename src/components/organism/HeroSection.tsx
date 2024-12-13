import ImagesSection from "../molecules/ImagesSection";
import BgImages from "../../data/BgImages";
import MainBtn from "../atoms/MainBtn";
import BackgroundImage from "../atoms/BackgroundImage";
const HeroSection = () => {
  return (
    <>
      {BgImages.map((section) => (
        <ImagesSection
          key={section.id}
          MainImage={
            <div className="h-full w-full">
              <BackgroundImage url={section.url} alt={section.alt} />
            </div>
          }
          MainBtn={<MainBtn text="Learn More" route="/" />}
          MainText="SpaceX"
          SecondaryText="SpaceX is a company that makes rockets and spaceships."
        />
      ))}
    </>
  );
};

export default HeroSection;
