SELECT id, COUNT(*) AS num
FROM (
    SELECT DISTINCT r.requester_id AS id FROM RequestAccepted AS r
    UNION
    SELECT DISTINCT r1.accepter_id AS id FROM RequestAccepted AS r1
) AS tmp
INNER JOIN RequestAccepted AS r
ON r.accepter_id = id OR r.requester_id = id
GROUP BY id
ORDER BY num DESC
LIMIT 1;
