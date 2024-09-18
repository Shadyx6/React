import React, { useState, useEffect } from "react";
import { PostForm, Container } from "../Components";
import database from "../appwrite/database";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const [post, setposts] = useState([]);
  const { path } = useParams();
  const navigate = useNavigate()
    database.getOneBlog().then((post) => {
        if(post) {
            setposts(post);
        }else{
            navigate('/')
        }
    })


  return post ? (
    <div className="p-6">
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null

}

export default EditPost;
