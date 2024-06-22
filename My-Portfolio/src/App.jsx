import {} from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import MouseFollower from './Components/MouseFollower/MouseFollower'
function App() {


  return (
    <> 
    <MouseFollower/>
    <div className="wrapper w-screen overflow-hidden">
    <Navbar/>
    <div className="content1 max-xl:justify-between flex mt-20 max-xl:mt-2 max-md:mt-0 justify-between font-white">
        <div className="right font-white ml-16 mt-40 max-xl:mt-56 !max-xl:mt-0">
          <h3 className="smallt text-5xl">Full Stack</h3>
          <div className="title-text  max-md:w-56 flex flex-col justify-center max-md:justify-normal max-md:items-start items-center relative">
            <div className="float absolute text-4xl top-[39%] left-[100%] max-md:left-[76%] max-md:top-[24%]">
              <h3>&</h3>
            </div>
            <div className="front">
              <h1 className="bigt max-xl:text-[12rem]">FRONTEND</h1>
            </div>
            <div className="back">
              <h1 className="bigt max-xl:text-[12rem]">BACKEND</h1>
            </div>
          </div>
        </div>
        <div className="left max-xl:absolute max-md:left-[15%] max-lg:left-[26%] max-lg:top-[30%] max-xl:left-[37%] max-xl:top-[15%] max-xl: font-medium max-xl:mt-96 max-xl:mr-[300px]">
          <div className="pera max-xl:leading-none  mt-32 text-7xl mr-10 w-[700px] max-xl:w-[650px] max-lg:w-[600px]">
            <p className="text-4xl  max-md:font-semibold p-2 ml-10">
              <span className='shifted text-4xl ml-96 max-md:font-semibold max-md:ml-[100px] '> I AM A DEVELOPER WITH SHARP</span> <br className="max-lg:hidden max-md:block "/>
              MIND, I HAVE 1 YEAR OF DEVELOPING EXPERIENCE <br className="hidden"/>
              SO FAR YET I HAVE CODED AMAZING EYE-CATCHING <br className="hidden"/>
              WEBSITES, I LOVE ANIMATIONS AND 
              NEW WEB <br className="hidden "/> DESIGNS,I LOVE NATURE AND COFFEE
            </p>
          </div>
    
          <div className="btns max-md:font-normal flex gap-20 max-md:gap-56 mt-32 max-xl:mt-0 items-center justify-center mr-20 max-md:justify-normal">
            <button className="btn bg-transparent border-white border-2 ">
              <span className="sliding flex gap-12"><h2>CONTACT ME</h2> 
                <h2>CONTACT ME </h2>
                <h2>CONTACT ME </h2>
    
              </span>
            </button>

            <button className="btn max-md:text-7xl  bg-transparent border-white border-2 ">
              <span id="projects-btn" className="sliding flex gap-5"><h2>MY PROJECTS</h2> 
                <h2>MY PROJECTS </h2>
                <h2>MY PROJECTS </h2>   
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  
    </>
  )
}

export default App
