

const myPromise = new Promise(resolve => {
    setTimeout(()=>{
        resolve('dog');
        resolve('cat');
        resolve('bird');
    }, 1000); 
});

myPromise.then(result => {
    console.log('Promise:', result);
});

const myObservable = new Rx.Observable(observer => {
    setTimeout(()=>{
        observer.next('dog');
        observer.next('cat');
        observer.next('bird');
    }, 1000);
});

/*
myObservable.subscribe(result => {
    console.log('Obserable:', result);
});
*/

//can use filter
/*
const subscription = myObservable.filter(result => result === 'bird')
.subscribe(result => {
    console.log('Obserable:', result);
});
*/

//unsubscribe
const subscription = myObservable.subscribe(result => {
    console.log('Obserable:', result);
});

setTimeout(()=>{
    //subscription.unsubscribe();
}, 999);
