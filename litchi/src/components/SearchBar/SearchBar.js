import React, {Component} from 'react';
import './SearchBar.css';
import {Glyphicon} from 'react-bootstrap';
import Searchbarautocomplete from './Searchbarautocomplete';


export default class SearchBar extends Component {

    logout=() => {
        this.props.logout(this.props.history)
    }
    reloadCurrentPage = () =>{
        window.location.reload(true);
    }

    render() {
        return (
            <div className='Searchbar'>
                <Glyphicon 
                    glyph="list"
                />
                <div className='Searchbar__logoholder' onClick={this.reloadCurrentPage}>
                    Litchi
                </div>
                <Searchbarautocomplete onSearchSubmit={this.props.onSearchSubmit} />
                <div className='Searchbar__right'>
                <Glyphicon style={{cursor: 'pointer'}}
                    glyph="user"
                    title="logout"
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



