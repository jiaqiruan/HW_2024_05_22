//HW_2024_05_22 Jiaqi Ruan 
//Pure Component Logic 
import React, { Component } from 'react'

export default class PureComponent extends Component {
    shouldComponentUpdate(nextProps,nextState){
        nextState ??={};
        this.state ??={};
        nextProps ??={};
        this.props ??={};

        const stateEqual = Object.keys(nextState).every((key)=>nextState[key] === this.state[key]);
        const propsEqual = Object.keys(nextProps).every((key)=>nextProps[key] === this.props[key]);

        return !(stateEqual && propsEqual);
    }
    render() {
        return (
        <div>PureComponent Logic Implemented</div>
        )
    }
}
