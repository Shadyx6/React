import React from 'react'

function Navbar() {
  return (
    <> 
    <nav className="">
        <div className="navDiv">
          <section className="nav-left">
            <h1 className="name">Shad Khan</h1>
            <h2 className="title max-md:hidden">Web Developer, Frontend| Backend</h2>
          </section>
          <section className="nav-right">
            <a href="home">Works</a>
            <a href="home">About</a>
            <a href="home">Contact </a>
          </section>
        </div>
        <div className="vline max-xl:w-[100%] max-lg:w-[100%] "></div>
      </nav>
    </>
  )
}

export default Navbar