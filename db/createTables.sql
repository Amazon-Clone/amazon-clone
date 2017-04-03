DROP TABLE IF EXISTS Public.Categories, Public.Products, Public.Options, Public.ProductSpecs, Public.ProductImages, Public.Users, Public.Carts, Public.CartItems,Public.Passwords, Public.Addresses CASCADE;


CREATE TABLE Public.Categories(
  categoryId SERIAL PRIMARY KEY,
  categoryName VARCHAR(100) NOT NULL
);

CREATE TABLE  Public.Products(
  productId SERIAL PRIMARY KEY,
  productName VARCHAR(100) NOT NULL,
  categoryId INTEGER REFERENCES Public.Categories(categoryId)
);

CREATE TABLE Public.Options(
  optionId SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES Public.Products(productId),
  optionName VARCHAR(50),
  optionDescription VARCHAR(300),
  optionDimensions VARCHAR(100),
  optionWeight VARCHAR(50),
  optionPrice FLOAT
);

CREATE TABLE Public.ProductSpecs(
    specId SERIAL PRIMARY  KEY,
    productId INTEGER REFERENCES Public.Options,
    specText VARCHAR(100)
);

CREATE TABLE Public.ProductImages(
  imageId SERIAL PRIMARY KEY,
  optionId INTEGER REFERENCES Public.Options(optionId),
  imageUrl VARCHAR(100)
);

CREATE TABLE Public.Users(
  userId SERIAL PRIMARY KEY,
  userEmail VARCHAR(60) NOT NULL,
  userFirstName VARCHAR(50) NOT NULL,
  userLastName VARCHAR(50) NOT NULL
);

CREATE TABLE Public.Addresses(
  addressId SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES Public.Users(userId),
  recipientFirstName VARCHAR(50) NOT NULL,
  recipientLastName VARCHAR(50) NOT NULL,
  userAddress1 VARCHAR(80) NOT NULL,
  userAddress2 VARCHAR(80) NOT NULL,
  zipCode VARCHAR(20) NOT NULL
);

CREATE TABLE Public.Carts(
  cartId SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES Public.Users(userId),
  createdDate timestamptz NOT NULL DEFAULT now(),
  checkedOut BOOLEAN DEFAULT FALSE
);

CREATE TABLE Public.CartItems(
  cartElementId SERIAL PRIMARY KEY,
  cartId INTEGER REFERENCES Public.Carts(cartId) NOT NULL,
  productId INTEGER REFERENCES Public.Products(productId) NOT NULL,
  optionId INTEGER REFERENCES Public.Options(optionId) NOT NULL,
  quantity INTEGER NOT NULL,
  discount INTEGER DEFAULT 0,
  savedForLater BOOLEAN DEFAULT FALSE
);

CREATE TABLE Public.Passwords(
    passwordId SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES Public.Users(userId),
    passwordHash VARCHAR(60) UNIQUE
);
