import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import { Link } from 'react-router'

export default (props) =>
    <Jumbotron className="intro">
        <div className="intro-logo"></div>
        <h1>Janusz wie lepiej, zawsze.</h1>
        <div className="intro-caption">
            <p>W zakładce
                <Link to={`/all-products`}><span className="blue-button">Stwórz listę</span></Link>
                wybierz jakie produkty chcesz kupić</p>
            <p>W zakładce
                <Link to={`/shopping-lists`}><span className="blue-button">Twoje listy zakupów</span></Link>
                obejrzyj swoje listy</p>
            <p>Wyświetl wybraną listę na telefonie i ruszaj do sklepu!</p>
        </div>
    </Jumbotron>
