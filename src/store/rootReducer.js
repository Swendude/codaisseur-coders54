import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import postsReducer from "./postsFeed/reducer"
import authReducer from "./auth/reducer"

const reducer = combineReducers({
  posts: postsReducer,
  auth: authReducer
});

export default reducer;