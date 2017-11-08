import React, { Component } from 'react';

class ItemForm extends Component {

  constructor(props) {
      super(props);
      // Set up initial state in constructor. These will be the initial values
      // for the form.
      this.state = {
          item: "",
          cost: "",
      };
  }

    render() {
return(
<form className="ItemForm" onSubmit={this.handleSubmit.bind(this)}>
    <h2>Enter Items Here</h2>
    <p>
        <label>Item</label>
        <input value={this.state.item} onChange={this.handleItemChange.bind(this)}/>
    </p>
    <p>
        <label>Price</label>
        <input value={this.state.pricel} onChange={this.handlePriceChange.bind(this)}/>
    </p>
    <p className="ItemForm__button-bar">
        <button type="submit">Add Item</button>
    </p>
</form>
);
    }

        handleItemChange(event) {
            this.setState({
                // We get the new input value from the event.
                name: event.target.value
            });
        }

        handlePriceChange(event) {
            this.setState({
                price: event.target.value
            });
        }

        handleSubmit(event) {
            // by default a form submission will refresh the page. preventDefault stops that from happening.
            event.preventDefault();//not sure if I still need this. I think I do.
            // Call the function that App.js passes into the onSubmit attribute.
            // Pass it a new contact object.
            this.props.onSubmit({
                name: this.state.item,
                price: this.state.cost,

            });
            // Clear the form by simply updating the state with empty form values.
            this.setState({
                name: "",
                price: "",
            })
        }

    }



export default ItemForm;
