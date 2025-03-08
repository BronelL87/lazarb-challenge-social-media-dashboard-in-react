import React from 'react'


const TopCards = ({ category, platLogo, num, percentage, arrow, textColor, theme }) => {
  return (
    <div className={`p-6 rounded-lg ${theme == "light" ? "bg-white" : "bg-gray-800"}`}>
    <div className="flex justify-between items-center">
      <p className="text-gray-500">{category}</p>
      <img className="h-6" src={platLogo} alt="platform logo" />
    </div>
    
    <div className="flex justify-between items-center mt-6">
      <h3 className={`text-3xl font-bold ${theme == "light" ? "text-black" : "text-white"}`}>{num}</h3>
      <div className="flex items-center">
        <img className="h-3" src={arrow} alt="trend arrow" />
        <span className={`ml-2 text-sm ${textColor}`}>{percentage}</span>
      </div>
    </div>
  </div>
  )
}

export default TopCards
