import { api } from "./api";

// TODO: error를 받아줄 로직 만들어야하는 걸로 알고있음...
// error boundary 였나....
export async function fetchFire() {
  try {
    const { data } = await api.get("/fire");
    return data;
  } catch (err) {
    // console.log
    throw err;
  }
}

export async function fetchRain() {
  try {
    const { data } = await api.get(`/rain`);
    return data;
  } catch (err) {
    throw err;
  }
}

export async function fetchShelter() {
  try {
    const { data } = await api.get("/shelter");
    return data;
  } catch (err) {
    throw err;
  }
}
