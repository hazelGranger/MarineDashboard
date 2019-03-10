import Papa from 'papaparse'

import { csv } from '../data/csv'

let csvdata = csv()

export const csvtojson = () => {
  let csvjson

  Papa.parse(csvdata, {
    header: true,
	  complete: function(results) {
       csvjson = results.data
    }
   })

   return csvjson
}
