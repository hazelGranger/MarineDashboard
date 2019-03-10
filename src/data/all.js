import { csvtojson } from '../utils/csvtojson'
import { json } from './json'

const compare = (p) => {
  return function(m, n) {
    let a = m[p]
    let b = n[p]
    return a - b
  }
}

export const allData = () => {
  let csv = csvtojson()
  let jsonData = json()

  for( var key in jsonData){
    let obj = csv.find(v => v.datetime === key)
    if (obj) {
      obj = Object.assign(obj, jsonData[key])
    } else {
      csv.push( Object.assign({ datetime: key }, jsonData[key]))
    }
  }
  return csv
}
