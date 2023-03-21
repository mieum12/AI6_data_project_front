import { useState, useEffect } from "react";
import { fetchShelterDistrict } from "../api";

//TODO :shelter/강남구 불러오기 
export function useShelterDistrict() {
  const [shelterDistrict, setShelterDistrict] = useState([]);

  async function _fetchShelterDistrict() {
    try {
      const shelterDistrict = await fetchShelterDistrict();
      setShelterDistrict(shelterDistrict);
    } catch (err) {
      console.log("error", err);
    }
  }

  useEffect(() => {
    _fetchShelterDistrict();
  }, []);

  return { shelterDistrict };
}
