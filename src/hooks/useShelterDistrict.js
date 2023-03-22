import { useState, useEffect } from "react";
import { fetchShelterDistrict } from "../api";
import { useParams } from "react-router-dom";

//TODO :shelter/강남구 불러오기 
export function useShelterDistrict() {
  const [shelterDistrict, setShelterDistrict] = useState([]);
  //구 변경 될때마다 새로고침 (params)
  const params = useParams();

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
  }, [params]);

  return { shelterDistrict };
}
