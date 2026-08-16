import { NextResponse } from 'next/server'
import { APP_VERSION, DOWNLOADS } from '@/lib/site'
import { RELEASES } from '@/lib/releases'

export const dynamic = 'force-static'

/**
 * Machine-readable update feed for the desktop app.
 *
 * The app checks this URL at startup (UPDATE_MANIFEST_URL in src/main/
 * services/updateService.ts) and compares `version` with the installed one.
 * Shape matches what the app expects:
 *
 *   { "version": "1.0.1", "notes": "...", "downloads": { "win": "...", "linux": "...", "darwin": "..." } }
 *
 * The full releases list is included too, so the Settings → Updates card can
 * later show changelog notes without another request.
 */
export function GET(): NextResponse {
  const latest = RELEASES[0]
  return NextResponse.json(
    {
      version: APP_VERSION,
      notes: latest.notes.en.join('\n'),
      downloads: {
        win: DOWNLOADS.windows.url,
        linux: DOWNLOADS.linux.deb.url,
        darwin: DOWNLOADS.mac.url
      },
      releases: RELEASES.map((r) => ({
        version: r.version,
        date: r.date,
        notes: r.notes.en.join('\n')
      }))
    },
    {
      headers: {
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=3600'
      }
    }
  )
}
