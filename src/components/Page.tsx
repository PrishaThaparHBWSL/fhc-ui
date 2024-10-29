import Data from "./Data";
import Footer from "./Footer";
import Navbar from "./Navbar";
import OverView from "./OverView";
import {Pagination} from "@nextui-org/react";


export default function Page() {
    return (
      <div>
        <div><Navbar /></div>
        <div><Data /></div>
        <div><OverView /></div>
        {/* <Pagination showControls={true} total={10} initialPage={1} /> */}
        <div><Footer /></div>
      </div>
    )
    
  }
  