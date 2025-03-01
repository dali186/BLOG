CREATE DATABASE blog_spring_next;
CREATE USER 'blogadmin'@'%' IDENTIFIED BY 'blogadmin';
GRANT ALL PRIVILEGES ON blog_spring_next.* TO 'blogadmin'@'%';
FLUSH PRIVILEGES;