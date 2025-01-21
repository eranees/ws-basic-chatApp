# Chat Application

This project is a simple chat application built with HTML, CSS, JavaScript, and Node.js. It demonstrates real-time communication using WebSockets, powered by the socket.io library.

## Features

* Two Separate Message Windows:

    * Sender Messages appear in the right-aligned window with a blue text color.

    * Receiver Messages appear in the left-aligned window with a green text color.

* Real-Time Communication: Messages are broadcasted in real-time between connected clients.

* Scrollable Message Sections: Both sender and receiver message windows are scrollable, allowing users to see all messages.

## How It Works

1. Client-Side Behavior:

    * Users can type messages into an input box and send them using the "Send" button.
  
    * Sent messages are immediately displayed in the sender's message window (#sender-msg).
  
    * The message is then sent to the server using WebSockets.
  
    * Messages received from other clients are displayed in the receiver's message window (#receiver-msg).

2. Server-Side Behavior:

    * The server listens for incoming messages from clients.
  
    * It broadcasts each received message to all connected clients, including the sender.
  
    * The socket.id is used to differentiate between the sender and other clients, ensuring that messages are displayed in the correct window.

## Code Structure

### Frontend

  * HTML: Provides the structure for the message sections, input box, and send button.
  
  * CSS: Styles the sender and receiver message windows for visual distinction and ensures responsiveness.

  * JavaScript: Handles WebSocket communication and dynamically updates the message sections.

### Backend

  * Express.js: Serves the static files and manages HTTP requests.

  * Socket.IO: Handles WebSocket connections and facilitates real-time communication.

## Usage

  * Open the application in a browser.
  
  * Type a message in the input box and click the "Send" button.
  
  * Observe the message appear in the sender's window and broadcast to other connected clients in their receiver window.

## Example Interaction

1. User A sends a message:

    * The message appears in their sender window.
    
    * The message is broadcast to all other users.

2. User B receives the message:

    * The message appears in their receiver window.

This simple setup provides the foundation for a real-time chat system, showcasing the power of WebSocket communication.
