export type Lang = 'en' | 'fa'

const en = {
  meta: {
    title: 'LinkOPS Desktop — Manage your network over SSH & Telnet',
    description:
      'A bilingual desktop platform for network operations: manage switches, routers and firewalls over SSH and Telnet with a real terminal, batch runs, command templates and a full audit trail.'
  },
  header: {
    features: 'Features',
    pricing: 'Pricing',
    screenshots: 'Screenshots',
    protocols: 'Protocols',
    security: 'Security',
    cta: 'Download'
  },
  hero: {
    tag: 'network operations platform',
    titleLine1: 'Your whole network,',
    titleAccent: 'one terminal.',
    lead: 'LinkOPS Desktop manages switches, routers and firewalls over SSH and Telnet — with an interactive terminal, one-command batch runs across many devices, reusable command templates, and a complete audit trail.',
    ctaPrimary: 'Download',
    ctaSecondary: 'Explore features',
    note: 'Bilingual EN/FA with full RTL · dark & light themes',
    terminalTitle: 'linkops — live session',
    terminalLines: [
      'Connected to router-edge-01 (netops@192.168.10.1:22)',
      '$ show version',
      'Cisco IOS XE Software, Version 17.9.4a',
      'System restarted at 02:14:33 UTC Tue Aug 11 2026',
      '$ show interfaces status',
      'Gi1/0/1   uplink  connected   up   a-1G  10/100/1000BaseTX',
      'Gi1/0/2   access  connected   up   a-100 10/100/1000BaseTX',
      '$ █'
    ],
    badges: ['SSH', 'Telnet', 'xterm terminal', 'Batch runs', 'Audit trail']
  },
  features: {
    tag: '// capabilities',
    title: 'Everything you need to run your network, in one place',
    lead: 'Built by network engineers for network engineers — no more bouncing between terminal windows and spreadsheets.',
    items: [
      {
        title: 'Device inventory',
        desc: 'Search, filter, sort and group every device. Tags, vendors, models and locations keep a fleet of hundreds manageable.',
        tag: 'devices'
      },
      {
        title: 'Real terminal',
        desc: 'A full xterm.js terminal with ANSI color, live search, timestamps, copy and download. SSH and Telnet sessions side by side.',
        tag: 'sessions'
      },
      {
        title: 'Batch runs',
        desc: 'Run one command across many live sessions in parallel with per-device output, exit codes and mid-run cancellation.',
        tag: 'batch'
      },
      {
        title: 'Command templates & groups',
        desc: 'Reusable commands and sequential profiles. Quick-run from any device, or execute a whole diagnostics group at once.',
        tag: 'commands'
      },
      {
        title: 'Full audit trail',
        desc: 'Every execution is recorded — command, device, user, timing, exit code and output. History and logs are searchable and exportable.',
        tag: 'history'
      },
      {
        title: 'Bilingual, right-to-left',
        desc: 'A complete فارسی interface with RTL layout, Persian calendar and digits — plus English. Switch instantly from Settings.',
        tag: 'i18n'
      },
      {
        title: 'Security first',
        desc: 'All connections run in the main process, the renderer is sandboxed, IPC is validated with Zod, and credentials are encrypted with the OS keychain.',
        tag: 'security'
      },
      {
        title: 'Light & dark themes',
        desc: 'A polished dark theme and a light one, plus a complete Persian interface with full RTL and locale-aware dates and digits.',
        tag: 'themes'
      }
    ]
  },
  screenshots: {
    tag: '// the app',
    title: 'A look inside',
    lead: 'Real screenshots from the desktop app. The UI is bilingual — English and فارسی with full RTL.',
    tabs: {
      dashboard: 'Dashboard',
      devices: 'Devices',
      terminal: 'Terminal',
      batchRuns: 'Batch Runs',
      commands: 'Commands',
      groups: 'Command Groups',
      history: 'History',
      settings: 'Settings'
    },
    captions: {
      dashboard:
        'Activity at a glance — connected sessions, executions today, frequently used commands and the device inventory.',
      devices:
        'Search, filter and group the whole fleet. Tags, vendors, models and protocol badges (SSH / Telnet) on every row.',
      terminal:
        'An interactive xterm.js session with ANSI colors, timestamps, live search and command templates at hand.',
      batchRuns:
        'One command across multiple live sessions in parallel, with per-device results, exit codes and a downloadable log.',
      commands:
        'Reusable command templates with categories, compatible device types and tags — plus command groups for sequential runs.',
      groups:
        'Sequential command profiles: bundle show commands into a one-click diagnostics routine.',
      history:
        'The full audit trail — every command, device, trigger, duration, exit code and output, searchable and exportable.',
      settings:
        'Appearance, language, SSH defaults, terminal behavior, logging, import/export and shortcuts.'
    }
  },
  protocols: {
    tag: '// connectivity',
    title: 'SSH where you can, Telnet where you must',
    lead: 'Modern and legacy equipment in one inventory. Pick the protocol per device — the app handles the rest.',
    ssh: {
      title: 'SSH',
      points: [
        'Encrypted transport with legacy cipher/kex support for older gear',
        'Password and private-key authentication, passphrases supported',
        'Clean per-command channels with exit codes',
        'Keep-alive to hold long sessions'
      ]
    },
    telnet: {
      title: 'Telnet',
      points: [
        'For equipment that predates SSH',
        'Automatic login — the app answers Username/Password prompts',
        'Full IAC option negotiation and prompt detection',
        'Command output captured until the shell prompt returns, with --More-- paging handled'
      ]
    }
  },
  security: {
    tag: '// security',
    title: 'Engineered to be safe on your network',
    lead: 'The app talks to production gear — it is built accordingly.',
    items: [
      {
        title: 'Sandboxed renderer',
        desc: 'contextIsolation on, nodeIntegration off, sandbox on. The UI is a thin client over a typed preload bridge.'
      },
      {
        title: 'Validated IPC',
        desc: 'Every main-process handler validates its input with a Zod schema — nothing from the UI is trusted blindly.'
      },
      {
        title: 'OS keychain credentials',
        desc: 'Passwords and keys are encrypted with the operating system vault (DPAPI / Keychain / libsecret) and never returned to the UI.'
      },
      {
        title: 'Fully offline',
        desc: 'No accounts, no telemetry, no cloud dependency — everything runs on your machine, and credentials are encrypted at rest.'
      }
    ]
  },
  cta: {    tag: '// get started',
    title: 'Ready to take control of your network?',
    lead: 'Download LinkOPS Desktop and start managing your devices today.',
    primary: 'Download the app',
    secondary: 'Back to top'
  },
  footer: {
    rights: 'All rights reserved.'
  },
  pricing: {
    tag: '// licensing',
    title: 'Simple, fair pricing',
    lead: 'One license per machine. Choose the term that fits — longer terms save more.',
    popular: 'Best value',
    perMonth: '≈ {{price}} / month',
    off: '−{{pct}}%',
    save: 'Save {{pct}}%',
    buy: 'Get {{name}}',
    includes: [
      'Full app access — SSH & Telnet',
      'Batch runs, templates & audit trail',
      'Free updates during the term',
      'Email support'
    ],
    plans: {
      '3m': { name: '3 months', desc: 'Perfect for trying the full app' },
      '6m': { name: '6 months', desc: 'For ongoing projects and small teams' },
      '12m': { name: '12 months', desc: 'Best value for regular network work' }
    },
    note: 'Prices shown in USD (English) and Toman (Persian). Need more seats or a custom term? Contact us.'
  },
  download: {
    tag: '// download',
    title: 'Download LinkOPS Desktop',
    lead: 'Pick your platform and install in under a minute. Windows and Linux are supported.',
    version: 'Version {{version}}',
    windows: {
      name: 'Windows',
      file: 'Installer (.exe)',
      cta: 'Download installer',
      stepsTitle: 'Install',
      steps: [
        'Run LinkOPS.Desktop.Setup.1.0.0.exe and follow the setup wizard',
        'Choose an install folder and finish the wizard',
        'Launch LinkOPS from the Start menu or the desktop shortcut'
      ]
    },
    linux: {
      name: 'Linux',
      file: 'Two packages — pick one',
      deb: {
        name: '.deb package',
        file: 'Debian / Ubuntu',
        cta: 'Download .deb',
        stepsTitle: 'Install',
        steps: [
          'sudo apt install ./linkops-desktop_1.0.0_amd64.deb',
          'linkops-desktop'
        ]
      },
      appImage: {
        name: 'AppImage',
        file: 'Any Linux distro',
        cta: 'Download AppImage',
        stepsTitle: 'Run',
        steps: [
          'chmod +x LinkOPS.Desktop-1.0.0.AppImage',
          './LinkOPS.Desktop-1.0.0.AppImage'
        ]
      }
    },
    note: 'Free to download — no account required.'
  }
}

