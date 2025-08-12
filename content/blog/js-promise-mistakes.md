---
createdOn: '2025-08-12'
tags:
  - programming
  - javascript
description: Some mistakes I made while working with JavaScript Promises
---

# 5 Mistakes I Made While Working with JavaScript Promises

Hello everyone! Today, I want to share some mistakes I've made when working with JavaScript Promises, along with the reasons behind them. Hopefully, my experiences can help you avoid falling into the same traps.

## Let's go

### Forgetting to `await` a Promise inside an async function

Forgetting to `await` a Promise inside an async function can lead to bugs and unexpected output.  
Take a look at the example below:

```javascript
// This function returns a Promise that either fulfills or
// gets rejected randomly.
function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('Ok');
      } else {
        reject(new Error('Failed'));
      }
    }, 1000);
  });
}

async function foo() {
  getPromise();
}

foo()
  .then(() => void console.log('foo promise fulfilled.'))
  .catch(() => void console.log('foo promise rejected.'));
```

What's wrong with this snippet?

The `getPromise` function returns a Promise that might be rejected, but the Promise returned by the `foo` function is **always fulfilled**.

Why?
Because `foo` calls `getPromise()` without `await` or `return`. This means `foo` finishes execution immediately, implicitly returning `undefined`. As a result:

- The Promise from `getPromise` is never _chained_ to `foo`'s return value.
- The Promise returned by `foo` resolves instantly with `undefined`.

To catch the rejection of the Promise returned by `getPromise`, we should either `await` the result inside `foo` or return the Promise directly:

- Return the Promise returned by the `getPromise`:

```javascript
async function foo() {
  return getPromise();
}
```

Returning the Promise _resolves_ the `foo` function of the Promise returned inside its body. As a result, whatever happens in the Promise returned by the `getPromise`, the `foo` function Promise meets the same fate.

- Await the promise returned by the `getPromise` function:

```javascript
async function foo() {
  await getPromise();
}
```

If the awaited Promise is rejected, its rejection value will be thrown inside the _async_ function. As there is no `try-catch` block inside the `foo` function, the promise rejection causes the `foo` function's promise to also get rejected with the same reason.

However, one thing to note in this way is when the Promise returned by `getPromise` is fulfilled, the `foo` function doesn't fulfill with its fulfillment value. Instead, it fulfills with `undefined` because we didn't explicitly return anything from the `foo` function.

- Await the Promise returned by the `getPromise` function and surround it with the `try-catch` block.

```javascript
async function foo() {
  try {
    await getPromise();
  } catch (error) {
    console.log("I'm logging from the catch block of the foo function!");
    return 'Error caught in foo';
  }
}

foo()
  .then(() => void console.log('foo Promise is fulfilled'))
  .catch(() => void console.log('foo Promise failed'));
```

Awaiting the `getPromise` call will catch the Promise rejection, causing the catch block to execute. However, the Promise returned by the `foo` function will always be fulfilled.

Why?

Because the catch block didn't throw an error or return a Promise that get rejected. As a result, the `foo` function Promise always fulfills with the returned with the value returned in the catch block. We can throw the error from the catch block to fix the problem. Having said that, if all we do in the catch block the throw the error, it's better to just omit the `try-catch` block and let the Promise rejection automatically reject the `foo` function Promise.

Another problem in this code example is that we didn't explicitly return any value in case the Promise was fulfilled and the catch block was never executed. So the foo function Promise will be fulfilled with `undefined`. Adding the `return` keyword before the await expression will do the job.

### Unnecessary use of the Promise constructor

I guess all JavaScript developer have made this mistake at least once. Let's take a look at an example:

```javascript
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
}
```

The above code will work if you pass an URL to the `fetchData` function and then wait for the Promise to resolve. But the use of the `Promise` constructor is unnecessary in the above code example. The `fetch` function already return a Promise, so instead of wrapping the fetch function call with the Promise constructor, we can rewrite the above code like this:

```javascript
function fetchData(url) {
  return fetch(url).then((res) => res.json());
}
```

Unnecessary use of the Promise constructor can lead to another problem: if we forget to add the `catch` method call to the Promise chain inside Promise constructor, then any error thrown during the HTTP request won't be caught. Forgetting to call the `reject` function inside the executor function can hide the failure of the asynchronous operation inside the executor function.

### Incorrect Error Handling

When writing code that uses Promises, one of the most important rules to keep in mind is to _either catch and handle the error or return the Promise to allow to calling code to catch and handle it_. This fundamental rule can help you avoid hidden bugs in the code that use Promises.

Let's take a look at an example of incorrect handling of errors that breaks the above rule:

