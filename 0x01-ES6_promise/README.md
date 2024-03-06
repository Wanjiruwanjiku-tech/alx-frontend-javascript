PROMISES
---------------------
![alx](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/75862d67ca51a042003c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240306%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240306T042339Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4a0cb9e3f9e6dac2398d5cd9e63dacb7320e8ae9504f12465cc007189b0bb6ff)

- Promises are proxies or placeholders that represent the eventual completion or failure of an asynchronous operation as well as its resulting value.

- When you execute something Synchronously you wait for it to finish before moving to other tasks.
- Asynchronous Operations mean that you can move to other tasks befor the previous ones complete.

- A Pending promise can either be:

1. Fulfilled with a value (RESOLVE)
2. Rejected with a response or error

- You can create a Promise using 'new Promise()'

Example
-------------------

        let p = new Promise((resolve, reject) => {
            //Do async tasks...
            if(good_condition) {
                resolve('Success');
            }
            else {
                reject('Failure');
            }
        });
        //Chain
        p.then(() => {/*Do something with the result*/})
        .catch(error => console.error(error))
------------------------------------------

ASYNC and AWAIT
--------------------------

- The async operator makes a function return a promise.

- The await operaor makes an async function wait for a promise.

- The operators allow you to write asynchronous code in a synchronous manner.

- Async operator does not resolve or reject parameters and everything in await is placed in an event queue.

Example

        function television() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const done = true;
                    if (done){
                        resolve('CONGRATULATIONS!! You just bought yourself a new Television')
                    }
                    else {
                        reject('Not Quite there yet!!')
                    }
                }, 1500)
            })
        }

        function radio(){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const done = false;
                    if (done) {
                        resolve('YAY!! You just bought yourself a Radio');

                    }
                    else{
                        reject('Sorry!! The Price for the Radio is More than that.')
                    }
                }, 2500)
            })
        }

        async function results() {
            try {
                const televisionBought = await television()
                console.log(televisionBought);

                const radioBought = await radio()
                console.log(radioBought);
            } catch (error) {
                console.error(error)
            }
        }
        results()

------------------------------------------------

![meme](https://th.bing.com/th/id/OIP.RC4kmpKF758G0XRDFuy0kgHaH1?rs=1&pid=ImgDetMain)
-----------------------------------------------------------------------