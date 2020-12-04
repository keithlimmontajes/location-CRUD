import axios from 'axios';

export const list = async() => {
    try{
        const response = await axios.get("https://5f3430949124200016e18826.mockapi.io/api/locations");
        return response;
    } catch(e) {
        return e
    }
}