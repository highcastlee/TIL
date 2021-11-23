const compress = str => str.replace(/(.)\1+/g, match => match[0] + match.length)

console.log(compress('ABBCCCECC')) // => AB2C3EC2
