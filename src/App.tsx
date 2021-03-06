import React,{useEffect} from 'react';
import xlsx from 'xlsx';
import './App.css';

function App() {

  useEffect(()=>{
    let fileReader=new FileReader();
    // fetch('./FINAL450.xlsx')
    //   .then((response)=>response.blob())
    //   .then((blob)=>fileReader.readAsBinaryString(blob))
    //   .
    
    const readExcel=async () => {
      
      let file=await fetch('./FINAL450.xlsx');
      let fileBuffer=await file.arrayBuffer();
      let data = new Uint8Array(fileBuffer);
      // fileReader.readAsArrayBuffer(data);
      let workbook=xlsx.read(data,{type:"array"});
      console.log(workbook);
      workbook.SheetNames.forEach((sheet)=>{
        const jsonData=xlsx.utils.sheet_to_json(workbook.Sheets[sheet] , { raw: true });
        console.log("jsonData:",jsonData);
      })
      // fileReader.readAsBinaryString(fileBuffer)
      
    }
    // fileReader.onload=(event:ProgressEvent<FileReader>)=>{
    //   let data=event.target!.result;
    //   console.log("data:",data);
    //   let workbook=xlsx.read(data,{type:"array"});
    //   console.log(workbook);
 
    // }
    readExcel();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
