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
      filters:{
        genders: [],
      }
    }
    this.handleGenderClick = this.handleGenderClick.bind(this);
  }

  componentDidMount(){
    fetchService()
    .then(data => {
      this.setState({
        peopleData: data.results,
      })
    })
  }

  handleGenderClick(event){
    const target = event.target.value;
    const { checked } = event.target;
    this.setState(prevState => {
      return {
        filters : {
          ...prevState.filters,
          genders: checked 
                    ? prevState.filters.genders.concat(target)
                    : prevState.filters.genders.filter(item => item !== target)
        }
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h1>People Directory</h1>
        
        { this.state.peopleData.length===0 
          ? <p>Loadding...</p> 
          : <div>
              <Filters actionGender={this.handleGenderClick}/>
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
