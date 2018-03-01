import React from 'react';
import PropTypes from 'prop-types';


function Stats(props) {
    let total       = props.missions.length,
        completed   = props.missions.filter(todo => todo.completed).length,
        atWork      = total - completed; 

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>Total </th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Completed </th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>At work </th>
                    <td>{atWork}</td>
                </tr>
            </tbody>
        </table>


        );
}

Stats.propTypes = {
    missions: PropTypes.array.isRequired
}

export default Stats;