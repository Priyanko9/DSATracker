import React,{useEffect} from 'react';
import xlsx from 'xlsx';
import './App.css';
import {insertData} from './database';
import TopicCard from './topicCard';

function App() {

  useEffect(()=>{
    
    const readExcel=async () => {
      
      let file=await fetch('./FINAL450.xlsx');
      let fileBuffer=await file.arrayBuffer();
      let data = new Uint8Array(fileBuffer);
      let workbook=xlsx.read(data,{type:"array"});
      let jsonData:Array<any>=[];
      console.log(workbook);
      workbook.SheetNames.forEach((sheet)=>{
        jsonData=xlsx.utils.sheet_to_json(workbook.Sheets[sheet] , { raw: true });
        console.log("jsonData:",jsonData);
       

      })
      let slicedData:Array<any>=jsonData.slice(3);

      let topics:Array<string>=slicedData.map((row:any)=>row["__EMPTY"]);
      let uniqueTopics=topics.filter((row:string,index:number)=>topics.indexOf(row)===index);
      let topicObject:Array<TopicCard>=uniqueTopics.map((topicName:string)=>{
          let totalQuestions=0;
          let doneQuestions=0;
          let isStarted=false;
          slicedData.forEach((data:any) => {
            if(data["__EMPTY"]===topicName){
              totalQuestions=totalQuestions+1;
              if(data["__EMPTY_1"].toLowerCase()==='yes'){
                doneQuestions=doneQuestions+1;
                isStarted=true;
              }
            }
          })
          return {
            topicName,
            questions:totalQuestions,
            isStarted,
            doneQuestions,
            _key: topicName
          }
      }).filter((topicObject:TopicCard)=>topicObject.topicName ? true : false)

      console.log("topicObject:",topicObject);
      insertData(topicObject);
      
    
      
    }
   
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
