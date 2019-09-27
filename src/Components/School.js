import React from 'react';
import { connect } from 'react-redux';

const School = ({schools, students, match}) => {
  const school = schools.find(_school => _school.id === match.params.id);
  const inStudents = students.filter(student => student.schoolId === school.id);
  console.log(school);
  console.log(inStudents);
  return (
    <div>
      <h2>Page for {school.name}</h2>
      <h6>Students:</h6>
      <ul>
        {
          inStudents.map(_student => <li key={_student.id}>
            {_student.firstName} {_student.lastName}
          </li>)
        }
      </ul>
    </div>
  );
}

export default connect(({schools, students}) => {
  return {
    schools,
    students
  };
}, null)(School);