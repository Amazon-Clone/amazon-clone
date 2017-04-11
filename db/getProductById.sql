SELECT Options.optionId, Products.productName, Options.optionName, Products.prime, Products.freeShipping, json_agg(ProductImages.imageUrl) AS imageUrls, Options.optionDimensions, Options.optionWeight, Options.optionPrice FROM Products
INNER JOIN Options ON Options.productId = Products.productid
RIGHT JOIN ProductImages ON ProductImages.optionId = Options.optionId
WHERE Products.productId = $1
GROUP BY Options.optionId, Products.productName , Products.prime, Products.freeShipping, Options.optionName, Options.optionDimensions, Options.optionWeight, Options.optionPrice;
