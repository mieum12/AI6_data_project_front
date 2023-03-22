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

export async function fetchShelter() {
  try {
    const { data } = await api.get("/shelter");
    return data;
  } catch (err) {
    console.log("error: ", err);
  }
}
// TODO: shelter/강남구 이렇게 가져오는 api
// 이렇게하는게 맞는지
export async function fetchShelterDistrict({guNm}) {
  try {
    const { data } = await api.get(`/shelter?guNm=${guNm}`);
    return data;
  } catch (err) {
    console.log("error", err);
  }
}
