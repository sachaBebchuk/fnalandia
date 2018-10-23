CREATE SCHEMA fnalandia;

CREATE USER fnalandia;

SET PASSWORD FOR fnalandia@'%' = PASSWORD('1234');

GRANT ALL ON fnalandia.* TO fnalandia@'%';