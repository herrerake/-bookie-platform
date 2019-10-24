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
            {this.state.gameInfo.map(game =>(
              <div className="row mt-1" key={game.gameSchedule.gameId}>
                <div className="col-6 offset-3 text-center">{game.gameSchedule.visitorNickname} vs {game.gameSchedule.homeNickname}</div>
              </div>
            ))}
          </div>
        )
    }

    state = {
        loading: null,
        gameInfo: []
    };

    async componentDidMount() {
        const url = "https://feeds.nfl.com/feeds-rs/scores.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
          gameInfo: data.gameScores,
          loading: false
        });

        console.log(data.gameScores);
    }
}

export default App;