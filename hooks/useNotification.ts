import { useEffect, useState } from 'react';

const notificationTypes = ['pending', 'success', 'error'];

const notifications = {
  'pending': {
    status: 'pending',
    title: 'Sending a message...',
    message: 'Your message is on its way',
  },
  'success': {
    status: 'success',
    title: 'Success!',
    message: 'Message sent successfully',
  },
  'error': {
    status: 'error',
    title: 'Error!',
    message: 'Something went wrong',
  }
}

export function useNotification() {
  const [requestStatus, setRequestStatus] = useState<string>('');

  useEffect(() => {
    if (notificationTypes.includes(requestStatus)) {
      const timer = setTimeout(() => {
        setRequestStatus('');
      }, 3000);

      return () => {
        clearTimeout(timer);
      }
    }
  }, [requestStatus]);

  return [notifications[requestStatus], setRequestStatus];
}
