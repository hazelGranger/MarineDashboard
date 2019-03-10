import { csvtojson } from '../utils/csvtojson'
import { json } from './json'

function deepObjectMerge(first, second) {
    for (var key in second) {
        first[key] = first[key] && first[key].toString() === "[object Object]" ?
            deepObjectMerge(first[key], second[key]) : first[key] = second[key];
    }
    return first;
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
