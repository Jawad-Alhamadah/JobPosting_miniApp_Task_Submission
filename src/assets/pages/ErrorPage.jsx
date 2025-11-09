import React from 'react'
import { useRouteError } from "react-router-dom";
import Navbar from '../components/Navbar';
import { ScreenWidthContext } from '../components/ScreenWidthContext'
function ErrorPage() {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const error = useRouteError();

  return (
    <div>
      <ScreenWidthContext.Provider value={width}>
        <Navbar></Navbar>
        <div className='mt-15'>
          <div className='text-center text-4xl text-primary'> Something went wrong...</div>
          <p className='text-center mt-3 text-primary'>
            {error.status ? <span>{error.status} Error: </span> : ""}
            {error.statusText}
            {error.message}

          </p>

        </div>
      </ScreenWidthContext.Provider>
    </div>
  )
}

export default ErrorPage
