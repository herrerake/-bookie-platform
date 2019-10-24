import React from 'react'

const Scores = ({scores}) => {
    return (
        <div>
                <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-6 offset-3">
                        <h1 className="text-center">Week 8</h1>
                    </div>
                </div>
                <div className="row no-gutters mt-5">
                    <div className="col-6 offset-3">

                    <form>

                        <div className="form-check">
                        <label>
                            <input
                            type="radio"
                            name="react-tips"
                            value="option1"
                            checked={true}
                            className="form-check-input"
                            />
                            Team 1
                        </label>
                        </div>

                        <div className="form-check">
                        <label>
                            <input
                            type="radio"
                            name="react-tips"
                            value="option2"
                            className="form-check-input"
                            />
                            Team 2
                        </label>
                        </div>

                        <div className="form-group">
                        <button className="btn btn-primary mt-2" type="submit">
                            Save
                        </button>
                        </div>

                    </form>
                    </div>
                </div>
                </div>
            {/* {scores.map((score) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{scores.away.abbr}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{scores.home.abbr}</h6>
                        <p class="card-text">{scores.company.catchPhrase}</p>
                    </div>
                </div>
            ))} */}
        </div>
    )
};

export default Scores