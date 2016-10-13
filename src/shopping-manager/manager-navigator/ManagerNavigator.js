import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { Link } from 'react-router'

export default (props) =>
    <Tabs defaultActiveKey={1} animation={false}>
        <Tab eventKey={1} title="Proponowane produkty"/>
        <Tab eventKey={2} title="Twoje listy zakupów"/>
    </Tabs>