import React, {Component} from 'react';

class PicksForm extends Component {
    render(){
      return(
        <div class="py-5">
          {this.props.nflWeekData.gameInfo.map(game =>(
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
            <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">Save</button>
            </div>
        </div>
      )
    }
  }

export default PicksForm