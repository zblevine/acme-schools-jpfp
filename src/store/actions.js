import { SET_SCHOOLS, SET_STUDENTS, DESTROY_STUDENT, CREATE_STUDENT } from './constants';
import axios from 'axios';

const setSchools = (schools) => {
  return {
    schools,
    type: SET_SCHOOLS
  }
}

const setStudents = (students) => {
  return {
    students,
    type: SET_STUDENTS
  }
}

const _destroyStudent = (student) => {
  return {
    type: DESTROY_STUDENT,
    student
  }
}

const _createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student
  }
}

const fetchSchools = () => {
  return async (dispatch) => {
    const schools = (await axios.get('/schools')).data;
    return dispatch(setSchools(schools));
  }
}

const fetchStudents = () => {
  return async (dispatch) => {
    const students = (await axios.get('/students')).data;
    return dispatch(setStudents(students));
  }
}

const destroyStudent = (student) => {
  return async (dispatch) => {
    await axios.delete(`/students/${student.id}`);
    return dispatch(_destroyStudent(student));
  }
}

const createStudent = (student) => {
  return async (dispatch) => {
    await axios.post('/students', student);
    return dispatch(_createStudent(student));
  }
}

export { fetchSchools, fetchStudents, destroyStudent, createStudent };

