# [enzyme](https://github.com/airbnb/enzyme) || [react-testing-library](https://github.com/testing-library/react-testing-library)

The repository is designed to compare the idiosyncrasies of most ubiquitous React unit-testing libraries.

## Concepts

It is likely to be confusing for the first time to understand to what extent the libraries differ from each other. To grasp the main concepts, it is strongly advised to process some of the [resources](#Resources), although learning through practice is more effective and can absolutely shorten the time. For those who would like to dive right in, I have gathered a few definitions below.

> Rather than tests focusing on the implementation (Enzyme), tests are more focused on user behavior (react-testing-library). [(*David Boyne, Medium - My experience moving from Enzyme to react-testing-library*)](https://medium.com/@boyney123/my-experience-moving-from-enzyme-to-react-testing-library-5ac65d992ce)

> Enzyme allows you to access the internal workings of your components. You can read and set the state, and you can mock children to make tests run faster. On the other hand, react-testing-library doesn't give you any access to the implementation details. It renders the components and provides utility methods to interact with them. The idea is that you should communicate with your application in the same way a user would. So rather than set the state of a component you reproduce the actions a user would do to reach that state. [(*@Giorgio Polvara - Gpx, StackOverflow - Difference between enzyme, ReactTestUtils and react-testing-library*)](https://stackoverflow.com/a/54152893/9599137)

> The more your tests resemble the way your software is used, the more confidence they can give you. [(*Kent C. Dodds, Twitter*)](https://twitter.com/kentcdodds/status/977018512689455106?ref_src=twsrc%5Etfw)

## Setup

Check out the [configs](./configs) folder and [jest.config.js](./jest.config.js). 

It is worthwile to mention that `RTL` can be used out of the box without requiring a separate config file, whereas `Enzyme` needs an adapter which should be in line with React.

See [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) in case you want your tests to be more explicit and readable. It greatly enchances Jest's expectors.

## Elements

#### :heavy_check_mark: Find elements [[`Implementation`](./components/find-elements.js) | [`Enzyme`](./tests/find-elements/find-elements.enzyme.test.js) | [`RTL`](./tests/find-elements/find-elements.rtl.test.js)]

#### :heavy_check_mark: Fire events [[`Implementation`](./components/fire-events.js) | [`Enzyme`](./tests/fire-events/fire-events.enzyme.test.js) | [`RTL`](./tests/fire-events/fire-events.rtl.test.js)]

#### :heavy_check_mark: Conditionals [[`Implementation`](./components/conditionals.js) | [`Enzyme`](./tests/conditionals/conditionals.enzyme.test.js) | [`RTL`](./tests/conditionals/conditionals.rtl.test.js)]

#### :heavy_check_mark: Components wrapped inside HOC(s) [[`Implementation`](./components/wrapped.js) | [`Enzyme`](./tests/wrapped/wrapped.enzyme.test.js) | [`RTL`](./tests/wrapped/wrapped.rtl.test.js)]

#### :heavy_check_mark: Asynchronous events [[`Implementation`](./components/asynchronous.js) | [`Enzyme`](./tests/asynchronous/asynchronous.enzyme.test.js) | [`RTL`](./tests/asynchronous/asynchronous.rtl.test.js)]

#### :heavy_check_mark: Hooks [[`Implementation`](./components/hooks.js) | [`Enzyme`](./tests/hooks/hooks.enzyme.test.js) | [`RTL`](./tests/hooks/hooks.rtl.test.js)]

## :clap: Contributors

- [**@skyboyer007, Reddit**](https://www.reddit.com/r/reactjs/comments/dbsf57/enzyme_reacttestinglibrary/f241kbb?utm_source=share&utm_medium=web2x) - Use [`dive()`](https://airbnb.io/enzyme/docs/api/ShallowWrapper/dive.html) to access wrapped components

## Resources

- [David Boyne, Medium - My experience moving from Enzyme to react-testing-library](https://medium.com/@boyney123/my-experience-moving-from-enzyme-to-react-testing-library-5ac65d992ce)
- [@Black, StackOverflow - Difference between enzyme, ReactTestUtils and react-testing-library](https://stackoverflow.com/questions/54152562/difference-between-enzyme-reacttestutils-and-react-testing-library)
- [LevelUpTuts, YouTube - What Is React Testing Library?](https://www.youtube.com/watch?v=JKOwJUM4_RM)
- [Kent C. Dodds, YouTube - Test Driven Development with react-testing-library](https://www.youtube.com/watch?v=kCR3JAR7CHE)
- [Leigh Halliday, YouTube - Testing React](https://www.youtube.com/playlist?list=PL8fumNHsC-3NaPNxh2bous6bBDWwJ4r1-)

## Contribution

Contributors are welcome and also expected to adhere to the [**Contributor Covenant**](https://www.contributor-covenant.org/).

## License

The project is under the MIT license. For more information read the [**LICENSE.md**](./LICENSE.md) file.
