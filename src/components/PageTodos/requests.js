import axios, { headerConfig } from '../../utils/baseUrl'

export const createTodoReq = (url, data, successfulFunction, errorFunction) => {
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
export const getTodos = (successfulFunction, errorFunction, limit) => {
    axios.get(`todos?limit=${limit}&skip=0`, {
        headers: headerConfig(),
    }).then(response => {
        successfulFunction(response.data)
    }).catch((error) => {
        errorFunction(error)
    })
}