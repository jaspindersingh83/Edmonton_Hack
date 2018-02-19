import React, {Component} from 'react';
import './SearchBar.css';
import {Glyphicon,Button} from 'react-bootstrap';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            allData : props.data,
            searchinput : '',
            searchData:[],
        }
    }

    logout=() => {
        this.props.logout(this.props.history)
    }

    render() {
        return (
            <div className='Searchbar'>
                <Glyphicon 
                glyph="list"
                />
                <div className='Searchbar__logoholder'>
                Litchi
                </div>
                <input style={{
                    width: '30%',
                    height: '60%'
                }} 
                placeholder='Search' />
                <Button >
                    <Glyphicon 
                    glyph="search"
                    />
                </Button>
                <div className='Searchbar__right'>
                <Glyphicon 
                glyph="user"
                onClick={this.logout}
                />
                <Glyphicon 
                glyph="bell"
                />
                </div>
            </div>
        )
    }
}



