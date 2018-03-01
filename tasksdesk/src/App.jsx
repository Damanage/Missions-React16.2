import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';
import Button from './components/Button';
import Timer from './components/Timer';


class App extends Component {


  constructor(props){
    super(props);
  
    this.state = {
        missions: this.props.initialData,
        timer: false
    };

    
    this.timerToggle    = this.timerToggle.bind(this);
    this.clickMachine   = this.clickMachine.bind(this);
    this.deleteMachine  = this.deleteMachine.bind(this);
    this.addMachine     = this.addMachine.bind(this); 
    this.editMachine    = this.editMachine.bind(this); 
  }

  
  timerToggle(){
    if(this.state.timer){
      this.setState({timer: false})
    }
    else{
      this.setState({timer:true})
    }
  }

  nextId(){
    this._nextId = this._nextId || 6;
    return this._nextId++;
  }

  clickMachine(id){
    let missions = this.state.missions.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed;
      }

      return todo
    })
    
    this.setState({missions});
  }


  deleteMachine(id){
    let missions = this.state.missions.filter(todo => todo.id !== id);

    this.setState({missions})
  }

  addMachine(title){
    let todo = {
      id: this.nextId(),
      title,
      completed: false
    };

    let missions = [...this.state.missions, todo];

    this.setState({ missions });
  }

  editMachine(id, title){
    let missions = this.state.missions.map(todo => {
      if(todo.id === id){
         todo.title = title;
      }
      return todo;
    })

    this.setState({ missions })
  }

  render() {
    return (
      <div className="App">
        <main>
          <Header title={this.props.title} missions={this.state.missions} />


          <TransitionGroup
            className='todo-list'
            appear={true}
             >
              {this.state.missions.map(todo => 
                
                <CSSTransition key={todo.id} classNames='slide' timeout={{ enter: 500, exit: 300 }}>  
                  <Todo 
                    key             ={todo.id}
                    id              ={todo.id} 
                    title           ={todo.title} 
                    completed       ={todo.completed} 
                    onStatusChange  ={this.clickMachine}
                    onDel           ={this.deleteMachine}
                    onEdit          ={this.editMachine}
                  />
                </CSSTransition>
                
              )
              }
          </TransitionGroup>


          <section className='btn-menu'>
            <Button className='timer-btn icon' icon='timer' onClick={this.timerToggle}/>
          </section>
        </main>


        {this.state.timer ? 
            <CSSTransition appear={true} in={this.state.timer} timeout={500} classNames='show'>
              <Timer />
            </CSSTransition>
          : 
            ''
          }


        <div className="form-wrapper">
          <Form onAdd={this.addMachine}/>
        </div>
            
      </div>
    );
  }
}


App.propTypes = {
  title: PropTypes.string,
  initialData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired
}



export default App;




