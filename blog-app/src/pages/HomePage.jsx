import React, { useEffect, useState } from "react";
import { Header, Footer, Card } from "../Components";
import database from "../appwrite/database";

function HomePage() {
  const [posts, setposts] = useState([]);

  // useEffect(() => {
    
  //   database.listBlogs().then((posts) => {
  //       if(posts){
  //           setposts(posts.document);
  //       }
  //   })
  // }, []);
  if(posts.length > 0){
    return (
      <div>
        <Header />
        {posts.map((post) => (
         <div key={post.$id} className="flex">
            <Card post={post} />
         </div>
        ))}
        <Footer />
      </div>
    );
  } else{
    return (
      <div>
        <h1>No blog posts found</h1>
      </div>
    )
  }
}

export default HomePage;
