import { RxHamburgerMenu } from "react-icons/rx";
import { Table7 } from "./Table7";

function Navbar() {
  return (
    <header>
        <section className="">
            <div className="items-center bg-gray-500 flex">
            <RxHamburgerMenu className="text-[20px]" />
            <Table7 />
            </div>
        </section>
    </header>
  )
}

export default Navbar