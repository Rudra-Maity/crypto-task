import axios from "axios";

const api=import.meta.env.VITE_API;
export const getCryptoNews = async () => {
    const { data } = await axios.get(api+"/news");
    return data.results;
};

export const getCryptoPrices = async () => {
    const { data } = await axios.get(api+"/prices");
    return data;
};
