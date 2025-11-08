import React from 'react'
import JobCard from '../components/JobCard'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AddJobForm from '../components/AddJobForm'
import { isAddFormOpenContext } from '../components/IsAddJobFormOpenContext'
import SearchFilters from '../components/SearchFilters'
import UserProfile from '../components/UserProfile'
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
          <Navbar ></Navbar>
          <SearchBar setJobData={setJobData}></SearchBar>
          {/* <SearchFilters></SearchFilters> */}

          {isDisplayAddForm && <AddJobForm setJobData={setJobData}></AddJobForm>}

          {
            jobData.map(job => <JobCard key={job.id} {...job} />)
          }

          {jobData.length ? "" : <div className='text-gray-400 w-full text-center pt-5 capitalize'>no jobs found</div>}

        </isAddFormOpenContext.Provider>
      </div>
    )
  }

  // ------------|Desktop|-----------------------------
  return (
    <div >
      <isAddFormOpenContext.Provider value={{ isDisplayAddForm, setIsDisplayAddForm }}>
        <Navbar ></Navbar>
        <SearchBar setJobData={setJobData}></SearchBar>
        {/* <SearchFilters></SearchFilters> */}

        {isDisplayAddForm && <AddJobForm setJobData={setJobData}></AddJobForm>}

        <div className='flex justify-evenly'>
          <div>
            {
              jobData.map(job => <JobCard key={job.id} {...job} />)
            }

          </div>
          
            <UserProfile ></UserProfile>
          
            
        </div>


        {jobData.length ? "" : <div className='text-gray-400 w-full text-center pt-5 capitalize'>no jobs found</div>}

      </isAddFormOpenContext.Provider>
    </div>
  )

}

export default HomePage
