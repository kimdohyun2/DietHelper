var express = require('express');
var fs = require('fs');
var exec = require('child_process').exec;
var router = express.Router();
const RequestQueue = require('node-request-queue');
const nock = require('nock');
var mysql = require('../public/javascripts/mysql');
var multer, storagecfg, path, crypto, uploadMulter;
multer = require('multer');
path = require('path');
crypto = require('crypto');


storagecfg = multer.diskStorage({
  destination: './imageUpload/',
  filename: function (req, file, cb) {
    return crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) {
        return cb(err);
      }
      return cb(null, "" + (raw.toString('hex')) + (path.extname(file.originalname)));
    });
  }
});

uploadMulter = multer({ storage: storagecfg });
//origin code ! ! ! ! ! ! ! ! ! ! ! (import) ! ! ! ! ! ! ! ! ! ! !
//'cd ; cd OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet; ./darknet detector test cfg/coco.data cfg/yolov2.cfg yolov2.weights data/dog.jpg'

/* GET home page. */
router.get('/f', function (req, res, next) {

  const request = 'http://210.119.32.21:8070/ssss';
  const addresses = [request, request];

  //nock(snappyjs).get('').reply(200, {success: true});


  let rq = new RequestQueue(1);

  rq.on('resolved', res => {
    console.log('Request completed (${res})');
    
  }).on('rejected', err => {
    console.log('2');
  }).on('completed', () => {

    console.log('Queue is empty, all requests completed.');
  });
  rq.pushAll(addresses);
  /*mysql.userIdSelect(loginuser, function (resultSelect) {
    if (resultSelect[0].password == password) { //DB에 id와 password가 있다면
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end();
    }
    else {
      res.writeHead(300, { 'Content-Type': 'text/plain' });
      res.end();
    }
  });*/


  /*for (i = 0; i < resultSelect.length; i++) {
    //login success
});

router.post("/upload", uploadMulter.single('upload'), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  console.log(req.file.filename);

  var resObj = new Object();
    if (resultSelect[i].userID == req.body
});

router.post("/upload", uploadMulter.single('upload'), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  console.log(req.file.filename);

  var resObj = new Object();.userID && resultSelect[i].password == req.body.userPass) { //DB에 id와 password가 있다면
      fail = false;
});

router.post("/upload", uploadMulter.single('upload'), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  console.log(req.file.filename);

  var resObj = new Object();
      res.writeHead(200, {'Content-Type': 
});

router.post("/upload", uploadMulter.single('upload'), function (req, res) {
  console.log(req.file);
  console.log(req.body);
  console.log(req.file.filename);

  var resObj = new Object();'text/plain'});
      res.end();
      break;
    }
  }
  //login fail
  if (fail) {
    res.writeHead(300, {'Content-Type': 'text/plain'});
    res.end();
  }
});*/


  /*var firstArray = fs.readFileSync('/home/helper/Desktop/LastProject/NewNode/myproject/textFile/textFile.txt').toString().split("\n");
    var LastArray = [];
    for (var i = 0; i < firstArray.length - 1; i++) {
      LastArray[i] = firstArray[i];
      console.log(firstArray[i]);
  }
  res.json(LastArray);*/

  //exe............. import ! ! ! ! ! ! ! ! ! ! ! ! !

  /*exec('cd ; cd OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet; ./darknet detector test cfg/coco.data cfg/yolov2.cfg yolov2.weights data/dog.jpg', { timeout: 7000 }, function (error, stdout, stderr) {
    
    console.log('stdout' + stdout);
    console.log('stderr' + stderr);
    
    var firstArray = fs.readFileSync('/home/helper/Desktop/LastProject/NewNode/myproject/textFile/textFile.txt').toString().split("\n");
    var LastArray = [];
    for (var i = 0; i < firstArray.length - 1; i++) {
      LastArray[i] = firstArray[i];
      console.log(firstArray[i]);
    }

  });*/

    //console.log(firstArray[0] + "aaaaaaaaaa");
    //console.log(firstArray[1] + "aaaaaaaaaa");
    //console.log(firstArray[2] + "aaaaaaaaaa");
    
    /*fs.move('/home/helper/OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet/predictions.jpg', '/home/helper/Desktop/LastProject/NewNode/myproject/imageUpload/predictions.jpg', err => {
      if (err) return console.error(err)
      console.log('first success!!!!!')
    });
  });

  //console.log(LastArray);
  //res.json(LastArray);

  /*exec('cd  ; ls', function (error, stdout, stderr){
    
    console.log('stdout' + stdout);
    console.log('stderr' + stderr);
  })  
  //res.render('index', { title: 'Express' });
});*/
  /*fs.readFile('/home/helper/Desktop/LastProject/NewNode/myproject/textFile/textFile.txt', 'utf8', function(err, data){
    //console.log(data); //OK
  //var aJsonArray = new Array();
  //var aJson = new Object();
  //aJson = data;
    //var otherArray = data;
    //aJsonArray.push(aJson);
    //var sJson = JSON.stringify(aJsonArray);
    //console.log(aJson);
    //var otherObject = { items: "asdf"};
    var json = JSON.stringify({
      anObject: otherObject,
      anArray: [otherArray],
      another: "item"
    })
    //console.log(json);
    //var jsonLast = JSON.parse(json);
    //console.log(jsonLast.anArray);
  });*/

  /*exec('cd ; cd OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet; ./darknet detector test data/obj.data yolo-obj.cfg backup/yolo-obj_10000.weights data/pic_009.jpg -json_port 8070 -mjpeg_port 8090 -ext_output',{timeout:6000}, function (error, stdout, stderr){
      
      console.log('stdout' + stdout);
      console.log('stderr' + stderr);
      
      fs.move('/home/helper/OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet/predictions.jpg', '/home/helper/Desktop/Node/myproject/upload/predictions.jpg', err => {
        if (err) return console.error(err)
        console.log('first success!!!!!')
      })
      
      
    });*/

  /*exec('cd ; cd OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet; ./darknet detector test cfg/coco.data cfg/yolov2.cfg yolov2.weights data/dog.jpg', { timeout: 6000 }, function (error, stdout, stderr) {

    console.log('stdout' + stdout);
    console.log('stderr' + stderr);

    var firstArray = fs.readFileSync('/home/helper/Desktop/LastProject/NewNode/myproject/textFile/textFile.txt').toString().split("\n");
    var LastArray = [];
    for (var i = 0; i < firstArray.length - 1; i++) {
      LastArray[i] = firstArray[i];Cheer up! ! ! !'
      console.log(firstArray[i]);Cheer up! ! ! !'
    }Cheer up! ! ! !'
    //console.log(firstArray[0] + "aCheer up! ! ! !'aaaaaaaaa");
    //console.log(firstArray[1] + "aaaaaaaaaa");
    //console.log(firstArray[2] + "aaaaaaaaaa");
    fs.move('/home/helper/OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet/predictions.jpg', '/home/helper/Desktop/Node/myproject/upload/predictions.jpg', err => {
      if (err) return console.error(err)
      console.log('first success!!!!!')
    })


  });
  mysql.dbSelect(function (result) {
    console.log(result[0].id); //Object result!!!!!!!!!
  });*/
  //res.json(users);
});

