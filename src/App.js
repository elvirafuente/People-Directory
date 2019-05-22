import React from 'react';
import './App.scss';
import fetchService from './services/fetchService'
import Filters from './components/Filters'
import PeopleList from './components/PeopleList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      peopleData: [],
    }
  }

  componentDidMount(){
    fetchService()
    .then(data => {
      this.setState({
        peopleData: data.results,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>People Directory</h1>
        
        { this.state.peopleData.length===0 
          ? <p>Loadding...</p> 
          : <div>
              <Filters />
              <PeopleList 
                data={this.state.peopleData}
              />
            </div>
        }
      </div>
    )
  }
}

export default App;
