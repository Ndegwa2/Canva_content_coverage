import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import pytest
from customer import Customer
from coffee import Coffee

def test_customer_name():
    Bob = Customer("Bob")
    assert Bob.name == "Bob"

    with pytest.raises(ValueError):
        Customer("")  