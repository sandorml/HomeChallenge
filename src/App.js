import React from 'react';
import List from './components/List';
import { connect } from 'react-redux';
import { actions_func } from './actions'
import './App.css';

function App(props) {
  
  return (
    <div className="App" onClick={()=>props.fetchProperties()}>
      <List properties={props.data}/>
    </div>
  );
}



const mapStateToProps = state => (
  {
    data: state.crud.properties
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProperties: ()=> dispatch(actions_func.fetchProperties())
  }
};


export default App = connect(mapStateToProps, mapDispatchToProps)(App)


