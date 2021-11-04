import axios from "axios"

const API_URL = "https://codaisseur-coders-network.herokuapp.com"

export const postsFetched = (data) => ({
    type: "POSTS/fetched",
    payload: data 
})

export const fetchNext5Posts = async (dispatch, getState) => {
  const offset = getState().posts.posts.length 
  const response = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`)
  // console.log("response", response.data.rows)
  const morePosts = response.data.rows
  dispatch(postsFetched(morePosts))
}