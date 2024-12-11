
type Props = {
    text: string;
    route: string;
}

const NavAnchors = ({ text, route }: Props) => {
  return (
    <a href={route} className=" hover:text-gray-700">{text}</a>
  )
}

export default NavAnchors