```javascript
function fetchData(url) {
  fetch(url).then((res) => res.json());
}

fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => void console.log(data))
  .catch((error) => void console.error(error));
```

The above code throws an error because the `fetchData` function doesn't return a Promise. It also doesn't allow the calling code to do any kind of error handling.

There are two ways to fix the above code:

- Return the Promise from the `fetchData` function by adding the `return` keyword before `fetch`.

```javascript
function fetchData(url) {
  return fetch(url).then((res) => res.json());
}
```

As the above function just makes the HTTP request and returns the response data after calling the `json` method on the response object, the calling code is responsible for using the response data as well as handling any error.

```javascript
fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => void console.log(data))
  .catch((error) => void console.error(error));
```

- Handle the error inside the `fetchData` function by chaining the `catch` method to the `then` method.

```javascript
function fetchData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // Do something with the data
    })
    .catch((error) => {
      // Handle error
    });
}
```

and you call the function above as shown below:

```javascript
fetchData('https://jsonplaceholder.typicode.com/todos/1');
```

### Converting promise rejection into fulfillment

Each method in the Promise object returns a new Promise. If we are not careful, we can write code that can implicitly convert rejection into Promise fulfillment. Let's take a look at an example:

```javascript
function rejectPromise() {
  return Promise.reject(new Error()).catch((error) => {
    console.log('Logging from the catch block in rejectPromise function!');
  });
}

rejectPromise()
  .then(() => void console.log('Logging from then block'))
  .catch(() => void console.log('Logging from the catch block'));
```

What is the output of the above code snippet?

```
Logging from the catch block in rejectPromise function!
Logging from then block
```

We called `Promise.reject` inside the `rejectPromise` function, so instead of logging "then block", why didn't "catch" block get logged? Instead of the catch block, why was the callback function of the `then` method invoked? Let's understand how the above code execute:

1. `rejectPromise` function is invoked.
2. `Promise.reject` creates a rejected Promise.
3. As a result of the Promise rejection, the callback function of the `catch` method is invoked.
4. "Logging from the catch block in rejectPromise function!" get logged on the console.
5. As the callback function of the `catch` method didn't explicitly return anything, the callback function implicitly return `undefined`.
6. The Promise returned by the `catch` method is fulfilled with `undefined`.
7. This fulfilled Promise is returned to its calling code by the `rejectPromise`.
8. As the Promise returned by the `rejectPromise` is fulfilled with `undefined`, the `then` method's callback is invoked in the calling code, which logs "Logging from then block".

::info
Sometimes you may want to convert a Promise rejection into a fulfillment to handle the error and allow the chain to continue. This is fine when done intentionally, but be aware that a rejection can silently turn into a fulfillment if you're not careful, and that can easily lead to bugs.
::

Suppose you are wondering why some promise returned by the `catch` method got fulfilled instead of getting rejected. In that case, the answer is that the promise returned by the `then` or `catch` method gets fulfilled if their callback function returns a value instead of throwing an error or return a rejected promise.

So, how we can fix the above code example to avoid this problem? Just remove the `catch` method call and let the caller handle the error instead.

```javascript
function rejectPromise() {
  return Promise.reject(new Error());
}
```

### Async executor function

When creating a new Promise using the constructor, we pass in a function known as the _executor function_. This function should never be declared `async`.
Why? Because the Promise constructor doesn't handle async executors the way you might expect.

Suppose the executor function is an async function. In that case, any errors thrown by the async executor function will not be caught, and the thrown error won't cause the newly-constructed promise to reject.

```javascript
const p = new Promise(async (resolve, reject) => {
  throw new Error('Failed');
});

p.catch((e) => void console.log(e.message));
```

In this example, the `throw` inside the async executor doesn't reject `p`. Instead, it creates a rejection in the internal promise returned by the async function - a promise the constructor ignores. As a result, the `.catch` attached to `p` never runs.

If the executor function is a synchronous function, then any error thrown inside the executor function will automatically reject the newly created promise. Try removing the async keyword in the above code example and observe the output.

## Final Thoughts

JavaScript Promises are powerful, but their flexibility means it's easy to introduce subtle bugs if you're not careful. From forgetting to await, to wrapping Promises unnecessarily, to mismanaging error handling, each of these mistakes can lead to confusing, hard-to-trace behavior.

The key takeaways are:

- Always return or await a Promise if you want the outer function to reflect its state.
- Avoid wrapping existing Promises unless you truly need to.
- Decide where errors should be handled, and make sure they are.
- Remember that `.catch` can turn a rejection into a fulfillment.
- Keep Promise executor functions synchronous.

By understanding how Promises propagate results and errors, you can write async code that's more predictable, easier to maintain, and far less prone to mysterious failures.
