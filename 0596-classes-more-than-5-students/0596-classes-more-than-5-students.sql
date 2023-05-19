# Write your MySQL query statement below
Select c.class from Courses as c
group by c.class
having count(*) >= 5;