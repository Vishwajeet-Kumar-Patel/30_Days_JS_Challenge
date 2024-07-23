// Task 1: Create a promise that resolves with a message after 2 seconds timeout and log the message to the console.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
    });

promise.then((message) => { 
    console.log(message);
});


// Task 2: Create a promise that rejects with an error message after 2 seconds timeout and handle the error message using .catch() method.
const promiseWithTimeout = new Promise((reject) => {
    setTimeout(() => {
      reject('Error: The operation timed out after 2 seconds.');
    }, 2000);
  });
  
  // Handle the error using .catch() method
  promiseWithTimeout
    .catch((error) => {
      console.error(error);
    });


// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in specific order.    
const fetchServerData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched from the server');
      }, 2000);
    });
  };
  
  fetchServerData()
    .then((message) => {
      console.log(message);
      return fetchServerData();
    })
    .then((message) => {
      console.log(message);
      return fetchServerData();
    })
    .then((message) => {
      console.log(message);
    });


// Task 4: Write an Async function that waits for a promise to resolve and then logs the resolved value.
const waitAndLog = async () => {
    const message = await fetchServerData();
    console.log(message);
  };
  
  waitAndLog();    

// Task 5: Write an Async function that handles a rejected promise using try...catch and logs the error message.
const fetchServerDataWithTimeout = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Error: The operation timed out after 2 seconds.');
      }, 2000);
    });
  };
  
  const waitAndLogWithTimeout = async () => {
    try {
      const message = await fetchServerDataWithTimeout();
      console.log(message);
    } catch (error) {
      console.error(error);
    }
  };
  
  waitAndLogWithTimeout();


// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    }); 


// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await. 
const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  
fetchData();   


// Task 8: Use Promise.all() to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 1 resolved');
    }, 2000);
  });
  
  const promise2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 2 resolved');
    }, 4000);
  });
  
  Promise.all([promise1, promise2])
    .then((values) => {
      console.log(values);
});


// Task 9: Use Promise.race() to log the value of the first promise that resolves among multiple promises. 
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 3 resolved');
    }, 2000);
  });
  
  const promise4 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise 4 resolved');
    }, 4000);
  });

    Promise.race([promise3, promise4])
    .then((value) => {
        console.log(value);
});