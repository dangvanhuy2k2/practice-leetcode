/* Write your T-SQL query statement below */
Select en.unique_id  , e.name 
from Employees as e left join EmployeeUNI as en
On en.id = e.id;