import { useState } from "react";
import OverviewCards from "./OverviewCards";
import TopCards from "./TopCards";
import facebookIcon from "../assets/images/icon-facebook.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import youtubeIcon from "../assets/images/icon-youtube.svg";
import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";
import dashboardData from "../dashData/dashboardData.json"

const SocialDash = () => {

  const [theme, setTheme] = useState("light");

  const logoMap = { 
    facebookIcon, 
    twitterIcon, 
    instagramIcon, 
    youtubeIcon 
  };
  
  const arrowMap = { 
    up: upIcon, 
    down: downIcon 
  };

  const toggleTheme = () => {
    setTheme((prevState) => (prevState == "dark" ? "light" : "dark"));
  };

  return (
    <div className={`h-[100vh] ${
      theme == "light" 
        ? "bg-gray-100" 
        : "bg-gray-900 text-white"
    }`}>
      <div className={`container mx-auto px-6 py-8  ${theme == "light" ? "bg-white" : "bg-[#1f212e]"}  h-[200px] rounded-[20px]`}>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-6">
          <div>
            <h1 className="text-3xl font-bold">Social Media Dashboard</h1>
            <p className="text-gray-500">Total Followers: {dashboardData.totalFollowers}</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <span className=" mr-3">Dark Mode</span>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={theme == "dark"}
                onChange={toggleTheme} 
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 darkThemeGradient"></div>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {dashboardData.socialCards.map((card, index) => (
            <OverviewCards
              key={index}
              platBar={card.platBar}
              platLogo={logoMap[card.platLogo]}
              arrow={arrowMap[card.arrow]}
              user={card.user}
              num={card.num}
              category={card.category}
              info={card.info}
              textColor={card.textColor}
              theme={theme}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Overview - Today</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardData.dailyStats.map((item, index) => (
            <TopCards
              key={index}
              category={item.category}
              platLogo={logoMap[item.platLogo]}
              num={item.num}
              percentage={item.percentage}
              arrow={arrowMap[item.arrow]}
              textColor={item.textColor}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialDash;