import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
    shoppingList: state.allProducts.shoppingLists
})

class ProductsToBuy extends React.Component {
    render(){
        var {
            shoppingList
        } = this.props

        return(
            <h1>ProductsToBuy</h1>
        )

    }
}

export default connect (mapStateToProps)(ProductsToBuy)