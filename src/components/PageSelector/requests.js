import { posts } from '../../utils/API_urls'
import axios, { headerConfig } from '../../utils/baseUrl'

export const getPosts = (successfulFunction, errorFunction, limit) => {
    axios.get(`posts?limit=${limit}&skip=0`, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}