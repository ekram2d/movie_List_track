import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
      const heroStyle = {
            // background: 'rgb(34, 193, 195)',
            background: 'linear-gradient(0deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%)',
         
          };
          
      return (
            <>

                  <div style={heroStyle} className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...  w-[90%] mx-auto">
                        <Navbar />
                        <Outlet />
                        <Footer />

                  </div>

            </>
      );
};

export default Main;