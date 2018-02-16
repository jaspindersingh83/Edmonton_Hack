import React,{Component} from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import {adminAuth, logout, createItem} from '../../actions';
import Dropzone from 'react-dropzone';
import Dropdown from '../Dropdown/Dropdown';
import {Button} from 'react-bootstrap';

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
            genre:'',
            title:'',
            maleLead:'',
            femaleLead:'',
            comedian:'',
            director:'',
            description:'',
            thumbnail : null,
            coverImage: null,
            video: null,
            error:'',
            success: false
        }
    }

    componentWillMount(props){
        this.props.adminAuth(this.props.history)
    }
    componentWillReceiveProps(props) {
        this.setState({ 
            error:props.error,
            success:props.success
        }); 
    }
    handleInput = (e,type) => {
        e.preventDefault();
        this.setState({
            [type]:e.target.value
        })
    }
    handleDropdownChange = (e) => {
        this.setState({
            genre:e
        })
    }
    onDrop = async(files, fileType) => {
        this.setState({[fileType]: files[0]})
    }
    renderAttachmentName(type){
        let fileField = this.state[type]
        if(fileField){
            return <p style={{color:'#e50914', fontSize:'14px'}}>attached file {fileField.name}</p>;
        }
    }
    renderAlert() {
        if (!this.state.error) return null;
        return <p style={{color:'#e50914'}}>{this.state.error}</p>;
    } 
  
    renderUploadSuccess(){
        if (!this.state.success) return null;
        return <p style={{color:'#e50914'}}>Upload Successfull</p>;
    }
    logout = () =>{
        this.props.logout(this.props.history)
    }

    onSubmit= () => {
        let item = this.state;
        const formData = new FormData();
        let keys = Object.keys(item);
        keys.forEach(ele => {
            if(item[ele]){
                formData.append(ele,item[ele])
            }
        })
        this.props.createItem(formData);
        this.setState(
            {
                title:'',
                maleLead:'',
                femaleLead:'',
                comedian:'',
                director:'',
                description:'',
                thumbnail : null,
                coverImage: null,
                video: null,
            }
        )
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
                        {this.renderAlert()}
                        {this.renderUploadSuccess()}
                        <h3>Video Details </h3>
                        <div className= 'Adminfield' >
                            <Dropdown placeholder = 'Genre' options = {genreOption} handleChange= {this.handleDropdownChange}
                            />
                        </div>
                        <label>Title</label>
                            <input style={{width: '60%'}} onChange={(e) => this.handleInput(e,'title')} value={this.state.title} type="text"/>
                        <label>Male Lead</label>
                            <input style={{width: '60%'}} onChange={(e) => this.handleInput(e,'maleLead')} value={this.state.maleLead} type="text"/>
                        <label>Female Lead</label>
                            <input style={{width: '60%'}} onChange={(e) => this.handleInput(e,'femaleLead')} value={this.state.femaleLead} type="text"/>
                        <label>Comedian</label>
                            <input style={{width: '60%'}} onChange={(e) => this.handleInput(e,'comedian')} value={this.state.comedian} type="text"/>
                        <label>Director</label>
                            <input style={{width: '60%'}} onChange={(e) => this.handleInput(e,'director')} value={this.state.director} type="text"/>
                        <label>Video Description</label>
                            <input style={{width: '60%', height:'105px'}} onChange={(e) => this.handleInput(e,'description')} value={this.state.description} type="text"/>
                    </div>
                    <div className='Videocontainer__Filesupload'>
                        <div className= 'Adminfield'>
                            <h3>Files Upload</h3>
                            <label>Upload Video</label>
                            {this.renderAttachmentName('video')}
                            <Dropzone className='Dropzone' onDrop={(e) => this.onDrop(e,'video')}>
                                <p>
                                    Drop Video file, or click to select Video to upload.
                                </p>
                            </Dropzone>
                        </div>
                        <div className= 'Adminfield'>
                            <label>Upload Cover Image</label>
                            {this.renderAttachmentName('coverImage')}
                            <Dropzone className='Dropzone' onDrop={(e) => this.onDrop(e,'coverImage')}>
                                <p>
                                    Drop Cover image here, or click to select Cover Image to upload.
                                </p>
                            </Dropzone>
                        </div>
                        <div className= 'Adminfield'>
                            <label>Upload Thumbnail</label>
                            {this.renderAttachmentName('thumbnail')}
                            <Dropzone className='Dropzone' onDrop={(e) => this.onDrop(e,'thumbnail')}>
                                <p>
                                    Drop thumbnail here, or click to select thumbnail to upload.
                                </p>
                            </Dropzone>
                        </div>
                        <Button style={{width:'100px',marginTop:'20px'}} bsStyle="danger" onClick={this.onSubmit}>
                                Submit
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        admin: state.auth.admin,
        error: state.admin.error,
        success: state.admin.itemUploaded
    };
};

export default connect(mapStateToProps, { adminAuth,logout, createItem })(Admin);
