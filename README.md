# Real-Time Cursor Collaboration Application

This application enables real-time mouse cursor collaboration among connected clients using WebSockets. Users can see each other's cursors in real-time, making it suitable for collaborative tools or shared environments.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#Usage)
- [Main Client File](#main-client-file)
- [Contributing](#contributing)
- [License](#license)

## Features

- Real-Time mouse cursor tracking
- Automatic removal of disconnected clients' cursors
- Basic logging functionality for debugging

## Technologies Used

- Node.js
- Express
- WebSocket (ws)
- HTML/CSS/JavaScript for the front-end

## Getting Started

To get a copy of this application up and running on your local machine for local development and testing purposes, follow these steps.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clonse this repo**:

`git clone <repo-url>`
`cd <repo-name>`

2. **Install the dependencies**:
   `npm install`

3. **Run the server**:
   `cd server && npm start`
   This will start the Express server on `http://localhost:3001`.

4. **Open your browser**:
   Navigate to `http://localhost:3001` to view the application. Open multiple tabs or different browsers to test the real-time cursor collaboration feature.

## Usage

Once the application is running, you can:

- Move your mouse around the window to see your cursor.
- Open multiple browser windows or tabs to see the cursors of other connected clients.
- Each client will see other client's cursors with non-unique colors.

### Main Client File

The main client file for the application is located at `client/index.html`. Make sure to navigate there to see the real-time collaboration in action.

### Logging

To enable detailed logging, modify the `isProduction` constant in the client code to `false` during development.

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to add new features, feel free to create an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Push to the branch.
5. Create a new pull request.

## Licence

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
