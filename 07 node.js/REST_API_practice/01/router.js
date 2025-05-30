const express = require('express');
const router = express.Router();
const data = require('./data/data');

router.use(express.urlencoded({extended: false}));
router.use(express.json());

router.get('/', (req, res) => {
  res.send(data);
})

router.post('/', (req, res) => {
  data.goods.push(req.body);
  res.send(data);
})

router.get('/:id', (req, res) => {
  const itemId = Number(req.params.id);
  const result = data.goods.find(item => item.goodsId === itemId);
  if (!result) {
    return res.status(404).json({ error: "찾는 아이템이 없습니다." });
  }

  res.send(result)
})

router.put('/:id', (req, res) => {
  const itemId = Number(req.params.id);
  for (let i = 0; i < data.goods.length; i++){
    if (data.goods[i].goodsId === itemId){
      data.goods[i] = {
        ...data.goods[i],
        ...req.body
      }
      break;
    }
  }
  res.send(data);
})

router.delete('/:id', (req, res) => {
  const itemId = Number(req.params.id);
  for (let i = 0; i < data.goods.length; i++){
    if (data.goods[i].goodsId === itemId){
      data.goods.splice(i, 1);
      break;
    }
  }
  res.send(data);
})

module.exports = router;