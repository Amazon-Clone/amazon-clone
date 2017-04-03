# Backend Documentation
-----

### Getting started

[Download the API keys from here](https://1drv.ms/u/s!Arz535PAeGSPi1uHUVOwCcrlicP5) and put them in the root directory of the project, else your server is going to break.

#### Database Schema

[Look at it here](https://docs.google.com/spreadsheets/d/1MOU5i_0gW8ZiNDcIywBifLRpmRNgk3MzCFZ6LkPxO9c/edit#gid=0)

##### What are the required and default values for each field?

You are going to need to read the ``createTables.sql`` file for that one.

### Where do we run the database?

Even though the original idea was to do development in **ElephantSQL** I found that the best thing for testing the server was to run a local instance because there's no way to quickly populate the database from `.csv` files into **ElephantSQL**, once we are done with the server work, then we can easily switch the connection string from `connectionStringLocal` to `connectionStringElephant` in index.js as I left the two of them in `index.js` and the **ElephantSQL** instance is already set up.

So, in short we develop locally and we deploy the release version to **ElephantSQL**.

Take into acount that when you git clone the repo you should create a new local database and modify `connectionStringLocal` in order to reference it.

### Loading the database schema

To load the database schema you need to run the `createTables.sql` query on the new database using pgAdmin execute query tool.


### Preparing dummy data
You can load dummy data on the db_schema.ods speadsheet file, once you are done inputing the data you should run the `ods_to_csv.js` script like this:

```bash
nodejs ods_to_csv.js
```

Running this script will output each of the sheets of the spreadsheet as a separate .csv file in `./db/csv`

### Loading the .csv files into the database

To load the `.csv` files into the database you need to run the `importCsvFiles.sql` query using pgAdmin execute query tool, but first you are going to need to modify the paths in that query to the ones in your computer because SQL queries only take absolute paths.

```sql
COPY Categories(categoryId,categoryName)
FROM '/home/mezka/amazon-clone/db/csv/Categories.csv' DELIMITER ',' CSV HEADER;

--You should change each of the filepaths to mirror the location of the files in your computer
```

### Wait, then how are we going to load the dummy data into ElephantSQL once we are done developing?

We are going to use this online [CSV to SQL Converter](http://www.convertcsv.com/csv-to-sql.htm)

## API reference
----

#### Auth endpoints

**POST**
`/api/register`

With data object embedded as follows:
```javascript
data:{
    useremail: 'emiliano_mesquita@hotmail.com',
    userfirstname: 'Emiliano',
    userlastname: 'Mesquita'
}
```

Registers a new user in the database.

**POST**
``/api/login``

With data object embedded as follows:
```javascript
data:{
    useremail: 'emiliano_mesquita@hotmail.com',
    userpassword: 'putoelquelee'
}
```

Attempts to login the user using ``useremail`` and ``userpassword``

**POST**
``/api/logout``

With no data object, logs out the user from session.

##### Store endpoints
`/api/store`

Gets all store products

```javascript
[
  {
    "productid": 1,
    "categoryid": 1,
    "productname": "Alpine Swiss Mens Wallet Leather Money Clip Thin Slim Front Pocket Wallet",
    "productimage": "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_1.jpg",
    "productprice": 11.99
  }
]
```

##### Product endpoints

`/api/product/:productId`
Gets all product options as an array.

```javascript
[
  {
    "optionid": 1,
    "productname": "Alpine Swiss Mens Wallet Leather Money Clip Thin Slim Front Pocket Wallet",
    "optionname": "Crosshatch Black",
    "imageurls": [
      "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_1.jpg",
      "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_2.jpg",
      "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_3.jpg",
      "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_4.jpg",
      "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_5.jpg",
      "https://s3-us-west-1.amazonaws.com/amazon-clone/1_1_6.jpg"
    ],
    "optiondimensions": "4\" x 2 7/8\" x 3/8\"",
    "optionweight": "0.3 ounces",
    "optionprice": 11.99
  },
...
]
```

#### Cart endpoints

**GET**
`/api/cart`

Gets items in cart (session).

```javascript
data: {
    tempid: 3,
    productid: 1,
    optionid: 2,
    quantity: 1,
    discount: 0
}
```

The `tempid` property provides a mean to uniquely address a **cartItem** in session.

We will use the `tempid` to update or delete **cartItems** in session.

**POST**
`/api/cart` 

With data object embedded as follows:
```javascript
data: {
    productid: 1,
    optionid: 2,
    quantity: 1,
    discount: 0
}
```

Adds an item to cart.

**POST**
`/api/cart/checkout`

With no data object; creates a new cart in the ``Carts`` table, and creates as many **cartItems** as needed in the ``CartItems`` table referencing the new entry in ``Carts``.

Note that at this stage the order hasn't still been payed for.

**POST**
``/api/cart/clear``

With no data object; clears the cart that is currently in session.

**POST**
``/api/cart/delete``

With data object embedded as follows:
```javascript
data: {
    tempid: 4
}
```

Deletes a **cartItem** from session

**POST**
``/api/cart/update``

With data object embedded as follows:
```javascript
data: {
    tempid: 4,
    quantity: 5
}
```
Updates the quantity of a **cartItem** in session

#### Payment endpoint
**POST**
``/api/cart/charge``

With data object embedded as follows
```javascript
data: {
    cardnumber: 4242424242424242,
    exp_month: 12,
    exp_year: 2018,
    cvc: 123
}
```

Calls stripe API to charge the current cart (in Session) amount.