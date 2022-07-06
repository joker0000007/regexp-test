let str = `
010-1234-56789
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbccdddd
http://localhost:1234
`

console.log(
  str.match(/d{2}/g)
)