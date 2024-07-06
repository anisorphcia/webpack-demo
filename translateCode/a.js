function getData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('sendData~~~')
        }, 500)
    })
}

async function sample(){
    const message = await getData()
    console.log('message', message)
}
console.log('start')
sample()