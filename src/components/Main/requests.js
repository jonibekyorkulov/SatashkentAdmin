import { me } from '../../utils/API_urls'
import axios, { headerConfig } from '../../utils/baseUrl'

export const getUserInfo = (successfulFunction, errorFunction) => {
    axios.get(me, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}