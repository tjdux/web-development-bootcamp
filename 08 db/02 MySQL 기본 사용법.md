## SQL (Structured Query Language)
- 모든 데이터베이스들을 공통적으로 관리할 수 있는 표준 언어
- 필요한 정보는 데이터베이스에서 미리 처리하는 것이 더 빠름
<br/>

## SQL의 종류
### DDL (Data Definition Language)
- 데이터베이스의 구조(스키마)를 정의하고 변경할 때 사용하는 언어
- `CREATE`
```SQL
CREATE DATABASE 데이터베이스명;
-- 예시: test_shop이라는 이름의 데이터베이스 생성
CREATE DATABASE test_shop;
```
```SQL
CREATE TABLE 테이블명 (
    컬럼명1 데이터타입 제약조건,
    컬럼명2 데이터타입 제약조건,
    ...
);
-- 예시: products 테이블 생성 (상품 ID, 이름, 가격, 카테고리)
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category VARCHAR(100)
);
```
- `DROP`
```SQL
DROP DATABASE 데이터베이스명;
-- 예시: test_shop 데이터베이스 삭제
DROP DATABASE test_shop;
```
```SQL
DROP TABLE 테이블명;
-- 예시: products 테이블 삭제
DROP TABLE products;
```
- `ALTER`
```SQL
ALTER TABLE 테이블명 ADD 컬럼명 데이터타입 제약조건;
-- 예시: products 테이블에 description 컬럼(VARCHAR) 추가
ALTER TABLE products ADD description VARCHAR(500) NOT NULL;
```
```SQL
ALTER TABLE 테이블명 DROP COLUMN 컬럼명;
-- 예시: products 테이블에서 category 컬럼 삭제
ALTER TABLE products DROP COLUMN category;
```
### DML (Data Manipulation Language)
- 저장된 데이터를 조작할 때 사용하는 언어
- `SELECT`
  - ➕ [`JOIN`](https://sql-joins.leopard.in.ua/)
```SQL
SELECT * FROM 테이블명;
-- 예시: products 테이블의 모든 컬럼과 모든 데이터 조회
SELECT * FROM products;
```
```SQL
SELECT 컬럼1, 컬럼2 FROM 테이블명;
-- 예시: products 테이블에서 name과 price 컬럼만 조회
SELECT name, price FROM products;
```
```SQL
SELECT * FROM 테이블명 WHERE 조건;
-- 예시: products 테이블에서 price가 500000보다 큰 상품만 조회
SELECT * FROM products WHERE price > 500000;
```
```SQL
SELECT * FROM 테이블명 ORDER BY 정렬 기준
-- 예시: products 테이블에서 price를 기준으로 내림차순 정렬
SELECT * FROM products ORDER BY price DESC;
```
```SQL
SELECT * FROM 테이블명 LIMIT 개수;
-- 예시: products 테이블에서 상위 3개의 상품만 조회
SELECT * FROM products LIMIT 3;
```
```SQL
SELECT DISTINCT 컬럼명 FROM 테이블명;
-- 예시: products 테이블에서 중복 없이 모든 카테고리만 조회
SELECT DISTINCT category FROM products;
```
- `INSERT`
```SQL
INSERT INTO 테이블명 (컬럼1, 컬럼2, ...) VALUES (값1, 값2, ...);
-- 예시: products 테이블에 새 상품 데이터 삽입
INSERT INTO products (name, price, category) VALUES ('스마트워치', 350000, '웨어러블');
```
```SQL
INSERT INTO 테이블명 (컬럼1, 컬럼2, ...) VALUES (값1_1, 값1_2, ...), (값2_1, 값2_2, ...);
-- 예시: products 테이블에 여러 상품 데이터 동시에 삽입
INSERT INTO products (name, price, category) VALUES
    ('무선 키보드', 80000, '컴퓨터 주변기기'),
    ('게이밍 마우스', 50000, '컴퓨터 주변기기');
```
- `DELETE`
  - 데이터 삭제
  - ⚠️ WHERE 조건이 없다면, 테이블의 모든 데이터가 삭제
```SQL
DELETE FROM 테이블명 WHERE 조건;
-- 예시: products 테이블에서 '스마트워치' 상품 삭제
DELETE FROM products WHERE name = '스마트워치';
```
- `UPDATE`
  - 데이터 수정
  - ⚠️ WHERE 조건이 없다면, 테이블의 모든 데이터가 수정
```SQL
UPDATE 테이블명 SET 컬럼 = 값, 컬럼 = 값 ... WHERE 조건;
-- 예시: products 테이블에서 '무선 키보드' 상품의 가격을 75000원으로 수정
UPDATE products SET price = 75000 WHERE name = '무선 키보드';
```
### DCL (Data Control Language)
- 데이터베이스에 대한 권한과 관련된 문법
- `GRANT`
```SQL
GRANT [권한1, 권한2, ...] ON 데이터베이스명.테이블명 TO '사용자명'@'호스트' IDENTIFIED BY '비밀번호';
-- 예시: 'new_user'라는 사용자에게 'spa_shop' 데이터베이스의 모든 테이블에 대한 SELECT 권한 부여
GRANT SELECT ON spa_shop.* TO 'new_user'@'localhost' IDENTIFIED BY 'password123';
```
- `REVOKE`
```SQL
REVOKE [권한1, 권한2, ...] ON 데이터베이스명.테이블명 FROM '사용자명'@'호스트';
-- 예시: 'new_user'에게 'spa_shop' 데이터베이스의 SELECT 권한 취소
REVOKE SELECT ON spa_shop.* FROM 'new_user'@'localhost';
```
### TCL (Transaction Control Language)
- 트랜잭션을 관리하는 문법
  - 트랜젝션 (transaction): 데이터베이스에서 하나의 논리적인 작업 단위
- `COMMIT`
```SQL
START TRANSACTION; -- 트랜잭션 시작
-- ... 데이터 변경 작업들 (INSERT, UPDATE, DELETE)
COMMIT; -- 모든 작업이 성공했으니 변경사항을 반영
```