import { httpClient } from "./httpClient";

export async function fetchRain() {
  try {
    const { data } = await httpClient.get(`/rain`);
    return data;
  } catch (err) {
    throw err;
  }
}
