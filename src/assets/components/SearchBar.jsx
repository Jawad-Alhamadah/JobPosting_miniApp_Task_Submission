import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { VscClose } from "react-icons/vsc";
import SearchFilters from './SearchFilters';
function SearchBar(props) {
    let [searchInputValue, setSearchInputValue] = React.useState("")
    let [location, setLocation] = React.useState("")
    const minMaxRef = React.useRef(null);


    React.useEffect(() => filterBySearchValue(searchInputValue, location, 0, 0), [searchInputValue, location, minMaxRef])


    function filterBySearchValue(searchString, location, min, max) {


        fetch("/data/mockData.json")
            .then(res => res.json())
            .then(data => {
                if (!searchString && !location && !min && !max) return props.setJobData(data)

                let filteredJobs = data
                let cleanLocation = location.toLowerCase().trim()
                let cleanSearchStr = searchString.toLowerCase().trim()


                if (cleanLocation) {
                    filteredJobs = filteredJobs.filter(job => job.location.toLowerCase().trim().includes(cleanLocation))

                }

                if (searchString) {
                    filteredJobs = filteredJobs.filter(job =>
                    (job.title.toLowerCase().trim().includes(cleanSearchStr) ||
                        job.company.toLowerCase().trim().includes(cleanSearchStr) ||
                        job.location.toLowerCase().trim().includes(cleanSearchStr))
                    )
                }

                if (min !== 0) {
                    filteredJobs = filteredJobs.filter(job => job.salary >= min)
                }

                if (max !== 0) {
                    filteredJobs = filteredJobs.filter(job => job.salary <= max)
                }


                props.setJobData(filteredJobs)
            })
            .catch(err => { console.log(err) })

    }



    function onChangeSearch(e) {
        setSearchInputValue(e.target.value)
    }
    function onChangeLocation(e) {
        setLocation(e.target.value)
    }

    function search(searchStr, locationStr) {

        let min = 0
        let max = 0
        if (minMaxRef) min = Number(minMaxRef.current().minSalaryRange)
        if (minMaxRef) max = Number(minMaxRef.current().maxSalaryRange)


        filterBySearchValue(searchStr, locationStr, min, max)
    }

    function getMinMax(minMax) {
        minMaxRef.current = minMax
    }
    return (
        <div>
            <div className='w-full bg-white p-2 flex space-x-4'>

                <div className=' flex w-[50%] rounded-l-3xl outline bg-black'>
                    <button className=' text-white p-1'>
                        <HiOutlineSearch className='size-5 '
                            onClick={() => search(searchInputValue, location)}
                        />
                    </button>
                    <input placeholder="search" onChange={onChangeSearch} value={searchInputValue} className='pl-1  bg-white w-[90%]'>

                    </input>
                    <VscClose onClick={() => setSearchInputValue("")} className='bg-white h-full' />
                </div>
                <div className=' flex w-[50%] rounded-l-3xl outline bg-black'>
                    <button className=' text-white p-1'>
                        <GrLocation className='size-5 '
                            onClick={() => search(searchInputValue, location)}
                        />

                    </button>
                    <input placeholder="location" onChange={onChangeLocation} value={location} className='pl-1  bg-white  w-[90%]'></input>
                    <VscClose onClick={() => setLocation("")} className='bg-white h-full' />
                </div>

            </div>
            <SearchFilters getMinMax={getMinMax}></SearchFilters>
            {/* <button onClick={()=>console.log(minMaxRef.current())}>check minmax </button> */}
        </div>
    )
}

export default SearchBar
