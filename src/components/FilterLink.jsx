import {Button} from 'primereact/button';
import React from 'react'
import PropTypes from 'prop-types'

const FilterLink = ({ filterTodo, children }) => (
    <Button label={children} onClick={() => filterTodo()}></Button>
)

FilterLink.propTypes = {
    filterTodo: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}

export default FilterLink