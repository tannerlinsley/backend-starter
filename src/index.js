import Litespeed from 'litespeed'

import auth from './utils/auth'

new Litespeed()
  .route({
    method: 'GET',
    url: '/',
    preHandlers: [auth],
    handler: (req) => {
      return 'Server is running!'
      // return { message: 'Welcome!' }
    }
  })
  .start()
