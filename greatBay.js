require("dotenv").config();

var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: process.env.DB_Password,
    database: "greatBay_db"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected at id "+connection.threadId);
    signIn();
    userPrompt();
});

function userPrompt(){
    inquirer.prompt([
        {
            type: "list",
            message: "Please select between the following:",
            choices: ["POST", "BID", "SEARCH", "EXIT"],
            name: "choices"
        }
    ]).then(function(res){
        if(res.choices === "POST"){
            postItem();
        }else if(res.choices === "BID"){
            bidItem();
        }else if(res.choices === "SEARCH"){
            searchanItem();
        }else{
            console.log("See ya!");
            connection.end();
        }
    });
}

function postItem(){
    inquirer.prompt([
        {
            type: "input",
            message: "What item would you like to post?",
            name: "name"
        },
        {
            type: "input",
            message: "What category is this item?",
            name: "cat"
        },
        {
            type: "number",
            message: "How much is the opening bid for this item?",
            name: "bid"
        }
    ]).then(function(res){
        connection.query(
            "INSERT INTO products SET ?",
            {
                name: `"${res.name}"`,
                category: `"${res.cat}"`,
                bid: res.bid
            }, function(err, resp){
                if (err) throw err;
                console.log(`Post successful! ${resp.affectedRows} products inserted!\n`);
                userPrompt();
            }
        );
    });
}

function bidItem(){
    console.log("Under construction");
    userPrompt();
}


function signIn() {
    inquirer.prompt([
        {
            type: "input",
            message: "Username: ",
            name: "username"
        },
        {
            type: "password",
            message: "Password: ",
            name: "password"
        }
    ]);
}

function searchItem(){
    inquirer.prompt([
        {
            type: "input",
            message: "Search an item by name or username: ",
            name: "searchedItem"
        }
    ]).then(function(res){
        connection.query("SELECT * FROM products",
        for (var i = 0; i < poducts.length; i++){
            if (searchedItem === products.name || searchedItem === products.category){
                console.log("Item: ", products.name, "Current Bid: ", products.bid)
            }
        })
        function(err, res) {
            if (err) throw err;
            console.log("Search Results: ", res.affectedRows)};
        });
    }