//api to fetch
const protocol = window.location.protocol; // get protocol
const host = window.location.host; // get host
export const BASE_API_URL = `${protocol}//${host}`;

//auth action types
export const LOGIN_STARTED = "[LOGIN] LOGIN_STARTED";
export const LOGIN_SUCCESS = "[LOGIN] LOGIN_SUCCESS";
export const LOGIN_FAILURE = "[LOGIN] LOGIN_FAILURE";
export const LOG_OUT = "[LOGIN] LOG_OUT";

//news action types
export const GETTING_NEWS_STARTED = "[NEWS] GETTING_NEWS_STARTED";
export const GETING_NEWS_SUCCESS = "[NEWS] GETING_NEWS_SUCCESS";
export const GETTING_NEWS_FAILURE = "[NEWS] GETTING_NEWS_FAILURE";

//current news action types
export const GET_CURRENT_NEWS = "[CURRENT NEWS] GET_CURRENT_NEWS";
