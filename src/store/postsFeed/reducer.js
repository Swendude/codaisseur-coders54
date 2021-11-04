const initialState = {
  loading: true,
  posts: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "POSTS/fetched": {
      console.log("action", action)
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        loading: false
    }
    }
    default: {
      return state;
    }
  }
}