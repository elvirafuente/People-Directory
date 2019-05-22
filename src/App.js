import React from 'react';
import './App.scss';
import Filters from './components/Filters'
import PeopleList from './components/PeopleList';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <h1>People Directory</h1>
        <Filters />
        <PeopleList />
      </div>
    );
  }
}

export default App;
