import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats'

class Header extends React.Component {
    render(){
        return(
            <header>
                <h1>{this.props.title}</h1>
                <Stats missions={this.props.missions} />
            </header>
        );
    }    
};


Header.propTypes = {
    title: PropTypes.string,
    missions: PropTypes.array.isRequired
};


Header.defaultProps = {
    title: 'Missions Desk'
};


export default Header;