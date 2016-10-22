import React from 'react'
import {Jumbotron} from 'react-bootstrap'

export default (props) =>
    <Jumbotron className="intro">
        <div className="intro-logo"></div>
        <h1>Janusz wie lepiej, zawsze.</h1>
        <ul className="intro-caption">
            <p>W zakładce <button className="blue-button">Stwórz listę</button> wybierz jakie produkty chcesz kupić</p>
            <p>W zakładce <button className="blue-button">Twoje listy zakupów</button> obejrzyj swoje listy</p>
            <p>Wyświetl listę na telefonie i uszaj do sklepu!</p>
        </ul>
    </Jumbotron>
