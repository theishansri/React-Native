import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer pbwpzu_YPKdpnrVovsPkMoDQDpOiWGH1jfoxFfCcy6hGOrlQdeuco4vFYTQtjvkDKluFOunt7xuZpyFUZ-LI6r8wEADXHMpRGD03fROB2IysMFYza5IplKJ_bvsxYHYx',
    }
})