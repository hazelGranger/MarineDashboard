import React from 'react'
import Typography from '@material-ui/core/Typography'
import LineChart from './basic/LineChart'

class AirTemperatureChart extends React.Component{

  render(){
    const { data } = this.props
    const yKey = [
      {keyName: 'air_temperature_at_2m_above_ground_level'},
    ]
    return(
      <div>
        <Typography variant="h6">Air Temperature at 2m above ground level</Typography>
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

export default AirTemperatureChart
