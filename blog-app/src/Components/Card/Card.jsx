import React, { useState } from 'react'
import database from '../../appwrite/database'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
function Card({$id, title, content, featImage}) {
  const [image, setImage] = useState(null)
  useEffect(() => {
    async function fetchImage(){
      try {
        let img = await database.getImagePreview(featImage)
        setImage(img.href)
      } catch (error) {
        console.log(error)
      }
    }
    fetchImage()
  }, [featImage])
  
  return (
    <Link to={`/blog/${$id}`}>
    <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 w-80 h-fit ">
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl whitespace-nowrap font-semibold mb-2">{title
        .toString().split(' ').slice(0,3).join(' ') + (title.split(' ').length > 3 ? '...' : '')}</h3>
      <p className="text-sm opacity-75" dangerouslySetInnerHTML={{__html: content.toString().split(' ').splice(0,4).join(' ') + (content.split(' ').length > 4 ? '...' : '')}}></p>
      <button className="mt-4 inline-block text-blue-200 text-sm hover:underline">Read More</button>
    </div>
  </div>
  </Link>
  )
}

export default Card