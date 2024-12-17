import  { ReactNode } from "react";
import MainBtn from "../atoms/MainBtn";
import MainTitle from "../atoms/MainTitle";
import MainText from "../atoms/MainText";

type Props = {
  MainImage: ReactNode;
  videoState: boolean;  
};

const ImagesSection = ({ MainImage, videoState }: Props) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-10 h-full w-full">{MainImage}</div>
      <article className="text-center space-y-4 z-10">
        <MainTitle title="SpaceX" />
        <MainText text="SpaceX is a company that makes rockets and spaceships." />
        <MainBtn  route="/" isVideo={true} watched={videoState} />
      </article>
    </section>
  );
};

export default ImagesSection;
