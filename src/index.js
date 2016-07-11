import Litespeed from 'litespeed'

// TODO: email/password auth - password reset
// TODO: social auth
// TODO: Sequelize PostGres - default tables

new Litespeed()
  .routes({
    dir: './routes/**'
  })
  .start()
