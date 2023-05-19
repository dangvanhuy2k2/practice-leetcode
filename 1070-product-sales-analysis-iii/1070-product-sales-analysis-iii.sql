# Write your MySQL query statement below

SELECT s1.product_id,
       s1.year AS first_year,
       s1.quantity,
       s1.price
FROM Sales AS s1
WHERE (s1.product_id,
       s1.year) in
    (SELECT s.product_id ,
            Min(s.year)
     FROM Sales AS s
     GROUP BY s.product_id)