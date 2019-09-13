# Enzyme vs RTL

- :heavy_check_mark: [Basic stuff](https://github.com/gomorizsolt/enzyme-vs-rtl/tree/master/src/components/Basics)(rendering texts and components without complexity, e.g. no hooks and conditionals)
- :heavy_check_mark: [Fire events](https://github.com/gomorizsolt/enzyme-vs-rtl/tree/master/src/components/Events)(button clicks, input changes)
- :x: Props handling(receive texts, events and other values, render elements conditionally)
- :x: Stateless & stateful components(trigger instance functions, access & manipulate data, lifecycle hooks)
- :x: Components wrapped inside a HOC
- :x: Mocks(3rd-party libraries/packages, class/props/global DOM functions)
- :x: Hooks(most notably custom hooks, `useState` and `useEffect`)
- :x: Asynchronous events(fetch & promises)
- :x: Extras(snapshot generating, applied styles to components)

## Resources

- https://medium.com/@boyney123/my-experience-moving-from-enzyme-to-react-testing-library-5ac65d992ce
- https://stackoverflow.com/questions/54152562/difference-between-enzyme-reacttestutils-and-react-testing-library
- https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/
