

function encode(string){
    const revers = string.split('').reverse().join('')
    return revers.toUpperCase()
}

export{
    encode
}