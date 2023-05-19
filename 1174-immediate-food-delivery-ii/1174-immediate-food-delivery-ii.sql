Select Round(
  ( Select count(*) from (
    Select *
    from Delivery as d
    group by d.customer_id
    having Min(d.order_date) = Min(d.customer_pref_delivery_date) 
  ) as tmp )
/ (Select count(DISTINCT(d1.customer_id)) from Delivery as d1) * 100 , 2) as
immediate_percentage 