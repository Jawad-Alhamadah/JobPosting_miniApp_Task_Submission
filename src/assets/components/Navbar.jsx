import React from 'react'

import { useNavigate } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { TbCircleArrowLeft } from "react-icons/tb";
import { isAddFormOpenContext } from './IsAddJobFormOpenContext';
import { useContext } from 'react';
function Navbar() {
     let navigate = useNavigate();
     const formContext = useContext(isAddFormOpenContext);
     function navigateHome(){
        navigate("/")
     }

     function navigateBack (){
        navigate(-1)
     }

   
  return (
    <div className='h-10 bg-[#101010] px-2 py-1 fixed bottom-0 w-full flex items-center justify-between'>
        <TbCircleArrowLeft className='text-white font-bold text-3xl ' onClick={navigateBack} />
        <FiPlusCircle className='text-white font-bold text-3xl ' onClick={()=>formContext.setIsDisplayAddForm(true)}/>
        <TiHome className='text-white font-bold text-3xl cursor-pointer ' onClick={navigateHome}/>
        
       

       

    </div>
  )
}

export default Navbar
