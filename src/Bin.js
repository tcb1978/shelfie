import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Bin extends Component {
    constructor() {
        super()
        this.state = {
            bins: []
        }
    }

    render() {
        const { id, name, price, shelfId } = this.props;

        return (
            <div>
                
            </div>
        );
    }
}

export default Bin;
