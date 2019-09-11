# Enzyme vs RTL

## Aim

Many articles & StackOverflow threads debate on different approaches of unit testing in React.
- https://medium.com/@boyney123/my-experience-moving-from-enzyme-to-react-testing-library-5ac65d992ce
- https://codeburst.io/revisiting-react-testing-in-2019-ee72bb5346f4
- https://stackoverflow.com/questions/54152562/difference-between-enzyme-reacttestutils-and-react-testing-library

We have been using Enzyme since the beginning to test React components seamlessly. However, since the appearance of hooks, Enzyme has yet to solve essential issues, e.g. `useEffect` cannot be triggered with shallow rendering([#2086](https://github.com/airbnb/enzyme/issues/2086)). As a result, and also based upon other thoughts and recommendations, we have decided to shed light on how RTL facilities unit testing.
