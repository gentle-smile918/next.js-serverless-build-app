// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import bcrypt from 'bcrypt';

export default (req, res) => {
  res.statusCode = 200;
  res.json({ test: bcrypt.hash(Date.now(), 10) });
}
