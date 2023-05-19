Select tmp.product_id,Round(Sum(tmp.total) / Sum(tmp.sumUnit), 2) as average_price 
from (
    SELECT p.product_id, SUM(u.units) as sumUnit , SUM(u.units) * p.price AS total
    FROM Prices AS p
    INNER JOIN UnitsSold AS u ON p.product_id = u.product_id
    AND u.purchase_date BETWEEN p.start_date AND p.end_date
    GROUP BY p.product_id, p.start_date, p.end_date
) as tmp 
group by tmp.product_id;
