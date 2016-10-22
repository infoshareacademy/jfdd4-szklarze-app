import React from 'react'
import { PageHeader } from 'react-bootstrap'

import ManagerNavigator from '../manager-navigator/ManagerNavigator'

export default (props) =>
    <div>
        <ManagerNavigator/>
        {props.children}
    </div>