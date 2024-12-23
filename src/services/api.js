//Base url: https://api.tvmaze.com/shows
// API_KEY: RKD2jq4fv7VIoYecYDSZoWTwnSsCwIkF
// URL : https://api.tvmaze.com/shows?api_key=RKD2jq4fv7VIoYecYDSZoWTwnSsCwIkF&language=pt-BR
import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.tvmaze.com/",
});
export default Api;
