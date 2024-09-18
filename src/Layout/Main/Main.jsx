import { Outlet } from "react-router-dom";
import { Nav } from "./Nav";



const Main = () => {
     return (
          <div className="container mx-auto">
               <Nav></Nav>
               <div className="pt-20">
               <Outlet></Outlet>
               </div>
          </div>
     );
};

export default Main;