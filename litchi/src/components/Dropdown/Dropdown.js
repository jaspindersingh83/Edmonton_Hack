import React,{Component} from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './Dropdown.css';

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = {
            options:props.options,
            selectedOption: '',
        }
    }
    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
    //   console.log(`Selected: ${selectedOption.label}`);
    }
    render() {
      const { selectedOption } = this.state;
      const value = selectedOption && selectedOption.value;
      return (
        <Select className='Dropdown'
          name="form-field-name"
          placeholder = {this.props.placeholder}
          value={value}
          onChange={this.handleChange}
          options = {this.state.options}
        // The component needs options in following format
        //   options={[
        //     { value: 'one', label: 'One' },
        //     { value: 'two', label: 'Two' },
        //   ]}
        />
      );
    }
  }

export default Dropdown