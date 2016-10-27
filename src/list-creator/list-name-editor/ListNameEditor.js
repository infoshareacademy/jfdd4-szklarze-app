import React from 'react'
import TiEdit from 'react-icons/lib/ti/edit'

function printListName(list, listId) {
    const listNumber = Number(listId) + 1;
    return typeof list[list.length - 1] !== 'object' ?
        list[list.length - 1] :
    'Lista zakupów nr ' + listNumber
}

const ListNameEditor = ({list, listId, ...props}) => (
    <div className="list-name-container">
        <h4>{printListName(list, listId)}</h4>
        <button
            className="list-name-edit-button"
            title="Edytuj nazwę listy...">
            <TiEdit />
        </button>
    </div>
)

export default ListNameEditor