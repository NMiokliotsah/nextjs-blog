import { useEffect, useState } from 'react';

const notificationTypes = ['success', 'error'];

const notifications = {
  'pending': {
    status: 'pending',
    title: 'In progress...',
    message: 'We are doing clever things!',
  },
  'success': {
    status: 'success',
    title: 'Success!',
    message: 'Operation is success!',
  },
  'error': {
    status: 'error',
    title: 'Error!',
    message: 'Something went wrong!',
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
