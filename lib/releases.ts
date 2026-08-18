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
    version: '2.0.0',
    date: '2026-08-18',
    notes: {
      en: [
        'Four ways to connect: SSH, Telnet, Rlogin and Raw TCP — each with its own default port, and Rlogin/Raw need no credentials.',
        'Device categories: organize switches, routers and servers into named groups with an icon and a color of your choice — the device list, filters and the device dialog all show the colored icon badge, and a new Categories page handles create / edit / delete.',
        'Commands running while a session reconnects now wait for the connection to come back instead of failing with “Session is not connected”.',
        'Switch command groups run end-to-end: the app answers the “Configuring from terminal…” prompt automatically, so “conf t” groups finish on real switches.',
        'Rlogin and Raw sessions behave exactly like Telnet — same command handling, same automatic preparation of the device.'
      ],
      fa: [
        'چهار راه اتصال: SSH، Telnet، Rlogin و Raw TCP — هرکدام با پورت پیش‌فرض خودش، و Rlogin/Raw به اعتبارنامه نیاز ندارند.',
        'دسته‌بندی دستگاه‌ها: سویچ‌ها، روترها و سرورها را در دسته‌های نام‌دار با آیکون و رنگ دلخواه سازمان‌دهی کنید — فهرست دستگاه‌ها، فیلترها و فرم دستگاه همه بج آیکون رنگی را نشان می‌دهند و صفحه‌ی جدید دسته‌بندی‌ها ساخت/ویرایش/حذف را انجام می‌دهد.',
        'اجرای دستور در حین اتصال مجدد خودکار حالا منتظر برگشتن اتصال می‌ماند به‌جای خطای «سشن متصل نیست».',
        'گروه‌های دستور روی سویچ کامل اجرا می‌شوند: برنامه به پرامپت «Configuring from terminal…» خودکار پاسخ می‌دهد، پس گروه‌های «conf t» روی سویچ واقعی تمام می‌شوند.',
        'نشست‌های Rlogin و Raw دقیقاً مثل Telnet رفتار می‌کنند — همان مدیریت دستور و همان آماده‌سازی خودکار دستگاه.'
      ]
    }
  },
  {
    version: '1.1.1',
    date: '2026-08-17',
    notes: {
      en: [
        'New Debug page: one-click diagnostics — system info, health checks for the database, settings, update feed and license, plus copy or export a full report for support.',
        'Running a command group on a session now shows live progress — “2/5” in the session header and the terminal status bar, with the name of the command currently executing.',
        'Smart Stop for groups: pressing Stop interrupts the command currently running and skips all queued commands — the session stays open.',
        'Batch Runs gained a Group mode: pick a command group and every selected session runs all of its commands in order, with per-device and per-command results in the log.',
        'Run command groups from anywhere a single command can run — session terminal, command palette, devices page and the batch dialog.'
      ],
      fa: [
        'صفحه دیباگ جدید: تشخیص یک‌کلیکه — اطلاعات سیستم، بررسی سلامت دیتابیس، تنظیمات، فید بروزرسانی و لایسنس، و کپی یا خروجی گرفتن گزارش کامل برای پشتیبانی.',
        'اجرای گروه دستور روی نشست حالا پیشرفت زنده نشان می‌دهد — «۲/۵» در هدر نشست و نوار وضعیت ترمینال، همراه با نام دستوری که در حال اجراست.',
        'توقف هوشمند گروه: با زدن Stop، دستور در حال اجرا قطع و همه دستورهای صف‌شده رد می‌شوند — نشست باز می‌ماند.',
        'اجرای گروهی (Batch Runs) حالت گروه گرفت: یک گروه دستور انتخاب کنید و هر نشست انتخاب‌شده همه دستورهای آن را به‌ترتیب اجرا می‌کند، با نتیجه مجزا برای هر دستگاه و هر دستور در گزارش.',
        'گروه‌های دستور را از هر جایی که یک دستور تکی اجرا می‌شود اجرا کنید — ترمینال نشست، پالت فرمان، صفحه دستگاه‌ها و دیالوگ اجرای گروهی.'
      ]
    }
  },
  {
    version: '1.1.0',
    date: '2026-08-16',
    notes: {
      en: [
        'Seven color palettes — Classic, Ocean, Forest, Midnight, Sunset, Aurora and Graphite — each with its own light and dark theme. Pick one in Settings → Appearance.',
        'App lock: set a password in Settings → Security and the app asks for it on every launch. Lock anytime with the top-bar button or Ctrl/⌘ + Shift + L. The lock screen was redesigned with an animated background, a smooth entry and a shake on a wrong password.',
        'Shared credentials (Users): store a username/password or private key once and reference it from any device — update in one place, used everywhere. Device forms can use a saved user instead of retyping secrets.',
        'Config backups: scheduled snapshots of device configurations with a version history and a side-by-side diff, skipping unchanged configs, plus a manual “run now” button.',
        'Redesigned license activation screen with the machine fingerprint and a one-click copy button.',
        'License expiry warning: the app shows the expiry date and alerts you when fewer than 7 days remain.',
        'Reconnect a dropped session with one click — from the session page or the sessions list — reusing the same session; sessions with auto-reconnect enabled come back on their own.',
        'Terminal toolbar: live font-size controls and a clear-output button alongside search, timestamps, copy and log download.',
        'Keyboard shortcuts reference dialog (Ctrl/⌘ + / or the keyboard button in the top bar).',
        'Devices page shows “Open terminal” for devices with a live session; the dashboard device grid shows live connection dots; the session list shows the protocol in use.',
        'Better switch handling: automatic paging off, privilege escalation, confirmation answers, CLI error detection and a safe recovery when a command times out (SSH + Telnet).'
      ],
      fa: [
        'هفت پالت رنگی — کلاسیک، اقیانوس، جنگل، نیمه‌شب، غروب، شفق و گرافیت — هرکدام با تم روشن و تیره‌ی مخصوص خود. از تنظیمات ← ظاهر انتخاب کنید.',
        'قفل برنامه: در تنظیمات ← امنیت رمز بگذارید و برنامه در هر اجرا رمز می‌خواهد. هر لحظه با دکمه‌ی نوار بالا یا Ctrl/⌘ + Shift + L قفل کنید. صفحه قفل بازطراحی شد: پس‌زمینه‌ی متحرک، ورود نرم و لرزش هنگام رمز اشتباه.',
        'اعتبارنامه‌های مشترک (کاربران): نام کاربری/رمز یا کلید خصوصی را یک‌بار ذخیره و از هر دستگاهی به آن ارجاع دهید — یک‌جا تغییر دهید، همه‌جا اعمال می‌شود. فرم دستگاه هم می‌تواند از کاربر ذخیره‌شده استفاده کند.',
        'پشتیبان‌گیری کانفیگ: ذخیره‌ی زمان‌بندی‌شده از کانفیگ دستگاه‌ها با تاریخچه‌ی نسخه‌ها و مقایسه‌ی کنارهم، رد شدن از کانفیگ‌های بدون تغییر، و دکمه‌ی «اجرای همین حالا» برای پشتیبان دستی.',
        'بازطراحی صفحه فعال‌سازی لایسنس با نمایش اثرانگشت دستگاه و دکمه کپی یک‌کلیکه.',
        'هشدار انقضای لایسنس: برنامه تاریخ انقضا را نشان می‌دهد و وقتی کمتر از ۷ روز باقی بماند هشدار می‌دهد.',
        'اتصال مجدد نشست قطع‌شده با یک کلیک — از صفحه نشست یا فهرست نشست‌ها — با همان نشست؛ نشست‌هایی که اتصال مجدد خودکار دارند خودشان برمی‌گردند.',
        'نوار ابزار ترمینال: کنترل اندازه فونت و دکمه پاک کردن خروجی در کنار جستجو، ثبت زمان، کپی و دانلود لاگ.',
        'پنجره راهنمای میانبرهای صفحه‌کلید (Ctrl/⌘ + / یا دکمه صفحه‌کلید در نوار بالا).',
        'صفحه دستگاه‌ها برای دستگاه‌های دارای نشست زنده «باز کردن ترمینال» نشان می‌دهد؛ شبکه دستگاه‌ها در داشبورد نقطه وضعیت زنده دارد و فهرست نشست‌ها پروتکل در حال استفاده را نشان می‌دهد.',
        'مدیریت بهتر سوئیچ: خاموش‌کردن خودکار صفحه‌بندی، ارتقای سطح دسترسی، پاسخ به تأییدیه‌ها، تشخیص خطای CLI و بازیابی امن هنگام تایماوت (SSH و Telnet).'
      ]
    }
  },
  {
    version: '1.0.1',
    date: '2026-08-16',
    notes: {
      en: [
        'Command groups now run strictly in order on switches — each command waits for the previous one to finish.',
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
        'First release: SSH and Telnet connections from a real terminal.',
        'Device inventory with groups, tags, vendors and models.',
        'Command templates and sequential command groups.',
        'Batch runs — one command across many live sessions.',
        'Full execution history and audit trail.',
        'Bilingual English / فارسی UI with RTL.',
        'License activation required.'
      ],
      fa: [
        'نسخه اول: اتصال SSH و Telnet از یک ترمینال واقعی.',
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
