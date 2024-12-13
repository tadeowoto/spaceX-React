import  { ReactNode } from "react";
import MainBtn from "../atoms/MainBtn";
import MainTitle from "../atoms/MainTitle";
import MainText from "../atoms/MainText";

type Props = {
  MainImage: ReactNode;  
};

const ImagesSection = ({ MainImage }: Props) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-10 h-full w-full">{MainImage}</div>
      <article className="text-center space-y-4 z-10">
        <MainTitle title="SpaceX" />
        <MainText text="SpaceX is a company that makes rockets and spaceships." />
        <MainBtn text="Ver más" route="/" />
      </article>
    </section>
  );
};

export default ImagesSection;
