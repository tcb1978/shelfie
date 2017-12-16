import React, { Component } from 'react';
import CreateBin from './CreateBin';
import Shelf from './Shelf';
import './Main.css';
import { Route, Link } from 'react-router-dom';

//initialize an array of objects for each shelf and give each a name
const shelves = [
    { name: 'A', },
    { name: 'B', },
    { name: 'C', },
    { name: 'D', }
]

class Main extends Component {

    constructor() {
        super()
        this.state = {
            // initialize an empty array for shelves 
            shelves: []
        }
    }

    componentDidMount() {
        // axios.get()
        this.setState({
            // when componentDidMount give shelves names 'A', 'B', 'C', 'D'
            shelves: shelves
        })
    }

    render() {
        return (
            <div className="shelf-container">
                <Route path="/" render={() => // render a shelf for each a, b, c, d
                    this.state.shelves.map((e) => ( // map through each shelf and link url and include which shelf name
                        <div className="shelf">
                            <Link to={`/shelves/${e.name}`}><span>Shelf {e.name}</span></Link>
                        </div>
                    ))} />
                <Route path="/shelves/:shelfId" render={(props) => <Shelf {...props} name={props.match.params.shelfId} />} />
                <Route path="/create/:shelfAndBinIds" component={CreateBin} />
            </div>
        );
    }
}

export default Main;

