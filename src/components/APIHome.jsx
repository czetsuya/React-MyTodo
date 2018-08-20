import React from "react";
import {Button} from 'primereact/button';
import {ProgressBar} from 'primereact/progressbar';
import UserControl from './UserControl'

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
    const { isLoading, result } = this.props

    console.log(result)

    return(
      <div>
        <h1>Pull Data from my Blog</h1>
        {isLoading && (
          <ProgressBar mode="indeterminate" style={{height: '6px'}}></ProgressBar>
        )}
        <div>
          {result && (
            <div>
              {result.map(e =>
                <UserControl key={e.id} user={e}></UserControl>
              )}
            </div>
          )}
        </div>
        <Button label="Refresh" onClick={() => this.onPullData()} />
      </div>
    )
  }
}