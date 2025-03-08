import React from 'react'

const OverviewCards = ({ platBar, platLogo, arrow, user, num, category, info, textColor, theme }) => {
  return (
    <div>
     
      <div className={`h-1 w-full ${platBar} rounded-t-[5px]`}></div>
      
      <div className={`p-6 ${theme == "light" ? "bg-white" : "bg-gray-800"} rounded-b-[5px]`}>
        <div className="flex justify-center">
           <img className="h-6 mr-2" src={platLogo} alt="social logo" /> 
          <p className="text-gray-500">{user}</p>
        </div>
        
        <div className="text-center mt-6">
          <h3 className={`text-5xl font-bold ${theme == "light" ? "text-black" : "text-white"}`}>{num}</h3>
          <p className="text-xs tracking-widest text-gray-500 mt-1 uppercase">{category}</p>
        </div>
        
        <div className="flex justify-center items-center mt-6">
          <img className="h-3" src={arrow} alt="trend arrow" />
          <span className={`ml-2 text-sm ${textColor}`}>{info}</span>
        </div>
      </div>
    </div>
  )
}

export default OverviewCards
