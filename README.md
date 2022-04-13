# A React Todo app with unit tests and integrations tests

## Tech Stack

- React (Create-React-App)
- Jest - Testing Framework
- @testing-library - Unit Testing
- @selenium-webdriver - Integration Test
- @json-server - mock DB
- @jest-fetch-mock - enables mock fetch()
- @testing-library/react-hooks - libray to test hooks

## Testing Process

### user story -> integration test -> unit tests -> implementation

1. Create a user story that describes the feature that must be implemented.
2. Create integration tests based on the user story's acceptance criteria.
3. Create unit tests based on the integration test.
4. Implement code to make unit tests pass.
5. Implement code to make integration tests pass.

## User Stories

1. A user must be able to open an app, enter the name of the task, press enter and see his task in the list of tasks.

2. A user must be able to mark any task as completed by clicking on it. He can also mark any completed task as incomplete by clicking on it. Completed tasks must have a completed CSS class.

3. A user must be able to persist tasks and their status between sessions.
