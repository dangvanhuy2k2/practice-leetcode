# Write your MySQL query statement below
Select t.teacher_id, 
count(distinct(t.subject_id)) as cnt
from Teacher as t
group by t.teacher_id;