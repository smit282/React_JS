const initial_state = {
    carts: [],
    wishlist: [],
};
export const cartreducer = (state = initial_state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                carts: [...state.carts, action.payload]
            };

        case "REMOVE_TO_CART":
            state.carts = state.carts.filter((item) => item.id !== action.payload);
            return {
                ...state,
                carts: [...state.carts]
            };

        case "ADD_TO_WISH":
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            };

        case "ADD_TO_REMOVE":
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload);
            return {
                ...state,
                wishlist: [...state.wishlist]
            };

        case "INCREASE_CART_COUNT":
            let updatedCartList = state.cartList.map(item => {
                if (item.id - action.payload.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    };
                }
                return item;
            })
            return {
                ...state,
                cartList: updatedCartList
            };

        case "DECREASE_CART_COUNT": {
            let updatedCartList = state.cartList;
            if (action.payload.quantity != 1) {
                updatedCartList = state.cartlist.map(item => {
                    if (item.id = action.payload.id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;
                });
            }
            return {
                ...state,
                cartList: updatedCartList
            };
        }
        default:
            return state;
    }
};