import Localbase from 'localbase';
import {ITopicCard} from './topicCard';

const collectionName='topic_card'



const insertData=(data:Array<ITopicCard>)=>{
    let db = new Localbase('db');
    db.collection(collectionName).set(data,{ keys: true });
    
}

const getData=()=>{
    let db = new Localbase('db');
    db.collection(collectionName).get().then((topicCard:Array<ITopicCard>) => {
        console.log(topicCard);
      })
}

const findDocByKey=(key:string)=>{
    let db = new Localbase('db');
    db.collection(collectionName).doc(key).get().then((document:ITopicCard) => {
        console.log(document)
    })
}

const updateData=(key:number,newData:ITopicCard)=>{
    let db = new Localbase('db');
    db.collection(collectionName).doc(key).update(newData);
}


export {
    insertData,
    getData,
    findDocByKey,
    updateData
}