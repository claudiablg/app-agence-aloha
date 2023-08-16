import axios from 'axios';
// import https from 'https';

const BASE_URL = 'https://aggressive-robe-foal.cyclic.cloud';

// const httpsAgent = new https.Agent({
//     rejectUnauthorized: false,
//   })

// axios.defaults.httpsAgent = httpsAgent

axios.defaults.baseURL = 'http://localhost:3050';

export default axios.create({
    url: '/',
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    proxy: {
        // protocol: 'https',
        host: '127.0.0.1',
        // hostname: '127.0.0.1' // Takes precedence over 'host' if both are defined
        port: 3050,
    },
    // method: ['get', 'put', 'delete', 'post']
});
// export default axios.create({
//     baseURL: BASE_URL
// });

// export const axiosPrivate = axios.create({
//     baseURL: BASE_URL,
//     headers: { 'Content-Type': 'application/json' },
//     withCredentials: true
// });