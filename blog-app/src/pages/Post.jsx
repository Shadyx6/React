import React, { useEffect, useState } from "react";
import authService from "../appwrite/auth";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Btn, Container, Blog } from "../Components";
import database from "../appwrite/database";
import { Link } from "react-router-dom";

function Post() {
  const [post, setPost] = useState(null);
  const [image, setImage] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.userData.$id : false;
  

  useEffect(() => {
    if (slug) {
      database.getOneBlog(slug).then((blog) => {
        if (blog) {
          setPost(blog);
          async function fetchImage() {
            try {
              let img = await database.getImagePreview(blog.featImage);
              setImage(img.href);
            } catch (error) {
              console.log(error);
            }
          }
          fetchImage();
        } else {
          navigate("/");
        }
      });
    } else {
      navigate("/");
    }
  }, [navigate, slug]);

  const deletePost = () => {
    console.log('doing', post)
    database.deleteBlog(post.$id).then((status) => {
      if (status) {
        database.deleteImage(post.featImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <Container>
      <div className="p-6 md:p-8 lg:p-10 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
        <Blog
          author={post.author}
          authorImage={image}
          authorRole={post.authorRole}
          date={post.date}
          title={post.title}
          content={post.content}
          image={image}
          imageCaption={post.imageCaption}
        />
        {isAuthor && (
          <div className="flex space-x-4 mt-6">
            <Link to={`/edit-blog/${post.$id}`}>
              <Btn className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Edit
              </Btn>
            </Link>
            <Btn
              onClick={deletePost}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </Btn>
          </div>
        )}
      </div>
    </Container>
  ) : null;
}

export default Post;
