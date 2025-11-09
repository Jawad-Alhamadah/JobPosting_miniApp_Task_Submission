import React from 'react'
import Navbar from '../components/Navbar'
import { useParams } from "react-router";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import UserProfile from '../components/UserProfile';
import Footer from "../components/Footer"
import { ScreenWidthContext } from '../components/ScreenWidthContext'
function JobPostingPage() {


  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  let params = useParams();
  let [job, setJob] = React.useState({})
  React.useEffect(() => {
    fetch(`/data/mockData.json`)
      .then(res => res.json())
      .then(data => {
        let jobData = data.filter(job => job.id === params.id)
        setJob(jobData[0])
        
      })
      .catch(err=>console.log(err)) 
  }, [])


  // Mobile --------------------------------------------------------------------------------
  if (width < 800) {
    return (
      <div>
        <ScreenWidthContext.Provider value={width}>
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
                  <div>{job.salary ? job.salary.toLocaleString() : ""} a Year</div>
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
                  {console.log(width)}


                </div>

              </div>

            </div>

          </div>
          <Navbar></Navbar>
          <Footer></Footer>
        </ScreenWidthContext.Provider>
      </div>

    );
  }



  // Desktop --------------------------------------------------------------------------------
  return (
    <div>
      <ScreenWidthContext.Provider value={width}>
        <Navbar></Navbar>
        <div className="flex justify-center w-full p-9  rounded-md ">


          <div className="bg-white w-[92%] items-center p-5 shadow-2xl shadow-black-300 ">
            <div className="flex justify-between">

              <div className="grid justify-items-center items-end">
                <img alt="logo" src={job.src} className='size-15 '
                  onError={(e) => {
                    e.currentTarget.src = "/logos/default.svg";
                  }} ></img>
                <div className="flex items-center ml-2">{job.company}</div>
              </div>

              <div className="flex items-end">

                <div className="flex gap-4">
                  <div className="flex justify-center items-center ">
                    <MdLocationPin className='text-red-700' />
                    <div>{job.location}</div>
                  </div>
                  <div className="flex justify-center items-center ">
                    <MdOutlineAttachMoney className='text-green-500 size-4' />
                    <div>{job.salary ? job.salary.toLocaleString() : ""} a Year</div>

                  </div>
                </div>
              </div>
              <div>
                <img src="/QR.png" className="size-[84px]"></img>
                <div className="text-center font-bold text-pink-700">Share</div>
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
                {console.log(width)}


              </div>

            </div>

          </div>
          {/* here */}
          <UserProfile name="full name" education="Kansas State University" skills={["React","Vue","NodeJs","Javascript"]} title="title" ></UserProfile>

        </div>
        <Footer></Footer>
      </ScreenWidthContext.Provider>
    </div>
  );
}

export default JobPostingPage
