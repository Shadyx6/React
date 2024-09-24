import React, { useEffect, useState } from "react";
import { Header, Footer, Card } from "../Components";
import database from "../appwrite/database";
import LoadingSpinner from "../Components/Loader";
function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    database.listBlogs().then((posts) => {
        if(posts){
            setPosts(posts.documents);
        }
    })
  }, []);
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
     <LoadingSpinner />
    )
  }
}

export default HomePage;
