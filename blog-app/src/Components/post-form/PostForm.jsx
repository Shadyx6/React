import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import database from "../../appwrite/database";
import Input from "../Input/Input";
import RTE from "../../RTE";
import Select from '../Select/Select'
function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        blog: post?.blog || "",
        slug: post?.slug || "",
        status: post?.status || "",
        featImage: post?.featImage || "",
      },
    });
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const onSubmit = async (data) => {
    if (post) {
      let image = data.image[0] ? database.uploadImage(data.image[0]) : null;
      if (image) {
        database.deleteImage(post.featImage);
      }
      let dbPost = await database.updateBlog(post.$id, {
        featImage: image ? image.$id : null,
        ...data,
      });
      if (dbPost) {
        navigate(`/blog/${dbPost.$id}`);
      }
    } else {
      let img = data.image[0] ? await database.uploadImage(data.image[0]) : "";
      if (img) {
        const imgId = img.$id;
        data.featImage = imgId;
        let dbPost = await database.createBlog(data.$id, {
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/blog/${dbPost.$id}`);
        }
      }
    }
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .toLowerCase()
        .trim()
        .replace(/^[a-zA-Z\d]+/g, "-");

      return "";
  }, []);

  useEffect(() => {
   const subscription = watch((data, {name}) => {
    if(name === 'title'){
      setValue('slug', slugTransform(data.title, {
        shouldValidate: true
      }))
    }
   return () => {subscription.unsubscribe()}
   })
  }, [slugTransform, watch,setValue])
  
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="w-full h-full p-3">
      <div className="container">
    <Input placeholder="Title"
      label="Title"
      className='mb-4'
      {...register('title', {required: true})}
      type='text'
    />
    <Input placeholder="Slug"
    label="Slug"
    className='mb-4'
    {...register('slug', {required: true})}
    onInput={(e) => {
      setValue('slug', slugTransform(e.currentTarget.value), {
        shouldValidate: true
      })
    }}
    />
    <RTE 
      label="Blog"
      className='mb-4'
      name="blog"
      control={control}
      defaultValue={getValues("blog")}
      />
      <Input placeholder="Status"
        label="Status"
        className='mb-4'
        {...register('status', {required: true})}
        type='text'
        />
        <Input placeholder="Featured Image"
        label="Featured Image"
        className='mb-4'
        accept= "image/png.image/jpg,image/jpeg,/image/gif"
        {...register('image', {required: !post})}
        type='file'
        />
        {post && (
          <div className="w-full">
            <img src={database.getImagePreview(post.featImage)} alt={post.title} />
          </div>
        )}
        <Select label="status" options={['active', 'inactive',]} {...register('status', {required: true})} />

        <Button type="submit" bgColor={post ? "bg-green-300": undefined}>{post ? "update" : "Submit"} </Button>
      </div>
    </form>
  )
}

export default PostForm;
