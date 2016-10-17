import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import { addIdToFavorites, getFavoriteProducts} from '../favorites/Favorites'

export default class FavoriteMarker extends React.Component {

    constructor() {
        super()

        this.markAsFavorite = this.markAsFavorite.bind(this);
    }

    markAsFavorite() {
        addIdToFavorites(this.props.productId);
        this.forceUpdate();
    }

    render () {
        var favorites = getFavoriteProducts();
        return (
            <ButtonToolbar>
                <Button
                    bsStyle={favorites.indexOf(this.props.productId) !== -1 ? 'danger' : 'default'}
                    bsSize="xsmall"
                    onClick={this.markAsFavorite}>
                    {"<3"}
                </Button>
            </ButtonToolbar>
        )
    }
}
