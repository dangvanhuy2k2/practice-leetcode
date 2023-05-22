SELECT IF(COUNT(tmp.salary) >= 1, tmp.salary, NULL) AS SecondHighestSalary 
FROM (
  SELECT DISTINCT(e.salary) AS salary
  FROM Employee AS e
  ORDER BY e.salary DESC
  LIMIT 1, 1
) AS tmp;
