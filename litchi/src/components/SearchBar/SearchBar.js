import React, {Component} from 'react'
import './SearchBar.css'
import {Glyphicon,Button} from 'react-bootstrap'



class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            allData : props.data,
            searchinput : '',
            searchData:[],
        }
    }

    render() {
        return (
            <div className='Searchbar'>
                <Glyphicon 
                glyph="list"
                />
                <div className='Searchbar__logoholder'>
                Insert Logo here
                </div>
                <input placeholder='Search' />
                <Button>
                    <Glyphicon 
                    glyph="search"
                    />
                </Button>
                <div className='Searchbar__right'>
                <Glyphicon 
                glyph="user"
                />
                <Glyphicon 
                glyph="bell"
                />
                </div>
            </div>
        )
    }
}

export default SearchBar;