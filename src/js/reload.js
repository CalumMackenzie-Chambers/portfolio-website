let socket;

function connect() {
  socket = new WebSocket('ws://localhost:8080');
  socket.onmessage = (message) => {
    if (message.data === 'reload') {
      window.location.reload();
    }
  };
}

connect()
