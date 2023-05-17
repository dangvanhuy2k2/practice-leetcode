/* Write your T-SQL query statement below */
select name from Customer as c
where c.referee_id IS NULL  or c.referee_id  != 2;
