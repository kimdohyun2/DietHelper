//////////////////////////////////////////////////////////
// *** Module *** //
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
/////////////////////////////////////////////////////////

// Android에서 부터 받아온 이미 업로드
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

/* GET home page. (Example) */
/*router.get('/f', function (req, res, next) {

  const request = 'http://210.119.32.21:8070/ssss';
  const addresses = [request, request];



  let rq = new RequestQueue(1);

  rq.on('resolved', res => {
    console.log('Request completed (${res})');
    
  }).on('rejected', err => {
    console.log('2');
  }).on('completed', () => {

    console.log('Queue is empty, all requests completed.');
  });
  rq.pushAll(addresses);
});*/

//Android login POST 
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

//android register POST
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
    
//android image -> routing (post) -> YOLO 
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
    
    fs.rename('/home/helper/OpenCV_tutorial/OpenCV/opencv-3.2.0/build/darknet/predictions.jpg', '/home/helper/Desktop/LastProject/NewNode/myproject/public/images/' + fileName, function (err) {
      if (err) console.log('ERROR : ' + err);
    });

    resObj.classList = classList;
    //address input = 자기 주소 입력
    resObj.imageUrl = 'http://address input/images/' + fileName;
    console.log(resObj);
    console.log('stdout:'+stdout)
    return res.json(200, resObj);
  });
});

//android 검출된 사진을 확인 작업 후 식사기록 db save
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
      res.writeHead(300,{'Content-Type': 'text/plain'});
      res.end();
    }
  });
});



module.exports = router;
