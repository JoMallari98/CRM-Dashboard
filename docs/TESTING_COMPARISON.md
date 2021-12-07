# Comparing Enzyme vs Testing Library (React)

## Enzyme

Testing utility for react created by Airbnb

### Pros

- ✔️ Can can do shallow rendering. Shallow rendered tests run faster.
- ✔️ Shallow rendered tests come with a very small preparation cost. But they do **NOT** give full confidence to code testing.

### Cons

- ❌ All of Enzyme's Selectors use **implementation details**. This is a **bad** practice because it makes the tests brittle
- ❌ Find by text queries are hard to read and cumbersome. Relies on using a selector then filtering a list of nodes.
- ❌ Allows modifying and reading internal state of React. This is a **bad** practice because it makes the tests brittle
- ❌ Allows modifying dom event objects. This is a **bad** practice because it makes the tests brittle
- ❌ No documentation for async testing, async testing is possible but feels like a hack because of lack of async testing
- ❌ Does not have full support for hooks yet (`useEffect` and ``useLayoutEffect) specifically.
- ❌ Querying items can be non-intuitive, especially when trying to assert something about a component you assigned as a prop to another component.

## Testing Library - (React) 🚀 
https://testing-library.com/docs/react-testing-library/intro/
 
Testing utitlity with over 10 implementations (React, Vue, etc.)

### Pros

- ✔️ Query elements like a user. Does not test the implementation details.
- https://www.youtube.com/watch?v=lnMl32AWRog
- ✔️ API is easier to read and implement
- ✔️ Does not allow access to react component internals
- ✔️ Good documentation on Async testing

### Cons

- ❌ Cannot conduct shallow rendering. But this doesn't really matter because shallow rendering's main function is just to reduce testing time
