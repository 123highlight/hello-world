'use client';

import {useEffect} from 'react';

const SERVICE_WORKER_PATH = '/sw.js';

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if ('serviceWorker' in navigator) {
      const register = async () => {
        try {
          await navigator.serviceWorker.register(SERVICE_WORKER_PATH, {
            scope: '/' // Scope matches the entire app
          });
        } catch (error) {
          if (process.env.NODE_ENV === 'development') {
            console.error('Failed to register service worker', error);
          }
        }
      };

      register();
    }
  }, []);

  return null;
}
