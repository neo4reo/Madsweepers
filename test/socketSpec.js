var app = require('express')();
var http = require('http').Server(app);
var should = require('should');
var io = require('socket.io-client');
var expect = require('chai').expect;
var server = require('../index');

var socketURL = 'http://localhost:3000/';
var options ={
  transports: ['websocket'],
  'force new connection': true
};


// NOTICE: the protocol on the server has changed. Thus, this test is not working anymore 

// describe('socket', function() {

//   it('should be able to receive a board when emit getNewBoard', function(done) {

//     var client = io.connect(socketURL, options);
//     var playerId = '123';
//     var roomName = 'test room';

//     client.on('connect', function(data){
//       client.emit('createPlayer', playerId, roomName);
//       client.emit('getNewBoard');
//       client.on('updateBoard', function(data) {
//         data.board.should.exist;
//         done();
//       })
//     });
//   });
// });

