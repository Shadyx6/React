import React from 'react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function MouseFollower() {
    const mouseRef = useRef(null)
    useEffect(() => {
      const lighting = mouseRef.current
      const handleMouseMove = () => {
        const offSetX = lighting.offsetWidth / 2
        const offSetY = lighting.offsetHeight / 2

        gsap.to(lighting, {
            x:event.clientX - offSetX,
            y:event.clientY - offSetY,
            duration: 0.5,
            ease: "power2.inOut"
        })
        
      }
      window.addEventListener("mousemove", handleMouseMove)

      return () => {
        window.removeEventListener("mousemove", handleMouseMove)
      }
    }, [mouseRef])
    
  return (
    <>
     <div ref={mouseRef} className="lighting"></div>
    </>
  )
}

export default MouseFollower