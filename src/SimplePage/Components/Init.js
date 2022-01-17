const Fetch = require('node-fetch')

const Init = ()=> {

    Fetch('https://jsonplaceholder.typicode.com/posts')
.then(promesa => promesa.json())
.then(contenod => console.log(contenod))

return (
    <h1>Hellos</h1>
)

}
export default Init


