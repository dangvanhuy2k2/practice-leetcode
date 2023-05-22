SELECT a.sell_date, COUNT(DISTINCT a.product) AS num_sold, 
GROUP_CONCAT(DISTINCT a.product) AS products
FROM Activities AS a
GROUP BY a.sell_date;
