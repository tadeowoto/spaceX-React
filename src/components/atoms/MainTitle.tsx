
type Props = {
    title: string;
}

const MainTitle = ({ title }: Props) => {
  return (
    <h1 className="text-5xl text-white font-mainFont font-bold tracking-wider">{title}</h1>
  )
}

export default MainTitle