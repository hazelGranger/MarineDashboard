import React from 'react'
import {
  ResponsiveContainer,
  LineChart as MuiLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'
import { withTheme } from '@material-ui/core/styles'
import Arrow from '@material-ui/icons/ArrowUpward'

const CustomizedDot = (props) => {
  const {cx, cy, stroke, payload, value, name} = props;
  let angelStr = payload[name]
  if (!angelStr) {
    return null
  }
  let angel = Number(angelStr)
  const transform = `rotate(${angel}, 10 10)`
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x={cx - 10} y={cy - 10}  width="24" height="24" viewBox="0 0 24 24">
      <g  transform={transform}>
        <path fill="none" d="M0 0h24v24H0V0z"/><path fill="#e0e20c" d="M13 19V7.83l4.88 4.88c.39.39 1.03.39 1.42 0 .39-.39.39-1.02 0-1.41l-6.59-6.59c-.39-.39-1.02-.39-1.41 0l-6.6 6.58c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L11 7.83V19c0 .55.45 1 1 1s1-.45 1-1z"/>
      </g>
    </svg>
  )
}

const LineChart = (props) => {
  const { height, data, xKey, yKey, theme, dot } = props
  const chartColor = theme.components.chart.color
  return(
    <ResponsiveContainer width="98%" height={height}>
      <MuiLineChart data={data}>
        <XAxis dataKey={xKey} />
        <YAxis domain={['dataMin', 'dataMax']} />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {
          yKey.map((v,i)=>(
            <Line key={i}
              type={v.type ? v.type : "monotone"}
              dataKey={v.keyName}
              stroke={v.color ? v.color : chartColor[i%chartColor.length]}
              dot={dot && i===0 ? <CustomizedDot name={dot}  /> : null }
            />
          ))
        }
      </MuiLineChart>
    </ResponsiveContainer>
  )
}

export default withTheme()(LineChart)
