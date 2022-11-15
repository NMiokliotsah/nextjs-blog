import type { NextApiRequest, NextApiResponse } from 'next'

import {
  closeConnectionDb,
  connectToDatabase,
  getCollection,
} from '../../helpers/db';

type Data = {
  email?: string,
  name?: string,
  storedMessage?: string,
  message: string,
}

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    const isNotValid = !email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '';

    if (isNotValid) {
      res.status(422).json({ message: 'Invalid input.' });

      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    try {
      const db = await connectToDatabase();
      const collection = await getCollection(db, 'messages');

      collection.insertOne(newMessage);

      res
      .status(201)
      .json({ message: 'Successfully stored message!', storedMessage: newMessage });
    } catch(e) {
      res
        .status(500)
        .json({ message: e as string});
    } finally {
      closeConnectionDb();
    }
  }
}

export default handler;
