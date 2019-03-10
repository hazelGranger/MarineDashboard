import React, { Component } from 'react'
import './App.css'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import WaterSpeedChart from './components/WaterSpeedChart'
import WaveChart from './components/WaveChart'
import WindChart from './components/WindChart'
import AirTemperatureChart from './components/AirTemperatureChart'

import  { allData } from './data/all'

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
})

class App extends Component {

  componentDidMount() {

    //console.log(data)
  }

  render() {
    const { classes } = this.props
    let data = allData()
    console.log(data);
    return (
      <div className="App">
        <main>
          <Typography variant="h4">Marine Dashboard</Typography>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <WaveChart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <WaterSpeedChart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <WindChart />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <AirTemperatureChart data={data} />
              </Paper>
            </Grid>
          </Grid>
        </main>
      </div>
    )
  }
}

export default withStyles(styles)(App)
