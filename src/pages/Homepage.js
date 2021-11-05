import React from "react";
import { fetchNext5Posts, postsFetched, removePost } from "../store/postsFeed/actions";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { selectPosts } from "../store/postsFeed/selectors";

//1. install & import axios -> actions.js
//2. write and async function -> actions.js
//3. inside the function, make a request with axios -> actions.js
//4. console.log the result -> actions
//5. put the data in local state -> redux state -> reducer
//6. call it inside useEffect -> component
//7. map & display on the screen -> selector.js + component

export default function Homepage() {

  const dispatch = useDispatch()

  const posts = useSelector(selectPosts)

  useEffect(() => {
    dispatch(fetchNext5Posts)
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      { !posts ? "No posts" : posts.map((post, i) => {
      return <div key={i}>
        <p>{post.title}</p>
        {/* <button onClick={() => dispatch(removePost(i))}>x</button> */}
        </div>})}

      {/* {!posts ? "loading" : posts.map(post => <div key={post.id}>  */}
       {/* <h4> {post.title}</h4> */}
      {/* </div>)} */}
      <button onClick={() => dispatch(fetchNext5Posts)}>More posts</button>
    </div>
  )
}