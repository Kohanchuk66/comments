const mongoose = require('mongoose');
const app = require('./app');

const port = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        app.listen(port, () => {
            console.log('app running');
        })
    } catch (e) {
        console.log(e)
    }
}

start();