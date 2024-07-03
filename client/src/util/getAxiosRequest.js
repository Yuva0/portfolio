import axios from "axios";

const getAxiosRequest = (url) => {
    const axiosInstance = axios.create({baseURL: process.env.REACT_APP_API_URL});

    const fetch = async() => {
        const res = await axiosInstance.get(url);
        // const res = await axios.get("http://localhost:5000/api/"+url);
        return res;
    };
    const res = fetch();
    return res;
};

export default getAxiosRequest;