import  { ReactNode } from "react";

type Props = {
  MainImage: ReactNode; 
  MainBtn: ReactNode; 
  MainText: string; 
  SecondaryText: string; 
};

const ImagesSection = ({ MainImage, MainBtn, MainText, SecondaryText }: Props) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-10">{MainImage}</div>
      
      {/* Contenido */}
      <article className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">{MainText}</h1>
        <p className="text-lg text-gray-300">{SecondaryText}</p>
        <div>{MainBtn}</div>
      </article>
    </section>
  );
};

export default ImagesSection;