const fa: typeof en = {
  meta: {
    title: 'لینک‌اپس دسکتاپ — مدیریت شبکه از طریق SSH و Telnet',
    description:
      'پلتفرم دسکتاپ دوزبانه برای مدیریت شبکه: مدیریت سوئیچ‌ها، روترها و فایروال‌ها از طریق SSH و Telnet با ترمینال واقعی، اجرای گروهی، قالب‌های دستور و گزارش‌گیری کامل.'
  },
  header: {
    features: 'امکانات',
    pricing: 'پلن‌ها',
    screenshots: 'تصاویر',
    protocols: 'پروتکل‌ها',
    security: 'امنیت',
    cta: 'دانلود'
  },
  hero: {
    tag: 'پلتفرم مدیریت شبکه',
    titleLine1: 'تمام شبکه‌ی شما،',
    titleAccent: 'در یک ترمینال.',
    lead: 'لینک‌اپس دسکتاپ سوئیچ‌ها، روترها و فایروال‌ها را از راه دور و از طریق SSH و Telnet مدیریت می‌کند — با ترمینال تعاملی، اجرای هم‌زمان یک دستور روی چندین دستگاه، قالب‌های دستور قابل‌استفاده‌ی مجدد و گزارش‌گیری کامل از همه‌ی عملیات.',
    ctaPrimary: 'دانلود',
    ctaSecondary: 'مشاهده‌ی امکانات',
    note: 'رابط دوزبانه EN/FA با RTL کامل · تم روشن و تیره',
    terminalTitle: 'linkops — نشست زنده',
    terminalLines: [
      'Connected to router-edge-01 (netops@192.168.10.1:22)',
      '$ show version',
      'Cisco IOS XE Software, Version 17.9.4a',
      'System restarted at 02:14:33 UTC Tue Aug 11 2026',
      '$ show interfaces status',
      'Gi1/0/1   uplink  connected   up   a-1G  10/100/1000BaseTX',
      'Gi1/0/2   access  connected   up   a-100 10/100/1000BaseTX',
      '$ █'
    ],
    badges: ['SSH', 'Telnet', 'ترمینال xterm', 'اجرای گروهی', 'گزارش کامل']
  },
  features: {
    tag: '// امکانات',
    title: 'هرچه برای مدیریت شبکه لازم دارید، در یک ابزار',
    lead: 'دیگر لازم نیست بین چند پنجره‌ی ترمینال و صفحه‌های اکسل جابه‌جا شوید؛ همه‌چیز اینجا سر جای خودش است.',
    items: [
      {
        title: 'فهرست دستگاه‌ها',
        desc: 'جستجو، فیلتر، مرتب‌سازی و گروه‌بندی همه‌ی دستگاه‌ها. برچسب‌ها، سازنده، مدل و موقعیت، مدیریت ناوگانی با صدها دستگاه را ساده می‌کند.',
        tag: 'devices'
      },
      {
        title: 'ترمینال واقعی',
        desc: 'ترمینال کامل xterm.js با رنگ ANSI، جستجوی زنده، ثبت زمان، کپی و دانلود خروجی؛ نشست‌های SSH و Telnet در کنار هم.',
        tag: 'sessions'
      },
      {
        title: 'اجرای گروهی',
        desc: 'یک دستور را هم‌زمان روی چند نشست اجرا کنید؛ با خروجی جداگانه‌ی هر دستگاه، کد خروج و امکان توقف در میانه‌ی اجرا.',
        tag: 'batch'
      },
      {
        title: 'قالب‌ها و گروه‌های دستور',
        desc: 'دستورهای پرتکرار را یک‌بار ذخیره کنید و هر وقت خواستید اجرا کنید؛ یا چند دستور را در یک پروفایل ترتیبی بچینید.',
        tag: 'commands'
      },
      {
        title: 'گزارش‌گیری کامل',
        desc: 'هر اجرا با جزئیات ثبت می‌شود: دستور، دستگاه، کاربر، زمان، کد خروج و خروجی. تاریخچه قابل جستجو و خروجی‌گیری است.',
        tag: 'history'
      },
      {
        title: 'دوزبانه، راست‌به‌چپ',
        desc: 'رابط کاملاً فارسی با چیدمان راست‌به‌چپ، تقویم و ارقام فارسی، به‌همراه انگلیسی — جابه‌جایی آنی از تنظیمات.',
        tag: 'i18n'
      },
      {
        title: 'امنیت در اولویت',
        desc: 'همه‌ی اتصالات در فرایند اصلی اجرا می‌شوند، رابط کاربری ایزوله است، ورودی‌های IPC اعتبارسنجی می‌شوند و اعتبارنامه‌ها با کلید سیستم‌عامل رمزنگاری می‌شوند.',
        tag: 'security'
      },
      {
        title: 'تم روشن و تیره',
        desc: 'تم تیره‌ی شکیل و تم روشن، به‌همراه رابط کاملاً فارسی با RTL کامل و تاریخ و اعداد منطبق بر تقویم فارسی.',
        tag: 'themes'
      }
    ]
  },
  screenshots: {
    tag: '// برنامه',
    title: 'یک نگاه به داخل',
    lead: 'تصاویر واقعی از خودِ برنامه. رابط کاربری دوزبانه است — انگلیسی و فارسی با RTL کامل.',
    tabs: {
      dashboard: 'داشبورد',
      devices: 'دستگاه‌ها',
      terminal: 'ترمینال',
      batchRuns: 'اجرای گروهی',
      commands: 'دستورات',
      groups: 'گروه‌های دستور',
      history: 'تاریخچه',
      settings: 'تنظیمات'
    },
    captions: {
      dashboard:
        'نمای کلی فعالیت: نشست‌های متصل، اجراهای امروز، پرکاربردترین دستورها و فهرست دستگاه‌ها.',
      devices:
        'جستجو، فیلتر و گروه‌بندی ناوگان. برچسب‌ها، سازنده، مدل و نشان پروتکل (SSH / Telnet) روی هر ردیف.',
      terminal:
        'نشست تعاملی xterm.js با رنگ ANSI، جستجوی زنده و قالب‌های آماده در دسترس.',
      batchRuns:
        'یک دستور روی چند نشست زنده به‌صورت موازی؛ با نتیجه‌ی هر دستگاه، کد خروج و گزارش قابل دانلود.',
      commands:
        'قالب‌های دستور با دسته‌بندی، انواع دستگاه سازگار و برچسب؛ به‌همراه گروه‌های ترتیبی.',
      groups:
        'پروفایل‌های ترتیبی: چند دستور show را در یک روال عیبیابی یک‌کلیکه بسته‌بندی کنید.',
      history:
        'گزارش کامل: هر دستور، دستگاه، نوع اجرا، مدت، کد خروج و خروجی؛ قابل جستجو و خروجی‌گیری.',
      settings:
        'ظاهر، زبان، پیش‌فرض‌های SSH، رفتار ترمینال، گزارش‌گیری، ورود/خروجی داده‌ها و میانبرها.'
    }
  },
  protocols: {
    tag: '// اتصال',
    title: 'SSH هرجا ممکن است، Telnet هرجا لازم',
    lead: 'تجهیزات قدیمی و جدید در یک فهرست. پروتکل را برای هر دستگاه انتخاب کنید؛ بقیه‌اش با برنامه.',
    ssh: {
      title: 'SSH',
      points: [
        'ترابری رمزنگاری‌شده با پشتیبانی از الگوریتم‌های قدیمی برای تجهیزات قدیمی‌تر',
        'احراز هویت با رمز یا کلید خصوصی، با پشتیبانی از عبارت عبور',
        'کانال جداگانه برای هر دستور همراه با کد خروج',
        'keep-alive برای پایداری نشست‌های طولانی'
      ]
    },
    telnet: {
      title: 'Telnet',
      points: [
        'مناسب تجهیزاتی که از SSH پشتیبانی نمی‌کنند',
        'ورود خودکار: برنامه به پرامپت‌های Username/Password پاسخ می‌دهد',
        'مدیریت کامل مذاکره‌ی IAC و تشخیص پرامپت',
        'جمع‌آوری خروجی تا بازگشت پرامپت shell با مدیریت خودکار صفحه‌بندی --More--'
      ]
    }
  },
  security: {
    tag: '// امنیت',
    title: 'امنیت، از پایه طراحی شده',
    lead: 'برنامه با تجهیزات واقعیِ شبکه در ارتباط است؛ برای همین از پایه امن ساخته شده.',
    items: [
      {
        title: 'رابط کاربری ایزوله',
        desc: 'contextIsolation فعال، nodeIntegration خاموش و sandbox روشن. رابط فقط یک کلاینت سبک روی پل تایپ‌شده‌ی preload است.'
      },
      {
        title: 'اعتبارسنجی همه‌ی ورودی‌ها',
        desc: 'هر درخواست به فرایند اصلی با schema از پیش تعریف‌شده اعتبارسنجی می‌شود و هیچ ورودی‌ای بدون بررسی پذیرفته نمی‌شود.'
      },
      {
        title: 'اعتبارنامه در گاوصندوق سیستم‌عامل',
        desc: 'رمزها و کلیدها با DPAPI / Keychain / libsecret رمزنگاری می‌شوند و هرگز به رابط برنمی‌گردند.'
      },
      {
        title: 'کاملاً آفلاین',
        desc: 'بدون حساب کاربری، بدون تلهمتری و بدون وابستگی به ابر — همه‌چیز روی خود رایانه اجرا می‌شود و اعتبارنامه‌ها رمزنگاری‌شده ذخیره می‌شوند.'
      }
    ]
  },
  cta: {
    tag: '// شروع',
    title: 'آماده‌اید کنترل شبکه‌ی خود را به دست بگیرید؟',
    lead: 'لینک‌اپس دسکتاپ را دانلود کنید و مدیریت دستگاه‌هایتان را از همین امروز شروع کنید.',
    primary: 'دانلود برنامه',
    secondary: 'بازگشت به بالا'
  },
  footer: {
    rights: 'تمامی حقوق محفوظ است.'
  },
  pricing: {
    tag: '// پلن‌ها',
    title: 'قیمت‌گذاری ساده و منصفانه',
    lead: 'هر دستگاه یک لایسنس. مدت‌اشتراک را خودتان انتخاب کنید — هرچه طولانی‌تر، صرفه‌جویی بیشتر.',
    popular: 'بهترین ارزش',
    perMonth: '≈ {{price}} در ماه',
    off: '٪{{pct}}−',
    save: '{{pct}}٪ تخفیف',
    buy: 'خرید {{name}}',
    includes: [
      'دسترسی کامل به برنامه — SSH و Telnet',
      'اجرای گروهی، قالب‌ها و گزارش کامل',
      'به‌روزرسانی رایگان در طول دوره',
      'پشتیبانی ایمیلی'
    ],
    plans: {
      '3m': { name: '۳ ماهه', desc: 'مناسب برای آشنایی با امکانات کامل' },
      '6m': { name: '۶ ماهه', desc: 'مناسب پروژه‌های جاری و تیم‌های کوچک' },
      '12m': { name: '۱۲ ماهه', desc: 'بهترین گزینه برای کار منظم با شبکه' }
    },
    note: 'قیمت‌ها در نسخه‌ی فارسی به تومان و در نسخه‌ی انگلیسی به دلار نمایش داده می‌شوند. تعداد بیشتر یا دوره‌ی سفارشی؟ با ما تماس بگیرید.'
  },
  download: {
    tag: '// دانلود',
    title: 'دانلود لینک‌اپس دسکتاپ',
    lead: 'سیستم‌عامل خود را انتخاب کنید و در کمتر از یک دقیقه نصب کنید. ویندوز و لینوکس پشتیبانی می‌شوند.',
    version: 'نسخه {{version}}',
    windows: {
      name: 'ویندوز',
      file: 'نصب‌کننده (.exe)',
      cta: 'دانلود نصب‌کننده',
      stepsTitle: 'نصب',
      steps: [
        'فایل LinkOPS.Desktop.Setup.1.0.0.exe را اجرا کنید و مراحل نصب‌کننده را دنبال کنید',
        'پوشه‌ی نصب را انتخاب کنید و نصب را تمام کنید',
        'لینک‌اپس را از منوی استارت یا میانبر دسکتاپ اجرا کنید'
      ]
    },
    linux: {
      name: 'لینوکس',
      file: 'دو بسته — یکی را انتخاب کنید',
      deb: {
        name: 'بسته‌ی .deb',
        file: 'دبیان / اوبونتو',
        cta: 'دانلود .deb',
        stepsTitle: 'نصب',
        steps: [
          'sudo apt install ./linkops-desktop_1.0.0_amd64.deb',
          'linkops-desktop'
        ]
      },
      appImage: {
        name: 'AppImage',
        file: 'هر توزیع لینوکسی',
        cta: 'دانلود AppImage',
        stepsTitle: 'اجرا',
        steps: [
          'chmod +x LinkOPS.Desktop-1.0.0.AppImage',
          './LinkOPS.Desktop-1.0.0.AppImage'
        ]
      }
    },
    note: 'دانلود رایگان — بدون نیاز به ثبت‌نام.'
  }
}

export const dictionary: Record<Lang, typeof en> = { en, fa }
