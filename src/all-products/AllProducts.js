import React from 'react'
import products from '../data/products'
import FavoriteMarker from '../favorite-marker/FavoriteMarker'

export default (props) =>
    <div>
        <h3>Wybór produktów</h3>
        {products.map(function (product) {
            return(
                <div>
                    <p>{product.productName}</p>
                    <FavoriteMarker productId={product.productId} />
                </div>

            )

        })}
    </div>
