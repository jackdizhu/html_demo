# 关联查询

* 多表关联查询


```sql
/*
    user_tb u 别名
    ASC 升序
    DESC 降序
    LIMIT 分页
    INNER JOIN(JOIN): 如果表中有至少一个匹配，则返回行
    LEFT JOIN: 即使右表中没有匹配，也从左表返回所有的行
    RIGHT JOIN: 即使左表中没有匹配，也从右表返回所有的行
    FULL JOIN: 只要其中一个表中存在匹配，就返回行
    enum("选项1", "选项2", "选项3", ...) => set(1, 2, 3, ...)
*/
SELECT u.userName, u.six, i.tag, e.ext_text 
FROM user_tb u, info_tb i, ext_tb e 
WHERE u.userName = i.userName AND i.id = e.info_id 
ORDER BY u.userName ASC 
LIMIT 0,10;

SELECT u.userName, u.six, i.tag, e.ext_text 
FROM user_tb u, info_tb i 
INNER JOIN ext_tb e ON i.id = e.info_id 
WHERE u.userName = i.userName 
ORDER BY u.userName ASC 
LIMIT 0,10;

INSERT INTO user_tb (userName, six) VALUES ('testName1', 0);
UPDATE user_tb SET six = 1 WHERE userName = 'testName1';
```

> mac mysql 8.0.19_1

```sql
create user 'root1'@'%' identified by 'password';
grant all privileges on db_app1.* to 'root1'@'%';
flush privileges;
alter user 'root1'@'%' identified with mysql_native_password  by 'password';

CREATE DATABASE db_app1;
show tables;
show columns from table_name;

-- 自定义函数 返回固定类型值
DELIMITER $$
DROP FUNCTION IF EXISTS selectTreeFun$$
create function selectTreeFun() returns varchar(255)
DETERMINISTIC
begin
    declare num varchar(255);
    select convert(id, varchar) from tree where id=1 into num;
    return (num);
end $$
DELIMITER ;
select selectTreeFun();
-- 存储过程 返回table
DELIMITER $$
DROP PROCEDURE IF EXISTS selectTreePro$$
create procedure selectTreePro(id int)
select id,org_name from tree t1 where t1.id=id;
$$
DELIMITER ;
CALL selectTreePro(1);

-- 递归向下查询
DROP FUNCTION IF EXISTS queryChildrenIds;
CREATE FUNCTION queryChildrenIds(numId INT)
RETURNS VARCHAR(4000)
BEGIN
DECLARE sTemp VARCHAR(4000);
DECLARE sTempChd VARCHAR(4000);

SET sTemp='$';
SET sTempChd = CAST(numId AS CHAR);

WHILE sTempChd IS NOT NULL DO
SET sTemp= CONCAT(sTemp,',',sTempChd);
SELECT GROUP_CONCAT(id) INTO sTempChd FROM t_areainfo WHERE FIND_IN_SET(parentId,sTempChd)>0;
END WHILE;
RETURN sTemp;
END;

-- SELECT queryChildrenIds(1);
SELECT * FROM t_areainfo WHERE FIND_IN_SET(id,queryChildrenIds(2));

-- 递归向上查询
DROP FUNCTION IF EXISTS queryParents;
CREATE FUNCTION queryParents(numId INT)
RETURNS VARCHAR(4000)
BEGIN
DECLARE sTemp VARCHAR(4000);
DECLARE sTempChd VARCHAR(4000);

SET sTemp='$';
SET sTempChd = CAST(numId AS CHAR);
SET sTemp = CONCAT(sTemp,',',sTempChd);

SELECT parentId INTO sTempChd FROM t_areainfo WHERE id = sTempChd;
WHILE sTempChd <> 0 DO
SET sTemp = CONCAT(sTemp,',',sTempChd);
SELECT parentId INTO sTempChd FROM t_areainfo WHERE id = sTempChd;
END WHILE;
RETURN sTemp;
END;

-- SELECT queryParents(7);
SELECT * from t_areainfo where FIND_IN_SET(id,queryParents(7));

-- union : 得到两个查询结果的并集，并且自动去掉重复行。不会排序 
-- union all: 得到两个查询结果的并集，不会去掉重复行。也不会排序 

(SELECT * From t_areainfo WHERE t_areainfo.parentId=4 ORDER BY id DESC LIMIT 3) -- 置顶数据
UNION
(SELECT * FROM t_areainfo WHERE t_areainfo.parentId<>0 ORDER BY id DESC);

-- INNER JOIN 获取两个表中字段匹配关系的记录
-- LEFT JOIN 会读取左边数据表的全部数据，即便右边表无对应数据
-- RIGHT JOIN 会读取右边数据表的全部数据，即便左边边表无对应数据
SELECT t1.id, t1.`name`, t1.parentId, t2.`code`, t2.`name`, t2.val, t2.`key` FROM t_areainfo t1
LEFT JOIN t_dic t2 ON t2.`key`=t1.`status`
WHERE t1.parentId<>0 ORDER BY t1.id ASC

-- 多表关联更新
-- 方法一
UPDATE t_areainfo t1, t_dic t2 
SET t1.`status` = 2, t2.`key` = 2 
WHERE t1.`status` = t2.`key`;
-- 方法二：（通过 INNER JOIN）
UPDATE t_areainfo t1
INNER JOIN t_dic t2 ON t1.`status` = t2.`key`
SET t1.`status` = 3, t2.`key` = 3;
-- 方法三：（通过 LEFT JOIN）
UPDATE t_areainfo t1
LEFT JOIN t_dic t2 ON t1.`status` = t2.`key`
SET t1.`status` = 4, t2.`key` = 4;

```

> https://www.cnblogs.com/xiaoxi/p/5942805.html
(树结构递归查询)

> https://www.jianshu.com/p/081a3e208e32
(MySQL事务)

> https://www.cnblogs.com/wzj4858/p/7910084.html
> https://www.cnblogs.com/qlqwjy/p/8425861.html
(MYSQL数据库设计规范与原则)
