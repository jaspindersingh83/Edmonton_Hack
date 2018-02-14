import React,{Component} from 'react';
import './Admin.css';
import moment from "moment";
import { connect } from 'react-redux';
import {adminAuth} from '../../actions';
import Dropzone from 'react-dropzone';
import Dropdown from '../Dropdown/Dropdown';
import {Button} from 'react-bootstrap';
import {logout} from '../../actions';

const genreOption = [
    { value: 'PunjabiMovies', label: 'Punjabi Movies' },
    { value: 'HindiMovies', label: 'Hindi Movies' },
    { value: 'Standup', label: 'Stand Up Comedy' },
    { value: 'Documentaries', label: 'Documentaries' },
    { value: 'Shows', label: 'Shows' },
]

class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {
            thumbnailFile : null,
            coverImageFile: null,
            videoFile: null,
            Director:'',
            Description:'',
            maleLead:'',
            femaleLead:''
        }
    }
    async componentWillMount(props){
        this.props.adminAuth(this.props.history)
    }
    
    logout = () =>{
        this.props.logout(this.props.history)
    }
    formatFilename = (filename) =>{
        const dateStr = moment().format('YYYYMMDD');
        const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");
        const newFilename = `images/${dateStr}-${cleanFileName}`;
        return newFilename.substring(0, 60);
    }
    onDrop = async(files) => {
        this.setState({thumbnailfile: files[0]})
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <div className= 'AdminNavbar'>
                    <div className= 'AdminNavbar__element'>My Dashboard</div>
                    <div 
                    className= 'AdminNavbar__element'
                    onClick={this.logout}
                    >Logout
                     </div>
                </div>
                <div className='Videocontainer'>
                    <div className='Videocontainer__Videodetails'>
                        <h3>Video Details </h3>
                        <div className= 'Adminfield'>
                            <Dropdown placeholder = 'Genre' options = {genreOption}
                            />
                        </div>
                        <label>Tags</label>
                        <input style={{width: '60%'}} onChange={this.handleUsernameInput} value={this.state.username} type="text"/>
                        <label>Male Lead</label>
                        <input style={{width: '60%'}} onChange={this.handleUsernameInput} value={this.state.username} type="text"/>
                        <label>Female Lead</label>
                        <input style={{width: '60%'}} onChange={this.handleUsernameInput} value={this.state.username} type="text"/>
                        <label>Director</label>
                        <input style={{width: '60%'}} onChange={this.handleUsernameInput} value={this.state.username} type="text"/>
                        <label>Video Description</label>
                        <input style={{width: '60%', height:'105px'}} onChange={this.handleUsernameInput} value={this.state.username} type="text"/>
                    </div>
                    <div className='Videocontainer__Filesupload'>
                        <div className= 'Adminfield'>
                            <h3>Files Upload</h3>
                            <label>Upload Video</label>
                            <Dropzone className='Dropzone' onDrop={this.onDrop}>
                                <p>
                                    Drop Video file, or click to select Video to upload.
                                </p>
                            </Dropzone>
                        </div>
                        <div className= 'Adminfield'>
                            <label>Upload Cover Image</label>
                            <Dropzone className='Dropzone' onDrop={this.onDrop}>
                                <p>
                                    Drop Cover image here, or click to select Cover Image to upload.
                                </p>
                            </Dropzone>
                        </div>
                        <div className= 'Adminfield'>
                            <label>Upload Thumbnail</label>
                            <Dropzone className='Dropzone' onDrop={this.onDrop}>
                                <p>
                                    Drop thumbnail here, or click to select thumbnail to upload.
                                </p>
                            </Dropzone>
                        </div>
                        <Button style={{width:'100px',marginTop:'20px'}} bsStyle="danger" onClick={this.handleLoginClick}>
                                Submit
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        admin: state.auth.admin
    };
};

export default connect(mapStateToProps, { adminAuth,logout })(Admin);
