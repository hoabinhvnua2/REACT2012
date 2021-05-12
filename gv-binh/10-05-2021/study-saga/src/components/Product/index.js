import React, { useEffect } from 'react';
import { useProduct } from '../../redux/hooks/Product';

const Product = () => {
    const { product, actions } = useProduct()
    
    useEffect(() => {
        actions.getProduct()
    }, [])

    console.log(product)
    return (
        <div>
            <button>Lấy về danh sách sản phẩm</button>
        </div>
    );
};

export default Product;