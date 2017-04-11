DROP TABLE IF EXISTS Public.Products, Public.Options, Public.OptionSpecs, Public.OptionImages, Public.Users, Public.Addresses, Public.Carts, Public.CartItems,Public.Passwords, Public.Categories, Public.SubCategories, Public.SubCategoryFilters, SubCategoryFilterOptions, ProductSubCategoryFilterOptions CASCADE;


CREATE TABLE  Public.Products(
  productId SERIAL PRIMARY KEY,
  productName VARCHAR(100) NOT NULL,
  productBrand VARCHAR(60) NOT NULL,
  productPrime BOOLEAN DEFAULT FALSE,
  productFreeShipping BOOLEAN DEFAULT FALSE
);

CREATE TABLE Public.Options(
  optionId SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES Public.Products(productId),
  optionName VARCHAR(50),
  optionDescription VARCHAR(300),
  optionDimensions VARCHAR(100),
  optionWeight VARCHAR(50),
  optionPrice FLOAT,
  optionLastPrice FLOAT
);

CREATE TABLE Public.OptionSpecs(
    optionSpecId SERIAL PRIMARY  KEY,
    optionId INTEGER REFERENCES Public.Options,
    optionSpecName VARCHAR(60) NOT NULL,
    optionSpecText VARCHAR(60) NOT NULL
);

CREATE TABLE Public.OptionImages(
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

CREATE TABLE Public.Categories(
  categoryId SERIAL PRIMARY KEY,
  categoryName VARCHAR(60) NOT NULL
);

CREATE TABLE Public.SubCategories(
  subCategoryId SERIAL PRIMARY KEY,
  categoryId INTEGER REFERENCES Public.Categories(categoryId),
  subCategoryName VARCHAR(60) NOT NULL
);

CREATE TABLE Public.SubCategoryFilters(
  subCategoryFilterId SERIAL PRIMARY KEY,
  subCategoryId INTEGER REFERENCES Public.SubCategories(subCategoryId),
  subCategoryFilterName VARCHAR(60) NOT NULL
);

CREATE TABLE Public.SubCategoryFilterOptions(
  subCategoryFilterOptionId SERIAL PRIMARY KEY,
  subCategoryFilterId INTEGER REFERENCES SubCategoryFilters(subCategoryFilterId),
  subCategoryFilterOptionName VARCHAR(60) NOT NULL
);

CREATE TABLE Public.ProductSubCategoryFilterOptions(
  productSubCategoryFilterOptionId SERIAL PRIMARY KEY,
  optionId INTEGER REFERENCES Options(optionId),
  subCategoryFilterOptionId INTEGER REFERENCES SubCategoryFilterOptions(subCategoryFilterOptionId)
);
