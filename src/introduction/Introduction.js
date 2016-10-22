import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import { Link } from 'react-router'

export default (props) =>
    <Jumbotron className="intro">
        <div className="intro-logo"></div>
        <h1>Janusz wie lepiej, zawsze.</h1>
        <ul className="intro-caption">
            <p>W zakładce
                <Link to={`/all-products`}><div className="blue-button">Stwórz listę</div></Link>
                wybierz jakie produkty chcesz kupić</p>
            <p>W zakładce
                <Link to={`/shopping-lists`}><div className="blue-button">Twoje listy zakupów</div></Link>
                obejrzyj swoje listy</p>
            <p>Wyświetl listę na telefonie i uszaj do sklepu!</p>
        </ul>
    </Jumbotron>
