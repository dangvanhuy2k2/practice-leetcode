# Write your MySQL query statement below

Select q.person_name from Queue as q
where (
    Select sum(q1.weight) from Queue as q1
    where q1.turn <= q.turn 
) <= 1000
order by q.turn desc
limit 1;