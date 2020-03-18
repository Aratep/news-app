//api to fetch
const protocol = window.location.protocol; // get protocol
const host = window.location.host; // get host
export const API_URL = `${protocol}//${host}`;

//auth action types
export const LOGIN_STARTED = "[LOGIN] LOGIN_STARTED";
export const LOGIN_SUCCESS = "[LOGIN] LOGIN_SUCCESS";
export const LOGIN_FAILURE = "[LOGIN] LOGIN_FAILURE";
export const LOG_OUT = "[LOGIN] LOG_OUT";
