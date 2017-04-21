DROP TABLE IF EXISTS Public.Products, Public.Options, Public.OptionSpecs, Public.OptionImages, Public.Users, Public.Addresses, Public.Carts, Public.CartItems,Public.Passwords, Public.Categories, Public.SubCategories, Public.SubCategoryFilters, SubCategoryFilterOptions, ProductSubCategoryFilterOptions CASCADE;


CREATE TABLE  Public.Products(
  productId SERIAL PRIMARY KEY,
  productName VARCHAR(100) NOT NULL,
  productBrand VARCHAR(60) NOT NULL,
  productPrime BOOLEAN DEFAULT FALSE,
  productFreeShipping BOOLEAN DEFAULT FALSE
);

INSERT INTO Public.Products (productId, productName, productBrand, productPrime, productFreeShipping) VALUES
(1, 'VIZIO D24-D1 D-Series Class LED Smart TV', 'VIZIO', 'false', 'false'),
(2, 'TCL 32S305 720p Roku Smart LED TV', 'TCL', 'false', 'false');


CREATE TABLE Public.Options(
  optionId SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES Public.Products(productId),
  optionName VARCHAR(50),
  optionDimensions VARCHAR(100),
  optionWeight VARCHAR(50),
  optionPrice FLOAT,
  optionLastPrice FLOAT
);

INSERT INTO Public.Options ( optionId, productId, optionName, optionDimensions, optionWeight, optionPrice, optionLastPrice) VALUES
(1, 1, '24-inch', '4 x 2 7/8 x 3/8', '10.3 pounds', 128.99, 159.99),
(2, 2, '28-inch', '25.3 x 15.1 x 3.2', '7.5 pounds', 159.99, 189.99),
(3, 2, '32-Inch', '28.9 x 17.1 x 3.2', '9.9 pounds', 169.99, 199.99),
(4, 2, '40-inch', '36.6 x 21.1 x 2.9', '14.6 pounds', 269.99, 289.99),
(5, 2, '43-inch', '38.3 x 22.2 x 2.9', '16.8 pounds', 319.99, 319.99),
(6, 2, '49-inch', '43.7 x 27.3 x 3', '25.4 pounds', 379.99, 379.99);

CREATE TABLE Public.OptionSpecs(
    optionSpecId SERIAL PRIMARY  KEY,
    optionId INTEGER REFERENCES Public.Options,
    optionSpecName VARCHAR(60) NOT NULL,
    optionSpecText VARCHAR(60) NOT NULL
);

INSERT INTO Public.OptionSpecs (optionSpecId, optionId, optionSpecName, optionSpecText) VALUES
(1, 1, 'Display Size:', '24 inches'),
(2, 1, 'Resolution:', '1080P'),
(3, 1, 'Refresh Rate:', '60hz'),
(4, 1, 'Display Technology:', 'LED'),
(5, 2, 'Display Size:', '28 inches'),
(6, 2, 'Resolution:', '720p'),
(7, 2, 'Connectivity Technology:', 'Built-in Wi-Fi'),
(8, 2, 'Model Year:', '2017'),
(9, 2, 'Refresh Rate:', '60 hertz'),
(10, 3, 'Display Size:', '32 inches'),
(11, 3, 'Resolution:', '720p'),
(12, 3, 'Connectivity Technology:', 'Built-in Wi-Fi'),
(13, 3, 'Model Year:', '2017'),
(14, 3, 'Refresh Rate:', '60 hertz');

CREATE TABLE Public.OptionImages(
  imageId SERIAL PRIMARY KEY,
  optionId INTEGER REFERENCES Public.Options(optionId),
  imageUrl VARCHAR(100)
);

