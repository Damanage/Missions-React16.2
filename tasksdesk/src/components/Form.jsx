import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Button from './Button'

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            title: '' 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let title = this.state.title;

        if(title){
            this.props.onAdd(title);
            this.setState({title: ''})
        }
    }

    handleChange(event){
        let title = event.target.value;

        this.setState({title})
    }

    render(){
        return (
            <form className='todo-form' onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.title}
                    placeholder=' Write your mission right here, Boss!'
                    onChange={this.handleChange}
                />

                <Button type='submit'>Add mission</Button>
            </form>
        )
    }
}

Form.propTypes = {
    onAdd: PropTypes.func.isRequired
};

export default Form;