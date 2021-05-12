// custom hook product

import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import productActions from '../actions/Product';
import { productSelector } from '../selectors/Product';

export const useProduct = () => {
    const product = useSelector(productSelector)
    const dispatch = useDispatch()
    const actions = useMemo(() => bindActionCreators(productActions, dispatch))

    return useMemo(() => ({
        actions, product
    }), [actions, product])
}