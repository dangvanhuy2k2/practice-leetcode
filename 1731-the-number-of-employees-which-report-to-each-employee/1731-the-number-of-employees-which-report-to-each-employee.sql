# Write your MySQL query statement below

SELECT e1.employee_id,
       e1.name,
       tmp.reports_count,
       tmp.average_age
FROM Employees AS e1
JOIN
  (SELECT e.reports_to,
          Round(avg(e.age)) AS average_age,
          count(*) AS reports_count
   FROM Employees AS e
   GROUP BY e.reports_to
   HAVING e.reports_to IS NOT NULL) AS tmp 
   ON e1.employee_id = tmp.reports_to
   ORDER BY e1.employee_id;
