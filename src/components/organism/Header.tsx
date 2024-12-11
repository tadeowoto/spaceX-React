import NavData from "../../data/NavData.ts";
import NavList from "../molecules/UrdList.tsx";
import SpaceXLogo from "../atoms/SpaceXLogo.tsx";

const Header = () => {
  return (
        <header className=" fixed top-0 w-full h-16 bg-opacity-80 bg-transparent text-white z-10 flex items-center px-4">
            <div className=" w-2/5 flex justify-start items-center ml-10">
                <SpaceXLogo/>
            </div>
            <div className=" flex justify-center items-center gap-10">
                <NavList anchords={NavData} />
            </div>
        </header>

  )
}

export default Header