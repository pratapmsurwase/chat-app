var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});
socket.emit('createMessage' , {
  to: 'Swati Salunke',
  text: 'hi i l love you FFF mmmm'
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});
socket.on('newMessagenew', function  (message) {
  console.log('New Email arrived', message);
});
