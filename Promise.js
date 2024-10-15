const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve('Operation was successful!');
      } else {
        reject('Operation failed.');
      }
    }, 2000);
  });
  
  myPromise
    .then((message) => {
      console.log(message); 
    })
    .catch((error) => {
      console.error(error); 
    })
    .finally(() => {
      console.log('This will run regardless of the promise outcome.'); 
    });
  