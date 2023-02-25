import React, { useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../helpers/urls";
import metaTagsAdder from "../helpers/meta-tags-adder";
import Buttons from "../components/buttons/buttons";
// import { ReactComponent as MenuMateLogo } from "../assets/svg/menu-mate-logo.svg";

function LandingPage() {
  const navigate = useNavigate();
  // const [isImageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Menu Mate • A step closer to satisfying your cravings...";
    metaTagsAdder("property='og:title'", document.title);
    metaTagsAdder(
      "property='og:Image'",
      "https://res.cloudinary.com/dtbhsztdp/image/upload/v1677076354/get-started-page-image_y7nvdo.png"
    );
    metaTagsAdder(
      "property='og:Description'",
      "Menu Mate • gives you fresh access to restaurants menu. sign Up for a free account today!"
    );

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** Displays Landing Page Get Started View */
  const landingPageGetStarted = () => {
    return (
      <div className="flex h-screen w-full">
        <div
          className="-z-10 flex-1 bg-cover bg-center bg-no-repeat 
      bg-[url('https://res.cloudinary.com/dtbhsztdp/image/upload/v1677076354/get-started-page-image_y7nvdo.png')]"
        />
        <div className="absolute flex justify-center items-end bottom-[10%] w-full h-full">
          <div>
            <p className="font-[700] text-3xl text-center mb-20 px-6 text-white">
              Have access to Restaurants Menu!
            </p>
            <div className="flex justify-center">
              <Buttons
                specificButtonTitle="Get Started"
                specificButtonText="Get Started"
                specificButtonClick={() => navigate(NonAuthRoutes.signup)}
                specificButtonStyling="font-[200] rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <div>{landingPageGetStarted()}</div>;
}

export default LandingPage;
