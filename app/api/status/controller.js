const mongoDB = require('./../../lib/mongodb')

exports.currentStatus = function (req, res) {
  switch(mongoDB.readyState) {
    case 0:
      DB_status = 'disconnected'
      res.status(503).send({
        status: DB_status
      })
    break;
    case 1:
      DB_status = 'OK'
      res.status(200).send({
        status: DB_status
      })
    break;
    case 2:
      DB_status = 'connecting'
      res.status(503).send({
        status: DB_status
      })
    break;
    case 3:
      DB_status = 'disconnecting'
      res.status(503).send({
        status: DB_status
      })
    break;
    default:
      DB_status = 'unknown connection issues' 
      res.status(503).send({
        status: DB_status
      }) 
}
}
