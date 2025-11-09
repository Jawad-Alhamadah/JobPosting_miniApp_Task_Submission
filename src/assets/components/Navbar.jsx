import React from 'react'

import { useNavigate } from 'react-router-dom';
import { FiPlusCircle } from "react-icons/fi";
import { TiHome } from "react-icons/ti";
import { TbCircleArrowLeft } from "react-icons/tb";
import { isAddFormOpenContext } from './IsAddJobFormOpenContext';
import { useContext } from 'react';
import { ScreenWidthContext } from './ScreenWidthContext';
import { useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    const path = location.pathname;

    const onHomePage = path === "/";
    const onJobPostingPage = path === "/job/:id";


    const width = React.useContext(ScreenWidthContext);
    let navigate = useNavigate();
    const formContext = useContext(isAddFormOpenContext);
    function navigateHome() {
        navigate("/")
    }

    function navigateBack() {
        navigate(-1)
    }


    // -----------------|Mobile|---------------------------------------------------------
    if (width < 800) {

        return (
            <div className='h-10 bg-pink-900 px-2 py-1 fixed bottom-0 w-full flex items-center justify-between'>
                <TbCircleArrowLeft className='text-white font-bold text-3xl ' onClick={navigateBack} />
                {onHomePage ?
                    <FiPlusCircle
                        className='text-white font-bold text-3xl '
                        onClick={() => formContext.setIsDisplayAddForm(true)} /> : ""}

                <TiHome className='text-white font-bold text-3xl cursor-pointer ' onClick={navigateHome} />
            </div>
        )
    }

    // -----------------|Desktop|---------------------------------------------------------
    return (
        <div className='h-10 bg-pink-900 px-2 py-1  top-0 flex items-center justify-between '>
            <TbCircleArrowLeft className='text-white font-bold text-3xl ' onClick={navigateBack} />
            {onHomePage ?
                    <FiPlusCircle
                        className='text-white font-bold text-3xl '
                        onClick={() => formContext.setIsDisplayAddForm(true)} /> : ""}
            <TiHome className='text-white font-bold text-3xl cursor-pointer ' onClick={navigateHome} />
        </div>
    )

}

export default Navbar
