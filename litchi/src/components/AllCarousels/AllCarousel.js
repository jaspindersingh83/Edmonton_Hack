import React,{ Component } from 'react';
import './AllCarousel.css';
import { connect } from 'react-redux';
import Carousel from '../Carousel/Carousel';
import SearchBar from '../SearchBar/SearchBar'
import {getAllgenres, logout} from '../../actions';
import Carouselitem from '../Carouselitem/Carouselitem';


class AllCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allCarousel : props.content,
            searchItemArray : [],
            noSearchResultFound: false
        }
    }

    async componentWillMount(){
        await this.props.getAllgenres(this.props.history);
        this.setState({
            allCarousel: this.props.content,
        })
    }
    logout=() => {
        this.props.logout(this.props.history)
    }
    onSearchSubmit = async(searchItemArray) => {
        await this.setState({
            searchItemArray
        })
        if(!this.state.searchItemArray.length){
            await this.setState({
                noSearchResultFound:true
            })
            setTimeout(() => {
                this.setState({
                    noSearchResultFound:false
                });
            }, 4000)
        }
    }
    renderSearchAlert = () => {
        if (!this.state.noSearchResultFound) return null;
        return <p style={{color:'#e50914'}}>No Result Found</p>;
    }
   
    render(){
        return (
            <div>
            <SearchBar onSearchSubmit={this.onSearchSubmit} logout= {this.logout} history= {this.props.history} />
            {this.state.searchItemArray.length ?
                <div className='Search__container'>
                    {this.state.searchItemArray.map(carouselitem=> {
                        return <Carouselitem 
                        key= {carouselitem._id}
                        carouselitem = {carouselitem._id}
                        />
                    })}
                </div> :
                <div>
                    {this.state.allCarousel ?
                    <div className='Allcarousel'>
                        {this.renderSearchAlert()}
                        {this.state.allCarousel.map((carouseltype) =>
                            <Carousel key= {carouseltype._id}  data={carouseltype}/>
                        )}
                    </div> : null 
                    }
                </div>
            }
            </div> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        content : state.content.allGenres
    };
};

export default connect(mapStateToProps, {logout, getAllgenres })(AllCarousel);

