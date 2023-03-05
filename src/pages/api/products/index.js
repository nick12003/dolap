import products from '@/dataBase';

export default function handler(_, res) {
  res.status(200).json({ result: products });
}
