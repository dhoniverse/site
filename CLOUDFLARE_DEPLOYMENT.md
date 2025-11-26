# Cloudflare Pages Deployment Guide

## Problem Diagnosis

The blank screen issue on dhoniverse.com was caused by:

1. **525 SSL Error**: SSL Handshake failure between Cloudflare and origin
2. **Missing Build Configuration**: Cloudflare Pages wasn't properly building the Vite app
3. **Incorrect Output Directory**: Pages wasn't serving from the correct `dist` folder
4. **Missing SPA Routing**: Client-side routing wasn't configured
5. **Service Worker Files**: Not being copied to the build output

## Solution Applied

### 1. Created Cloudflare Configuration Files

- **`public/_headers`**: HTTP headers for caching and security
- **`public/_redirects`**: SPA routing fallback to index.html

### 2. Updated Vite Configuration

Enhanced `vite.config.ts` to:
- Copy service worker files to dist/
- Specify proper output directory structure
- Optimize build output

### 3. Build Configuration

The app now builds correctly with all necessary files in `dist/`:
- `dist/index.html`
- `dist/assets/` (bundled JS/CSS)
- `dist/service-worker.js`
- `dist/register-sw.js`
- `dist/_headers`
- `dist/_redirects`

## Cloudflare Pages Settings (Required Manual Configuration)

### In Cloudflare Pages Dashboard:

1. **Framework Preset**: None (or Vite)

2. **Build Configuration**:
   ```
   Build command: npm run build
   Build output directory: dist
   ```

3. **Environment Variables** (if needed):
   ```
   NODE_VERSION=18
   GEMINI_API_KEY=<your-key-if-needed>
   ```

4. **SSL/TLS Settings** (CRITICAL):
   - Go to: SSL/TLS → Overview
   - Set encryption mode to: **Full** or **Full (strict)**
   - NOT "Flexible" (causes 525 errors)

5. **Production Branch**:
   ```
   Branch: main (or master)
   ```

### Deployment Steps:

1. **Connect Repository**:
   - Go to Cloudflare Pages dashboard
   - Click "Create a project"
   - Connect to GitHub repository: `dhoniverse/site`
   - Authorize Cloudflare access

2. **Configure Build Settings**:
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Set Node version: `18` or higher

3. **Fix SSL/TLS**:
   - Navigate to SSL/TLS settings for dhoniverse.com
   - Change mode from "Flexible" to "Full" or "Full (strict)"
   - Wait 1-2 minutes for changes to propagate

4. **Trigger Deployment**:
   - Push changes to main branch OR
   - Use "Retry deployment" in Cloudflare Pages dashboard

5. **Verify**:
   - Check build logs for successful completion
   - Visit dhoniverse.com and verify content loads
   - Check browser console for errors

## Troubleshooting

### If you still see a blank screen:

1. **Check Build Logs**:
   - Go to Cloudflare Pages → Deployments
   - Click on latest deployment
   - Review build logs for errors

2. **Verify SSL/TLS Mode**:
   - Must be "Full" or "Full (strict)"
   - NOT "Flexible"

3. **Check Browser Console**:
   - Open browser DevTools (F12)
   - Look for JavaScript errors
   - Check Network tab for failed requests

4. **Verify File Serving**:
   - Visit: `https://dhoniverse.com/assets/`
   - Should see bundled JS/CSS files
   - If 404, build output directory is wrong

5. **Clear Cache**:
   - In Cloudflare: Caching → Configuration → Purge Everything
   - In browser: Hard refresh (Ctrl+Shift+R)

### Common Issues:

- **525 Error**: SSL/TLS mode set to "Flexible" → Change to "Full"
- **404 on refresh**: Missing `_redirects` file → Check it's in `public/`
- **Blank screen**: Build failed or wrong output dir → Check build logs
- **Assets not loading**: Wrong base path → Check Vite `base` config

## Additional Notes

- The site uses external assets from GitHub CDN (raw.githubusercontent.com)
- Service Worker is configured for offline support
- Tailwind CSS is loaded via CDN (consider bundling for production)
- Font files are loaded from external sources

## Next Steps After Fix

1. Monitor deployment in Cloudflare Pages dashboard
2. Test all routes and functionality
3. Check performance and loading times
4. Consider optimizing:
   - Bundle Tailwind CSS instead of using CDN
   - Self-host fonts for better performance
   - Implement proper error boundaries
   - Add analytics/monitoring
