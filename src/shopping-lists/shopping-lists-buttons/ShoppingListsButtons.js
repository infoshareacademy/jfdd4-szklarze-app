import React from 'react'
import {
    ButtonGroup
} from 'react-bootstrap'
import {Link} from 'react-router'
import './ShoppingListsButtons.css'
import {connect} from 'react-redux'
import {resetPurchased} from '../../list-creator/actionCreators'

const mapDispatchToProps = (dispatch) => ({
    resetPurchased: ()=> dispatch(resetPurchased())
})
const mapStateToProps = (state) => ({
})

const ShoppingListsButtons = ({shoppingLists, resetPurchased}) => (
    <ButtonGroup vertical block>
        {shoppingLists
            .filter(list => list.length > 0)
            .map((list, index) =>
                <div>
                    <Link to={`/shopping-lists/` + index} onClick={() => resetPurchased()}>
                        <a className="list-group-item">
                            {typeof list[list.length - 1] === 'string' ?
                                list[list.length - 1] :
                            'Lista zakupów nr ' + (index + 1)
                            }
                        </a>
                    </Link>
                </div>
            )}
    </ButtonGroup>
)

export default connect (mapStateToProps, mapDispatchToProps)(ShoppingListsButtons)