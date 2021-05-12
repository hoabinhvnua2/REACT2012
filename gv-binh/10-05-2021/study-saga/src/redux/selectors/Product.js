import { createSelector } from 'reselect'

const getProductSelector = state => state.product

export const productSelector = createSelector(
    getProductSelector,
    (product) => product
)