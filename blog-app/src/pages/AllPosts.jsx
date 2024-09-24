import React, {useEffect, useState} from 'react'
import database from '../appwrite/database'
import authService from '../appwrite/auth';
import { Card, Container } from '../Components'

function AllPosts() {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState()

    useEffect(() => {
      authService.isLoggedIn().then((userData) => (setUser(userData.$id)))
      if(user){
        database.listBlogs().then((posts) => {
            if(posts){
               const userPosts = posts.documents.filter(post => post.userId === user)
               if(userPosts.length > 0) setPosts(userPosts)
            }
        })
      } else{
        console.log("you are not logged in")
      }
    
    }, [user]);
    if(posts.length > 0){
        return (
          <div className="flex gap-6 flex-wrap p-6 px-8 min-h-[62vh]">
            {posts.map((post) => (
             <div key={post.$id} className="flex">
                <Card {...post} />
             </div>
            ))}
          </div>
        );
      } else{
        return (
          <div className="min-h-[62vh] flex items-center justify-center ">
            <h1>No blog posts found:(</h1>
          </div>
        )
      }
    }

export default AllPosts