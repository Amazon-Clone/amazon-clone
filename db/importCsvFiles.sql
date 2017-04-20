COPY Products(productId,productName,productBrand, productPrime,productFreeShipping)
FROM '/home/mezka/amazon-clone/db/csv/Products.csv' DELIMITER ',' CSV HEADER;

COPY Options(optionId,productId,optionName,optionDimensions,optionWeight,optionPrice,optionLastPrice)
FROM '/home/mezka/amazon-clone/db/csv/Options.csv' DELIMITER ',' CSV HEADER;

COPY OptionSpecs(optionSpecId,optionId,optionSpecName,optionSpecText)
FROM '/home/mezka/amazon-clone/db/csv/OptionSpecs.csv' DELIMITER ',' CSV HEADER;

COPY Categories(categoryId, categoryName)
FROM '/home/mezka/amazon-clone/db/csv/Categories.csv' DELIMITER ',' CSV HEADER;

COPY SubCategories(subCategoryId, categoryId, subCategoryName)
FROM '/home/mezka/amazon-clone/db/csv/SubCategories.csv' DELIMITER ',' CSV HEADER;

COPY SubCategoryFilters(subCategoryFilterId, subCategoryId, subCategoryFilterName)
FROM '/home/mezka/amazon-clone/db/csv/SubCategoryFilters.csv' DELIMITER ',' CSV HEADER;

COPY SubCategoryFilterOptions(subCategoryFilterOptionId, subCategoryFilterId, subCategoryFilterOptionName)
FROM '/home/mezka/amazon-clone/db/csv/SubCategoryFilterOptions.csv' DELIMITER ',' CSV HEADER;

COPY ProductSubCategoryFilterOptions(productSubCategoryFilterOptionId, optionId, subCategoryFilterOptionId)
FROM '/home/mezka/amazon-clone/db/csv/ProductSubCategoryFilterOptions.csv' DELIMITER ',' CSV HEADER;

COPY OptionImages(imageId,optionId,imageUrl)
FROM '/home/mezka/amazon-clone/db/csv/OptionImages.csv' DELIMITER ',' CSV HEADER;

