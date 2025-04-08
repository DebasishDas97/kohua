import axios from "axios";
import { getEnvVariable } from "./utils/envUtils";
const apiUrl = getEnvVariable("VITE_API_URL");
const apiToken = getEnvVariable("VITE_API_TOKEN");

export const makeRequest = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: "bearer " + apiToken,
  },
});