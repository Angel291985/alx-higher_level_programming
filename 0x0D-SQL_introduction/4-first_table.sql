-- The script that creates a table called first_table in the current database in my MySQL server
-- 'first table' should have (id INT) and (name VARCHAR(256))
-- db name will be passed as argument of mysql cmd
-- If table 'first_table' already exists, should not fail.
-- Not allowed to use SELECT or SHOW
CREATE TABLE IF NOT EXISTS first_table (id INT,
	name VARCHAR(256));
