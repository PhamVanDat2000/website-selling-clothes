const Product = (state = { id: 0 }, action) => {
    switch (action.type) {
        case "PRODUCT_SHOW":
            return { id: action.payload }
        default:
            return state
    }
}

export default Product