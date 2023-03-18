import { httpClient } from "./httpClient";

export async function fetchShelter() {
  try {
    const { data } = await httpClient.get("/shelter");
    return data;
  } catch (err) {
    throw err;
  }
}
