# Bamazon

Overview

In this activity, I'll be creating an Amazon-like storefront with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory. The app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.



Customer View


I will Create a MySQL Database called bamazon with the following sql schema
Then create a Table inside of that database called products.
The products table will have each of the following columns:

item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)

Populate this database with around 6 to 10 different products. (i.e. Insert "mock" data rows into this database and table).
Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.

The first will ask them the ID of the product they would like to buy.
The second message will ask how many units of the product they would like to buy.



Once the customer has placed the order, the application will check if the store has enough of the product to meet the customer's request.

If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.

However, if thr store does have enough of the product, it will fulfill the customer's order.


Also, the SQL database will be updated to reflect the remaining quantity.
Once the update goes through, the app will show the customer the total cost of their purchase.

