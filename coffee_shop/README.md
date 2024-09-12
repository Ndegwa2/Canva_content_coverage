Coffee Shop Domain Model
This project is a Python-based domain model for a Coffee Shop. It consists of three main entities: Customer, Coffee, and Order. These entities represent the relationship between customers and the coffees they order through the Order class.

Features
Customer: A customer can place multiple orders and order different types of coffee.
Coffee: Coffee can have many orders, and different customers can order the same coffee.
Order: Links a customer to a coffee with an associated price.
Project Structure
bash
Copy code
coffee_shop/
│
├── customer.py  # Contains the Customer class
├── coffee.py    # Contains the Coffee class
├── order.py     # Contains the Order class
├── tests/       # Directory for test cases
│   ├── test_customer.py  # Test cases for Customer
│   ├── test_coffee.py    # Test cases for Coffee
│   └── test_order.py     # Test cases for Order
└── Pipfile      # Pipenv dependency management file
Installation and Setup
Clone the Repository:

bash
Copy code
git clone <your-repo-link>
cd coffee_shop
Set Up Virtual Environment: Use pipenv to create and activate a virtual environment:

bash
Copy code
pipenv install
pipenv shell
Install Dependencies: This project uses pytest for testing. Install it with:

bash
Copy code
pipenv install pytest
Usage
The main classes (Customer, Coffee, Order) are found in their respective files.
To create a new customer, coffee, and order, you can import and use the classes like this:
python
Copy code
from customer import Customer
from coffee import Coffee
from order import Order

# Creating instances
alice = Customer("Alice")
espresso = Coffee("Espresso")
order1 = alice.create_order(espresso, 5.0)

# Display information
print(f"Customer: {order1.customer.name}, Coffee: {order1.coffee.name}, Price: {order1.price}")
Running Tests
To ensure everything works as expected, run the tests with pytest:

bash
Copy code
pytest
This will run all the test cases found in the tests/ directory.

License
This project is licensed under the MIT License.

