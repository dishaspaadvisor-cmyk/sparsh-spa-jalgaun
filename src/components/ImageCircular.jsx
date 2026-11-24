import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const ImageCircular = () => (
  <img
    src="/ServicesImg/3.png"
    alt={`Traditional wellness treatment at ${SITE_CONFIG.BUSINESS_NAME}`}
    className="w-36 h-36 rounded-full object-cover border border-[#E5DFD3]"
    referrerPolicy="no-referrer"
    loading="lazy"
  />
);
