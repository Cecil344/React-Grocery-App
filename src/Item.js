import React, { Component } from 'react';

class Item extends Component {

    render() {
        // Here we added a delete button. When clicked, it directly calls the
        // function that was passed to us via onDelete=....
        return (
            <div className="ShoppingList">
                <div className="ItemName">{this.props.listItems.name}
                </div>
                <div className="Price">{this.props.listItems.price}
                </div>

                <button className="ShoppingList__delete-button"
                        title={"Delete " + this.props.listItems.name}
                        onClick={this.props.onDelete}>Delete
                </button>
            </div>
        );
    }
}

// We must specify that our ContactCard component is the default export of this file.
// This will be used on line 6 of App.js
export default Item;
