let counter = 0;

const greet = (delay) => {
  intervalId = setInterval( () => {
    console.log('Hello World.', delay);
    counter ++;
    if(counter == 5){
      clearInterval(intervalId);
      counter = 0;
      greet(delay + 1000);
    }
  }, delay);
};

greet(1000);