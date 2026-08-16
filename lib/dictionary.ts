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
    guide: 'Guide',
    cta: 'Download'
  },
  hero: {
    tag: 'network operations platform',
    titleLine1: 'Your whole network,',
    titleAccent: 'one terminal.',
    lead: 'LinkOPS Desktop manages switches, routers and firewalls over SSH and Telnet — with an interactive terminal, one-command batch runs across many devices, reusable command templates, and a complete audit trail.',
    ctaPrimary: 'Download',
    ctaSecondary: 'Explore features',
    guideLink: 'Read the guide',
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
    secondary: 'Back to top',
    guide: 'Read the guide'
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
  guide: {
    metaTitle: 'Guide — LinkOPS Desktop',
    metaDescription:
      'Step-by-step tutorial: install LinkOPS Desktop, add devices, connect over SSH and Telnet, run commands, batch runs and keep an audit trail.',
    tag: '// guide',
    title: 'How to use LinkOPS Desktop',
    lead: 'A step-by-step walkthrough from the first install to running commands across your whole network.',
    quickLinks: {
      overview: 'Overview',
      install: 'Install & license',
      devices: 'Add devices',
      connect: 'Connect & terminal',
      commands: 'Run commands',
      batch: 'Batch runs',
      history: 'History & audit',
      settings: 'Settings',
      update: 'Updates'
    },
    sections: {
      overview: {
        title: 'Overview',
        intro:
          'LinkOPS Desktop is a network operations workstation. Instead of juggling PuTTY windows, spreadsheets and ad-hoc scripts, you get one place for every switch, router and firewall — over SSH or Telnet — with parallel command runs, reusable templates and a complete audit trail.',
        steps: [
          'Download and install the app for Windows or Linux, then activate it with your license key.',
          'Add your devices once — name, host, credentials and protocol (SSH or Telnet).',
          'Open live sessions, type commands in a real terminal, or run templates and batch commands across many devices at once.',
          'Every execution is recorded in History, searchable and exportable.'
        ],
        notes: [
          { type: 'note', text: 'LinkOPS Desktop is fully offline: no accounts, no telemetry and no cloud dependency — everything runs on your own machine.' }
        ]
      },
      install: {
        title: 'Install & activate the license',
        intro:
          'Pick your platform on the landing page. Windows uses an NSIS installer; Linux offers a .deb package for Debian/Ubuntu and an AppImage that runs on any distribution.',
        steps: [
          'Windows: run LinkOPS.Desktop.Setup.1.0.0.exe, follow the wizard, then launch from the Start menu.',
          'Linux (.deb): install with apt and launch with the linkops-desktop command.',
          'Linux (AppImage): make it executable and run it directly — no installation needed.',
          'On first launch the app shows the activation screen. Paste the license key you received; until a valid key is entered, the app stays locked.',
          'Your license status (customer, expiry date) is shown in Settings → License. When fewer than 7 days remain, the app warns you.'
        ],
        terminal: [
          {
            title: '.deb — Debian / Ubuntu',
            lines: ['sudo apt install ./linkops-desktop_1.0.0_amd64.deb', 'linkops-desktop']
          },
          {
            title: 'AppImage — any distro',
            lines: ['chmod +x LinkOPS.Desktop-1.0.0.AppImage', './LinkOPS.Desktop-1.0.0.AppImage']
          }
        ],
        notes: [
          { type: 'warning', text: 'Each license is tied to the machine it was activated on (a hardware fingerprint). To move to another machine, create a license for that machine.' },
          { type: 'tip', text: 'Your license details — customer name and expiry date — are always visible in Settings → License, and the app warns you when fewer than 7 days remain.' }
        ]
      },
      devices: {
        title: 'Adding devices',
        intro: 'The inventory is the heart of the app. Add each device once, and every session, template and batch run references it.',
        steps: [
          'Open Devices and click “Add device”.',
          'Fill in the basics: name, host (IP or DNS), port (22 for SSH, 23 for Telnet) and username.',
          'Choose the authentication: password or private key (stored encrypted in the OS keychain, with optional passphrase).',
          'Pick the protocol — SSH or Telnet — and the device type (router, switch, server, firewall, access point, OLT…).',
          'The device type matters: network gear runs commands through an interactive shell with prompt detection, exactly like typing by hand — so switches and routers “just work”.',
          'Optional: tags, group, vendor/model/location keep a large fleet searchable and filterable.'
        ],
        notes: [
          { type: 'tip', text: 'Pick the device type carefully: network gear (switch, router, OLT, firewall…) runs commands through an interactive shell with prompt detection — exactly like typing by hand — while servers use the fast exec channel.' },
          { type: 'note', text: 'Passwords and private keys are encrypted with the operating system keychain (DPAPI / libsecret) and never stored in plain text.' }
        ]
      },
      connect: {
        title: 'Connecting & the terminal',
        intro:
          'Sessions give you a real xterm.js terminal — ANSI colors, timestamps, live search, copy and log download — for both SSH and Telnet.',
        steps: [
          'Open Sessions and click “Connect to device”, then pick a device from the list.',
          'The session opens a terminal; type commands exactly as you would in PuTTY or any SSH client.',
          'Keep several sessions open side by side — each shows a live status badge (connecting, connected, executing, error).',
          'Credentials come from the OS keychain automatically; nothing is stored in plain text.',
          'Use the toolbar to search output, toggle timestamps, copy the buffer or download a .log file.'
        ],
        notes: [
          { type: 'tip', text: 'Keep several sessions open side by side — each shows a live status badge (connecting, connected, executing, error).' },
          { type: 'note', text: 'Press Ctrl+F inside a terminal to search its output instantly.' }
        ]
      },
      commands: {
        title: 'Running commands',
        intro:
          'Stop retyping the same show commands. Store them as templates, bundle them into groups, and run them from any session or device with one click.',
        steps: [
          'Create templates in Commands: name, command, category, compatible device types and tags.',
          'Bundle several templates into a command group for a sequential diagnostics routine (e.g. show version → show interfaces status → show log).',
          'From any session use the “Run template” menu; from any device use the quick-run action.',
          'On network gear the command is typed into the interactive shell and completion is detected from the prompt; --More-- paging is continued automatically, so long outputs never get stuck.',
          'The live result streams into the terminal, and a copy lands in History with exit code and duration.'
        ],
        terminal: [
          {
            title: 'live session',
            lines: ['$ show version', 'Cisco IOS XE Software, Version 17.9.4a', 'System restarted at 02:14:33 UTC Tue Aug 11 2026', 'SW1#']
          }
        ],
        notes: [
          { type: 'tip', text: 'Long outputs never get stuck: --More-- paging is continued automatically, and the command is considered done when the shell prompt returns.' }
        ]
      },
      batch: {
        title: 'Batch runs',
        intro: 'Run one command across many live sessions in parallel and compare the results in one view.',
        steps: [
          'Select two or more sessions on the Sessions page.',
          'Click “Run selected”, choose a template or type a custom command.',
          'The app runs it on all selected devices and shows per-device output, exit code and duration.',
          'You can stop a batch mid-run; whatever completed is kept in History.'
        ],
        notes: [
          { type: 'note', text: 'A batch needs live sessions — connect to the devices first, then select them on the Sessions page.' }
        ]
      },
      history: {
        title: 'History & audit trail',
        intro: 'Every execution is recorded automatically — who ran what, on which device, when, and what came back.',
        steps: [
          'Open History to browse executions: command, device, trigger, duration, exit code and full output.',
          'Search and filter by device or command; export to CSV for compliance or reporting.',
          'The Logs page keeps application-level diagnostics for troubleshooting.',
          'From a session you can also download the terminal buffer as a .log file.'
        ],
        notes: [
          { type: 'tip', text: 'Export any filtered view to CSV for compliance or reporting.' }
        ]
      },
      settings: {
        title: 'Settings & shortcuts',
        intro: 'Tune the app to your workflow — appearance, language, SSH behavior and more.',
        steps: [
          'Appearance: theme (light / dark / system) and UI language (English or فارسی with full RTL and Persian digits).',
          'SSH: connection timeout and keep-alive interval for long-running sessions.',
          'Terminal: font size, timestamps, auto-scroll.',
          'Data: import/export devices from CSV, manage logs.',
          'License: view your license status and expiry date.',
          'Keyboard shortcuts are listed in Settings — including the command palette (Ctrl+K) for quick actions like switching themes.'
        ],
        notes: [
          { type: 'tip', text: 'The command palette (Ctrl+K) is the fastest way to jump anywhere: switch themes, open settings, connect to a device or run a template.' }
        ],
        table: {
          title: 'Keyboard shortcuts',
          headers: ['Action', 'Shortcut'],
          rows: [
            ['Open the command palette', 'Ctrl+K'],
            ['Open Settings', 'Ctrl+,'],
            ['Open Settings (alternate)', 'Ctrl+Shift+P'],
            ['Add a new device', 'Ctrl+N'],
            ['Search inside the terminal', 'Ctrl+F']
          ]
        }
      },
      update: {
        title: 'Updating the app',
        intro: 'New versions are delivered from the web — the app checks the release feed and tells you when an update is available.',
        steps: [
          'On startup the app checks for updates automatically and shows a notification if a new version exists.',
          'Open Settings → Updates to check manually and download the installer.',
          'Run the new installer over the old version — your license and data are preserved.'
        ],
        notes: [
          { type: 'note', text: 'Updates are delivered from the web. The app checks the release feed on startup and notifies you when a new version is available.' }
        ]
      }
    },
    backHome: 'Back to the landing page',
    downloadCta: 'Download the app',
    prevSection: 'Previous',
    nextSection: 'Next',
    callouts: { tip: 'Tip', note: 'Note', warning: 'Warning' }
  },
  download: {
    tag: '// download',
    title: 'Download LinkOPS Desktop',
    lead: 'Pick your platform and install in under a minute. Windows and Linux are supported.',
    version: 'Version {{version}}',
    help: 'Need help? Read the setup guide',
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
  },
  legal: {
    updated: 'Last updated: August 2026',
    backHome: 'Back to the landing page',
    privacyTitle: 'Privacy Policy',
    privacyLead:
      'The short version: LinkOPS Desktop is fully offline. It collects nothing, sends nothing, and your credentials stay on your machine.',
    privacyBlocks: [
      {
        heading: 'Local & offline by design',
        paragraphs: [
          'LinkOPS Desktop runs entirely on your computer. There are no accounts, no analytics, no telemetry and no cloud services — nothing you do in the app leaves your machine.',
          'This website is equally light: it only stores your theme and language preference in your browser (localStorage) and sets no tracking cookies.'
        ]
      },
      {
        heading: 'Credentials',
        paragraphs: [
          'Device passwords and private keys are encrypted with your operating system keychain (DPAPI on Windows, libsecret on Linux) and are never stored in plain text or sent anywhere.'
        ]
      },
      {
        heading: 'License activation',
        paragraphs: [
          'Activating a license sends only the license key and a hardware fingerprint so the app can validate it. Your license status is stored locally on your machine.'
        ]
      }
    ],
    termsTitle: 'Terms of Service',
    termsLead: 'By downloading or using LinkOPS Desktop you agree to these terms.',
    termsBlocks: [
      {
        heading: 'License & payment',
        paragraphs: [
          'One license is required per machine. Licenses are sold for a fixed term (3, 6 or 12 months) and are tied to the machine they were activated on. A valid license is required to use the application.'
        ]
      },
      {
        heading: 'Acceptable use',
        paragraphs: [
          'You may use the application to manage equipment you own or are authorized to administer. You are responsible for every command you run against your network devices.'
        ]
      },
      {
        heading: 'No warranty',
        paragraphs: [
          'The software is provided “as is”, without warranty of any kind. We are not liable for any damage, data loss or service interruption caused by its use.'
        ]
      },
      {
        heading: 'Updates',
        paragraphs: [
          'The application may check for updates from the web and download new installers. Installing updates is optional but recommended.'
        ]
      },
      {
        heading: 'Contact',
        paragraphs: [
          'Questions about privacy or these terms? Reach out through the project repository or the contact channel provided with your license.'
        ]
      }
    ]
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
    guide: 'آموزش',
    cta: 'دانلود'
  },
  hero: {
    tag: 'پلتفرم مدیریت شبکه',
    titleLine1: 'تمام شبکه‌ی شما،',
    titleAccent: 'در یک ترمینال.',
    lead: 'لینک‌اپس دسکتاپ سوئیچ‌ها، روترها و فایروال‌ها را از راه دور و از طریق SSH و Telnet مدیریت می‌کند — با ترمینال تعاملی، اجرای هم‌زمان یک دستور روی چندین دستگاه، قالب‌های دستور قابل‌استفاده‌ی مجدد و گزارش‌گیری کامل از همه‌ی عملیات.',
    ctaPrimary: 'دانلود',
    ctaSecondary: 'مشاهده‌ی امکانات',
    guideLink: 'مطالعه‌ی راهنما',
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
    secondary: 'بازگشت به بالا',
    guide: 'مطالعه‌ی راهنما'
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
  guide: {
    metaTitle: 'راهنما — لینک‌اپس دسکتاپ',
    metaDescription:
      'آموزش قدم‌به‌قدم: نصب لینک‌اپس دسکتاپ، افزودن دستگاه، اتصال از طریق SSH و Telnet، اجرای دستورها، اجرای گروهی و گزارش‌گیری کامل.',
    tag: '// راهنما',
    title: 'چطور از لینک‌اپس دسکتاپ استفاده کنیم',
    lead: 'راهنمای گام‌به‌گام از نصب اولیه تا اجرای دستور روی تمام شبکه.',
    quickLinks: {
      overview: 'آشنایی',
      install: 'نصب و لایسنس',
      devices: 'افزودن دستگاه',
      connect: 'اتصال و ترمینال',
      commands: 'اجرای دستور',
      batch: 'اجرای گروهی',
      history: 'تاریخچه و گزارش',
      settings: 'تنظیمات',
      update: 'به‌روزرسانی'
    },
    sections: {
      overview: {
        title: 'آشنایی',
        intro:
          'لینک‌اپس دسکتاپ یک ایستگاه کاری برای عملیات شبکه است. به‌جای چند پنجره‌ی PuTTY، فایل‌های اکسل و اسکریپت‌های پراکنده، همه‌ی سوئیچ‌ها، روترها و فایروال‌ها — از طریق SSH یا Telnet — از یک‌جا در دسترس شماست: اجرای هم‌زمان دستورها، قالب‌های آماده و گزارش کامل از هر عملیات.',
        steps: [
          'برنامه را برای ویندوز یا لینوکس نصب و با کلید لایسنس خود فعال کنید.',
          'دستگاه‌ها را یک‌بار اضافه کنید: نام، آدرس، اعتبارنامه و پروتکل (SSH یا Telnet).',
          'نشست‌های زنده باز کنید، در یک ترمینال واقعی دستور بزنید یا قالب‌ها و اجرای گروهی را روی چند دستگاه هم‌زمان اجرا کنید.',
          'هر اجرا به‌صورت خودکار در تاریخچه ذخیره می‌شود؛ قابل جستجو و خروجی‌گیری.'
        ],
        notes: [
          { type: 'note', text: 'لینک‌اپس دسکتاپ کاملاً آفلاین است: بدون حساب کاربری، بدون تلهمتری و بدون وابستگی به ابر — همه‌چیز روی خود رایانه اجرا می‌شود.' }
        ]
      },
      install: {
        title: 'نصب و فعال‌سازی لایسنس',
        intro:
          'سیستم‌عامل خود را در صفحه‌ی اصلی انتخاب کنید. ویندوز از نصب‌کننده‌ی NSIS استفاده می‌کند و لینوکس یک بسته‌ی .deb برای دبیان/اوبونتو و یک AppImage برای هر توزیعی دارد.',
        steps: [
          'ویندوز: فایل LinkOPS.Desktop.Setup.1.0.0.exe را اجرا کنید، مراحل نصب را دنبال کنید و از منوی استارت برنامه را باز کنید.',
          'لینوکس (.deb): با apt نصب کنید و با دستور linkops-desktop اجرا کنید.',
          'لینوکس (AppImage): فایل را قابل‌اجرا کنید و مستقیم اجرا کنید — نیازی به نصب نیست.',
          'در اولین اجرا، صفحه‌ی فعال‌سازی نمایش داده می‌شود. کلید لایسنس خود را وارد کنید؛ تا وارد کردن کلید معتبر، برنامه قفل می‌ماند.',
          'وضعیت لایسنس (نام مشتری و تاریخ انقضا) در تنظیمات → لایسنس قابل مشاهده است. وقتی کمتر از ۷ روز باقی بماند، برنامه هشدار می‌دهد.'
        ],
        terminal: [
          {
            title: '.deb — دبیان / اوبونتو',
            lines: ['sudo apt install ./linkops-desktop_1.0.0_amd64.deb', 'linkops-desktop']
          },
          {
            title: 'AppImage — هر توزیعی',
            lines: ['chmod +x LinkOPS.Desktop-1.0.0.AppImage', './LinkOPS.Desktop-1.0.0.AppImage']
          }
        ],
        notes: [
          { type: 'warning', text: 'هر لایسنس به همان دستگاهی که روی آن فعال شده (اثرانگشت سخت‌افزار) وابسته است. برای انتقال به دستگاه دیگر باید برای آن دستگاه لایسنس جدید بسازید.' },
          { type: 'tip', text: 'جزئیات لایسنس — نام مشتری و تاریخ انقضا — همیشه در تنظیمات ← لایسنس قابل مشاهده است و وقتی کمتر از ۷ روز باقی بماند برنامه هشدار می‌دهد.' }
        ]
      },
      devices: {
        title: 'افزودن دستگاه',
        intro: 'فهرست دستگاه‌ها قلب برنامه است. هر دستگاه را یک‌بار اضافه کنید و همه‌ی نشست‌ها، قالب‌ها و اجراهای گروهی به آن ارجاع می‌دهند.',
        steps: [
          'به صفحه‌ی دستگاه‌ها بروید و «افزودن دستگاه» را بزنید.',
          'مشخصات پایه را پر کنید: نام، آدرس (IP یا DNS)، پورت (۲۲ برای SSH و ۲۳ برای Telnet) و نام کاربری.',
          'روش احراز هویت را انتخاب کنید: رمز عبور یا کلید خصوصی (که رمزنگاری‌شده در گاوصندوق سیستم‌عامل ذخیره می‌شود، با پشتیبانی از عبارت عبور).',
          'پروتکل — SSH یا Telnet — و نوع دستگاه (روتر، سوئیچ، سرور، فایروال، اکسس‌پوینت، OLT و…) را انتخاب کنید.',
          'نوع دستگاه مهم است: تجهیزات شبکه دستورها را از طریق شل تعاملی با تشخیص پرامپت اجرا می‌کنند، دقیقاً مثل تایپ دستی — برای همین سوئیچ‌ها و روترها بدون دردسر کار می‌کنند.',
          'اختیاری: برچسب‌ها، گروه، سازنده/مدل/موقعیت، ناوگان بزرگ را قابل جستجو و فیلتر می‌کند.'
        ],
        notes: [
          { type: 'tip', text: 'نوع دستگاه را با دقت انتخاب کنید: تجهیزات شبکه (سوئیچ، روتر، OLT، فایروال…) دستورها را از طریق شل تعاملی با تشخیص پرامپت اجرا می‌کنند — دقیقاً مثل تایپ دستی — در حالی که سرورها از کانال سریع exec استفاده می‌کنند.' },
          { type: 'note', text: 'رمزها و کلیدهای خصوصی با گاوصندوق سیستم‌عامل (DPAPI / libsecret) رمزنگاری می‌شوند و هرگز به‌صورت متن ساده ذخیره نمی‌شوند.' }
        ]
      },
      connect: {
        title: 'اتصال و ترمینال',
        intro:
          'نشست‌ها یک ترمینال واقعی xterm.js در اختیارتان می‌گذارند — رنگ ANSI، ثبت زمان، جستجوی زنده، کپی و دانلود لاگ — هم برای SSH و هم Telnet.',
        steps: [
          'صفحه‌ی نشست‌ها را باز کنید و «اتصال به دستگاه» را بزنید، سپس دستگاه را از فهرست انتخاب کنید.',
          'نشست با یک ترمینال باز می‌شود؛ دقیقاً مثل PuTTY یا هر کلاینت SSH دستور بزنید.',
          'چند نشست را کنار هم باز نگه دارید — هرکدام نشان وضعیت زنده دارد (در حال اتصال، متصل، در حال اجرا، خطا).',
          'اعتبارنامه‌ها به‌صورت خودکار از گاوصندوق سیستم‌عامل خوانده می‌شوند و هیچ‌چیز به‌صورت متن ساده ذخیره نمی‌شود.',
          'از نوار ابزار برای جستجوی خروجی، ثبت زمان، کپی بافر یا دانلود فایل .log استفاده کنید.'
        ],
        notes: [
          { type: 'tip', text: 'چند نشست را کنار هم باز نگه دارید — هرکدام نشان وضعیت زنده دارد (در حال اتصال، متصل، در حال اجرا، خطا).' },
          { type: 'note', text: 'داخل ترمینال Ctrl+F را بزنید تا خروجی آنی جستجو شود.' }
        ]
      },
      commands: {
        title: 'اجرای دستورها',
        intro:
          'دیگر لازم نیست دستورهای show را هر بار از نو تایپ کنید. آن‌ها را به‌صورت قالب ذخیره کنید، در گروه‌ها بچینید و با یک کلیک از هر نشست یا دستگاهی اجرا کنید.',
        steps: [
          'در صفحه‌ی دستورات، قالب بسازید: نام، دستور، دسته‌بندی، انواع دستگاه سازگار و برچسب.',
          'چند قالب را در یک گروه برای یک روال عیب‌یابی ترتیبی بچینید (مثلاً show version ← show interfaces status ← show log).',
          'از هر نشست از منوی «اجرای قالب» و از هر دستگاه از عمل اجرای سریع استفاده کنید.',
          'روی تجهیزات شبکه، دستور در شل تعاملی تایپ می‌شود و پایان‌یافتن آن از روی پرامپت تشخیص داده می‌شود؛ صفحه‌بندی --More-- هم خودکار ادامه می‌یابد تا خروجی‌های طولانی گیر نکنند.',
          'نتیجه به‌صورت زنده در ترمینال نمایش داده می‌شود و نسخه‌ای از آن با کد خروج و مدت اجرا در تاریخچه ذخیره می‌شود.'
        ],
        terminal: [
          {
            title: 'نشست زنده',
            lines: ['$ show version', 'Cisco IOS XE Software, Version 17.9.4a', 'System restarted at 02:14:33 UTC Tue Aug 11 2026', 'SW1#']
          }
        ],
        notes: [
          { type: 'tip', text: 'خروجی‌های طولانی هرگز گیر نمی‌کنند: صفحه‌بندی --More-- خودکار ادامه می‌یابد و دستور وقتی پرامپت شل برگردد تمام‌شده در نظر گرفته می‌شود.' }
        ]
      },
      batch: {
        title: 'اجرای گروهی',
        intro: 'یک دستور را هم‌زمان روی چند نشست زنده اجرا کنید و نتیجه‌ها را در یک نما مقایسه کنید.',
        steps: [
          'در صفحه‌ی نشست‌ها، دو یا چند نشست را انتخاب کنید.',
          '«اجرای انتخاب‌شده‌ها» را بزنید و یک قالب را انتخاب کنید یا دستور دلخواه بنویسید.',
          'برنامه دستور را روی همه‌ی دستگاه‌های انتخاب‌شده اجرا می‌کند و خروجی، کد خروج و مدت هرکدام را نشان می‌دهد.',
          'می‌توانید اجرا را در میانه متوقف کنید؛ هرچه تمام شده باشد در تاریخچه می‌ماند.'
        ],
        notes: [
          { type: 'note', text: 'اجرای گروهی به نشست‌های زنده نیاز دارد — اول به دستگاه‌ها متصل شوید، بعد آن‌ها را در صفحه‌ی نشست‌ها انتخاب کنید.' }
        ]
      },
      history: {
        title: 'تاریخچه و گزارش',
        intro: 'هر اجرا به‌صورت خودکار ثبت می‌شود — چه کسی، چه دستوری، روی کدام دستگاه، کی، و چه نتیجه‌ای برگشت.',
        steps: [
          'تاریخچه را باز کنید تا اجراها را ببینید: دستور، دستگاه، نوع اجرا، مدت، کد خروج و خروجی کامل.',
          'بر اساس دستگاه یا دستور جستجو و فیلتر کنید؛ برای انطباق یا گزارش‌گیری به CSV خروجی بگیرید.',
          'صفحه‌ی لاگ‌ها، گزارش‌های سطح برنامه را برای عیب‌یابی نگه می‌دارد.',
          'از داخل نشست هم می‌توانید بافر ترمینال را به‌صورت فایل .log دانلود کنید.'
        ],
        notes: [
          { type: 'tip', text: 'هر نمای فیلترشده را برای انطباق یا گزارش‌گیری به CSV خروجی بگیرید.' }
        ]
      },
      settings: {
        title: 'تنظیمات و میانبرها',
        intro: 'برنامه را با روش کار خودتان هماهنگ کنید — ظاهر، زبان، رفتار SSH و موارد دیگر.',
        steps: [
          'ظاهر: تم (روشن / تیره / سیستم) و زبان رابط (انگلیسی یا فارسی با RTL کامل و ارقام فارسی).',
          'SSH: زمان‌سنج اتصال و فاصله‌ی keep-alive برای نشست‌های طولانی.',
          'ترمینال: اندازه‌ی فونت، ثبت زمان، اسکرول خودکار.',
          'داده‌ها: ورود/خروجی دستگاه‌ها از CSV و مدیریت لاگ‌ها.',
          'لایسنس: مشاهده‌ی وضعیت و تاریخ انقضا.',
          'میانبرهای صفحه‌کلید در تنظیمات لیست شده‌اند — از جمله پالت فرمان (Ctrl+K) برای کارهای سریع مثل تغییر تم.'
        ],
        notes: [
          { type: 'tip', text: 'پالت فرمان (Ctrl+K) سریع‌ترین راه برای پرش به هر جاست: تغییر تم، باز کردن تنظیمات، اتصال به دستگاه یا اجرای قالب.' }
        ],
        table: {
          title: 'میانبرهای صفحه‌کلید',
          headers: ['عمل', 'میانبر'],
          rows: [
            ['باز کردن پالت فرمان', 'Ctrl+K'],
            ['باز کردن تنظیمات', 'Ctrl+,'],
            ['باز کردن تنظیمات (جایگزین)', 'Ctrl+Shift+P'],
            ['افزودن دستگاه جدید', 'Ctrl+N'],
            ['جستجو در ترمینال', 'Ctrl+F']
          ]
        }
      },
      update: {
        title: 'به‌روزرسانی برنامه',
        intro: 'نسخه‌های جدید از وب ارائه می‌شوند — برنامه فید انتشار را بررسی می‌کند و وقتی نسخه‌ی جدیدی باشد به شما اطلاع می‌دهد.',
        steps: [
          'برنامه هنگام راه‌اندازی به‌صورت خودکار به‌روزرسانی را بررسی و در صورت وجود نسخه‌ی جدید اعلان می‌دهد.',
          'برای بررسی دستی و دانلود نصب‌کننده به تنظیمات → به‌روزرسانی‌ها بروید.',
          'نصب‌کننده‌ی جدید را روی نسخه‌ی قبلی اجرا کنید — لایسنس و داده‌های شما حفظ می‌شوند.'
        ],
        notes: [
          { type: 'note', text: 'به‌روزرسانی‌ها از وب ارائه می‌شوند. برنامه هنگام راه‌اندازی فید انتشار را بررسی و در صورت وجود نسخه‌ی جدید اطلاع می‌دهد.' }
        ]
      }
    },
    backHome: 'بازگشت به صفحه‌ی اصلی',
    downloadCta: 'دانلود برنامه',
    prevSection: 'قبلی',
    nextSection: 'بعدی',
    callouts: { tip: 'نکته', note: 'یادداشت', warning: 'هشدار' }
  },
  download: {
    tag: '// دانلود',
    title: 'دانلود لینک‌اپس دسکتاپ',
    lead: 'سیستم‌عامل خود را انتخاب کنید و در کمتر از یک دقیقه نصب کنید. ویندوز و لینوکس پشتیبانی می‌شوند.',
    version: 'نسخه {{version}}',
    help: 'راهنما لازم دارید؟ آموزش نصب را ببینید',
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
  },
  legal: {
    updated: 'آخرین به‌روزرسانی: اوت ۲۰۲۶',
    backHome: 'بازگشت به صفحه‌ی اصلی',
    privacyTitle: 'حریم خصوصی',
    privacyLead:
      'خلاصه‌ی کوتاه: لینک‌اپس دسکتاپ کاملاً آفلاین است. هیچ داده‌ای جمع‌آوری نمی‌کند، هیچ داده‌ای نمی‌فرستد و اعتبارنامه‌های شما روی خود دستگاه‌تان می‌مانند.',
    privacyBlocks: [
      {
        heading: 'محلی و آفلاین از پایه',
        paragraphs: [
          'لینک‌اپس دسکتاپ کاملاً روی رایانه‌ی شما اجرا می‌شود. هیچ حساب کاربری، هیچ تحلیل آماری، هیچ تلهمتری و هیچ سرویس ابری وجود ندارد — هر کاری که در برنامه انجام دهید از دستگاه شما بیرون نمی‌رود.',
          'این وب‌سایت هم به همین اندازه سبک است: فقط تم و زبان شما را در مرورگر (localStorage) ذخیره می‌کند و هیچ کوکی رهگیری ندارد.'
        ]
      },
      {
        heading: 'اعتبارنامه‌ها',
        paragraphs: [
          'رمزها و کلیدهای خصوصی دستگاه‌ها با گاوصندوق سیستم‌عامل شما (DPAPI در ویندوز و libsecret در لینوکس) رمزنگاری می‌شوند و هرگز به‌صورت متن ساده ذخیره یا ارسال نمی‌شوند.'
        ]
      },
      {
        heading: 'فعال‌سازی لایسنس',
        paragraphs: [
          'برای فعال‌سازی لایسنس فقط کلید لایسنس و اثرانگشت سخت‌افزار ارسال می‌شود تا برنامه بتواند آن را تأیید کند. وضعیت لایسنس شما به‌صورت محلی روی دستگاهتان ذخیره می‌شود.'
        ]
      }
    ],
    termsTitle: 'شرایط استفاده',
    termsLead: 'با دانلود یا استفاده از لینک‌اپس دسکتاپ، این شرایط را می‌پذیرید.',
    termsBlocks: [
      {
        heading: 'لایسنس و پرداخت',
        paragraphs: [
          'برای هر دستگاه یک لایسنس لازم است. لایسنس‌ها برای مدت مشخص (۳، ۶ یا ۱۲ ماه) فروخته می‌شوند و به دستگاهی که روی آن فعال شده‌اند وابسته‌اند. برای استفاده از برنامه، لایسنس معتبر لازم است.'
        ]
      },
      {
        heading: 'استفاده‌ی مجاز',
        paragraphs: [
          'شما مجازید از برنامه برای مدیریت تجهیزاتی استفاده کنید که مالک آن‌ها هستید یا مجوز مدیریتشان را دارید. مسئولیت هر دستوری که روی دستگاه‌های شبکه اجرا می‌کنید با خود شماست.'
        ]
      },
      {
        heading: 'بدون ضمانت',
        paragraphs: [
          'نرم‌افزار «همان‌طور که هست» ارائه می‌شود، بدون هرگونه ضمانت. ما در قبال هیچ خسارت، از دست رفتن داده یا قطعی سرویس ناشی از استفاده‌ی آن مسئول نیستیم.'
        ]
      },
      {
        heading: 'به‌روزرسانی‌ها',
        paragraphs: [
          'برنامه ممکن است به‌روزرسانی‌ها را از وب بررسی و نصب‌کننده‌ی جدید را دانلود کند. نصب به‌روزرسانی اختیاری است اما توصیه می‌شود.'
        ]
      },
      {
        heading: 'تماس',
        paragraphs: [
          'پرسشی درباره‌ی حریم خصوصی یا این شرایط دارید؟ از طریق مخزن پروژه یا کانال ارتباطی همراه لایسنس خود با ما تماس بگیرید.'
        ]
      }
    ]
  }
}

export const dictionary: Record<Lang, typeof en> = { en, fa }
