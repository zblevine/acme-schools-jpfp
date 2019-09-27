/* eslint-disable jsx-quotes */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { actions } from './store';
import Schools from './Components/Schools';
import Students from './Components/Students';
import School from './Components/School';
import Create from './Components/Create';

class App extends Component {
  componentDidMount() {
    this.props.fetchSchools();
    this.props.fetchStudents();
  }
  render() {
    return (
      <div>
        <Create />
        <HashRouter>
          <Switch>
            <Route exact path='/schools' component={ Schools } />
            <Route path='/students' component={ Students } />
            <Route path='/schools/:id' component={ School } />
            <Redirect to='/schools' />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = ({schools}) => {
  return {
    schools
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => dispatch(actions.fetchStudents()),
    fetchSchools: () => dispatch(actions.fetchSchools())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

