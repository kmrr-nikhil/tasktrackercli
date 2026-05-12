# Task Tracker CLI

A simple command-line tool to manage your tasks and to-do list.

## Installation

1. **Clone the repository**
    ```sh
    git clone https://github.com/kmrr-nikhil/tasktrackercli.git
    cd tasktrackercli
    ```

2. **Make the CLI script executable**
    ```sh
    chmod +x task-cli.js
    ```

3. **Install the CLI globally**
    ```sh
    npm link
    ```

## Usage

- **Add a task**
    ```sh
    task-cli add "Buy groceries"
    ```

- **Delete a task**
    ```sh
    task-cli delete 1
    ```

## Uninstall

To remove the CLI from global commands:
```sh
npm unlink -g
```

---

**Requirements:**  
- Node.js and npm installed

---

Feel free to expand this README with more commands and project details!