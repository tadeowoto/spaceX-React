
type Props = {
    route: string;
    isVideo: boolean;
    watched?: boolean;
}

function MainBtn({  route, isVideo, watched }: Props) {
  
  let text = 'Explore';
  if(isVideo){
     text = watched ? 'See Recap' : 'Watch Now';
  }
  
  return (
    <a href={route}>
      <button className="text-white px-20 py-4 rounded-md bg-transparent border-2 border-white w-fit hover:bg-white hover:text-black transition-all duration-300 hover:cursor-pointer">
        {text}
      </button>
    </a>
  )
}

export default MainBtn