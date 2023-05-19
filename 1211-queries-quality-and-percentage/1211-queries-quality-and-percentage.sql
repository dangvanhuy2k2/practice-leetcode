# Write your MySQL query statement below
Select q.query_name , 
Round(Avg(q.rating / q.position), 2) as quality,
Round(Avg(q.rating < 3) * 100, 2) as poor_query_percentage
from Queries as q
group by q.query_name;