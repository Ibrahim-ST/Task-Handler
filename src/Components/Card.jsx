import { FaBuffer, FaComments } from 'react-icons/fa';
import {   FaClipboardList, FaPaperclip, FaRegCalendarDays } from 'react-icons/fa6';

const Card = () => {
     
    return (
        <div className="my-6 px-2 mx-2 bg-white rounded py-2 space-y-3">
            <div className="flex justify-between ">
                <div className="flex gap-1 ">
                    <img className="w-7 h-w-7 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt="" />
                    <h4 className='font-bold'>Client Name</h4>
                </div>
                <div className="flex gap-1 ">
                    <img className="w-7 h-w-7 rounded-full" src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.webp?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" alt="" />
                    <h4 className='font-bold'>Sadik Istiak</h4>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                <span><FaBuffer /></span>
                <p className="">Lorem ipsum dolor sit amet curn..</p>
                </div>
                <button className='  flex items-center bg-slate-200 rounded p-1'> <FaClipboardList /> <span>1/2</span></button>
            </div>
            <div className='flex items-center justify-between'>
                <img className='w-8 h-8 rounded-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA6zq21NVsOxQs4PL4rJU30aiCXEkVrwB-Y19RYowqhUGklgM3SNfj6e-L1UU3mfuyByM&usqp=CAU" alt="" />
                <img className='w-8 h-8 rounded-full ' src="https://likewise-stage.azureedge.net/uploads/3eb6cf23-895b-45e9-b92c-5fb1b457dd04/bill-gates-profile-pic.jpg" alt="" />
            <button className='bg-slate-200 w-8 h-8 rounded-full mx-1 px-1'>12+</button>
            <span className='flex items-center gap-1'>
                <FaComments size={25} color='gray' />
                <span>15</span>
            </span>
            <span className='flex items-center gap-1' >
                <label htmlFor="my_modal_6">
                <FaPaperclip   />
                </label>
                <span>25</span>
            </span>
            <span className='flex items-center gap-1'>
                <FaRegCalendarDays /> 
                <p className=' '>30-12-2022</p>
            </span>
            </div>
            
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <input type="file" className="file-input file-input-bordered file-input-accent w-full  " />
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">This modal works with a hidden checkbox!</p>
                <div className="modal-action">
                <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div>
            </div>
            </div>

            
        </div>
    );
};

export default Card;