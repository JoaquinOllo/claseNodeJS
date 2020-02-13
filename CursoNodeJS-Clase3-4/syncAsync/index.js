const retardoSync = () => {for(let i=0; i<3e9; i++);}
const retardoAsyncCb = cb => setTimeout(cb,2000)
const retardoAsyncPromise = () => new Promise(resolve => setTimeout(resolve,2000))

//async function retardo() {
const retardo = async() => {

    /*
    retardoSync()
    console.log('retardo 1 OK!')

    retardoSync()
    console.log('retardo 2 OK!')

    retardoSync()
    console.log('retardo 3 OK!')

    */
    /*
    retardoAsyncCb(() => {
        console.log('retardo 1 OK!')
        retardoAsyncCb(() => {
            console.log('retardo 2 OK!')
            retardoAsyncCb(() => {
                console.log('retardo 3 OK!')
            })
        })
    })
    */
    /*
    retardoAsyncPromise()
    .then(() => {
        console.log('retardo 1 OK')
        return retardoAsyncPromise()
    })
    .then(() => {
        console.log('retardo 2 OK')
        return retardoAsyncPromise()
    })
    .then(() => {
        console.log('retardo 3 OK')
        return retardoAsyncPromise()
    })
    //.catch(() => {})
    */
   await retardoAsyncPromise()
   console.log('retardo 1 OK')

   await retardoAsyncPromise()
   console.log('retardo 2 OK')

   await retardoAsyncPromise()
   console.log('retardo 3 OK')
}

console.log('Inicio')
retardo()
console.log('Fin')
