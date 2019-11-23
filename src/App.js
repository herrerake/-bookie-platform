import React, {Component} from 'react';
import PicksForm from './components/PicksForm';
import NFLWeek from './components/NFLWeek';
import "bootstrap/dist/css/bootstrap.min.css";

class NFLWeekFormContainer extends Component {
  render(){
    return(
      <div className="container-fluid my-5">
        <NFLWeek nflWeekData={this.props.nflData}/>
        <PicksForm nflWeekData={this.props.nflData}/>
      </div>
    )
  }
}

class App extends Component {
    render() {
        if(this.state.loading){
            return <div>Loading...</div>
        }

        if (!this.state.gameInfo.length) {
          return <div>No games</div>
        }

        return (
          <NFLWeekFormContainer nflData={this.state} />
        )
    }

    state = {
        loading: null,
        gameInfo: [],
        week: null
    };

    async componentDidMount() {
        const url = "https://feeds.nfl.com/feeds-rs/scores.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
          gameInfo: data.gameScores,
          loading: false,
          week: data.week
        });

        console.log(data);
    }
}

export default App;