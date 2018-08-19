import React from 'react'
import {ProgressBar} from 'primereact/progressbar';

export default class PageLoader extends React.Component {
    render() {
        const { isLoading } = this.props

        if(loading) {
            return (
                <div>
                    <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>
                </div>
            )

        } else {
            return null
        }
    }    
}