globalThis.mongoose = require('mongoose');

module.exports = mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('Db bağlantısı başarıyla gerçekleştirildi'))
    .catch(err => console.log(err));