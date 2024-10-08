// import jsoon-server
const jsonServer = require('json-server')

// create server
const mpServer = jsonServer.create()
// set up path for db.json file
const router = jsonServer.router("db.json")
// create middleware 
const middleware = jsonServer.defaults()
// define a port for runing json server
const PORT = 3000 || ProcessingInstruction.env.PORT
// use middleware,router
mpServer.use(middleware)
mpServer.use(router)

// run server in given port resolve client request
mpServer.listen(PORT,()=>{
    console.log(`MP SERVER is started at port ${PORT} and waiting for client request!!!`);
    
})