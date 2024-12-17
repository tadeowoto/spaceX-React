import FooterItems from "../../data/FooterData.ts";
import UrdList from "../molecules/UrdList.tsx";
const Footer = () => {
  return (
    <footer className=" fixed bottom-0 w-full h-12 backdrop-blur-md text-white z-10 flex items-center justify-center ">
        <UrdList anchords={FooterItems} />
    </footer>
  )
}

export default Footer