import {combineReducers} from "redux";

import auth from "./auth";
import news from "./news";
import currentNews from "./current-news";

const rootReducer = combineReducers({
    auth,
    news,
    currentNews
});

export default rootReducer