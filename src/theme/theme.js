import { createMuiTheme } from '@material-ui/core/styles'

export const theme =  createMuiTheme({
  palette: {
    primary: {
      light: '#ff8b80',
      main: '#e0e20c',
      dark: '#b24d43',
      contrastText: '#fff'
    },
    secondary: {
      light: '#5298c8',
      main: '#277FBB',
      dark: '#1b5882',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
  },
  components: {
    chart: {
      color: ['#e0e20c', '#1b5882', '#00696d', '#7f619b', '#b1991b', '#762543',  '#81894e', '#263056']
    }
  }
})
