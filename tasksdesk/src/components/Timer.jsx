import React, {Component} from 'react';

import Button from './Button';


class Timer extends Component {
    constructor(props){
        super(props);

        this.state = {
            running: false,
            elapsed: 0,
            lastTick : 0
        }

        this.timerRun   = this.timerRun.bind(this);
        this.timerPause = this.timerPause.bind(this);
        this.timerStop  = this.timerStop.bind(this);
        this.tick       = this.tick.bind(this);
    }

    componentDidMount(){
        this.interval = setInterval(this.tick, 1000);
    }
    
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    tick(){
        console.log('tick')
        if(this.state.running){
            let now     = Date.now(),
                diff    = now - this.state.lastTick;

            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            })
        }
    }


    timerRun(){
        this.setState({
            running: true,
            lastTick: Date.now()
        })
    }

    timerPause(){
        this.setState({running: false})
    }

    timerStop(){
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0
        })
    }

    format(mls){
        let totalSeconds    = Math.floor(mls / 1000),
            minutes         = Math.floor(totalSeconds / 60),
            seconds         = totalSeconds % 60;

        return `${minutes > 9 ? minutes : '0'+ minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    }

    render (){

        let time = this.format(this.state.elapsed);


        return(
            <div className="timer-wrp">
                <div className="btn-box">
                    {this.state.running ? 
                        <Button className='icon' icon='pause' onClick={this.timerPause}/> 
                        :
                        <Button className='icon' icon='play_arrow' onClick={this.timerRun}/>
                    }
                    <Button className='icon' icon='stop' onClick={this.timerStop}/>
                </div> 
                <div className="timer">{time}</div> 
            </div>     
        )    
   }

}



export default Timer;
