import axios from 'axios'

export default axios.create({
    baseURL:"https://storemanagement-b49de.firebaseio.com/"
})