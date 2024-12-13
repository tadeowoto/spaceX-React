import ImagesSection from "../molecules/ImagesSection";
import BgImages from "../../data/BgImages";
import MainBtn from "../atoms/MainBtn";

const HeroSection = () => {
  return (
    <>
      {BgImages.map((section) => (
        <ImagesSection
          key={section.id}
          MainImage={
            <div className="h-full">
              <img src={section.url} alt={section.alt} />
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
