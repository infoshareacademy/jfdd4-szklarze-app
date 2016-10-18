import React from 'react'
import products from '../data/products'
import FavoriteMarker from '../favorite-marker/FavoriteMarker'
import Filters from '../filters/Filters'

export default (props) =>
    <div className="all-products">
        <h3>Wybór produktów</h3>
        <Filters/>
        {products.map(function (product) {
            return(
                <div>
                    <p>{product.productName}</p>
                    <FavoriteMarker productId={product.productId} />
                </div>
            )
        })}
    </div>
