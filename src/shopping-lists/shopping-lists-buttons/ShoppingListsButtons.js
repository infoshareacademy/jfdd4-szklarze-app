import React from 'react'
import {
    ButtonGroup
} from 'react-bootstrap'
import {Link} from 'react-router'
import './ShoppingListsButtons.css'

const ShoppingListsButtons = ({shoppingLists}) => (
    <ButtonGroup vertical block>
        {shoppingLists
            .filter(list => list.length > 0)
            .map((list, index) =>
                <div>
                    <Link to={`/shopping-lists/` + index}>
                        <a className="list-group-item">
                            {typeof list[list.length-1] === 'string' ?
                                list[list.length-1] :
                                'Lista zakupów nr '+(index + 1)
                            }
                        </a>
                    </Link>
                </div>
            )}
    </ButtonGroup>
)

export default ShoppingListsButtons

