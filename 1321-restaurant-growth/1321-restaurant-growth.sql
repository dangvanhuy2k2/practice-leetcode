# Write your MySQL query statement below
Select c.visited_on,
(
  Select Sum(c2.amount) from Customer as c2
  where c2.visited_on between DATE_SUB(c.visited_on, INTERVAL 6 DAY)
  and c.visited_on
) as amount,
(
  Select Round(Sum(c3.amount) / 7,2) from Customer as c3
  where c3.visited_on between DATE_SUB(c.visited_on, INTERVAL 6 DAY)
  and c.visited_on 
) as average_amount
from Customer as c
group by c.visited_on
having DATE_SUB(c.visited_on, INTERVAL 6 DAY) 
in (Select c1.visited_on from Customer as c1)
