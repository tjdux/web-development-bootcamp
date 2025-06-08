const {getDbCustomers, getDbComments} = require('../model/comments')

getMain = async function (req, res) {
  res.render('index',
    {
      data: await getDbCustomers(),
    }
  )
}

postMain = function(req, res) {
  res.send(req.body);
}

getId = function(req, res) {
  const {id} = req.params;
  res.render('paramIndex', {id, data: getDbComments()})
}

module.exports = {
  getMain,
  postMain,
  getId
}