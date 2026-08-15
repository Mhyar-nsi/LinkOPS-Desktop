/**
 * Site-level configuration.
 *
 * Download links — the vendor sets these. Either edit the fallbacks below,
 * or (better) set the NEXT_PUBLIC_* environment variables in Vercel so the
 * same build can be reused across projects:
 *
 *   NEXT_PUBLIC_APP_VERSION        e.g. "1.0.0"          (shown on the cards)
 *   NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS  direct .exe / .msi link
 *   NEXT_PUBLIC_DOWNLOAD_URL_LINUX    direct AppImage/.deb link
 *
 * Until a real URL is configured the per-OS button renders as a disabled
 * "Coming soon" state — replace the value and rebuild/redeploy.
 */

/** App version badge shown on the download cards. */
export const APP_VERSION: string = process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.0'

interface OsDownload {
  /** Direct link to the installer for this OS ('' until configured). */
  url: string
}

export const DOWNLOADS: Record<'windows' | 'linux', OsDownload> = {
  windows: { url: process.env.NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS ?? '' },
  linux: { url: process.env.NEXT_PUBLIC_DOWNLOAD_URL_LINUX ?? '' }
}

/**
 * Every primary "Download" button across the site anchors to the #download
 * section, where the visitor picks their OS.
 */
export const DOWNLOAD_URL = '#download'
