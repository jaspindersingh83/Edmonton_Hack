import React,{Component} from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import {adminAuth} from '../../actions';
import Dropzone from 'react-dropzone';
import Dropdown from '../Dropdown/Dropdown'


class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    async componentWillMount(props){
        this.props.adminAuth(this.props.history)
    }
    render(){
        return(
            <div className= 'Adminbody'>
                <h1>Admin Console</h1>
                <Dropdown placeholder = 'Genre' options = {[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                    ]}
                />
                <div className= 'Adminfield'>
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
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        admin: state.auth.admin
    };
};

export default connect(mapStateToProps, { adminAuth })(Admin);
