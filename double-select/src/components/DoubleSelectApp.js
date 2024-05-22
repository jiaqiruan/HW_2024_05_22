import React, { Component } from 'react'
import Category from './Category'
import DisplayItem from './DisplayItem'

export default class DoubleSelectApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [
                {
                  name: "apple",
                  category: "fruit"
                },
                {
                  name: "Cucumber",
                  category: "vegetable"
                },
                {
                  name: "Banana",
                  category: "fruit"
                },
                {
                  name: "Celery",
                  category: "vegetable"
                },
                {
                  name: "orange",
                  category: "fruit"
                },
                {
                  name: "sausage",
                  category: "meat"
                },
                {
                  name: "bacon",
                  category: "meat"
                }
              ],
              currentCategory : "fruit",
              currentItem: "apple",
        };
    }

    handleChangeCategory = (event)=>{
        const newCategory = event.target.value;
        const newItem = this.state.items.find(item=>item.category===newCategory);
        const newState = {...this.state,currentCategory:newCategory, currentItem:newItem.name};
        this.setState(newState);
    }

    handleChangeItem = (event)=>{
        const newState = {...this.state,currentItem:event.target.value};
        this.setState(newState);
    }

    render() {
        return (
        <div>
            currentCategory: {this.state.currentCategory}
            <Category onChange={this.handleChangeCategory}/>
            currentItem: {this.state.currentItem}
            <DisplayItem onChange={this.handleChangeItem} displayItems={this.state.items.filter(item=>item.category===this.state.currentCategory)}/>
        </div>
        )
    }
}
