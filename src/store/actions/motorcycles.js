import * as actionTypes from './actionTypes';

export const selectBrand = brandName => {
    return {
        type: actionTypes.SELECT_BRAND,
        payload: brandName
    }
}

export const selectBikes = bikesArr => {
    return {
        type: actionTypes.SELECT_BIKES,
        payload: bikesArr
    }
}