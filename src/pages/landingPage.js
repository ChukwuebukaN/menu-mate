import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import metaTagsAdder from "../helpers/meta-tags-adder";
import { ReactComponent as MenuMateLogo } from "../assets/svg/menu-mate-logo.svg";

function LandingPage() {
  const [isImageVisible, setImageVisible] = useState(true);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Menu Mate • A step closer to satisfying your cravings...";
    metaTagsAdder("name='og:title'", document.title);
    metaTagsAdder(
      "name='og:Image'",
      "https://res.cloudinary.com/duzyakdkh/image/upload/v1676818487/citrone-landing-page-s1_xba6dl.png"
    );
    metaTagsAdder(
      "name='og:Description'",
      "Menu Mate • gives you fresh access to restaurants menu. sign Up for a free account today!"
    );

    setTimeout(() => {
      setImageVisible(false);
    }, 2000);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** Displays Landing Page Image Then Fades Out */
  const landingPageImageFadeOutMobile = () => {
    return (
      <div className="flex h-screen w-full">
        <div
          className="bg-[url('https://res.cloudinary.com/dtbhsztdp/image/upload/v1676901329/landing-page-image_ixrnhc.png')] 
      -z-10 flex-1 bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute flex justify-center items-center w-full h-full">
          <MenuMateLogo />
        </div>
      </div>
    );
  };

  /** Displays Landing Page Get Started View */
  const landingPageGetStarted = () => {
    return (
      <div>
        <p>Hi</p>
      </div>
    );
  };

  return (
    <div>
      {/* {isImageVisible ? (
        <div >{landingPageImageFadeOutMobile()}</div>
        ) : (
        <div>{landingPageGetStarted()}</div>
      )} */}

      <AnimatePresence>
        {isImageVisible ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {landingPageImageFadeOutMobile()}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {landingPageGetStarted()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LandingPage;
