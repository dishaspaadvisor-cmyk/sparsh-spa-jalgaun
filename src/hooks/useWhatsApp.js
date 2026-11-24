import { useCallback } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const buildWhatsAppUrl = (
  message = SITE_CONFIG.DEFAULT_WHATSAPP_MESSAGE,
  phoneNumber = SITE_CONFIG.WHATSAPP_NUMBER
) => {
  const cleanDigits = String(phoneNumber).replace(/\D/g, '');
  return `https://wa.me/${cleanDigits}?text=${encodeURIComponent(message)}`;
};

export const useWhatsApp = () => {
  const sendMessage = useCallback((message, phoneNumber = SITE_CONFIG.WHATSAPP_NUMBER) => {
    const url = buildWhatsAppUrl(message, phoneNumber);
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.assign(url);
    }
  }, []);

  const bookAppointment = useCallback(
    (serviceName = 'wellness session') => {
      const message = `Hello ${SITE_CONFIG.BUSINESS_NAME}, I would like to book an appointment for ${serviceName}. Please share available time slots.`;
      sendMessage(message);
    },
    [sendMessage]
  );

  const contactUs = useCallback(() => {
    const message = `Hello ${SITE_CONFIG.BUSINESS_NAME}, I would like to learn more about your spa treatments and timings.`;
    sendMessage(message);
  }, [sendMessage]);

  return {
    sendMessage,
    bookAppointment,
    contactUs,
    buildWhatsAppUrl,
  };
};
