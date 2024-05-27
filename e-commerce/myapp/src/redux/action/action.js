export const ADD = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

export const CART_QUT_INCREASE = (item) => {
    return {
        type: "INCREASE_CART_COUNT",
        payload: item
    }
}
export const CART_QUT_DECREASE = (item) => {
    return {
        type: "DECREASE_CART_COUNT",
        payload: item
    }
}

export const REMOVE_cart = (id) => {
    return {
        type: "REMOVE_TO_CART",
        payload: id
    }
}


export const ADDWISh = (item) => {
    return {
        type: "ADD_TO_WISH",
        payload: item
    }
}

export const REMOVEWISH = (item) => {
    return {
        type: "ADD_TO_REMOVE",
        payload: item
    }
}