import React from 'react'

const Priority = ({ id }) => {
    return (
        <button className={`h-[24px] py-[5px] ${id == 0 ? "#F12B2C" : (id == 1 ? "bg-[#FEC400]" : "bg-[#29CC97]")} px-[12px] text-[11px] font-bold text-[#fff] h-[24px] rounded-[100px]`}>
            {id == 0 ? "high" : (id == 1 ? "low" : "normal")}


        </button>
    )
}

export default Priority