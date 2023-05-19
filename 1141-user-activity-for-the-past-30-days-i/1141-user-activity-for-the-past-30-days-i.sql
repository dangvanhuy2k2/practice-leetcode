# Write your MySQL query statement below
Select a.activity_date as day,
count(distinct(a.user_id)) as active_users 
from Activity as a
where a.activity_date between Date_sub("2019-07-27", INTERVAL 29 day) and "2019-07-27"
group by a.activity_date
order by a.activity_date;