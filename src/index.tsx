/**
 * CE.SDK Start with Video Starterkit - React Entry Point
 *
 * Initialize a video editor with pre-selected video content.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import type { Configuration } from '@cesdk/cesdk-js';
import { createRoot } from 'react-dom/client';

import App from './app/App';

// ============================================================================
// Configuration
// ============================================================================

const config: Configuration = {
  userId: 'starterkit-start-with-video-user',

  // Local assets
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize React Application
// ============================================================================

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);
root.render(<App config={config} />);
