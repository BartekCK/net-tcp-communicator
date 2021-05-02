# Net-tcp-communicator

Server app for TCP connections.<br/><br/>
App is like a chat for connected clients. When new client come in, server create random Id and username for identification. If user write a message and send it (by `enter` click), message will be sent to all hosts connected to server at this time.
<br/>
Application use Node.js `net` module for this kind of connections.

# Example 

In example below I use netcat tool and treat it as a single client.
![example](/assets/result.gif)


## Command for client connect
```bash
nc localhost 8080
```

# How to run

You can run app on your host by Node.js and npm or use docker-compose. Application will expose on `8080` port.

## Run by Node.js and npm

In root file use commands

```bash
npm install
npm start
```

## Run by docker-compose

```bash
docker-compose up
```


# Requirements
- Node.js >= 10.0
- npm >= 6.0
