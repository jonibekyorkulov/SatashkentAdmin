import axios, { headerConfig } from '../../utils/baseUrl'

export const getToken = (url, data, successfulFunction, errorFunction) => {
    axios.post(
        url,
        data
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}