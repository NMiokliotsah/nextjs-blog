import type { NextApiRequest, NextApiResponse } from 'next'
import { getHashPassword } from '../../../helpers/auth';

import { closeConnectionDb, connectToDatabase } from "../../../helpers/db";

interface Data {
  message: string
}

async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const data = req.body;
  const { email, password } = data;
  const isNotValid = !email || !email.includes('@') || !password || password.trim() === '' || password.trim().length < 7;

  if (isNotValid) {
    res
      .status(422)
      .json({
        message: 'Invalid email or password.',
      });
    closeConnectionDb();

    return;
  }

  const db = await connectToDatabase();

  const existingUser = await db.collection('users').findOne({ email: email });

  if (existingUser) {
    res.status(422).json({ message: 'This User exist already!' });
    closeConnectionDb();

    return;
  }

  const hashedPassword = await getHashPassword(password);

  db
    .collection('users')
    .insertOne({
      email,
      password: hashedPassword,
    });

  res.status(200).json({ message: 'Created the user!' });
  closeConnectionDb();
}

export default handler;
