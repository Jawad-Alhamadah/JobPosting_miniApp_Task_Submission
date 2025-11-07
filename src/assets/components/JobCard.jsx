import React from 'react'
import styles from './stylingModules/JobCard.module.css';
import { BsBriefcaseFill } from "react-icons/bs";
import { BsCash } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";

import { useNavigate } from 'react-router-dom';
function JobCard(props) {
let navigate = useNavigate();
  function getPostDate(date){

    let dateFormat = {
      month: "short",
      day: "numeric",
      year: "numeric"
    } 

    let postDate = new Date (date)
    let today = new Date()
    if(postDate.setHours(0,0,0,0) === today.setHours(0,0,0,0)) return "Today"

    return postDate.toLocaleDateString("en-US",dateFormat)

  }
  return (
    <div onClick={()=>{navigate(`/job/${props.id}`)}} className=" bg-white border border-blue-100 mt-2 p-2 shadow-[1px_1px_5px_rgb(180,195,205)]">
        <div className="flex gap-2">
            <div>
                <img alt="logo" src={props.src} className='size-20 '   
                onError={(e) => {
                        e.currentTarget.src = "/logos/default.svg";
                    }} ></img>
                
            </div>
            
            <div className="w-full p-2">
                <div className="text-[#2972e3] font-bold text-[1.1em]">{props.title}</div>
                <div  className="text-gray-500 text-[0.8em]">{props.company}</div>
                <div className='flex items-center '>
                  <MdLocationPin   className='text-red-700'/>
                  {props.location}
                </div>
                <div className='flex items-center'>
                  <MdOutlineAttachMoney  className='text-green-500 size-4'/>
                  {props.salary}
                </div>
                <div className={styles.postDate}>{getPostDate(props.postDate)}</div>
                
            </div>
        </div>
      
    </div>
  )
}

export default JobCard
