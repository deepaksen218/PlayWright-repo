import XLSX from 'xlsx'
export function getData(row, column){
    const workbook= XLSX.readFile('TestData/testingData.xlsx')
    const sheet= workbook.Sheets['Sheet1']
    const cellAddress=XLSX.utils.encode_cell({
        r:row-1,
        c:column-1
    }) 
    const cell= sheet[cellAddress]
    return cell? cell.v:undefined
}