SELECT categoryName,  jsonb_object_agg AS SubCategories FROM
(SELECT categoryName, jsonb_object_agg(subCategoryName, jsonb_object_agg) FROM
(SELECT categoryName, subCategoryName, jsonb_object_agg(subCategoryFilterName, jsonb_object_agg) FROM
(SELECT categoryName, subCategoryName, subCategoryFilterName, jsonb_object_agg(queryA.subCategoryFilterOptionName, queryA.count) FROM
(SELECT categoryName, subCategoryName, subCategoryFilterName, subCategoryFilterOptions.subCategoryFilterOptionName, count(subCategoryFilterOptionName) FROM Categories
INNER JOIN SubCategories ON SubCategories.categoryId = Categories.categoryId
INNER JOIN SubCategoryFilters ON SubCategoryFilters.subCategoryId = SubCategories.subCategoryId
INNER JOIN SubCategoryFilterOptions ON SubCategoryFilterOptions.subCategoryFilterId = SubCategoryFilters.subCategoryFilterId
INNER JOIN ProductSubCategoryFilterOptions ON ProductSubCategoryFilterOptions.subCategoryFilterOptionId = SubCategoryFilterOptions.subCategoryFilterOptionId
GROUP BY categoryName, subCategoryName, subCategoryFilterName, subCategoryFilterOptions.subCategoryFilterOptionName) AS queryA
GROUP BY categoryName, subCategoryName, subCategoryFilterName) AS queryB
GROUP BY categoryName, subCategoryName) AS queryC
GROUP BY categoryName) AS queryD
