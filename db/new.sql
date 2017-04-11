SELECT secondSubQuery.productId, secondSubQuery.productName, secondSubQuery.productPrime, secondSubQuery.productFreeShipping, json_agg(ProductImages.imageUrl) as productImages, secondSubQuery.productSpecText, secondSubQuery.categoryName AS productCategory, secondSubQuery.subCategoryName AS productSubCategory, secondSubQuery.subCategoryFilterOptions AS productFilterOptions, Options.optionPrice AS productPrice, Options.optionLastPrice AS productLastPrice FROM

(SELECT productId, productName, productPrime, productFreeShipping, jsonb_agg(productSpecText ORDER BY productSpecText) AS productSpecText, categoryName, subCategoryName, subCategoryFilterOptions FROM

(SELECT Products.productId, Products.productName, Products.productPrime, Products.productFreeShipping, ProductSpecs.productSpecText, Categories.categoryName, SubCategories.subCategoryName, jsonb_object_agg(SubCategoryFilters.subCategoryFilterName, SubCategoryFilterOptions.subCategoryFilterOptionName) AS subCategoryFilterOptions FROM Products
	INNER JOIN ProductSubCategoryFilterOptions ON ProductSubCategoryFilterOptions.productId = Products.productId
	INNER JOIN SubCategoryFilterOptions ON SubCategoryFilterOptions.subCategoryFilterOptionId = ProductSubCategoryFilterOptions.subCategoryFilterOptionId
	INNER JOIN SubCategoryFilters ON SubCategoryFilters.subCategoryFilterId = SubCategoryFilterOptions.subCategoryFilterId
	INNER JOIN SubCategories ON SubCategories.subCategoryId = SubCategoryFIlters.subCategoryId
	INNER JOIN Categories ON Categories.categoryId = SubCategories.categoryId
	INNER JOIN ProductSpecs ON ProductSpecs.productId = Products.productId
GROUP BY Products.productId, Products.productName, Products.productPrime, Products.productFreeShipping, ProductSpecs.productSpecText, Categories.categoryName, SubCategories.subCategoryName)
	AS subQuery

GROUP BY subQuery.productId, subQuery.productName, subQuery.productPrime, subQuery.productFreeShipping, subQuery.categoryName, subQuery.subCategoryName, subQuery.subCategoryFilterOptions)
	AS secondSubQuery
	
		INNER JOIN Options ON Options.productId = secondSubQuery.productId
		INNER JOIN ProductImages ON ProductImages.optionId = Options.optionId
GROUP BY secondSubQuery.productId, secondSubQuery.productName, secondSubQuery.productPrime, secondSubQuery.productFreeShipping, secondSubQuery.productSpecText, secondSubQuery.categoryName, secondSubQuery.subCategoryName, secondSubQuery.subCategoryFilterOptions, productPrice, productLastPrice

