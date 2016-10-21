import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { markFavoriteProduct } from './actionCreators'

const mapStateToProps = (state) => ({
    favorites: state.favorites.favoriteProductIds
})

const mapDispatchToProps = (dispatch) => ({
    markFavoriteProduct: (productId) => dispatch(markFavoriteProduct(productId))
})

const FavoriteMarker = ({markFavoriteProduct, favorites, productId}) => (
    <ButtonToolbar>
        <Button
            bsStyle={favorites.indexOf(productId) !== -1 ? 'danger' : 'default'}
            bsSize="xsmall"
            onClick={() => markFavoriteProduct(productId)}>
            {"<3"}
        </Button>
    </ButtonToolbar>
)

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteMarker)