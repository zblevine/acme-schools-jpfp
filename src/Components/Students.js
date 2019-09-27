/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

const Students = ({schools, students, destroyStudent}) => {
  const getSchoolName = (student) => {
    return schools.find(school => school.id === student.schoolId).name;
  }

  return (
    <ul>
      {
        students.map(student => <li key={student.id}>
          <div>
            <p>{ student.firstName } { student.lastName }</p>
            <p>School: { getSchoolName(student) }</p>
            <p>GPA: { student.GPA }</p>
            <button onClick={()=> destroyStudent(student)}>Destroy Student</button>
          </div>
        </li>)
      }
    </ul>
  )
}

export default connect(({schools, students}) => {
  return {
    schools,
    students
  };
}, (dispatch)=> {
  return {
    destroyStudent: (student) => dispatch(actions.destroyStudent(student))
  }
})(Students);