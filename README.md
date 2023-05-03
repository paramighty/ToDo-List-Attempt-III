# ToDo-List-Attempt-III

The To-Do List Attempt III is a simple web application for managing a to-do list. This was done by following an youtube video by "Code with Ania Kubów". Users can add new tasks, edit existing tasks, and delete tasks that have been completed. The app is built with a React front-end and an Express back-end connected to a PostgreSQL database. 


## Installation

1. Clone the repository: `git clone https://github.com/paramighty/To-Do-List-Attempt-III.git`
2. Navigate to the project directory: `cd ToDo-List-Attempt-III`
3. Install dependencies: `npm install`
4. Create a PostgreSQL database named `todos` and import the `todos.sql` file to create the necessary table.
5. Start the server: `npm run dev`
6. Open the app in your browser at `http://localhost:3000/`

## Usage

1. Add a new task by clicking the "ADD NEW TASK" button in the top right corner of the page. Enter the title and date of the task and click "ADD TASK" to save it to the list.
2. Edit an existing task by clicking the task's title. The task's details will appear in a modal window. Make any necessary changes and click "SAVE" to update the task.
3. Delete a task by clicking the red "X" button next to the task's title.

## Contributing

Contributions to the To-Do List Attempt III project are welcome. To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b my-new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE.md](https://github.com/paramighty/To-Do-List-Attempt-III/blob/master/LICENSE.md) file for details.
