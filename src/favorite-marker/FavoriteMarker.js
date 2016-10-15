import React from 'react'

var favorites = [];

export default class FavoriteMarker extends React.Component {

    constructor() {
        super()

        this.markAsFavorite = this.markAsFavorite.bind(this)
    }

    markAsFavorite() {
        favorites.push(this.props.productId);
        console.log(favorites)
    }

    render () {
        return (
            <button onClick={this.markAsFavorite}>Dodaj do ulubionych</button>
        )
    }
}
