import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const usePageMeta = ({ title, description, path = '/' }) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_CONFIG.BUSINESS_NAME}` : `${SITE_CONFIG.BUSINESS_NAME} – Luxury Wellness & Body Massage in Jalgaon`;
    document.title = fullTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description);
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      const normalizedPath = path.startsWith('/') ? path : `/${path}`;
      canonical.setAttribute('href', `${SITE_CONFIG.SITE_URL}${normalizedPath}`);
    }
  }, [title, description, path]);
};
