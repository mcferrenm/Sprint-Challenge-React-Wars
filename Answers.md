# Answers

1.  What is React JS and what problems does it try and solve?

React is a UX Library that gives developers the tools to create reusable components, and helps solve issues related to working with the dom in large front end applications.

1.  What does it mean to _think_ in react?

This is a workflow that developers use to maximize Reacts strengths. First you break down an application into a component hierarchy and build out a static version of the app using basic data props. Then you decide which components need state. From there you pass state from the nearest common ancestor compoent and develop out the apps interactivity by using an inverse data flow with event propigation or callbacks from ancestor components.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class/stateful compoent will hold state and pass it down to functional components through props. Any change to state is always done within a class/stateful compoents, and a functional compoent's job is only to render that data to screen. Functional components are not dependent on any other part of the application, where as class compoents usually will depend on a data source.

1.  Describe state.

State is a way to describe the properties of something at a single point in time. State has a history, so it is immutable and only new versions of it are ever created.

1.  Describe props.

Props allow the one way flow of data in React. Props are written as attribute like syntax when declaring components using <Component />'s. They are accessed by child components by passing the argument "props" in a functional components params or in a class constructor's params.
