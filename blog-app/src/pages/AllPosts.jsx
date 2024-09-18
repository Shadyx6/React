import React, {useEffect, useState} from 'react'
import database from '../appwrite/database'
import { Card, Container } from '../Components'

function AllPosts() {
    const [posts, setposts] = useState([])
    useEffect(() => {},[])
    database.lisBlogs().then((posts) => {
        if(posts.length > 0) {
            setposts(posts)
        } else{
            setposts([])
        }
    })

  return (
    <div>
        <Container>
        {posts.map((post) => (
            <div key={post.$id} className="flex">
                <Card post={post} />
            </div>
      
        )) 
    }
        </Container>
  </div>
  )
}

export default AllPosts