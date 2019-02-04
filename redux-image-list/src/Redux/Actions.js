export const GET_LIST = 'GET_LIST';
export const ADD_IMAGE = 'ADD_IMAGE';

export const fetchData = async (url, method, image, text) => {
try {
    if(method === 'GET' || method === 'DELETE') {
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
    else if(method === 'PUT' || method === 'POST') {
    let response;
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
  }
}
catch(e) {
    console.error('Error!', e)
}
}

export const getList = () => {
    return async (dispatch) => {
        const data = await fetchData('items', 'GET')
        dispatch({
            type: GET_LIST,
            data
        })
    }
}

export const addImage = (image, text) => {
    return async (dispatch) => {
        const data = await fetchData('items', 'POST', image, text)
        dispatch({
            type: ADD_IMAGE,
            data
        })
    }
};

