# Just Another Text Editor (JATE)

## Description

Just Another Text Editor, or JATE, is a browser-based text editor offering developers a convenient way to jot down notes and code snippets directly within their browser, with or without an internet connection. Utilizing modern web technologies such as Progressive Web Application (PWA) standards, service workers, and IndexedDB, JATE ensures that your data is preserved and accessible across sessions. The application is designed for quick edits and supports JavaScript syntax highlighting.

## Installation

### Prerequisites
- A modern web browser with support for PWAs and service workers.
- Node.js installed on your machine for running the build scripts.

### Setup Instructions
- Clone this repository to your local machine
- Navigate to the repository directory and install dependencies:
  ```
  npm install
  ```
- Change directory to the `client` and build the application:
  ```
  npm install
  ```
- The text editor will be available in your web browser at `http://localhost:3000`.
- Type your notes or code snippets, and the application will automatically save the entries to IndexedDB.
- To install the application as a desktop PWA, use the "Install" button provided in the editor's navigation bar.

## Usage
- To start the application locally, navigate back to the root directory and run:
  ```
  npm start
  ```

## Features
- Works offline thanks to service workers and IndexedDB data persistence.
- Can be installed as a standalone application on desktop environments.
- Provides a clean, distraction-free interface for writing and saving notes or code.
- Supports syntax highlighting for JavaScript.

## Screenshot
Here's what JATE looks like in action:
![JATE Screenshot](/screenshot.JPG)

## Acknowledgements
JATE is built using [CodeMirror](https://codemirror.net/) for the text editing interface and [idb](https://www.npmjs.com/package/idb) for a simple IndexedDB interface.

## License
This project is open source and available under the [MIT License](LICENSE).
