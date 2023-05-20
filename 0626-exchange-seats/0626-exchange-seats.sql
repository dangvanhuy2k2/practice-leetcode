SELECT s.id,
       COALESCE(
         if(s.id % 2 != 0,
          (
            SELECT s1.student
            FROM Seat AS s1
            WHERE s1.id = s.id + 1 
          ),
          (
            SELECT s2.student
            FROM Seat AS s2
            WHERE s2.id = s.id - 1 
          )),s.student) 
          AS student
FROM Seat AS s
ORDER BY s.id;