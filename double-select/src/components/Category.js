import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div>
        Category 
        <span>  </span><select onChange={this.props.onChange} id="category" name="category">
            <option value="fruit">fruit</option>
            <option value="meat">meat</option>
            <option value="vegetable">vegetable</option>
        </select>
      </div>
    )
  }
}
