import React from 'react'
import { MenuItem } from 'react-bootstrap'

const FormField = ({
    handleChange,
    value,
    placeholder,
    handleClick,
    eventKey,
    handleButtonSelect,
    children
}) => (
    <div>
        <input
            onChange={handleChange}
            value={value}
            placeholder={placeholder}
        />
        <MenuItem
            bsClass="button"
            onClick={handleClick}
            eventKey={eventKey}
            onSelect={handleButtonSelect}>
            {children}
        </MenuItem>
    </div>
)

export default FormField