router.post('/login', function (req, res) {
  var loginuser = req.body.userID;

  mysql.userIdSelect(loginuser, function (resultSelect) {
    if (resultSelect[0].password == req.body.userPass) { //DB에 id와 password가 있다면
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end();
    }
    else {
      res.writeHead(300, { 'Content-Type': 'text/plain' });
      res.end();
    }
  });
});

router.post('/register', function (req, res) {
  var registerUserId = req.body.registerUserId;
  var registerUserPassword = req.body.registerUserPassword;
  var registerUserEmail = req.body.registerUserEmail;
  var registerUserSex = req.body.registerUserSex;
  var registerUserHeight = req.body.registerUserHeight;
  var registerUserWeight = req.body.registerUserWeight;
  var registerUserAge = req.body.registerUserAge;

  mysql.dbSelect(function (resultSelect) {
    var suc = true;
    for (i = 0; i < resultSelect.length; i++) {
      if (resultSelect[i].id == registerUserId) {
        suc = false;
        break;
      }
    }
    if (suc) {
      mysql.signupInsert(registerUserId, registerUserPassword, registerUserEmail, registerUserSex, registerUserHeight, registerUserWeight, registerUserAge);
      res.writeHead(200, { 'Content-Type': 'text/plain' }); //Success == 200
      res.end();
    } else {
      res.writeHead(300, { 'Content-Type': 'text/plain' }); // ID Same == 300
      res.end();
    }
  });
});

/*fs.move('/home/helper/OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet/predictions.jpg', '/home/helper/Desktop/LastProject/NewNode/myproject/public/images/' + fileName, err => {
      if (err) return console.error(err)
    });*/
    

router.post("/upload", uploadMulter.single('upload'), function (req, res) {
  
  console.log(req.file);
  console.log(req.body);
  console.log(req.file.filename);

  var resObj = new Object();
  
  ///home/helper/Desktop/LastProject/NewNode/myproject/imageUpload/' + fileName
  var fileName = req.file.filename;
  exec('cd ; cd OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet; ./darknet detector test data/obj.data yolo-obj.cfg backup/yolo-obj_10000.weights /home/helper/Desktop/LastProject/NewNode/myproject/imageUpload/' + fileName, { timeout: 7000 }, function (error, stdout, stderr) {

    var firstArray = fs.readFileSync('/home/helper/Desktop/LastProject/NewNode/myproject/textFile/textFile.txt').toString().split("\n");
    //var LastArray = [];
    var classObject = new Object();
    var classList = new Array();

    for (var i = 0; i < firstArray.length - 1; i++) {
      //LastArray[i] = firstArray[i];
      classObject = new Object();
      classObject.className = firstArray[i];
      classList.push(classObject);
    }
    //console.log(firstArray[0] + "aCheer up! ! ! !'aaaaaaaaa");
    //console.log(firstArray[1] + "aaaaaaaaaa");
    //console.log(firstArray[2] + "aaaaaaaaaa");
    

    fs.rename('/home/helper/OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet/predictions.jpg', '/home/helper/Desktop/LastProject/NewNode/myproject/public/images/' + fileName, function (err) {
      if (err) console.log('ERROR : ' + err);
    });

    resObj.classList = classList;
    resObj.imageUrl = 'http://210.119.32.21:8070/images/' + fileName;
    console.log(resObj);
    console.log('stdout:'+stdout)
    return res.json(200, resObj);
  });
});

router.post('/save', function (req, res) {
  saveData = JSON.parse(req.body.SaveData);
  console.log(saveData);
  var recordUserId = saveData.userID;
  mysql.foodInsert(recordUserId,req.body.SaveData, function(callback){
    
    if(callback){
      console.log(callback);
      res.writeHead(200,{'Content-Type': 'text/plain'});
      res.end();
    }
    else {
      console.log('aaaaaaaaaa');
      res.writeHead(300,{'Content-Type': 'text/plain'});
      res.end();
    }
  });
});



module.exports = router;