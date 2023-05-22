SELECT "Low Salary" AS category, COUNT(*) AS accounts_count
FROM Accounts AS a
WHERE a.income < 20000
UNION
SELECT "Average Salary" AS category, COUNT(*) AS accounts_count
FROM Accounts AS a
WHERE a.income >= 20000 AND a.income <= 50000
UNION
SELECT "High Salary" AS category, COUNT(*) AS accounts_count
FROM Accounts AS a
WHERE a.income > 50000;
