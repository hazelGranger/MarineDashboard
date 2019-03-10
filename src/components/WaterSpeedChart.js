import React from 'react'
import Typography from '@material-ui/core/Typography'
import LineChart from './basic/LineChart'

class WaterSpeedChart extends React.Component{
  render(){
    const { data } = this.props
    const yKey = [
      {keyName: 'surface_sea_water_speed'},
    ]
    return(
      <div>
        <Typography variant="h6">Surface Sea Water Speed</Typography>
        <LineChart
          height={500}
          data={data}
          xKey="datetime"
          yKey={yKey}
        />
      </div>
    )
  }
}

export default WaterSpeedChart
