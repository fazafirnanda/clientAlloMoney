import axios from "axios";
const baseUrl = "https://alo-money-production.up.railway.app";

export default bank = async () => {
  try {
    const { data } = await axios.get(`${baseUrl}/transaction`);
  } catch (error) {}
};
