import React from 'react'
import JobCard from '../components/JobCard'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AddJobForm from '../components/AddJobForm'
import { isAddFormOpenContext } from '../components/IsAddJobFormOpenContext'
import SearchFilters from '../components/SearchFilters'
import UserProfile from '../components/UserProfile'
import { GiArtificialHive } from "react-icons/gi";
import Footer from '../components/Footer'
import { ScreenWidthContext } from '../components/ScreenWidthContext'
function HomePage() {


  let [jobData, setJobData] = React.useState([])
  let [isDisplayAddForm, setIsDisplayAddForm] = React.useState(false)

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ------------|Mobile|-----------------------------
  if (width < 800) {
    return (
      <div >
        <isAddFormOpenContext.Provider value={{ isDisplayAddForm, setIsDisplayAddForm }}>
          <ScreenWidthContext.Provider value={width}>
            <Navbar ></Navbar>
            <SearchBar setJobData={setJobData}></SearchBar>
            {/* <SearchFilters></SearchFilters> */}

            {isDisplayAddForm && <AddJobForm setJobData={setJobData}></AddJobForm>}

            {
              jobData.map(job => <JobCard key={job.id} {...job} />)
            }

            {jobData.length ? "" : <div className='text-gray-400 w-full text-center pt-5 capitalize'>no jobs found</div>}
          </ScreenWidthContext.Provider>
        </isAddFormOpenContext.Provider>
        <Footer></Footer>
      </div>
    )
  }

  // ------------|Desktop|-----------------------------
  return (
    <div >
      <isAddFormOpenContext.Provider value={{ isDisplayAddForm, setIsDisplayAddForm }}>
        <ScreenWidthContext.Provider value={width}>
          <Navbar ></Navbar>


          <div className='p-4 flex'>

            <SearchBar setJobData={setJobData}></SearchBar>
            <div className='flex justify-center w-[60%]'>
              <div className='flex items-center'><GiArtificialHive className='text-pink-800 size-23' /></div>
              <div className='text-[2.8em] text-pink-800 flex items-center'>Job Listing App</div>
            </div>
          </div>

          {/* <SearchFilters></SearchFilters> */}

          {isDisplayAddForm && <AddJobForm setJobData={setJobData}></AddJobForm>}

          <div className='flex p-4 '>
            <div dir="rtl" className='w-[60%] overflow-y-scroll max-h-[500px] '>
              {
                jobData.map(job => <JobCard key={job.id} {...job} />)
              }

            </div>

            <UserProfile name="full name" education="Kansas State University" skills={["React","Vue","NodeJs","Javascript"]} title="title" ></UserProfile>


          </div>


          {jobData.length ? "" : <div className='text-gray-400 w-full text-center pt-5 capitalize'>no jobs found</div>}

        </ScreenWidthContext.Provider>
      </isAddFormOpenContext.Provider>
      <Footer></Footer>
    </div>
  )

}

export default HomePage
