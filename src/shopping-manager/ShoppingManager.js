import React from 'react'
import { PageHeader } from 'react-bootstrap'

import ManagerNavigator from '../manager-navigator/ManagerNavigator'

export default (props) =>
    <div>
        <PageHeader>JANUSZ <small>Planer zakupowy</small></PageHeader>
        <ManagerNavigator/>
        {props.children}
    </div>