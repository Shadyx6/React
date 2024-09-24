import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import database from "../../appwrite/database";
import Input from "../Input/Input";
import RTE from "../../RTE";
import Btn from "../Btn/Btn";
import Select from "../Select/Select";

function PostForm({ post }) {
  console.log(post)
  const { register, handleSubmit, formState: {errors} , watch, setValue, control } = useForm({
    defaultValues: {
      title: post?.title || "",
      content: post?.content || "",
      slug: post?.slug || "",
      status: post?.status || "active",
      featImage: post?.featImage || "",
    },
  });
console.log(errors)
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (post) {
      setValue("title", post.title)
      
      setValue("content", post.content); // Set content when post is loaded
    }
  }, [post, setValue]);

  const [image, setImage] = useState(null);
  useEffect(() => {
    async function fetchImage() {
      if (post) {
        try {
       
          let img = await database.getImagePreview(post.featImage);
          console.log(img)
          setImage(img.href);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchImage();
  }, [post?.featImage]);

  const Submit = async (data) => {
    let uploadedImage = null;
    console.log(post)
    if (data.image && data.image[0]) {
      console.log(data.image)
      uploadedImage = await database.uploadImage(data.image[0]);
      if (post?.featImage) {
        console.log('deleting old')
        await database.deleteImage(post.featImage); // delete old image
      }
    }

    if (post) {
      const updatedPost = await database.updateBlog(post.$id, {
        ...data,
        featImage: uploadedImage ? uploadedImage.$id : post.featImage
      });
      if (updatedPost) {
        console.log(updatedPost)
        navigate(`/blog/${updatedPost.$id}`);
      }
    } else {
      const img = data.image[0] ? await database.uploadImage(data.image[0]) : "";
      if (img) {
        data.featImage = img.$id;
      }
      console.log(user)
      const newPost = await database.createBlog({
        ...data,
        userId: user.userData.$id,
      });
      if (newPost) {
        navigate(`/blog/${newPost.$id}`);
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, "-");
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((data, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(data.title));
      }
    });
    return () => subscription.unsubscribe();
  }, [slugTransform, watch, setValue]);

  return (
    <form onSubmit={handleSubmit(Submit)} className="w-full h-full p-3">
      <div className="container">
        <Input
          placeholder="Title"
          label="Title"
          className="mb-4"
          {...register("title", { required: true })}
          type="text"
        />
        <Input
          placeholder="Slug"
          label="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
        />
        <RTE
          label="Blog"
          className="mb-4"
          name="content"
          control={control}
        />
        <Input
          placeholder="Featured Image"
          label="Featured Image"
          className="my-4"
          accept="image/png,image/jpg,image/jpeg,image/gif"
          {...register("image")}
          type="file"
        />
        {post && image && (
          <div className="w-80 h-72">
            <img className="h-full w-full object-cover" src={image} alt={post.title} />
          </div>
        )}
        <Select
          label="Status"
          className="my-4 w-56 p-2 bg-gray-200"
          options={["active", "inactive"]}
          value={post?.status || "active"}
          {...register("status", { required: true })}
        />
        <Btn type="submit" bgColor={post ? "bg-green-300" : undefined}>
          {post ? "Update" : "Submit"}
        </Btn>
      </div>
    </form>
  );
}

export default PostForm;
