import { reducer } from './reducers'
import { numberAdd2 } from './actions/number'

export const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    reducer,
    initialState
}