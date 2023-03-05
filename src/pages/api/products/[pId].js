import products from '@/dataBase';

export default function handler(req, res) {
  const { pid } = req.query;
  res
    .status(200)
    .json({ result: products.filter((product) => product.pid.toString() === pid)?.[0] });
}
