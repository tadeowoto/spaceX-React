
type Props = {
    text: string;
}

const MainText = ({ text }: Props) => {
  return (
    <p className="text-lg text-gray-300">{text}</p>
  )
}

export default MainText