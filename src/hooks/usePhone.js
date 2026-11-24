import { useCallback } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const usePhone = () => {
  const makeCall = useCallback((phoneNumber = SITE_CONFIG.PHONE_NUMBER) => {
    const cleanNumber = String(phoneNumber).replace(/\s/g, '');
    window.location.href = `tel:${cleanNumber}`;
  }, []);

  const copyPhoneNumber = useCallback(async (phoneNumber = SITE_CONFIG.PHONE_NUMBER) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(phoneNumber);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  return {
    makeCall,
    copyPhoneNumber,
  };
};
