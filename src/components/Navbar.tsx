// import logo from "@/assets/logo.png";
// import Image from 'next/image';


// export default function Navbar() {
//   return (
//     <nav className="bg-white border-gray-200">
//       <div className="max-w-screen-xl flex flex-wrap mx-auto p-4">
//         <div
//           className="flex justify-start"
//         >
//           <Image
//             src={logo}
//             className="h-1vh w-3/4"
//             alt="Insta QuoteLogo"
//           />
//         </div>
//         <div className="block w-full md:w-auto" id="navbar-default">
//           <div className="font-medium flex flex-col p-4 mt-4">
//             <div className="text-left">
//             <strong>Current Configurator:</strong> Herc Door Entrances 
//             </div>
//             <div className="text-left">
//             <strong>Mark:</strong> Building A Door 1 
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


import logo from "@/assets/logo.png";
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex mx-auto p-4">
        {/* Left section: Image, taking 1/3 of nav */}
        <div className="flex justify-start w-1/3">
          <Image
            src={logo}
            className="h-1vh w-3/4"
            alt="Insta Quote Logo"
          />
        </div>
        
        {/* Right section: Text content, taking 2/3 of nav */}
        <div className="flex flex-col justify-center w-2/3 pl-4">
          <div className="font-medium">
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
