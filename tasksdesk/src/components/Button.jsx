import React from 'react';
import PropTypes from 'prop-types';


class Button extends React.Component{
    render(){
        return(
            <button className={this.props.className} onClick={this.props.onClick}>
                {this.props.icon ?
                    <i className="material-icons">{this.props.icon}</i> 
                    :
                    this.props.children
                }
                
            </button>
        );
    }
};


Button.propTypes = {
    icon: PropTypes.string,
    className: PropTypes.string,
    onDel: PropTypes.func,
    children: PropTypes.node
};


// Button.defaultProps = {
//     icon: 'clear'
// };

export default Button;