//promises

const doSomethingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    //did something
    resolve('First data');
  }, 1000);
});
const doOtherThingPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    //did something
    resolve('Second data');
  }, 1000);
});

doSomethingPromise
  .then((data) => {
    console.log(data.split(''));
    return doOtherThingPromise;
  })
  .then((data2) => console.log(data2.split('')))
  .catch((error) => console.log('Ops', error));

//callbacks
function doSomething(callback) {
  setTimeout(function () {
    //did something
    callback('First data');
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function () {
    //did other thing
    callback('Second data');
  }, 1000);
}

function doAll() {
  try {
    doSomething(function (data) {
      var processedData = data.split('');
      try {
        doOtherThing(function (data2) {
          var processedData2 = data2.split('');
          try {
            setTimeout(function () {
              console.log(processedData, processedData2);
            }, 1000);
          } catch (err) {
            //handle error
          }
        });
      } catch (err) {
        //handle error
      }
    });
  } catch (err) {
    //handle error
  }
}

doAll();
