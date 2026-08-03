## Learning Outcome

This project helped me understand:

- How React re-renders components
- How the `useState` Hook works
- Event handling in React
- Managing component state
- Disabling buttons based on conditions
- The difference between direct state updates and functional state updates

### Functional State Updates

I learned that multiple calls like:

```jsx
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
```

do **not** increase the counter four times because each call uses the same state value from the current render.

Using the functional updater:

```jsx
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
```

updates the state sequentially. Each function receives the latest updated value, so the counter increases four times.

This project helped me understand when and why functional state updates are required in React.