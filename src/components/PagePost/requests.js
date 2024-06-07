import axios, { headerConfig } from '../../utils/baseUrl'

export const createPostReq = (url, data, successfulFunction, errorFunction) => {
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

export const updatePostReq = (url, data, successfulFunction, errorFunction) => {
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