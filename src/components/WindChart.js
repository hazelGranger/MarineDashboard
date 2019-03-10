import React from 'react'
import Typography from '@material-ui/core/Typography'
import LineChart from './basic/LineChart'

class WindChart extends React.Component{
  render(){
    const { data } = this.props
    const yKey = [
      {keyName: 'wind_speed_at_10m_above_ground_level'},
    ]
    return(
      <div>
        <Typography variant="h6">Wind Speed at 10m above ground level</Typography>
        <LineChart
          height={500}
          data={data}
          xKey="datetime"
          yKey={yKey}
          dot = "wind_from_direction_at_10m_above_ground_level"
        />
      </div>
    )
  }
}

export default WindChart
