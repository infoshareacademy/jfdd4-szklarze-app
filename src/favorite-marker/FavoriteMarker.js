import React from 'react'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {markFavoriteProduct} from './actionCreators'
import FaHeartO from 'react-icons/lib/fa/heart-o'
import './FavoriteMarker.css'


const mapStateToProps = (state) => ({
    favorites: state.favorites.favoriteProductsIds
})

const mapDispatchToProps = (dispatch) => ({
    markFavoriteProduct: (productId, favorites) =>
        dispatch(markFavoriteProduct(productId, favorites))
})

const FavoriteMarker = ({
    markFavoriteProduct,
    favorites,
    productId,
    markingFavoriteProduct
}) => (
    <div className="favorite-marker">
        <Button
            bsStyle={favorites.indexOf(productId) !== -1 ? 'success' : 'default'}
            onClick={() => markFavoriteProduct(productId, favorites)}>
            <FaHeartO/>
        </Button>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMarker)