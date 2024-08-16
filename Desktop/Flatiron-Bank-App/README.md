Bank of Flatiron This project is a React application that displays a list of recent bank transactions. The application allows users to view, add, and filter transactions.

Table of Contents Features Installation Usage Project Structure

Features Display Transactions: View a list of recent bank transactions. Add Transactions: Add new transactions to the list. Filter Transactions: Filter transactions based on the description, category, or amount. Installation

Clone the Repository: git clone git@github.com:Pauline-WN/bank-of-flatiron.git cd bank-of-flatiron

Install Dependencies: npm install

Start the Development Server: npm start

Run the JSON Server: Make sure to have the json-server running to serve the transactions data.

npx json-server --watch db.json --port 5173 Usage

Viewing Transactions: The application fetches and displays a list of transactions from the JSON server.

Adding Transactions: You can add a new transaction by filling out the form and submitting it. The new transaction will be added to the list and saved to the JSON server.

Filtering Transactions: Use the filter options to narrow down the displayed transactions based on specific criteria.

Project Structure css Copy code bank-of-flatiron/ ├── public/ ├── src/ │ ├── components/ │ │ ├── TransactionList.jsx │ │ ├── TransactionForm.jst │ ├── main.jsx │ ├── app.jsx │ └── styles.css ├── db.json ├── package.json └── README.md

components/: Contains all the React components. main.jsx: The entry point of the application. app.jsx: The root component that holds the main application logic. db.json: JSON database file for storing transactions. styles.css: CSS file for styling the application.