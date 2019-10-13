import React from 'react'

const Laps = (props) => {
    return (
        <ul className="list-group list-group-flush">
            {props.laps.map((lap, index) => {
                return (
                    <li key={index} className="list-group-item">
                        <h4>
                            <span className="text-drak">Minute: </span>
                            <span className="text-danger">{lap.min} </span>
                            <span className="text-drak">Second: </span>
                            <span className="text-danger">{lap.sec} </span>
                            <span className="text-drak">Mili: </span>
                            <span className="text-danger">{lap.mili} </span>
                        </h4>
                    </li>
                )
            })}
        </ul>
    )
}

export default Laps;