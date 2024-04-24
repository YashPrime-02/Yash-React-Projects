import {configureStore} from '@reduxjs/toolkit';
//ye core Redux se aaya hai, store banane ke liye import kara hai, 
import todoReducer from '../features/todo/todoSlice';

export const store= configureStore({})
