import axios from 'axios';

const baseDomain = "https://tult-photos-gallery.herokuapp.com"
const baseURL = `${baseDomain}/api/v1`;

export default axios.create({
    baseURL
})