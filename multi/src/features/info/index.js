const namesListRoute = require('./names-list.route')
const whatDoWeDoRoute = require('./what-do-we-do.route')
const whoAreWeRoute = require('./who-are-we.route')

const infoFeature =  {
    name: 'info',
    hook: '$FASTIFY_ROUTE',
    handler: [{
        method: 'GET',
        url: '/who',
        handler: whoAreWeRoute
    }, {
        method: 'GET',
        url: '/what',
        handler: whatDoWeDoRoute
    }, {
        method: 'POST',
        url: '/names',
        handler: namesListRoute
    }]
}

module.exports = infoFeature