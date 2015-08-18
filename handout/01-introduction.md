# Part 1: Introduction to React

### What is ReactJS?
- React is a JS library for creating UIs.
- Created by Facebook
- Used for creating components
- Lots of people use React as the V in MVC
- It is NOT a template library (handlebar.js, mustache.js, ...)

### Why ReactJS?
- It is alternative to EVENT-BASED and DATA BINDING approaches
- Avoids keeping track of which callback gets called first
- COMPONENTS
  - Re-rendering every time a change is made
  - Easier to reason about
- Improved performance

### Virtual DOM
- Solution for unpredictable UI
- Solves the following issues of data binding
  - bind data-models to views
  - non trivial abstraction
  - key-value observation
  - observables & computed properties
  - observables - values which when are changed they notify other observables
  computed properties - are observables which contain
  the computed change
  - problem with this system is that it needs to
  maintain a dependency graph of observable and computed graphs

- vDOM - no need for observables
- whenever change occurs => re-render everything to a vDOM representation
- DIFF the previous vDOM with the latest
- Update the real DOM with ONLY the changed stuff

### Performance:
O(v) O(m)
v - size of view
m - size of models
v << m

|        | Data binding | Virtual DOM|
|--------|:------------:|:----------:|
|memory  | O(m)         | O(v)       |
|runtime | O(1)         | O(v)       |

We can do caching:
- bring down the runtime
