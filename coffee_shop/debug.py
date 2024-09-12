from customer import Customer
from coffee import Coffee

Bob = Customer("Bob")
latte= Coffee("latte")
order1 = Bob.create_order(latte, 5.0)

print(f"Customer: {order1.customer.name}, Coffee: {order1.coffee.name}, Price: {order1.price}")
