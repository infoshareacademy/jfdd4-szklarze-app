import React from 'react'
import './FavoriteMarker.css'

var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export default class FavoriteMarker extends React.Component {

    constructor() {
        super()

        this.setState({
            className: 'not-favorite'
        })

        this.markAsFavorite = this.markAsFavorite.bind(this)
    }

    markAsFavorite() {
        var productId = this.props.productId;

        if (favorites.indexOf(productId) === -1) {
            favorites.push(productId);
            // this.setState.className = 'favorites'
        } else {
            favorites = favorites.filter(function(id) {
                return id !== productId;
            });
            // this.setState.className = 'not-favorites'
        }

        console.log(favorites);
        this.updateLocalStorage(favorites);
    }

    updateLocalStorage(favorites) {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    render () {
        return (
            <div
                onClick={this.markAsFavorite}
                className={this.state.className}>
            </div>
        )
    }
}
