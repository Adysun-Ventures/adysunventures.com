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

// No basePath for root deployment. When serving from site root (adysunventures.com)
// asset URLs should be served from the root (e.g. /assets/...). Keep basePath empty.
const basePath = '';

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
