INSERT INTO CartItems (cartId, productId, optionId, quantity, discount)
VALUES ($1, $2, $3, $4, $5)
RETURNING cartId AS cartid;
