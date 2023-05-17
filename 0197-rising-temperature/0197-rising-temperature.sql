# Write your MySQL query statement below
SELECT w.id FROM Weather as w
where DATE_SUB(w.recordDate, INTERVAL 1 DAY) in (select w1.recordDate from Weather as w1 where w.temperature > w1.temperature);
