import products from '@/lib/data';

export default function handler(_, res) {
  res.status(200).json({ result: products });
}
