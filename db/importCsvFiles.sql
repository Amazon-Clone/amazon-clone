COPY Products(productId,productName,productBrand, productPrime,productFreeShipping)
FROM '/Users/jacobhamblin/devmtn/projects/amazon-clone-group/db/csv/Products.csv' DELIMITER ',' CSV HEADER;

COPY Options(optionId,productId,optionName,optionDimensions,optionWeight,optionPrice,optionLastPrice)
FROM '/Users/jacobhamblin/devmtn/projects/amazon-clone-group/db/csv/Options.csv' DELIMITER ',' CSV HEADER;

COPY OptionSpecs(optionSpecId,optionId,optionSpecName,optionSpecText)
FROM '/Users/jacobhamblin/devmtn/projects/amazon-clone-group/db/csv/OptionSpecs.csv' DELIMITER ',' CSV HEADER;

COPY Categories(categoryId, categoryName)
FROM '/Users/jacobhamblin/devmtn/projects/amazon-clone-group/db/csv/Categories.csv' DELIMITER ',' CSV HEADER;

COPY SubCategories(subCategoryId, categoryId, subCategoryName)
FROM '/Users/jacobhamblin/devmtn/projects/amazon-clone-group/db/csv/SubCategories.csv' DELIMITER ',' CSV HEADER;

COPY SubCategoryFilters(subCategoryFilterId, subCategoryId, subCategoryFilterName)
FROM '/Users/jacobhamblin/devmtn/projects/amazon-clone-group/db/csv/SubCategoryFilters.csv' DELIMITER ',' CSV HEADER;

COPY SubCategoryFilterOptions(subCategoryFilterOptionId, subCategoryFilterId, subCategoryFilterOptionName)
FROM '/Users/jacobhamblin/devmtn/projects/amazon-clone-group/db/csv/SubCategoryFilterOptions.csv' DELIMITER ',' CSV HEADER;

COPY ProductSubCategoryFilterOptions(productSubCategoryFilterOptionId, optionId, subCategoryFilterOptionId)
FROM '/Users/jacobhamblin/devmtn/projects/amazon-clone-group/db/csv/ProductSubCategoryFilterOptions.csv' DELIMITER ',' CSV HEADER;

COPY OptionImages(imageId,optionId,imageUrl)
FROM '/Users/jacobhamblin/devmtn/projects/amazon-clone-group/db/csv/OptionImages.csv' DELIMITER ',' CSV HEADER;

