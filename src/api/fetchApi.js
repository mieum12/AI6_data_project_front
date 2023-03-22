import { api } from "./api";

export async function fetchFire() {
  try {
    const { data } = await api.get("/fire");
    return data;
  } catch (err) {
    console.log("error: ", err);
  }
}

export async function fetchRain() {
  try {
    const { data } = await api.get(`/rain`);
    return data;
  } catch (err) {
    console.log("error: ", err);
  }
}

export async function fetchShelter(guNm) {
  try {
    let path = "/shelter";
    if (typeof guNm === "string") path += guNm;

    const { data } = await api.get(path);
    return data;
  } catch (err) {
    console.log("error: ", err);
  }
}
