import React from 'react'
import {Jumbotron} from 'react-bootstrap'

export default (props) =>
    <Jumbotron className="intro">
        <div className="intro-logo"></div>
        <h1>Janusz wie lepiej, zawsze.</h1>
        <ul className="intro-caption">
            <li>W zakładce <span>Stwórz listę</span> wybierz jakie produkty chcesz kupić</li>
            <li>W zakładce <span>Twoje listy zakupów</span> obejrzyj swoje listy</li>
            <li>Ruszaj do sklepu!</li>
        </ul>
    </Jumbotron>
