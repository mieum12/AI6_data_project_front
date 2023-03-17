import { useState, useEffect } from "react";
import { fetchRain } from "../api/fetchRain";

export function useRain() {
  const [rain, setRain] = useState([]);

  async function _fetchRain() {
    try {
      const rain = await fetchRain();
      setRain(rain);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    _fetchRain();
  }, []);

  return { rain };
}
