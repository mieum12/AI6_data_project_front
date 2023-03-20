import { useState, useEffect } from "react";
import { fetchShelter } from "../api";

export function useShelter() {
  const [shelter, setShelter] = useState([]);

  async function _fetchShelter() {
    try {
      const shelter = await fetchShelter();
      setShelter(shelter);
    } catch (err) {
      throw err;
    }
  }

  useEffect(() => {
    _fetchShelter();
  }, []);

  return { shelter };
}
