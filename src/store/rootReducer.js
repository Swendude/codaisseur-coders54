import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import postsReducer from "./postsFeed/reducer"

const reducer = combineReducers({
  posts: postsReducer
});

export default reducer;