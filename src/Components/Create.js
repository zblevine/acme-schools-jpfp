import React, {Component} from 'react';
import { actions } from '../store';
import { connect } from 'react-redux';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      GPA: '',
      schoolId: ''
    }
  }
  componentDidUpdate() {
    const { schools } = this.props;
    if (!(this.state.schoolId)) this.setState({schoolId: schools[0].id});
  }
  render() {
    const {createStudent, schools} = this.props;
    const {firstName, lastName, email, GPA} = this.state;
    return (
      <form onSubmit={(ev)=>ev.preventDefault()}>
        <span>First Name</span><input value={ firstName } onChange={ (ev) => this.setState({firstName: ev.target.value })} />
        <span>Last Name</span><input value={ lastName } onChange={ (ev) => this.setState({lastName: ev.target.value })} />
        <span>Email</span><input value={ email } onChange={ (ev) => this.setState({email: ev.target.value })} />
        <span>GPA</span><input value={ GPA } onChange={ (ev) => this.setState({GPA: ev.target.value })} />
        <select onChange={(ev) => this.setState({schoolId: ev.target.value})}>
          {schools.map(school => <option key={school.id} value={school.id}>{school.name}</option>)}
        </select>
        <button onClick={() => createStudent(this.state)}>Create Student</button>
      </form>
    )
  }
}

export default connect(({schools}) => {
  return {
    schools
  } 
}, (dispatch) => {
  return {
    createStudent: (student) => dispatch(actions.createStudent(student))
  }
})(Create);
