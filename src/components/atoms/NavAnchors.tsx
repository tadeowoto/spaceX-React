
type Props = {
    text: string;
    route: string;
}

const NavAnchors = ({ text, route }: Props) => {
  return (
    <a href={route}>{text}</a>
  )
}

export default NavAnchors