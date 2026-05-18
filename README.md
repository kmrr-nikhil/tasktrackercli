# Task Tracker CLI

A simple command-line tool to manage your tasks and to-do list.

## Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/kmrr-nikhil/tasktrackercli.git
    cd tasktrackercli
    ```
2. **Install dependencies**
    ```sh
    npm install
    ```
3. **Make the CLI script executable**
    ```sh
    chmod +x task-cli.mjs
    ```

4. **Install the CLI globally**
    ```sh
    npm link
    ```

## Usage

- **Add a task**
    ```sh
    task-cli add "Add todo"
    ```

## Uninstall

To remove the CLI from global commands(run this inside the project folder):
```sh
npm unlink -g
```

---

**Requirements:**  
- Node.js and npm installed

---