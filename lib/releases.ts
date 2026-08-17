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
    version: '1.1.0',
    date: '2026-08-16',
    notes: {
      en: [
        'Seven color palettes — Classic, Ocean, Forest, Midnight, Sunset, Aurora and Graphite — each with its own light and dark theme. Pick one in Settings → Appearance.',
        'App lock: set a password in Settings → Security and the app asks for it on every launch. Lock anytime with the top-bar button or Ctrl/⌘ + Shift + L. The lock screen was redesigned with an animated mesh background, springy entry and a shake on a wrong password.',
        'Shared credentials (Users): store a username/password or private key once and reference it from any device — update in one place, used everywhere. Device forms can use a saved user instead of retyping secrets.',
        'Config backups: scheduled snapshots of device configurations (vendor-aware commands), version history with line-level diff, dedup of unchanged configs and manual “run now”.',
        'Redesigned license activation screen with the machine fingerprint and a one-click copy button.',
        'License expiry warning: the app shows the expiry date and alerts you when fewer than 7 days remain.',
        'Reconnect a dropped session with one click — from the session page or the sessions list — reusing the same session id; sessions with auto-reconnect enabled come back on their own with backoff.',
        'Terminal toolbar: live font-size stepper and a clear-output button alongside search, timestamps, copy and log download.',
        'Keyboard shortcuts reference dialog (Ctrl/⌘ + / or the keyboard button in the top bar).',
        'Devices page shows “Open terminal” for devices with a live session; the dashboard device grid shows live connection dots; the session list shows the protocol (SSH/Telnet).',
        'Switch management hardening: vendor-aware paging disable, automatic privilege escalation, confirm auto-answer, CLI error detection and Ctrl+C recovery on timeout (SSH + Telnet).'
      ],
      fa: [
        'هفت پالت رنگی — کلاسیک، اقیانوس، جنگل، نیمه‌شب، غروب، شفق و گرافیت — هرکدام با تم روشن و تیره‌ی مخصوص خود. از تنظیمات ← ظاهر انتخاب کنید.',
        'قفل برنامه: در تنظیمات ← امنیت رمز بگذارید و برنامه در هر اجرا رمز می‌خواهد. هر لحظه با دکمه‌ی نوار بالا یا Ctrl/⌘ + Shift + L قفل کنید. صفحه قفل بازطراحی شد: پس‌زمینه‌ی متحرک، ورود فنری و لرزش هنگام رمز اشتباه.',
        'اعتبارنامه‌های مشترک (کاربران): نام کاربری/رمز یا کلید خصوصی را یک‌بار ذخیره و از هر دستگاهی به آن ارجاع دهید — یک‌جا تغییر دهید، همه‌جا اعمال می‌شود. فرم دستگاه هم می‌تواند از کاربر ذخیره‌شده استفاده کند.',
        'پشتیبان‌گیری کانفیگ: snapshot زمان‌بندی‌شده از کانفیگ دستگاه‌ها (با دستور آگاه از سازنده)، تاریخچه نسخه با diff خط‌به‌خط، حذف کانفیگ‌های بدون تغییر و «اجرای همین حالا» به‌صورت دستی.',
        'بازطراحی صفحه فعال‌سازی لایسنس با نمایش اثرانگشت دستگاه و دکمه کپی یک‌کلیکه.',
        'هشدار انقضای لایسنس: برنامه تاریخ انقضا را نشان می‌دهد و وقتی کمتر از ۷ روز باقی بماند هشدار می‌دهد.',
        'اتصال مجدد نشست قطع‌شده با یک کلیک — از صفحه نشست یا فهرست نشست‌ها — با همان شناسه نشست؛ نشست‌هایی که اتصال مجدد خودکار دارند خودشان با backoff برمی‌گردند.',
        'نوار ابزار ترمینال: استپر اندازه فونت و دکمه پاک کردن خروجی در کنار جستجو، ثبت زمان، کپی و دانلود لاگ.',
        'پنجره راهنمای میانبرهای صفحه‌کلید (Ctrl/⌘ + / یا دکمه صفحه‌کلید در نوار بالا).',
        'صفحه دستگاه‌ها برای دستگاه‌های دارای نشست زنده «باز کردن ترمینال» نشان می‌دهد؛ شبکه دستگاه‌ها در داشبورد نقطه وضعیت زنده دارد و فهرست نشست‌ها پروتکل (SSH/Telnet) را نشان می‌دهد.',
        'تقویت مدیریت سوئیچ: غیرفعال‌سازی paging آگاه از سازنده، ارتقای خودکار سطح دسترسی، پاسخ خودکار به تأییدیه‌ها، تشخیص خطای CLI و بازیابی با Ctrl+C در حالت تایماوت (SSH و Telnet).'
      ]
    }
  },
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
