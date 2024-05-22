import React, { Component } from 'react'

export default class DisplayItem extends Component {
  render() {
    const items = this.props.displayItems;
    return (
      <div>
        DisplayItem
        <span>  </span>
        <select onChange={this.props.onChange} id="item" name="item">
            {items.map((item)=>{
                return <option key={item.name} value={item.name}>{item.name}</option>
            })}
        </select>
      </div>
    )
  }
}
