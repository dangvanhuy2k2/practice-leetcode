# Write your MySQL query statement below
SELECT u.user_id as buyer_id, u.join_date,
(
  SELECT COALESCE(COUNT(*), 0)
  FROM Orders AS o1
  WHERE o1.buyer_id = o.buyer_id
  AND DATE_FORMAT(o1.order_date, "%Y") = 2019
) AS orders_in_2019
FROM Orders AS o
RIGHT JOIN Users AS u ON u.user_id = o.buyer_id
GROUP BY u.user_id;
