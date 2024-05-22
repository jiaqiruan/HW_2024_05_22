# HW_2024_05_22 Jiaqi Ruan

## Question 1
[PureComponent](PureComponent.js)
## Question 2
[DoubleSelect](double-select)
## Question 3
stateless component don't have they own state, they receive props or function as input and make changes on the UI. Stateful component have they own state, they use lifecycle methods to manage and update the state.

Let's say we are build a form. In a controlled component, state handles all the form data. In an uncontrolled component, the HTML form element data is managed by only the DOM.
## Question 4
create state: `[value,setValue] = useState(defaultValue)`

manage lifecycle: `useEffect=(cb,[])`, where cb is the callback function, and [] is the dependency array.
## Question 5
In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.

Why: HOCs allow you to reuse component logic across multiple components. HOCs can take additional arguments, which allows you to customize the behavior of the HOC. HOCs can be composed together to create more complex functionality. 
## Question 6
Shallow comparison only compares the top-level properties of the objects. If any of these properties are objects themselves, their references are compared, not their actual contents. This is faster but less accurate. Whereas deep comparison compares the entire structure of the objects, including nested objects. This is slower but more accurate.

Shallow Copy stores the references of objects to the original memory address. Deep copy stores copies of the object's value
## Question 7
A pure function is a function that will, for the same input, always return the same output, with no side effects. A pure component is one that will always produce the same JSX with the same input with no props