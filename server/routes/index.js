const users = require('./users')
module.exports = function delegateRoutesFor(app) {
    app.use('/api/users', users)

    return app;
}