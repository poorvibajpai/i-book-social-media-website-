import React from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useContext,useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Post from '../../components/post/Post'
import axios from 'axios'

export default function SavedPosts() {
    const {user:currentUser} = useContext(AuthContext)
    const userId = useParams().userId
    // console.log('type'&&'a')
    console.log(currentUser)
    const navigate = useNavigate();

    const [posts, setPosts] = useState([])

    if(currentUser&&userId!==currentUser._id)
    {
        navigate('/');
    }

    useEffect(()=>{
        const fetchSavedposts = async()=>{
            if(currentUser)
            {
                const res = await axios.get('http://localhost:8000/api/posts/savedposts/'+currentUser._id)
                setPosts(res.data);
                console.log(res.data);
            }
        }

        fetchSavedposts();
    },[currentUser])


    const handleDeletePost = (postId)=>{
        setPosts(posts.filter((post)=>post._id!==postId))
      }

  return (
    <>
        <div>SavedPosts</div>
        <div>

        {posts && posts.map((post)=>{
           return <Post key={post._id} post={post} handleDeletePost={handleDeletePost}/>
        })}
        </div>
    </>
  )
}
