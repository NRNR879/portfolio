import React from 'react';

/**
 * Renders unknown/unfilled values.
 * In development (import.meta.env.DEV === true), displays a noticeable highlighted tag
 * indicating that this value should be customized in src/data/siteData.js.
 */
export const DevPlaceholder = ({ text, fallback = 'Pending update', className = '' }) => {
  if (!text) return null;
  const isAddString = typeof text === 'string' && text.includes('[ADD:');

  if (import.meta.env.DEV && isAddString) {
    return (
      <span 
        title="Placeholder from siteData.js - replace before production"
        className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-mono font-medium bg-amber-500/20 text-accentAmber border border-amber-500/40 shadow-sm animate-pulse ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-accentAmber mr-1.5 inline-block"></span>
        {text}
      </span>
    );
  }

  if (isAddString) {
    // In production, render cleanly without the harsh brackets or fallback
    return <span className={`text-darkMuted/80 italic ${className}`}>{fallback || text}</span>;
  }

  return <span className={className}>{text}</span>;
};

export default DevPlaceholder;
