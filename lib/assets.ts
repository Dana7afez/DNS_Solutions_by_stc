/**
 * Get the correct asset path for images in production (GitHub Pages)
 * This handles the basePath prefix automatically
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // In production, add the basePath prefix
  if (process.env.NODE_ENV === 'production') {
    return `/solutions_by_stc/${cleanPath}`
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`
}

/**
 * Alternative name for getAssetPath - for consistency across the codebase
 */
export function getImagePath(path: string): string {
  return getAssetPath(path)
}

/**
 * Helper function for fixing image paths in HTML content
 */
export function fixImagePaths(htmlContent: string): string {
  if (process.env.NODE_ENV === 'production') {
    return htmlContent.replace(/src="\/([^"]+)"/g, 'src="/solutions_by_stc/$1"')
  }
  return htmlContent
}
