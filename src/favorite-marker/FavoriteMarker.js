import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import './FavoriteMarker.css'

var favorites = JSON.parse(localStorage.getItem('favorites')) || [];

export default class FavoriteMarker extends React.Component {

    constructor() {
        super()

        this.state = {
            marked: 'default',
        }

        this.markAsFavorite = this.markAsFavorite.bind(this)
    }

    componentWillMount() {
        if (favorites.indexOf(this.props.productId) !== -1) {
            this.setState({
                marked: 'danger',
            })
        }
    }

    markAsFavorite() {
        var productId = this.props.productId;

        if (favorites.indexOf(productId) === -1) {
            favorites.push(productId);
            this.setState({
                marked: 'danger',
            })

        } else {
            favorites = favorites.filter(function(id) {
                return id !== productId;
            });
            this.setState({
                marked: 'default',
            })
        }

        console.log(favorites);
        this.updateLocalStorage(favorites);
    }

    updateLocalStorage(favorites) {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    render () {
        return (
            <ButtonToolbar>
                <Button
                    bsStyle={this.state.marked}
                    bsSize="xsmall"
                    onClick={this.markAsFavorite}>
                    {"<3"}
                </Button>
            </ButtonToolbar>

        )
    }
}
