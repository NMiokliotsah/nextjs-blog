import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  email?: string,
  name?: string,
  storedMessage?: string,
  message: string,
}

function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;
    const isNotValid = !email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '';

    if (isNotValid) {
      res.status(422).json({ message: 'Invalid input.' });
    }

    const newMessage = {
      email,
      name,
      message,
    }

    console.log(newMessage);

    res.status(201).json({ message: 'Successfully stored message!', storedMessage: newMessage });
  }
}

export default handler;
