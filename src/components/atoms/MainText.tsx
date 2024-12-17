
type Props = {
    text: string;
}

const MainText = ({ text }: Props) => {
  return (
    <p className="text-3xl text-gray-100 font-secondaryFont tracking-wider">{text}</p>
  )
}

export default MainText