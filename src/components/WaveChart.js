import React from 'react'
import Typography from '@material-ui/core/Typography'
import LineChart from './basic/LineChart'

class WaveChart extends React.Component{
  render(){
    const { data } = this.props
    const yKey = [
      {keyName: 'sea_surface_wave_maximum_height'},
      {keyName: 'sea_surface_wave_significant_height'}
    ]
    return(
      <div>
        <Typography variant="h6">Sea Surface Wave</Typography>
        <LineChart
          height={500}
          data={data}
          xKey="datetime"
          yKey={yKey}
          dot = "sea_surface_wave_from_direction_at_variance_spectral_density_maximum"
        />
      </div>
    )
  }
}

export default WaveChart
