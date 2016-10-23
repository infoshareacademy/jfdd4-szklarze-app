import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { markFavoriteProduct } from './actionCreators'
import FaHeartO from 'react-icons/lib/fa/heart-o'
import './FavoriteMarker.css'


const mapStateToProps = (state) => ({
    favorites: state.favorites.favoriteProductIds
})

const mapDispatchToProps = (dispatch) => ({
    markFavoriteProduct: (productId) => dispatch(markFavoriteProduct(productId))
})

const FavoriteMarker = ({markFavoriteProduct, favorites, productId}) => (
        <Button
            className="favorite-button"
            bsStyle={favorites.indexOf(productId) !== -1 ? 'danger' : 'default'}
            bsSize="xsmall"
            onClick={() => markFavoriteProduct(productId)}>
            <FaHeartO/>
        </Button>
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMarker)