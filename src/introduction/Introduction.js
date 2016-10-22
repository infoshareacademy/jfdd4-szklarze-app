import React from 'react'
import {Jumbotron} from 'react-bootstrap'

export default (props) =>
    <Jumbotron className="intro">
        <div className="intro-logo"></div>
        <h1>Janusz wie lepiej, zawsze.</h1>
        <ul className="intro-caption">
            <p>W zakładce <a className="blue-button" href="/all-products">Stwórz listę</a> wybierz jakie produkty chcesz kupić</p>
            <p>W zakładce <a className="blue-button" href="/shopping-lists">Twoje listy zakupów</a> obejrzyj swoje listy</p>
            <p>Wyświetl listę na telefonie i uszaj do sklepu!</p>
        </ul>
    </Jumbotron>
