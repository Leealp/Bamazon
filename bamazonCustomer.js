var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err){
	if (err) throw err;
	console.log("connected");

	bamazonSearch()
})


function bamazonSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Hi! Welcome to bamazon shoping. Your all you can do online shopsmart?\n Below is the list of all we have in stock",
      choices: [
        "1 diaper for $35",
        "1 painting for $99",
        "1 mower for $299",
        "1 tire for $89",
        "1 pant for $49",
        "1 skirt for $29",
        "exit"
      ]
    })
    
}























