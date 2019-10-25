import React, {Component} from 'react';
import Scores from './components/scores';
import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
    render() {
        if(this.state.loading){
            return <div>Loading...</div>
        }

        if (!this.state.gameInfo.length) {
          return <div>No games</div>
        }
        return (
          <div className="container-fluid mt-5">
            <div className="text-center"><h1>Week {this.state.week}</h1></div>
            {this.state.gameInfo.map(game =>(
                <div className="card" key={game.gameSchedule.gameId}>
                <div className="card-body">
                  <h5 className="card-title">{game.gameSchedule.visitorDisplayName} at {game.gameSchedule.homeDisplayName}</h5>
                  <div>{game.gameSchedule.gameDate}</div>
                  <div>Kickoff - {game.gameSchedule.gameTimeEastern} EST</div>
                  <form className="mt-3">
                    <h6>My Pick</h6>
                    <div className="form-check">
                        <label className="teamLabel">
                            <input type="radio" name="react-tips" value="option1" checked={true} className="form-check-input"/>
                            {game.gameSchedule.homeNickname}
                        </label>
                      </div>
                      <div className="form-check">
                        <label className="teamLabel" >
                            <input type="radio" name="react-tips" value="option2" className="form-check-input"/>
                            {game.gameSchedule.visitorNickname}
                        </label>
                      </div>
                  </form>
                </div>
              </div>
            ))}
          </div>
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