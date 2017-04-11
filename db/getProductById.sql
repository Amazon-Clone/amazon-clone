SELECT Options.optionId, Products.productName, Options.optionName, Products.productBrand, Products.productprime, Products.productfreeShipping, json_agg(OptionImages.imageUrl) AS imageUrls, Options.optionDimensions, Options.optionWeight, Options.optionPrice FROM Products
INNER JOIN Options ON Options.productId = Products.productid
RIGHT JOIN OptionImages ON OptionImages.optionId = Options.optionId
WHERE Products.productId = $1
GROUP BY Options.optionId, Products.productName , Products.productBrand, Products.productprime, Products.productfreeShipping, Options.optionName, Options.optionDimensions, Options.optionWeight, Options.optionPrice;
