
type Props = {
    url : string;
    alt: string;
    id: number;
}

const BackgroundImage = ( { url, alt } : Props) => {
  return (
    
    <img src={url} alt={alt} className=" w-full h-full object-cover" />

  )
}

export default BackgroundImage