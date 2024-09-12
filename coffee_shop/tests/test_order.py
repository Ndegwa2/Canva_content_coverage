import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import pytest
from order import Order
from customer import Customer
from coffee import Coffee

def test_order():
    Bob = Customer("Bob")
    latte = Coffee("Latte")
    order = Order(Bob, latte, 5.0)

    assert order.customer == Bob
    assert order.coffee == latte
    assert order.price == 5.0

    with pytest.raises(ValueError):
        Order(Bob, latte, 0)  