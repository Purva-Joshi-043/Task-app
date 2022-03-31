const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    createIndexes: true,
    useFindAndModify: false,
    useUnifiedTopology:true
})