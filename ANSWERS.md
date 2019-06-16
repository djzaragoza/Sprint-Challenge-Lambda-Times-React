1. What are PropTypes used for?  PLease describe why it's important to type check out data in JavaScript.

If a developer was working on a large project to build a feature with many, more complex components.  Say if he were to build the feature, he would need ChildComponents.  On top of that, how would he know ChildComponents needs property message and id to function properly?  He'll need to search for components code for usages of this.props object.  He will also need to figure out what type those properties need to be.  This is where React and proptypes come into play.  The proptypes is essentially a dictionary where you define what props your component needs and what type(s) they should be.

Type check is very important because its main objective is to eliminate bugs and errors, in which developers will make throughout their build.  A bug could easily be introduced by putting floating point number into array which your code assumes will be full on integers.  Type checking prevents this error and many more like it.

2.  Describe a life-cycle event in React?

Birth/Mounting Phase:

This is the phase when the component is being built out from ground up.
It all begins with the constructor and whatever initial data you'll have access to will be defined here.  Then, it will go to the "render phase" and get invoked.  React will then update the DOM and componentDidMount gets called as well.

3.  Explain the details of a Higher Order Component?

A Higher Order Component is a function that takes a component and returns a new component.  You first create a component componentA and componentB that subscribe to DataSource.  The function will be accepted as one of its arguments a child component that receives the data as a prop.  The first parameter is the wrapped component.  The second one retrieves the data we want.  When the data is rendered, componentA and componentB will be passed a data prop with the current data retrieved from DataSource. HOC composes the original component by wrapping it in a container component.

4. 

- Styled Components:  these are created by defining components using the ES6.  CSS properties can be added to components just like Vanilla CSS.  When using styled components, you have more control over the stying

- Reactstrap:  a framework that allows you to create buttons, navigation, layouts, pages and other custom components.  Less developer control 

- CSS inline:  you can use this as written in attributes and passed to elements in React.  They're not specified as a string, but instead, they are specified with an object whose key is the camelCased version