# [enzyme](https://github.com/airbnb/enzyme) || [react-testing-library](https://github.com/testing-library/react-testing-library)

The repository is designed to compare the idiosyncrasies of most ubiquitous React unit-testing libraries.

## Concepts

It's likely to be confusing for the first time to understand to what extent the libraries differ from each other. To grasp the main concepts, it's strongly advised to read some of the [resources](#Resources), although learning through practice can absolutely shorten the time. For those who would like to dive right in, please at least see the cited definitons below.

> Rather than tests focusing on the implementation (Enzyme), tests are more focused on user behavior (react-testing-library). [(*David Boyne, My experience moving from Enzyme to react-testing-library*)](https://medium.com/@boyney123/my-experience-moving-from-enzyme-to-react-testing-library-5ac65d992ce)

> Enzyme allows you to access the internal workings of your components. You can read and set the state, and you can mock children to make tests run faster. On the other hand, react-testing-library doesn't give you any access to the implementation details. It renders the components and provides utility methods to interact with them. The idea is that you should communicate with your application in the same way a user would. So rather than set the state of a component you reproduce the actions a user would do to reach that state. [(*Giorgio Polvara - Gpx, Difference between enzyme, ReactTestUtils and react-testing-library*)](https://stackoverflow.com/a/54152893/9599137)

## Resources

- https://medium.com/@boyney123/my-experience-moving-from-enzyme-to-react-testing-library-5ac65d992ce
- https://stackoverflow.com/questions/54152562/difference-between-enzyme-reacttestutils-and-react-testing-library
- https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
