# Write your MySQL query statement below
Select distinct l.num as ConsecutiveNums
from Logs as l
where (
  Select num from Logs as l1
  where l1.id = l.id + 1
) = l.num
and (
  Select num from Logs as l2
  where l2.id = l.id + 2
) = l.num