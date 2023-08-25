/* eslint-disable react/prop-types */
import Card from "./Card";

 

const Section = ({title, color}) => {
    return (
        <div className="w-full">

        <div className='w-[390px] bg-[#F2F4F7] h-screen overflow-y-scroll'>
            <div className=" ">
            <div className='flex justify-between p-2 px-4 text-gray-600'>
                <div className="flex gap-2 items-center">
                {color && 
                <div className={`h-5 w-5 ${color} rounded-l-xl`}></div>
                }
                <p className="font-semibold">{title}</p>
                </div>
                <button className="bg-slate-200 px-2 rounded font-bold ">0</button>
            </div>
            </div>
            <div className="py-4  ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
        </div>
    );
};

export default Section;