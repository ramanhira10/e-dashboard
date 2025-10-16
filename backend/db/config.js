const mongoose = require('mongoose');

const HOST_NAME = 'localhost';
const PORT = 27017;
const DATABASE_NAME = 'e-commerce';
console.log("going to connect with mongoose/mongodb");
mongoose.connect(`mongodb://${HOST_NAME}:${PORT}/${DATABASE_NAME}`);
