import React, { Component } from 'react';

import Item from './Item';
import ItemForm from './ItemForm';

class App extends Component {

    constructor(props) {
      super(props);
      // set initial items on page load
      this.state = {
          listItems: [
              {
                  name: "Brain",
                  price: 1,
              },
              {
                  name: "Working Brain",
                  price: 2
              }
            ]
      };
  }

  render() {

    const listItems = this.state.listItems.map((listItem, index) => (
              <Item key={listItem.name} listItems={listItem} onDelete={() => this.removeItem(index)}/>
          ));

    return (
      <div className="App">
        <h1>Shopping List</h1>
                  <div className="App__items">
                      {listItems}
                      <ItemForm onSubmit={this.addItem.bind(this)}/>
                  </div>
      </div>
    );
  }

  addItem(listItems) {
          this.setState(prevState => {
              // Important: Copy contacts array before modifying. We should not modify
              // the original. React it very clear that arrays and objects in your
              // state must be immutable. So we need to create a NEW array and set
              // that as the new contacts state. React has found this prevents
              // unexpected bugs.
              const newItems = prevState.listItems.slice(0);
              newItems.push(listItems);

              // update the contacts in state
              return { listItems: newItems };
          });
      }

      removeItem(index) {
          this.setState(prevState => {
              // Copy contacts array before modifying. We should not modify the original.
              const newItems = prevState.listItems.slice();
              newItems.splice(index, 1); // Remove the item at this index.

              // update the contacts in state
              return { listItems: newItems };
          });
      }

}

export default App;
