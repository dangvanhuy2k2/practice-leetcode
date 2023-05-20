SELECT results
FROM (
    SELECT u.name AS results
    FROM MovieRating AS mr
    INNER JOIN Users AS u ON u.user_id = mr.user_id
    GROUP BY mr.user_id
    ORDER BY COUNT(*) DESC, u.name
    LIMIT 1
) AS subquery1
UNION ALL
SELECT results
FROM (
    SELECT m.title AS results
    FROM MovieRating AS mr
    INNER JOIN Movies AS m ON m.movie_id = mr.movie_id
    WHERE DATE_FORMAT(mr.created_at, '%Y-%m') = '2020-02'
    GROUP BY mr.movie_id
    ORDER BY AVG(mr.rating) DESC, m.title
    LIMIT 1
) AS subquery2;