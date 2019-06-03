var mysql = require("mysql");
// var table = require('cli-table');
var table = require("console.table");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  user: "root",

  password: "",
  database: "bamazon"

});

connection.connect(function(err,response){

  if(err) throw err;
    console.log("connected");

});


function toConsoleTable() {
  connection.connect(function(err) {
    // if (err) throw err

    connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err
    else console.table(res , "\n");
         
    productId();
    });
  });
}
toConsoleTable();


function productId() {

  inquirer.prompt([

    {
     type: "input",
     name: "id",
     message: "Please enter the Item ID of the product you would like to buy.\n",
     validate: function(value) {
      if (!isNaN(value) && value < 11) {
        return true;
      }
      return false;
     }
    },

    {
     type: "input",
     name: "quant",
     message: "How many units of the product would you like to buy? \n",
     validate: function(value) {
      if (!isNaN(value)) {
        return true;
      }
      return false;
      }
    }

    ]).then(function(answer) {

      var userId = answer.id;
      console.log("Chosen item id: " , userId);

      var userQuant = answer.quant;
      console.log("Chosen quantity from stock: " , userQuant , "\n");

      connection.query("SELECT * FROM products WHERE ?", [{ item_id : answer.id }], function(err, res) {
        if (err) throw err;
        
        
        console.table(res);
        var current_quantity = res[0].stock_quantity;
        console.log("Current quantity in stock: " , current_quantity);
        var price = res[0].price;
        var remaining_quantity = current_quantity - answer.quant;
        console.log("Remaining quantity in stock: " , remaining_quantity);

      