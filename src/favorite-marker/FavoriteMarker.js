import React from 'react'

var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export default class FavoriteMarker extends React.Component {

    constructor() {
        super()

        this.markAsFavorite = this.markAsFavorite.bind(this)
    }

    markAsFavorite() {
        var productId = this.props.productId;

        if (favorites.indexOf(productId) === -1)
        favorites.push(productId);
        else favorites = favorites.filter(function(id) {
            return id !== productId;
        });

        console.log(favorites);
        this.updateLocalStorage(favorites);
    }

    updateLocalStorage(favorites) {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    render () {
        return (
            <button onClick={this.markAsFavorite}>Dodaj do ulubionych</button>
        )
    }
}
