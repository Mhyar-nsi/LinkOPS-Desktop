/**
 * Release history for LinkOPS Desktop. Newest first.
 *
 * This is the single source of truth for two things:
 *   1. the /changelog page (human-readable, bilingual)
 *   2. the machine-readable update feed the desktop app checks at startup
 *      (/api/updates/latest.json) — bump APP_VERSION in lib/site.ts together
 *      with the newest entry here so the feed and the downloads match.
 */
export interface Release {
  version: string
  date: string // ISO date, e.g. "2026-08-16"
  notes: { en: string[]; fa: string[] }
}

export const RELEASES: Release[] = [
  {
    version: '1.0.1',
    date: '2026-08-16',
    notes: {
      en: [
        'Command groups now run strictly sequentially on switches — each command waits for the previous one to finish.',
        'A notification is shown when a live session is dropped unexpectedly.',
        'The app checks for updates from the project website and lets you download the latest version from Settings.',
        'Reconnecting to a device replaces its old session instead of leaving a duplicate behind.',
        'Sessions stay open after running a command — no more surprise disconnects.',
        'macOS build support added.'
      ],
      fa: [
        'گروه‌های دستور حالا روی سوئیچ‌ها به‌صورت کاملاً ترتیبی اجرا می‌شوند — هر دستور منتظر پایان دستور قبلی می‌ماند.',
        'وقتی یک نشست زنده به‌صورت ناگهانی قطع شود، اعلان نمایش داده می‌شود.',
        'برنامه نسخه جدید را از وب‌سایت پروژه بررسی می‌کند و از تنظیمات می‌توانید آخرین نسخه را دانلود کنید.',
        'اتصال مجدد به یک دستگاه، نشست قبلی آن را جایگزین می‌کند و دیگر نشست تکراری باقی نمی‌ماند.',
        'نشست‌ها بعد از اجرای دستور باز می‌مانند — دیگر قطع شدن ناگهانی نداریم.',
        'پشتیبانی از بیلد مک‌اواس اضافه شد.'
      ]
    }
  },
  {
    version: '1.0.0',
    date: '2026-08-01',
    notes: {
      en: [
        'First release: SSH and Telnet connections from a real xterm terminal.',
        'Device inventory with groups, tags, vendors and models.',
        'Command templates and sequential command groups.',
        'Batch runs — one command across many live sessions.',
        'Full execution history and audit trail.',
        'Bilingual English / فارسی UI with RTL.',
        'License activation required.'
      ],
      fa: [
        'نسخه اول: اتصال SSH و Telnet از یک ترمینال واقعی xterm.',
        'فهرست دستگاه‌ها با گروه‌بندی، برچسب، سازنده و مدل.',
        'قالب‌های دستور و گروه‌های ترتیبی.',
        'اجرای گروهی — یک دستور روی چند نشست زنده.',
        'تاریخچه کامل اجراها و گزارش‌گیری.',
        'رابط دوزبانه انگلیسی / فارسی با RTL.',
        'فعال‌سازی لایسنس الزامی است.'
      ]
    }
  }
]
