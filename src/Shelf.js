import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Bin from './Bin';

class Shelf extends Component {
    constructor() {
        super()
        this.state = {
            bins: []
        }
    }

    componentDidMount() {
            
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Shelf;