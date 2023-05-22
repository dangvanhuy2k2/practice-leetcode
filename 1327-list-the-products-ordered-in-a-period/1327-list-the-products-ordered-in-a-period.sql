SELECT p.product_name, SUM(o.unit) AS unit
FROM Orders AS o
INNER JOIN Products AS p ON p.product_id = o.product_id
WHERE DATE_FORMAT(o.order_date, "%Y-%m") = "2020-02"
GROUP BY p.product_id
HAVING unit >= 100;