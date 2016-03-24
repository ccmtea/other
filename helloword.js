// var http = require("http");

// http.createServer(function(request,response){

// 	response.writeHead(200,{"content-type":"text/plain"});

// 	response.end("hello word\n");


// }).listen(8585);

// console.log("server running at http://127.0.0.1:8585");


// var fs = require("fs");

// var date = fs.readFileSync("input.txt");

// console.log(date.toString());
// console.log("程序执行结束");


// fs.readFile("input.txt",function(err,date){
// 	if(err) return console.error(err);
// 	console.log(date.toString());
// })
// console.log("程序执行结束");


var events = require("events");

var eventEmitter = new events.EventEmitter();


var connerHandler = function connectes(){
	console.log("连接成功");

	eventEmitter.emit("date_received");
}

eventEmitter.on("connection",connerHandler);

eventEmitter.on("date_received",function(){
	console.log("数据接收成功");
});

eventEmitter.emit("connection");

console.log("程序执行完毕");
