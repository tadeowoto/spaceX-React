import NavData from "../../data/NavData.ts";
import NavList from "../molecules/NavList";

const Header = () => {
  return (
    <>
        <header className=" w/full h-20 bg-slate-200 flex justify-between items-center">
            <div className=" w-2/5 flex justify-start items-center ml-10">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/332px-SpaceX-Logo.svg.png" alt="spacex logo"  className="w-60 "/>
            </div>
            <div className=" w-2/5 flex justify-end items-center mr-10">
                <NavList anchords={NavData} />
            </div>
        </header>
    
    </>
  )
}

export default Header