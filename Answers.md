# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a User Interface Component Library that came out in 2013. Created by Facebook, it was made to help solve issues involving complex state. It is very reusable and flexible with how you manage your data. It also includes JSX which appears like HTML to the untrained eye, but allows for inline JS, and as we have used, styled-components. 

1. What does it mean to think in react?

When you first do your npm/yarn start, you will have your server up and your basic React components made within your code. This is where before you write your code you will map out what you'll need, where you'll need it to be and what steps you'll take to create it. React is all components and those components look better, work quicker, and function stronger when you properly map out your structure. 

1. Describe state.

State is a private slice belonging to a single Component. State then allows the React Component to change output in response to certain events. To use state, we are working with state hooks and we import that through our React import at the top. 

1. Describe props.

Props, short for properties, are used when we are creating a Component and we want to give it different parameters. They can be passed from a Parent to a Child Component, and allow for the possible info to change, without ruining our code. They serve almost as a placeholder for our Components before we pass them our actual state.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects, which are activated and used through the useEffect function, allow us to fetch data, or change the DOM among many others. Today in our sprint we will be using side effects to grab information from an API and we sync effects using our state and setState as defined in our Component. This is done using the .get and .then to grab a response from the API. 
