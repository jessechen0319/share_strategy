var express = require('express');
var router = express.Router();

const jsonfile = require('jsonfile');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '股票策略记录验证系统'});
});

router.get('/tree', function(req, res, next) {
  let treeJson = jsonfile.readFileSync(__dirname+"/DB/tree.json");
  res.json(treeJson);
});

module.exports = router;
