WITH newUser AS(
INSERT INTO Users (userEmail, userFirstName, UserLastName)
VALUES ($1, $2, $3)
RETURNING userId
)
INSERT INTO Passwords
(userId, passwordHash)
SELECT userId, $4
FROM newUser;