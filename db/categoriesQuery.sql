SELECT queryB.categoryName, jsonb_object_agg(queryB.subCategoryName, queryB.subCategoryFilters) FROM
(SELECT queryA.categoryName, queryA.subCategoryName, jsonb_object_agg(queryA.subCategoryFilterName, queryA.subCategoryFilterOptions) AS subCategoryFilters FROM
(SELECT Categories.categoryName, SubCategories.subCategoryName, SubCategoryFilters.subCategoryFilterName, jsonb_agg(subCategoryFilterOptions.subCategoryFilterOptionName) AS subCategoryFilterOptions FROM Categories
INNER JOIN SubCategories ON SubCategories.categoryId = Categories.categoryId
INNER JOIN SubCategoryFilters ON SubCategoryFilters.subCategoryId = SubCategories.subCategoryId
INNER JOIN SubCategoryFilterOptions ON SubCategoryFilterOptions.subCategoryFilterId = SubCategoryFilters.subCategoryFilterId
GROUP BY Categories.categoryName, SubCategories.subCategoryName, SubCategoryFilters.subCategoryFilterName) AS queryA
GROUP BY queryA.categoryName, queryA.subCategoryName) AS queryB
GROUP BY queryB.categoryName;