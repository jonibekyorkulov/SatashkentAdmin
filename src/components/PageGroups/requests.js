import axios, { headerConfig } from '../../utils/baseUrl'

export const getUser= (successfulFunction, errorFunction) => {
    axios.get(`users`, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}
export const createUserReq = (url, data, successfulFunction, errorFunction) => {
    axios.post(
        url,
        data,
        {
            headers: headerConfig(),
        }
    ).then((response) => {
        successfulFunction(response)
    })
    .catch((error) => {
        errorFunction(error)
    });
}