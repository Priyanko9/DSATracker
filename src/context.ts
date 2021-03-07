import {IContext} from './topicCard';
import {updateData} from './database';
import {createContext} from 'react';

export const initialState:IContext={
    questionData: [],
    updateData,
}

export const QuestionDataContext=createContext(initialState);