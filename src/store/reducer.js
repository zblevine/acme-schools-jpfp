/* eslint-disable default-case */
import { combineReducers } from 'redux';
import { SET_SCHOOLS, SET_STUDENTS, DESTROY_STUDENT, CREATE_STUDENT } from './constants';

const studentsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    case DESTROY_STUDENT:
      return state.filter(student => student.id !== action.student.id);
    case CREATE_STUDENT:
      return [...state, action.student];
  }
  return state;
}

const schoolsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SCHOOLS:
      return action.schools;
  }
  return state;
}

const reducer = combineReducers({
  students: studentsReducer,
  schools: schoolsReducer
});

export default reducer;
