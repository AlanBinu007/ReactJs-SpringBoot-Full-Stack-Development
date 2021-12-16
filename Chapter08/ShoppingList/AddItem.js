import React, { Component } from 'react';
import SkyLight from 'react-skylight';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class AddItem extends Component {
  constructor(props) {
    super(props);
  }
  
  addItem = () => {
    const item = {product: this.state.product, amount: this.state.amount};
    this.props.additem(item);
    this.addform.hide();
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
 
  render() {
    return (
      <div>
        <section>
          <RaisedButton onClick={() => this.addform.show()} label="Add Item" primary={true} />
        </section>
        <SkyLight 
          hideOnOverlayClicked 
          ref={ref => this.addform = ref} 
          title="Add item">
          <TextField type="text" name="product" onChange={this.handleChange} 
          placeholder="product" /><br/>
          <TextField type="text" name="amount" onChange={this.handleChange} 
          placeholder="amount" /><br/>
          <RaisedButton onClick={this.addItem} label="Add" default={true} />
        </SkyLight>      
      </div>
    );
  }
}

export default AddItem;