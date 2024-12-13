
type Props = {
    text: string;
    route: string;
}

function MainBtn({ text, route }: Props) {
  return (
    <a href={route} className=" bg-white text-black px-4 py-2 rounded-md">{text}</a>
  )
}

export default MainBtn