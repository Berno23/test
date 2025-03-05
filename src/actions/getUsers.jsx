import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api/?results=50");
    return response.data.results;
  } catch (error) {
    console.error("Erreur :", error);
    return [];
  }
};