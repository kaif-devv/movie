import axios from 'axios';
const response = await axios.get('https://api.tvmaze.com/search/shows?q=all')
.then((response) => {
    console.log(response);
    return response;
}, (error) => {
    console.log(error);
});
export const DATA = response.data;




// export const DATA = response.data;