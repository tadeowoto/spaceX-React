import NavAnchors from "../atoms/NavAnchors";

type NavListProps = {
    anchords: NavItemProps[];
}

type NavItemProps = {
    text: string;
    route: string;
}

const NavList = ({ anchords }: NavListProps) => {
  //no estoy seguro si esta bien usar como key la ruta del anchor 
    return (
    <ul className=" flex justify-end items-center gap-10">
        {anchords.map((anchor) => (
            <li key={anchor.route}> 
                <NavAnchors text={anchor.text} route={anchor.route} />
            </li>
        ))}
    </ul>
  )
}

export default NavList