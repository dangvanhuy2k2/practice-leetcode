SELECT u.name, SUM(t.amount) AS balance
FROM Transactions AS t
INNER JOIN Users AS u ON t.account = u.account
GROUP BY t.account
HAVING SUM(t.amount) > 10000;
