import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
   constructor(props){
       super(props);

       this.state = {
           editing: false
       }

       this.handleSubmit = this.handleSubmit.bind(this);
   }
   
   componentDidUpdate(prevProps, prevState){
        if(this.state.editing){
            this.refs.title.focus();
            this.refs.title.select();
        }
   }

   handleSubmit(event){
       event.preventDefault();
       let title = this.refs.title.value;

       if( title !== ''){
        this.props.onEdit(this.props.id, title);
       }
       else{
        this.props.onDel(this.props.id)
        }  
       
       this.setState({editing: false});
   }
   
   render(){
        return( this.state.editing ?
            <form className='todo-editing-form'>
                <input className='editing-form' type="text" ref='title' defaultValue={this.props.title}/>
                <Button className='btn-edit icon' icon='replay' onClick={ this.handleSubmit }/>
            </form>
            :
            <div className={`todo${this.props.completed ? ' completed' : ''}`} >
                <Checkbox 
                    checked={this.props.completed} 
                    onChange={() => this.props.onStatusChange(this.props.id)}
                />


                <span className='todo-title'>{this.props.title}</span>

                <Button className='edit icon' icon='edit' onClick={() => this.setState({editing:true})}/>

                <Button className='delete icon'
                    onClick={() => this.props.onDel(this.props.id)}
                    icon='clear'    
                />
            </div>


        );
    }
}

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onDel: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};


Todo.defaultProps = {
    title: 'Text message must be displayed here'
};

export default Todo;