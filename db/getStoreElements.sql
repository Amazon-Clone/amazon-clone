SELECT DISTINCT ON(Products.productId) Products.productId, Products.categoryId, Products.productName, ProductImages.imageUrl AS productImage, Options.optionPrice AS productPrice FROM Products
JOIN Options ON Products.productId = Options.productId
JOIN ProductImages On Options.optionId = ProductImages.OptionId;
