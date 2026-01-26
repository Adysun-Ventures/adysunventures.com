/**
 * Asset Path Utility
 * 
 * Prepends the Next.js basePath to asset URLs for GitHub Pages deployment.
 * Works seamlessly in both local development and production.
 * 
 * Usage:
 *   import { assetPath } from '@/lib/assetPath';
 *   <img src={assetPath('/assets/images/logo.png')} />
 */

// Get basePath from environment variable set in next.config.ts
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Converts a relative asset path to an absolute path with basePath prefix
 * @param path - Asset path starting with / (e.g., '/assets/images/logo.png')
 * @returns Full path with basePath prefix
 */
export function assetPath(path: string): string {
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    // Return path with basePath prefix
    return `${basePath}${normalizedPath}`;
}
