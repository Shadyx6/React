import React, { useEffect, useState } from "react";
import authService from "../appwrite/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Btn, Card } from "../Components";
import database from "../appwrite/database";
import { Container } from "postcss";
function Post() {
  const [post, setpost] = useState(second);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;
  useEffect(() => {
    if (slug) {
      database.getOneBlog(slug).then((blog) => {
        if (blog) setpost(blog);
        else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [navigate, slug]);

  const deletePost = () => {
    database.deleteBlog(post.$id).then((status) => {
      if(status) {
        database.deleteFile(post.featImage);
        navigate("/");
      }
    })
  }


  return post ? (
    <Container>
      <div className="w-full h-full">
        <div className=" p-10">
          <div className="w-56">
            <img
              src={database.getImagePreview(post.featImage)}
              alt={post.title}
            />
          </div>
          <h1 className="text-2xl font-semibold mb-4">{post.title}</h1>
          <p className="text-sm mb-6">{post.content}</p>
          {isAuthor && (
            <div className="flex">
              <div className="absolute left-6 top-6">
                <Link to={`/edit-post/${post.$id}`}>
                  <Btn className="text-green-500 bg-blue-500 hover:bg-blue-600">
                    Edit 
                  </Btn>
                </Link>
              </div>
              <div className="absolute">
                <Btn onClick={deletePost} className="text-red-600 bg-blue-50 hover:bg-blue-800">
                  Delete
                </Btn>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  ) : null;
}

export default Post;
