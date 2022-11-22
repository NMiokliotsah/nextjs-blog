import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react';
import { getHashPassword, verifyPassword } from '../../../helpers/auth';
import { closeConnectionDb, connectToDatabase } from '../../../helpers/db';
import { checkPassword } from '../../../helpers/validation';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return;
  }

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ message: 'Nou authenticated!' });
    return;
  }

  const { oldPassword, newPassword } = req.body || {};
  const email = session.user.email;
  const collection = await (await connectToDatabase()).collection('users');
  const user = await collection.findOne({ email });

  if (!user) {
    res.status(401).json({ message: 'User not found' });
    closeConnectionDb();
    return;
  }

  const isValid = await verifyPassword(oldPassword, user.password);

  if (!isValid) {
    res.status(403).json({ message: 'The old password is wrong' });
    closeConnectionDb();
    return;
  }

  if (checkPassword(newPassword) || oldPassword === newPassword) {
    res.status(422).json({ message: 'The new password is invalid' });
    closeConnectionDb();
    return;
  }

  const hashedPassword = await getHashPassword(newPassword);

  await collection.updateOne(
    { email },
    { $set: { password: hashedPassword } },
  );

  closeConnectionDb();
  res.status(200).json({ message: 'Password updated!' });
}

export default handler;
