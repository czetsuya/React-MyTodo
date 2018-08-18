import React from 'react'
import FilterLink from '../containers/FilterLink.container'
import { VisibilityFilterType } from '../containers/FilterLink.container'

export default class Footer extends React.Component {    
    render() {
        return (
            <div>
                <FilterLink filter={VisibilityFilterType.ALL}>All</FilterLink>
                <FilterLink filter={VisibilityFilterType.COMPLETED}>Completed</FilterLink>
                <FilterLink filter={VisibilityFilterType.ACTIVE}>Active</FilterLink>
            </div>
        )
    }
}