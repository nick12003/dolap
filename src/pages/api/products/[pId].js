import products from '@/lib/data';

export default function handler(_, res) {
  const { pid } = req.query;
  res.status(200).json({ result: products.filter((product) => product.pid === pid) });
}
