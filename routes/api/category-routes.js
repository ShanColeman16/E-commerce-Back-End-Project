const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
  // be sure to include its associated Products

router.get('/', async (req, res) => {
  Category.findAll({
    include:  {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  try {
    const categoryData =  await Category.findAll({
      include: [Product, { Price, Stock }],
    });
    res.status(200).json(categoryData);
   } catch (err) {
    res.status(500).json(err);
  }
});
  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    where:{
      id: req.params.id,
    },
    include: {
    model: Product, attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  res.status(200).json(categoryData);
    
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((category)  => {
    return Category.findAll({ where: {category_id: req.params.id} })
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:  {
      id: req.params.id
    }
  })

});

module.exports = router;