INSERT INTO Public.OptionImages (imageId, optionId, imageUrl) VALUES
(1, 1, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/vizio-d24/31GRospKCbL.jpg'),
(2, 1, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/vizio-d24/31HIEXR0bpL.jpg'),
(3, 1, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/vizio-d24/31HjYucEFFL.jpg'),
(4, 1, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/vizio-d24/31MP%2B6aeryL.jpg'),
(5, 1, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/vizio-d24/31h1W-nI2mL.jpg'),
(6, 1, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/vizio-d24/41FsuaBZFBL.jpg'),
(7, 1, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/vizio-d24/51sk7lzedpL.jpg'),
(8, 2, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-28/31GRospKCbL.jpg'),
(9, 2, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-28/31HIEXR0bpL.jpg'),
(10, 2, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-28/31HjYucEFFL.jpg'),
(11, 2, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-28/31HjYucEFFL.jpg'),
(12, 2, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-28/31MP%2B6aeryL.jpg'),
(13, 2, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-28/41FsuaBZFBL.jpg'),
(14, 2, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-28/51sk7lzedpL.jpg'),
(15, 3, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-32/31GRospKCbL.jpg'),
(16, 3, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-32/31GRospKCbL.jpg'),
(17, 3, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-32/31GRospKCbL.jpg'),
(18, 3, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-32/31GRospKCbL.jpg'),
(19, 3, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-32/31GRospKCbL.jpg'),
(20, 3, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-32/31GRospKCbL.jpg'),
(21, 3, 'https://s3-us-west-1.amazonaws.com/amazon-clone/product_images/tcl-32/31GRospKCbL.jpg');

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

INSERT INTO Public.Categories (categoryId, categoryName) VALUES 
('1','Electronics');

CREATE TABLE Public.SubCategories(
  subCategoryId SERIAL PRIMARY KEY,
  categoryId INTEGER REFERENCES Public.Categories(categoryId),
  subCategoryName VARCHAR(60) NOT NULL
);

INSERT INTO Public.SubCategories (subCategoryId, categoryId, subCategoryName) VALUES
(1, 1, 'Televisions');

CREATE TABLE Public.SubCategoryFilters(
  subCategoryFilterId SERIAL PRIMARY KEY,
  subCategoryId INTEGER REFERENCES Public.SubCategories(subCategoryId),
  subCategoryFilterName VARCHAR(60) NOT NULL
);

INSERT INTO Public.SubCategoryFilters (subCategoryFilterId, subCategoryId, subCategoryFilterName) VALUES
(1, 1, 'TV Display Size'),
(2, 1, 'Television Resolution'),
(3, 1, 'Electronics Device Model Year'),
(4, 1, 'Television Feature'),
(5, 1, 'Certification'),
(6, 1, 'Brand'),
(7, 1, 'Supported Internet Services'),
(8, 1, 'Television Screen Type'),
(9, 1, 'Intended Display Use'),
(10, 1, 'Frustration Free Packaging');

CREATE TABLE Public.SubCategoryFilterOptions(
  subCategoryFilterOptionId SERIAL PRIMARY KEY,
  subCategoryFilterId INTEGER REFERENCES SubCategoryFilters(subCategoryFilterId),
  subCategoryFilterOptionName VARCHAR(60) NOT NULL
);


INSERT INTO Public.SubCategoryFilterOptions (subCategoryFilterOptionId, subCategoryFilterId, subCategoryFilterOptionName ) VALUES
(1, 1, '32 inches and under'),
(2, 1, '33 to 43 inches'),
(3, 1, '44 to 49 inches'),
(4, 1, '50 to 59 inches'),
(5, 1, '60 to 69 inches'),
(6, 1, '70 inches and up'),
(7, 2, '4K Ultra HD'),
(8, 2, '1080p'),
(9, 2, '1080i'),
(10, 2, '760p'),
(11, 2, '760i'),
(12, 2, '720p'),
(13, 2, '720i'),
(14, 2, '480p'),
(15, 2, '480i'),
(16, 3, '2016'),
(17, 3, '2015'),
(18, 3, '2014'),
(19, 3, '2013'),
(20, 3, '2012'),
(21, 3, '2011'),
(22, 3, '2010'),
(23, 3, '2009'),
(24, 3, '2008'),
(25, 3, '2007'),
(26, 3, '2006'),
(27, 3, '2005'),
(28, 4, '3D'),
(29, 4, 'Smart TV'),
(30, 5, 'Energy Star'),
(31, 6, 'Samsung'),
(32, 6, 'TCL'),
(33, 6, 'LG Electronics'),
(34, 6, 'VIZIO'),
(35, 6, 'Element'),
(36, 6, 'Sony'),
(37, 6, 'Sceptre'),
(38, 6, 'Aver'),
(39, 6, 'Upstar'),
(40, 6, 'Hisense'),
(41, 6, 'Supersonic'),
(42, 7, 'Netflix'),
(43, 7, 'Youtube'),
(44, 7, 'Pandora'),
(45, 7, 'Vudu'),
(46, 7, 'Amazon Instant Video'),
(47, 7, 'HULU'),
(48, 8, 'Flat'),
(49, 8, 'Curved'),
(50, 9, 'Home Entretainment'),
(51, 9, 'Commercial Signage'),
(52, 10, 'Frustration Free Packaging');

CREATE TABLE Public.ProductSubCategoryFilterOptions(
  productSubCategoryFilterOptionId SERIAL PRIMARY KEY,
  optionId INTEGER REFERENCES Options(optionId),
  subCategoryFilterOptionId INTEGER REFERENCES SubCategoryFilterOptions(subCategoryFilterOptionId)
);

INSERT INTO Public.ProductSubCategoryFilterOptions (productSubCategoryFilterOptionId, optionId, subCategoryFilterOptionId) VALUES
(1, 1, 1),
(2, 1, 8),
(3, 1, 22),
(4, 2, 1),
(5, 2, 8),
(6, 2, 29),
(7, 3, 1),
(8, 3, 8),
(9, 3, 29);