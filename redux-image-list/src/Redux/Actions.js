export const GET_LIST = 'GET_LIST';
export const LOADING = 'LOADING'

export const fetchData = async (url, method, image, text) => {
try {
    if(method === 'GET') {
    let response;
    response = await fetch(`http://localhost:3000/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data
    }
    else if(method === 'DELETE') {
    await fetch(`http://localhost:3000/${url}`, {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    }
    else if(method === 'PUT' || method === 'POST') {
    await fetch(`http://localhost:3000/${url}`, {
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
  }
}
catch(e) {
    console.error('Error!', e)
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
            data
        })
    }
}

export const addImage = (image, text) => {
    return async () => {
    await fetchData('items', 'POST', image, text)
    }
};

export const editImage = (id, image, text) => {
    return async () => {
    await fetchData(`items/${id}`, 'PUT', image, text)
    }
}

export const deleteImage = (id) => {
    return async (dispatch) => {
    await fetchData(`items/${id}`, 'DELETE')
    const data = await fetchData('items', 'GET')
    dispatch({
        type: GET_LIST,
        data
    })
    }
}


