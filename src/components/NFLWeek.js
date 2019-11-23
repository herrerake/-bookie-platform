import React, {Component} from 'react';

class NFLWeek extends Component {
    render(){
      return(
        <div className="text-center"><h1>Week {this.props.nflWeekData.week}</h1></div>
      )
    }
}

export default NFLWeek