import logo from "@/assets/logo.png";
import Image from 'next/image';


export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="w-[80%] mx-auto flex p-4">
        <div
          className="flex justify-start"
        >
          <Image
            src={logo}
            className="h-1vh w-3/4 border-r border-gray-300"
            alt="Insta QuoteLogo"
          />
        </div>
        <div className="block w-auto mt-5" id="navbar-default">
          <div className="font-medium flex flex-col p-4 mt-4">
            <div className="text-left">
            <strong>Current Configurator:</strong> Herc Door Entrances 
            </div>
            <div className="text-left">
            <strong>Mark:</strong> Building A Door 1 
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
