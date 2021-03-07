

interface ITopicCard {
    topicName:string;
    questions:number;
    isStarted:boolean;
    doneQuestions:number;
}

interface IQuestionData extends ITopicCard {
  
}

interface IContext {
    questionData: IQuestionData[];
    updateData?: (key: number, newData: ITopicCard) => void
    singleQuestionData?: IQuestionData;
  }

export type { ITopicCard ,IContext }