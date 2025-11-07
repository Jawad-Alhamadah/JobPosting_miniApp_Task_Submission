import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from "react-router";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
function JobPostingPage() {
  let params = useParams();
  let [job, setJob] = React.useState({})
  React.useEffect(() => {
    fetch(`/data/mockData.json`)
      .then(res => res.json())
      .then(data => {
        let jobData = data.filter(job => job.id === params.id)
        setJob(jobData[0])
      })
  }, [])
  return (
    <div className="flex justify-center w-full pt-10  rounded-md">
      <div className="bg-white w-[90%] items-center pt-7 p-3 shadow-2xl shadow-black-300">
        <div className="flex justify-center">
          <img alt="logo" src={job.src} className='size-15 '
            onError={(e) => {
              e.currentTarget.src = "/logos/default.svg";
            }} ></img>
          <div className="flex items-center ml-2">{job.company}</div>
        </div>


        <div className="flex justify-evenly mt-2 border-b border-b-gray-300 pb-3">

          <div className="flex justify-center items-center ">
            <MdLocationPin className='text-red-700' />
            <div>{job.location}</div>
          </div>
          <div className="flex justify-center items-center ">
            <MdOutlineAttachMoney className='text-green-500 size-4' />
            <div>{job.salary}</div>
          </div>


        </div>

        <div>

          <div className="text-xl font-bold text-blue-400 text-start pt-10">
            {job.title}
          </div>


          <div className="text-start mt-5 text-[0.9em] text-gray-500">
            {job.description}
          </div>

          <div className="flex justify-between items-end mt-10">
            <button className="px-2 py-1 text-white bg-blue-500 rounded-lg">Apply</button>
            <div>{job.postDate}</div>
            


          </div>

        </div>

      </div>
      <Navbar></Navbar>

    </div>
  )
}

export default JobPostingPage
