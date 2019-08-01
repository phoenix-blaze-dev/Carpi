var express = require('express');
var router = express.Router();
var child = require('child_process');
var exec = require('child_process').exec;
/* GPIO PIN definitions */
var forward = '25';
var backward = '29';
var left = '23';
var right = '28';

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Move Car Forward    ----------------------------------------

router.post('/forward', function(req, res){
	    var name = req.body.name;
		exec('gpio write '+forward+' 1', function (error, stdout, stderr) {
			result = stdout.toString().split("\n"); 
			console.log(result);
	    	res.send(result);
	});
});

// Move Car Backward    ----------------------------------------

router.post('/backward', function(req, res){
            var name = req.body.name;
                exec('gpio write '+backward+' 1', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

// Move Car Right    ----------------------------------------

router.post('/right', function(req, res){
            var name = req.body.name;
                exec('gpio write '+right+' 1', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

// Move Car Left    ----------------------------------------

router.post('/left', function(req, res){
            var name = req.body.name;
                exec('gpio write '+left+' 1', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

// Stop Car    ----------------------------------------

router.post('/stop', function(req, res){
            var name = req.body.name;
                exec('gpio write '+forward+' 0 && gpio write '+backward+' 0 && gpio write '+left+' 0 && gpio write '+right+' 0', function (error, stdout, stderr) {
                        result = stdout.toString().split("\n");
                        console.log(result);
                res.send(result);
        });
});

module.exports = router;
