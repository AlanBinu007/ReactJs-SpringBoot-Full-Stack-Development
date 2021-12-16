import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';

import './App.css';
import AddItem from './AddItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={ items: [] };
  }

  addItem = (item) => {
    this.setState({items: [item, ...this.state.items]});
  }
  
  render() {
    const listItems = this.state.items.map((item, index) => 
      <ListItem key={index} secondaryText={item.amount}>{item.product}</ListItem>)
    return (
      <div className="App">
        <h2>Shopping list</h2>
        <AddItem additem={this.addItem}/>
        <List>{listItems}</List>
      </div>
    );
  }
}

export default App;
