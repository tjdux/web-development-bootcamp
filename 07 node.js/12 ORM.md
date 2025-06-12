## Raw Query
- 데이터베이스에 SQL을 이용하여 직접 쿼리(Query)를 요청하는 것
- SQL만 알고 있다면 다양한 데이터베이스에 연결하여 테이블을 생성하거나 데이터를 조회하는 등 데이터베이스와 상호작용 가능 
- 장점: 데이터베이스가 지원하는 대부분의 기능을 SQL만으로 간편하게 사용
- e.g. mysql2
```javascript
app.post('/api/tables/', async (req, res, next) => {
 const { tableName }  = req.body;

 // 테이블을 생성
await db.query(`
    CREATE TABLE ${tableName} 
    (
      id  INT   NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      creatAt DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return res.json({ message: '테이블 생성에 성공하였습니다.' });

})
```

## ORM
- Object-Relational Mapping
- 객체와 관계형 데이터 베이스의 테이블 간의 데이터를 자동으로 변환해주는 기술
- e.g. Prisma, Sequelize
<br/>

## ORM 장단점
### 장점
#### 데이터베이스 전환의 용이성 
- ORM은 데이터베이스 종류에 상관없이 일관된 코드 작성 방식 제공 
- ORM의 설정값만 변경하는 것으로 언제든지 데이터베이스를 자유롭게 전환 가능
- 서비스가 성장함에 따라 유연하게 데이터베이스 변경 가능
#### 데이터베이스 스키마 변경 시 효율적인 유지보수
- rawquery 사용 시: 변경된 테이블을 사용하는 모든 API의 쿼리를 수정해야 함
- ORM 사용 시: Prisma의 경우 스키마 변경 시 model만 수정
### 단점
#### 복잡한 쿼리 작성의 어려움
- `JOIN`이나 `UNION` 같은 복잡한 연산자를 동시에 사용하는 쿼리를 작성하기 위해서는 ORM의 깊은 동작 방식 이해 필요
- ORM이 제공하는 추상화는 때때로 복잡한 데이터베이스 로직을 표현하는 데 제약을 가져올 수 있음
#### 성증 최적화의 제약
- 서브 쿼리를 포함한 복잡한 쿼리나, 극한의 성능을 요구하는 상황에서는 Raw Query를 사용하는 것이 더 효율적일 수 있음
- ORM의 추상화 계층은 때로는 미세한 성능 오버헤드가 발생할 수 있음 