export const GET_LIST = 'GET_LIST';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const fetchData = async (url, method, image, text) => {
let response;
try {
    if(method === 'GET') {
    response = await fetch(`http://localhost:3000/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await filterResponse(response, method);
    }
    else if(method === 'DELETE') {
    response = await fetch(`http://localhost:3000/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await filterResponse(response, method);
    }
    else if(method === 'PUT' || method === 'POST') {
    response = await fetch(`http://localhost:3000/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                'item': {
                    'image': image,
                    'text': text
                }
            }
        )
    }); 
    return await filterResponse(response, method);
  }
}
catch(e) {
    console.error('Error!', e)
}

}

export const filterResponse = async(response, method) => {
    if(response.status < 309 && response.status >= 200 && response.ok && (method === 'GET')) {
        return await response.json();
    }
    else if(!(response.status < 309 && response.status >= 200 && response.ok)) {
        return await response.json()
    }
    else {
        return '';
    }
}

export const getList = () => {
    return async (dispatch) => {
        dispatch({
            type: LOADING,
        })
        const data = await fetchData('items', 'GET')
        dispatch({
            type: GET_LIST,
            data,
        })
    }
}

export const addImage = (image, text) => {
    return async (dispatch) => {
    let resp;
    resp = await fetchData('items', 'POST', image, text);
    if(resp){
        dispatch({
            type: ERROR,
            err: resp,
        })
    }
    else {
        const data = await fetchData('items', 'GET')
        dispatch({
            type: GET_LIST,
            data,
        })
    }
    }
};

export const editImage = (id, image, text) => {
    return async (dispatch) => {
    let resp;
    resp = await fetchData(`items/${id}`, 'PUT', image, text);
    if(resp){
        dispatch({
            type: ERROR,
            err: resp,
        })
    }
    else {
        const data = await fetchData('items', 'GET')
        dispatch({
            type: GET_LIST,
            data,
        })
    }
    }
}

export const deleteImage = (id) => {
    return async (dispatch) => {
    let resp;
    resp = await fetchData(`items/${id}`, 'DELETE');
    if(resp){
        dispatch({
            type: ERROR,
            err: resp,
        })
    }
    else {
    const data = await fetchData('items', 'GET');
        dispatch({
            type: GET_LIST,
            data,
        })
    }
    }
}


