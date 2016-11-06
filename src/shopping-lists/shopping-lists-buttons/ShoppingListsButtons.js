import React from 'react'
import {
    ButtonGroup
} from 'react-bootstrap'
import {Link} from 'react-router'
import './ShoppingListsButtons.css'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) => ({
})
const mapStateToProps = (state) => ({
})

const ShoppingListsButtons = ({shoppingLists}) => {

    return (
        <ButtonGroup vertical block>
            {shoppingLists
                .filter(list => list.length > 0)
                .map((list, index) =>
                    <div>
                        <Link to={`/shopping-lists/` + index}
                              className="list-group-item">
                            {list[list.length - 1][0] !== '' ?
                                list[list.length - 1][0] :
                            'Lista zakupów nr ' + (index + 1)
                            }
                        </Link>
                    </div>
                )}
        </ButtonGroup>
    )
}

export default connect (mapStateToProps, mapDispatchToProps)(ShoppingListsButtons)