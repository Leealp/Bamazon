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
      name: "first",
      type: "list",
      message: "Hi! Welcome to bamazon shoping. Your all you can do online shopsmart?\n Below is the list of all we have in stock\n please tell me the ID of the product you would like to buy",
      choices: [
        "1 diaper for $35",
        "2 painting for $99",
        "3 mower for $299",
        "4 tire for $89",
        "5 pant for $49",
        "6 skirt for $29",
        "exit"
      ]
    })
    .then(function(answer){
    	switch(answer.first){
    		case "1 diaper for $35":
    		case "2 painting for $99":
    		case "3 mower for $299":
    		case "4 tire for $89":
    		case "5 pant for $49":
    		case "6 skirt for $29":
    		quantity();
    		break;

    		 case "exit":
        	connection.end();
       		break;
    	}
    	
    });
    
}

function quantity(){
  inquirer
  	.prompt({
  		name: "second",
  		type: "input",
  		message:"how many would you like to buy?",
  		

  	})
  	.then(function(answer){




  	})

}























