import React from 'react'
import {Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {markFavoriteProduct} from './actionCreators'
import FaHeartO from 'react-icons/lib/fa/heart-o'
import FaHeartbeat from 'react-icons/lib/fa/heartbeat'
import './FavoriteMarker.css'


const mapStateToProps = (state) => ({
    favorites: state.favorites.favoriteProductsIds,
    markingFavoriteProduct: state.favorites.markingFavoriteProduct
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
            {markingFavoriteProduct ? <FaHeartbeat/> : <FaHeartO/>}
        </Button>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMarker)