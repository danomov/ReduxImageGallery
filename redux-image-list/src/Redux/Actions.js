export const ADD_IMAGE = 'ADD_IMAGE';

export function addImage(image, text) {
    return { type: ADD_IMAGE, image, text }
};

