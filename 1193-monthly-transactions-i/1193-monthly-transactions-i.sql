# Write your MySQL query statement below

SELECT DATE_FORMAT(t.trans_date, '%Y-%m') AS MONTH,
       t.country,
       count(*) AS trans_count,
       sum(IF (t.state = "approved", 1, 0)) AS approved_count,
       Sum(t.amount) AS trans_total_amount,
       sum(IF (t.state = "approved", t.amount, 0)) AS approved_total_amount
FROM Transactions AS t
GROUP BY t.country,
         DATE_FORMAT(t.trans_date, '%Y-%m')