import React from 'react'
import {Container, PostForm} from '../Components/index'
function AddPost() {
  
  return (
    <div className='p-4'>
        <Container>
          <h1>Add Post</h1>
          <PostForm />
        </Container>
    </div>
  )
}

export default AddPost