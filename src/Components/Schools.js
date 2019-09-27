/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Schools = ({ schools, students }) => {
  const getStudentCount = school => students.filter(student => student.schoolId === school.id).length;
  return (
    <ul>
      {
        schools.map(school => <li key={ school.id }>
          <div>
            <Link to={ `/schools/${school.id}`}>{school.name}</Link>
            <div><img src={ school.imageURL } height="100px" /></div>
            <p>Student Count { getStudentCount(school) }</p>
          </div>
        </li>)
      }
    </ul>
  )
};

export default connect(({schools, students}) => {
  return {
    schools,
    students
  };
}, null)(Schools);