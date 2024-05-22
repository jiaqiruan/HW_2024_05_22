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
