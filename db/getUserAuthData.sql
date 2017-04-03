SELECT Users.userId, Users.userEmail, Passwords.passwordHash AS storedPasswordHash FROM Public.Users
INNER JOIN Public.Passwords ON Users.userId = Passwords.userId
WHERE Users.userEmail = $1;
