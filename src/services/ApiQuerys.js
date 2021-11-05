import axios from 'axios';


async function get(url) {
    const response = await axios.get(url);
    return response.data;
}


const getItem = async (id) => {
    return await get(`https://api.mercadolibre.com/items/${id}`)
}

export default getItem;