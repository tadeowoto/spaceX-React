
type Props = {
    url : string;
    alt: string;
}

const BackgroundImage = ( { url, alt } : Props) => {
  return (
    
    <img src={url} alt={alt} className="object-cover w-full h-full" />

  )
}

export default BackgroundImage