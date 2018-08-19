import React from "react";
import {Button} from 'primereact/button';
import {ProgressBar} from 'primereact/progressbar';

export default class APIHome extends React.Component {

  componentDidMount() {
    const { pullData } = this.props
    pullData()
  }

  onPullData = () => {
    const { pullData } = this.props
    pullData()
  }

  render() {
    const { isLoading } = this.props
    return(
      <div>
        <h1>Pull Data from my Blog</h1>
        {isLoading ? (
          <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>
        ) : (
          <div></div>
        )}
        <Button label="Refresh" onClick={() => this.onPullData()} />
      </div>
    )
  }
}