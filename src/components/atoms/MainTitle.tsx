
type Props = {
    title: string;
}

const MainTitle = ({ title }: Props) => {
  return (
    <h1 className="text-4xl font-bold text-white">{title}</h1>
  )
}

export default MainTitle