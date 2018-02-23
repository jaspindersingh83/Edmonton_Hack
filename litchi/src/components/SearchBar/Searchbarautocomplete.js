import React, {Component} from 'react';
import {getAllItems} from '../../actions';
import { connect } from 'react-redux';
import {Glyphicon,Button} from 'react-bootstrap';
import './SearchBar.css';

class Searchbarautocomplete extends Component{
    constructor(props){
        super(props);
        this.state= {
            searchItem: '',
            allItems: [],
            currentItems: [],
            menuItemActive: 0,
        }
    }
    async componentWillMount(){
        await this.props.getAllItems();
        await this.setState({
            allItems:this.props.allItems,
            menuItemActive: 0,
        })
    }
    handleInput = async (e) => {
        e.preventDefault();
        await this.setState({
            searchItem:e.target.value
        });
        this.setCurrentItems();
    }
    setCurrentItems = async() => {
        let reGex = new RegExp(this.state.searchItem,"i")
        let filteredallItems = this.state.allItems.filter(item => {
            if((item.title).search(reGex) !== -1){
                return item
            } else {
                return null
            }
        })
        if(filteredallItems.length !== this.state.allItems.length){
            await this.setState({
                currentItems:filteredallItems,
                menuItemActive:0
            });
        } else {
            await this.setState({
                currentItems:[]
            });
        }
    }
    onSearchSubmit = async(e) => {
        e.preventDefault();
        await this.props.onSearchSubmit(this.state.currentItems);
        await this.setState({
            searchItem: '',
            currentItems: [],
            menuItemActive: 0,
        })
    }
    menuItemClick= async(e,item)=> {
        e.preventDefault();
        await this.setState({
            searchItem:item.title
        });
        await this.setCurrentItems();
        this.onSearchSubmit(e);
    } 
    keyPressOnMenuItem = async(e) => {
        let typeOfEvent = e.key;
        if(typeOfEvent === 'ArrowDown'){
            if(this.state.menuItemActive < this.state.currentItems.length-1){
                await this.setState({
                    menuItemActive:this.state.menuItemActive + 1
                });
            }
        } 
        if(typeOfEvent === 'ArrowUp'){
            if(this.state.menuItemActive > 0){
                await this.setState({
                    menuItemActive:this.state.menuItemActive - 1
                });
            }
        }
        if(typeOfEvent === 'Enter'){
            let selectedItem = this.state.currentItems[this.state.menuItemActive]
            this.menuItemClick(e,selectedItem)
        }
    }
    mouseEnterOnMenuItem = async(e,index)=>{
        e.preventDefault();
        await this.setState({
            menuItemActive:index
        })
    }
    mouseLeaveOnMenuItem = async(e)=>{
        e.preventDefault();
        await this.setState({
            menuItemActive:0
        })
    }
    
    render(){
        return (
            <div>
            <form className='Searchbar__input' onSubmit={this.onSearchSubmit}>
                <input 
                type="text"
                value = {this.state.searchItem}
                onChange = {(e) => this.handleInput(e)}
                //Arrow up/down/enter are implemented on this component
                onKeyDown = {(e) => this.keyPressOnMenuItem(e)}
                style={{
                    width: '400px',
                    height: '30px'
                }} 
                placeholder='Search'
                />
                <Button type="submit" style={{
                    height: '30px',
                }} >
                    <Glyphicon  
                        glyph="search"
                    />
                </Button>
            </form>
            {this.state.currentItems.length ? 
            <div className= 'Searchbar__input_menu'>
                {this.state.currentItems.map((item,index) =>{
                    if (index === this.state.menuItemActive){
                        return <div key={item._id}
                        className='Searchbar__input_menuitem Searchbar__input_menuitem-active'
                        onClick={(e) => this.menuItemClick(e,item)}
                        >{item.title}</div> 
                    } else {
                        return <div key={item._id}
                        className='Searchbar__input_menuitem'
                        onClick={(e) => this.menuItemClick(e,item)}
                        onMouseEnter={(e) => this.mouseEnterOnMenuItem(e,index)}
                        onMouseLeave={(e) => this.mouseLeaveOnMenuItem(e)}
                        >{item.title}</div>
                    }
                })}
            </div>: null
            }
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        allItems : state.item
    };
};

export default connect(mapStateToProps, { getAllItems })(Searchbarautocomplete);



