COPY Categories(categoryId,categoryName)
FROM 'C:\Users\Sang Chun Ahn\Desktop\amazon-clone\amazon-clone\db\csv/Categories.csv' DELIMITER ',' CSV HEADER;

COPY Products(productId,productName,categoryId)
FROM 'C:\Users\Sang Chun Ahn\Desktop\amazon-clone\amazon-clone\db\csv/Products.csv' DELIMITER ',' CSV HEADER;

COPY Options(optionId,productId,optionName,optionDimensions,optionWeight,optionPrice)
FROM 'C:\Users\Sang Chun Ahn\Desktop\amazon-clone\amazon-clone\db\csv/Options.csv' DELIMITER ',' CSV HEADER;

COPY ProductImages(imageId,optionId,imageUrl)
FROM 'C:\Users\Sang Chun Ahn\Desktop\amazon-clone\amazon-clone\db\csv/ProductImages.csv' DELIMITER ',' CSV HEADER;

COPY ProductSpecs(specId,productId, specText) 
FROM 'C:\Users\Sang Chun Ahn\Desktop\amazon-clone\amazon-clone\db\csv/ProductSpecs.csv' DELIMITER ',' CSV HEADER;