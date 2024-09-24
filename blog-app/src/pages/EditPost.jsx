import React, { useState, useEffect } from "react";
import { PostForm, Container } from "../Components";
import database from "../appwrite/database";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setposts] = useState([]);
  const { slug } = useParams();
  console.log(slug)
  const navigate = useNavigate()
  useEffect(() => {
    database.getOneBlog(slug).then((post) => {
      console.log(post)
        if(post) {
            setposts(post);
        }else{
            navigate('/')
        }
    })
  }, [slug, navigate])
  
  


  return post ? (
    <div className="p-6">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null

}

export default EditPost;
