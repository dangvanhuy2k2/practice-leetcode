# # Write your MySQL query statement below
Select c.customer_id from Customer as c
group by c.customer_id
having count(distinct(c.product_key)) >= (Select count(*) from Product);