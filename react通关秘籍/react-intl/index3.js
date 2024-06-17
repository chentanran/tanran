import * as fs from 'fs';
import pkg from "exceljs";
const { Workbook } = pkg;

async function main(){
  const workbook = new Workbook();

  const workbook2 = await workbook.xlsx.readFile('./bundle.xlsx')

  const zhCNBundle = {};
  const enUSBundle = {};

  workbook2.eachSheet((sheet) => {
    sheet.eachRow((row, index) => {
      if(index === 1) {
        return;
      }
      const key = row.getCell(1).value;
      const zhCNValue = row.getCell(4).value;
      const enUSValue = row.getCell(5).value;

      zhCNBundle[key] = zhCNValue;
      enUSBundle[key] = enUSValue;
    })
  })

  fs.writeFileSync('zh-CN.json', JSON.stringify(zhCNBundle, null, 2));
  fs.writeFileSync('en-US.json', JSON.stringify(enUSBundle, null, 2));
}

main()