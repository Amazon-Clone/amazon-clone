WITH newUser AS(
INSERT INTO Users (userEmail, userFirstName, UserLastName)
VALUES ($1, $2, $3)
RETURNING userId
)
INSERT INTO Passwords
(newUser.userId, passwordId)
SELECT userId, $4
FROM newUser;