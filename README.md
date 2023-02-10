# Medical Bill API

This is a RESTful API implemented using Node.js and Express framework. It provides two endpoints for creating and retrieving medical bills.

## Endpoints

- `GET /bills`: returns a list of medical bills
- `POST /bills`: creates a new medical bill

A medical bill has the following properties:

- patient name and address
- the hospital name
- date of service
- bill amount.

Both endpoints accept and return JSON.

## Getting Started

Follow the instructions below to set up the application on your local machine.

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies: `npm install`
4. Start the server: `npm start`
5. The API should now be available at `http://localhost:3000/`.

## Running the tests

The tests can be run by executing the following command: `npm test`

## Validation

The inputs are validated before creating a new medical bill. The following validation rules are applied:

- Patient name and address must be a string
- Hospital name must be a string
- Date of service must be a valid date in the format `YYYY-MM-DD`
- Bill amount must be a number.
