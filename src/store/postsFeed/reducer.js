const initialState = {
  loading: true,
  posts: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "POSTS/fetched": {
      console.log("action", action)
      const result = {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false
    }
    console.log(result)
    return result
    }
    case "POSTS/remove": {
      console.log('recieved a POST/remove')
      const result = {
        ...state,
        posts: state.posts.filter((post, i) => i != action.payload )
      }
      return result;
    }
    default: {
      return state;
    }
  }
}