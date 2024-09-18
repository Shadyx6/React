import React from 'react'
import database from '../../appwrite/database'
import {Link} from 'react-router-dom'
function Card({$id, title, featImage,}) {
  return (
    <Link to={`/blog/${$id}`}>
    <div className="bg-gradient-to-b from-indigo-800 to-indigo-600 text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
    <img src={getImagePreview(featImage)} alt={title} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-75">something here</p>
      <button className="mt-4 inline-block text-blue-200 text-sm hover:underline">Read More</button>
    </div>
  </div>
  </Link>
  )
}

export default Card