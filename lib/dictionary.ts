export type Lang = 'en' | 'fa'

const en = {
  meta: {
    title: 'LinkOPS Desktop — Manage your network from one app',
    description:
      'A desktop app for network engineers: connect to switches, routers, firewalls and servers, run commands in a real terminal, use batch runs and command templates, and keep a complete history of everything you do.'
  },
  header: {
    features: 'Features',
    pricing: 'Pricing',
    screenshots: 'Screenshots',
    protocols: 'Protocols',
    security: 'Security',
    guide: 'Guide',
    changelog: 'Changelog',
    cta: 'Download'
  },
  hero: {
    tag: 'network management app',
    titleLine1: 'Your whole network,',
    titleAccent: 'in one app.',
    lead: 'LinkOPS Desktop brings all of your network into one place. Connect to switches, routers, firewalls and servers over SSH, Telnet, Rlogin or Raw TCP — open a real terminal, run one command across many devices at once, reuse your favorite command templates, organize devices with colored categories, keep scheduled config backups and always know what was run, where and when.',
    ctaPrimary: 'Download',
    ctaSecondary: 'Explore features',
    guideLink: 'Read the guide',
    note: 'English & فارسی · dark and light themes',
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
    badges: ['SSH', 'Telnet', 'Rlogin', 'Raw TCP', 'Real terminal', 'Batch runs']
  },
  features: {
    tag: '// capabilities',
    title: 'Everything you need to run your network, in one place',
    lead: 'Everything you need to manage your network, in one place — no more jumping between tools.',
    items: [
      {
        title: 'Four ways to connect',
        desc: 'SSH, Telnet, Rlogin and Raw TCP — pick the right one for each device. Rlogin and Raw need no credentials, and commands run the same way on all four.',
        tag: 'protocols'
      },
      {
        title: 'Device inventory & categories',
        desc: 'Keep every device in one list, organized into colored categories with icons — switches of one region, routers of another. Search, filter and sort your whole fleet in seconds.',
        tag: 'devices'
      },
      {
        title: 'Real terminal',
        desc: 'A full terminal with colored output, live search, timestamps, copy and download. Keep SSH and Telnet sessions open side by side.',
        tag: 'sessions'
      },
      {
        title: 'Server desktop mode',
        desc: 'Connect to a Linux server over SSH and manage it in a friendly graphical view — files, processes, services, packages, logs and network at a glance.',
        tag: 'server'
      },
      {
        title: 'Batch runs',
        desc: 'Run one command across many live sessions at the same time, with the output of every device side by side — and stop mid-run whenever you want.',
        tag: 'batch'
      },
      {
        title: 'Command templates & groups',
        desc: 'Save the commands you use all the time and reuse them with one click, or bundle several into a sequence that runs in order.',
        tag: 'commands'
      },
      {
        title: 'Config backups',
        desc: 'Scheduled snapshots of device configurations with a version history and a side-by-side diff — a bad change is always visible and easy to spot.',
        tag: 'backups'
      },
      {
        title: 'Complete history',
        desc: 'Every command you run is recorded — what, where, when, and what came back. Search and export it whenever you need.',
        tag: 'history'
      },
      {
        title: 'English & فارسی',
        desc: 'A complete فارسی interface with right-to-left layout and Persian digits — plus English. Switch instantly from Settings.',
        tag: 'i18n'
      },
      {
        title: 'Security first',
        desc: 'Passwords and keys are encrypted and stored by your operating system, and every command is validated before it runs.',
        tag: 'security'
      },
      {
        title: 'Light & dark themes',
        desc: 'Seven color palettes, each with a polished dark and light theme — pick the look that fits you.',
        tag: 'themes'
      },
      {
        title: 'App lock & shared users',
        desc: 'Protect the whole app with a password, and store shared credentials once — update them in one place, and every device picks up the change.',
        tag: 'security'
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
      categories: 'Categories',
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
        'Search, filter and organize the whole fleet. Tags, vendors, models and protocol badges (SSH / Telnet / Rlogin / Raw) on every row.',
      categories:
        'Colored categories with icons — group switches of one region, routers of another, and filter the whole fleet by one click.',
      terminal:
        'An interactive terminal with colored output, timestamps, live search and command templates at hand.',
      batchRuns:
        'One command across multiple live sessions at once, with per-device results and a downloadable log.',
      commands:
        'Reusable command templates with categories, compatible device types and tags — plus command groups for sequential runs.',
      groups:
        'Sequential command profiles: bundle your usual commands into a one-click routine.',
      history:
        'The complete log — every command, device, trigger, duration, exit code and output, searchable and exportable.',
      settings:
        'Appearance, seven color palettes, language, connection defaults, terminal behavior, logging, import/export and shortcuts.'
    }
  },
  protocols: {
    tag: '// connectivity',
    title: 'Connect the way your equipment needs',
    lead: 'Modern and older equipment in one inventory. Pick the protocol per device — the app handles the rest, and commands behave the same on all four.',
    ssh: {
      title: 'SSH',
      points: [
        'Secure, encrypted connections — works with older equipment too',
        'Password or private-key login, passphrases supported',
        'Fast per-command execution with reliable results for servers',
        'Keeps long sessions alive'
      ]
    },
    telnet: {
      title: 'Telnet',
      points: [
        'For equipment that predates SSH',
        'Automatic login — the app answers the login prompts for you',
        'Handles the connection and detects prompts automatically',
        'Collects output until the prompt returns, and skips --More-- pages for you'
      ]
    },
    rlogin: {
      title: 'Rlogin',
      points: [
        'Simple connection for trusted hosts',
        'No password needed — the trusted-host model',
        'Same prompt detection and interactive terminal as Telnet',
        'Default port 513, fully configurable'
      ]
    },
    raw: {
      title: 'Raw TCP',
      points: [
        'Plain socket for console servers and serial-to-network adapters',
        'Connects the moment the port opens — no login handshake',
        'Banner and prompt detected automatically',
        'Same command handling as every other protocol'
      ]
    }
  },
  security: {
    tag: '// security',
    title: 'Built to be safe on your network',
    lead: 'The app talks to real equipment — it is built accordingly.',
    items: [
      {
        title: 'Interface is isolated',
        desc: 'The interface runs separately from the engine that talks to your devices, so it can never reach your system directly.'
      },
      {
        title: 'Everything is validated',
        desc: 'Every request and command is checked before it is executed — nothing is trusted blindly.'
      },
      {
        title: 'Credentials stay encrypted',
        desc: 'Passwords and keys are encrypted and stored by your operating system, and they are never shown back to the interface.'
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
    rights: 'All rights reserved.',
    developed: 'Developed by Alborz Telecommunications Company (ATC) and this developer',
    developedShort: 'Alborz Telecommunications Company',
    heart: 'Made with care for network engineers'
  },
  pricing: {
    metaTitle: 'Pricing — LinkOPS Desktop',
    metaDescription:
      'One license per machine. Choose a 3, 6 or 12-month plan — longer terms save more. Prices in USD (English) and Toman (Persian).',
    tag: '// licensing',
    title: 'Simple, fair pricing',
    lead: 'One license per machine. Choose the term that fits — longer terms save more.',
    popular: 'Best value',
    perMonth: '≈ {{price}} / month',
    off: '−{{pct}}%',
    save: 'Save {{pct}}%',
    buy: 'Get {{name}}',
    includes: [
      'Full app access — all protocols',
      'Batch runs, templates & complete history',
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
      users: 'Shared credentials',
      categories: 'Categories',
      protocols: 'Protocols',
      connect: 'Connect & terminal',
      commands: 'Run commands',
      batch: 'Batch runs',
      server: 'Server desktop',
      backups: 'Config backups',
      history: 'History & audit',
      settings: 'Settings',
      lock: 'App lock',
      update: 'Updates'
    },
    sections: {
      overview: {
        title: 'Overview',
        intro:
          'LinkOPS Desktop is a desktop app that brings your whole network into one place. Every switch, router, firewall and server — over SSH, Telnet, Rlogin or Raw TCP — is managed from a single window: real terminal sessions, one-command batch runs across many devices, reusable command templates, scheduled config backups and a complete history of everything you do.',
        steps: [
          'Download and install the app for Windows or Linux, then activate it with your license key.',
          'Add your devices once — name, host, credentials and protocol.',
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
          'Pick your platform on the landing page. Windows uses an installer; Linux offers a .deb package for Debian/Ubuntu and an AppImage that runs on any distribution.',
        steps: [
          'Windows: run LinkOPS.Desktop.Setup.2.0.0.exe, follow the wizard, then launch from the Start menu.',
          'Linux (.deb): install with apt and launch with the linkops-desktop command.',
          'Linux (AppImage): make it executable and run it directly — no installation needed.',
          'macOS: open the .dmg and drag LinkOPS Desktop into the Applications folder.',
          'On first launch the app shows the activation screen. Paste the license key you received; until a valid key is entered, the app stays locked.',
          'Your license status (customer, expiry date) is shown in Settings → License. When fewer than 7 days remain, the app warns you.'
        ],
        terminal: [
          {
            title: '.deb — Debian / Ubuntu',
            lines: ['sudo apt install ./linkops-desktop_2.0.0_amd64.deb', 'linkops-desktop']
          },
          {
            title: 'AppImage — any distro',
            lines: ['chmod +x LinkOPS.Desktop-2.0.0.AppImage', './LinkOPS.Desktop-2.0.0.AppImage']
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
          'To reuse credentials stored in Users, switch the authentication to “Saved user” — the username and secret come from the profile, so you never retype them.',
          'Optional: tags, group, vendor/model/location keep a large fleet searchable and filterable.'
        ],
        notes: [
          { type: 'tip', text: 'Pick the device type carefully: network gear (switch, router, OLT, firewall…) runs commands through an interactive shell with prompt detection — exactly like typing by hand — while servers use the fast exec channel.' },
          { type: 'note', text: 'Passwords and private keys are encrypted and stored securely by your operating system — never in plain text.' }
        ]
      },
      users: {
        title: 'Shared credentials (Users)',
        intro:
          'Most fleets reuse the same username and password across many devices. Store each credential set once in Users and reference it from any device — change it in one place, and every device that uses it picks up the new secret automatically.',
        steps: [
          'Open Users and click “Add user”.',
          'Give the profile a label (e.g. “Access switch admin”), the username and the password — or paste a private key with an optional passphrase.',
          'In the device editor, choose “Saved user” instead of typing credentials manually. The username comes from the profile, so it is not asked again in the device form.',
          'Update the profile once and every device that references it uses the new credentials.',
          'When you delete a profile, the devices that used it fall back to manual credentials — nothing breaks, but they need new secrets.'
        ],
        notes: [
          { type: 'note', text: 'Profiles are stored encrypted with the OS keychain, exactly like per-device credentials, and are never returned to the UI.' },
          { type: 'tip', text: 'Name profiles after the role or access level (e.g. “netops-admin”, “backup-ro”) so it is obvious what each device will use.' }
        ]
      },
      categories: {
        title: 'Device categories',
        intro:
          'Categories are the colored folders of your inventory. Group the switches of one region, the routers of another — each category gets a name, a Lucide icon and a color, so a glance is enough to know where a device belongs.',
        steps: [
          'Open Categories in the sidebar — the page shows every category as a colored card with its icon and device count.',
          'Click “New category”, give it a name and pick an icon from the gallery and a color from the swatches; the live badge previews your choice.',
          'Back on Devices, open a device and pick its category in the device dialog — the colored icon badge shows in the table and in filters.',
          'Click a category card to jump to the Devices page pre-filtered to that category.',
          'Deleting a category keeps the devices — they simply become uncategorized, with all their settings intact.'
        ],
        notes: [
          { type: 'tip', text: 'Name categories after the topology you actually run: “Core”, “Branch”, “Lab” or a region name — then filter the whole fleet with one click.' }
        ]
      },
      protocols: {
        title: 'Protocols: SSH, Telnet, Rlogin & Raw',
        intro:
          'Every device gets a protocol. SSH for anything modern, Telnet for legacy gear, Rlogin for trusted hosts and Raw TCP for console servers and serial-to-network adapters. Whichever you pick, commands run through the same prompt-smart engine.',
        steps: [
          'In the device editor, pick the protocol: SSH (22), Telnet (23), Rlogin (513) or Raw TCP (23 by default) — the default port fills in automatically and stays editable.',
          'Rlogin and Raw TCP need no credentials: Rlogin connects through the trusted-host model and Raw connects the moment the port opens.',
          'For Rlogin a username is still required — it is sent so the host can authorize you.',
          'The protocol badge on each device row and session card tells you which one is in use.',
          'Everything else — preparing the device, turning off output paging, raising privileges, answering confirmations — works the same on all four protocols.'
        ],
        notes: [
          { type: 'tip', text: 'Console servers and serial adapters usually speak Raw TCP — connect to their port and you get the device console directly.' },
          { type: 'note', text: 'SSH stays the first choice: it is encrypted. Use Telnet, Rlogin or Raw only where the equipment forces you to.' }
        ]
      },
      connect: {
        title: 'Connecting & the terminal',
        intro:
          'Sessions give you a real terminal — colored output, timestamps, live search, copy and log download — for SSH, Telnet, Rlogin and Raw.',
        steps: [
          'Open Sessions and click “Connect to device”, then pick a device from the list.',
          'The session opens a terminal — type commands exactly as you would in any SSH client.',
          'Keep several sessions open side by side — each shows a live status badge (connecting, connected, executing, error) and a protocol badge.',
          'When auto-reconnect is enabled for a device, a dropped session reconnects automatically — the terminal and its history stay alive.',
          'If a session is stuck on error/reconnecting, hit the Reconnect button on the session page or in the session list — it reconnects with the same session id.',
          'Use the toolbar to search output, toggle timestamps, change the font size, clear the buffer, copy it or download a .log file.',
          'Credentials are filled in automatically from the encrypted store; nothing is kept in plain text.'
        ],
        notes: [
          { type: 'tip', text: 'Keep several sessions open side by side — each shows a live status badge (connecting, connected, executing, error) and a protocol badge.' },
          { type: 'note', text: 'Press Ctrl+F inside a terminal to search its output instantly, and use ↑ / ↓ to recall commands you typed earlier.' }
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
          'Before the first automated command on a switch or router, the app prepares the device for you: it turns off output paging, raises the privilege level when the device supports it, and answers confirmation prompts automatically — so a “conf t” group runs exactly as if you had typed it by hand.',
          'CLI errors are caught early: “% Invalid input” or “% Access denied” fail the run with the device’s own message instead of silently succeeding with junk.',
          'The live result streams into the terminal, and a copy lands in History with exit code and duration.'
        ],
        terminal: [
          {
            title: 'live session',
            lines: ['$ show version', 'Cisco IOS XE Software, Version 17.9.4a', 'System restarted at 02:14:33 UTC Tue Aug 11 2026', 'SW1#']
          }
        ],
        notes: [
          { type: 'tip', text: 'Long outputs never get stuck: --More-- paging is continued automatically, and the command is considered done when the shell prompt returns.' },
          { type: 'note', text: 'If a command times out, the app interrupts it (Ctrl+C) so the next command is never typed into a broken prompt — the shell is recovered for you.' },
          { type: 'warning', text: 'Command groups run strictly sequentially on network gear — each command waits for the previous one to finish, so a “conf t” followed by an interface command works exactly as typed.' }
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
          { type: 'note', text: 'A batch needs live sessions — connect to the devices first, then select them on the Sessions page.' },
          { type: 'tip', text: 'Sessions dropped mid-run are reconnected through the device’s saved credentials, so a batch survives a flaky link.' }
        ]
      },
      server: {
        title: 'Server desktop mode',
        intro:
          'For Linux servers, the terminal is optional. Click “Desktop” on a live server session and LinkOPS opens a friendly graphical console over the same SSH connection — browse files, watch processes, manage services, install packages, tail logs and see the network at a glance.',
        steps: [
          'Connect to a Linux server as usual (SSH, device type “server”), then click the “Desktop” button in the session header.',
          'Overview: CPU/memory/disk usage and the basic system facts at a glance.',
          'Files: browse and download files over SFTP — the file manager works on the same live connection.',
          'Processes & services: list running processes and services, search and inspect them.',
          'Packages: see installed packages and the package manager in use (apt / dnf / apk / pacman).',
          'Logs: tail recent lines of system logs with a search box, and switch log files from a dropdown.',
          'Network: interfaces, addresses and routing — a quick health picture of the server.',
          'The terminal is still one click away from the session page whenever you need it.'
        ],
        notes: [
          { type: 'note', text: 'Server desktop reads over the same SSH connection — nothing extra to install on the server, everything works with a standard SSH server.' },
          { type: 'tip', text: 'Use desktop mode for day-to-day administration and keep the terminal for one-off commands — both share the same live session.' }
        ]
      },
      backups: {
        title: 'Config backups',
        intro:
          'A device configuration is its source of truth. LinkOPS snapshots each device on a schedule, keeps a version history, and shows a line-level diff between any two snapshots — so a bad change is always visible and recoverable.',
        steps: [
          'Open Config Backups in the sidebar.',
          'Enable “Automatic config backup” in the device editor. The global interval and retention live in Settings → Config backup (default: every 24 hours, keep the latest 30 per device).',
          'The backup command is chosen automatically from the vendor — Cisco “show running-config”, Huawei “display current-configuration”, Juniper “show configuration”, MikroTik “/export” and more.',
          'Click “Run now” to snapshot a device on demand. Unchanged configurations are skipped (dedup), so quiet devices do not fill the history.',
          'Select two snapshots to see a line-level diff (+ added / − removed), and copy or download any snapshot.'
        ],
        notes: [
          { type: 'tip', text: 'Backups are persisted in the database — a run survives the app being closed mid-backup.' },
          { type: 'warning', text: 'Restore is a manual step: compare the diff, then apply the configuration with your normal change process. LinkOPS never pushes configs to devices.' }
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
          'Appearance: theme (light / dark / system) and one of seven color palettes — Classic, Ocean, Forest, Midnight, Sunset, Aurora or Graphite.',
          'Language: English or فارسی with full RTL and Persian digits — a Persian OS locale is detected on first launch.',
          'SSH: connection timeout and keep-alive interval for long-running sessions.',
          'Terminal: default font size, timestamps, auto-scroll.',
          'Security: set (or remove) the app-lock password here.',
          'Data: import/export devices from CSV, manage logs.',
          'License: view your license status, expiry date and machine fingerprint.',
          'Keyboard shortcuts are listed in Settings — open the shortcuts dialog with Ctrl/⌘+/ or use the command palette (Ctrl+K) for quick actions.'
        ],
        notes: [
          { type: 'tip', text: 'The command palette (Ctrl+K) is the fastest way to jump anywhere: switch palettes, open settings, connect to a device or run a template.' }
        ],
        table: {
          title: 'Keyboard shortcuts',
          headers: ['Action', 'Shortcut'],
          rows: [
            ['Open the command palette', 'Ctrl/⌘+K'],
            ['Open the shortcuts reference', 'Ctrl/⌘+/'],
            ['Open Settings', 'Ctrl/⌘+,'],
            ['Open Settings (alternate)', 'Ctrl/⌘+Shift+P'],
            ['Add a new device', 'Ctrl/⌘+N'],
            ['Search inside the terminal', 'Ctrl/⌘+F'],
            ['Lock the app', 'Ctrl/⌘+Shift+L']
          ]
        }
      },
      lock: {
        title: 'App lock',
        intro:
          'Protect the whole application with a password. Set it once in Settings → Security and the app asks for it on every launch — and you can lock it at any time with one click or Ctrl/⌘+Shift+L.',
        steps: [
          'Open Settings → Security and set a lock password.',
          'From now on the app starts locked and asks for the password before showing any device, session or setting.',
          'Lock on demand with the lock button in the top bar or Ctrl/⌘+Shift+L.',
          'Unlock by entering the password; a wrong password shakes the screen so you know it failed.',
          'Remove the lock by clearing the password in Settings → Security.'
        ],
        notes: [
          { type: 'warning', text: 'The password is never stored — only a secure hash of it. If you forget it, the lock can only be removed by resetting the app data.' },
          { type: 'tip', text: 'Locking hides everything behind a clean animated screen — useful before stepping away from a shared workstation.' }
        ]
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
    lead: 'Pick your platform and install in under a minute. Windows, Linux and macOS are supported.',
    version: 'Version {{version}}',
    help: 'Need help? Read the setup guide',
    windows: {
      name: 'Windows',
      file: 'Installer (.exe)',
      cta: 'Download installer',
      stepsTitle: 'Install',
      steps: [
        'Run LinkOPS.Desktop.Setup.2.0.0.exe and follow the setup wizard',
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
          'sudo apt install ./linkops-desktop_2.0.0_amd64.deb',
          'linkops-desktop'
        ]
      },
      appImage: {
        name: 'AppImage',
        file: 'Any Linux distro',
        cta: 'Download AppImage',
        stepsTitle: 'Run',
        steps: [
          'chmod +x LinkOPS.Desktop-2.0.0.AppImage',
          './LinkOPS.Desktop-2.0.0.AppImage'
        ]
      }
    },
    mac: {
      name: 'macOS',
      file: 'Installer (.dmg)',
      cta: 'Download .dmg',
      stepsTitle: 'Install',
      steps: [
        'Open the downloaded LinkOPS.Desktop-2.0.0.dmg',
        'Drag LinkOPS Desktop into the Applications folder',
        'Launch from Launchpad or the Applications folder'
      ]
    },
    note: 'Free to download — no account required.'
  },
  changelog: {
    metaTitle: 'Changelog — LinkOPS Desktop',
    metaDescription:
      'Release notes for LinkOPS Desktop: what changed in each version, from the latest update back to the first release.',
    tag: '// release notes',
    title: 'What’s new in LinkOPS Desktop',
    lead: 'Every update is a new version. Here is everything that shipped, newest first.',
    latest: 'Latest',
    previous: 'Previous',
    downloadLatest: 'Download the latest version',
    downloadHint: 'Windows · Linux · macOS installers'
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
          'Device passwords and private keys are encrypted and stored securely by your operating system and are never kept in plain text or sent anywhere.'
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
    title: 'لینک‌اپس دسکتاپ — مدیریت شبکه از یک برنامه',
    description:
      'برنامه دسکتاپ برای مهندسان شبکه: اتصال به سوئیچ‌ها، روترها، فایروال‌ها و سرورها، اجرای دستور در ترمینال واقعی، اجرای گروهی و قالب‌های دستور، همراه با تاریخچه کامل همه‌ی عملیات.'
  },
  header: {
    features: 'امکانات',
    pricing: 'پلن‌ها',
    screenshots: 'تصاویر',
    protocols: 'پروتکل‌ها',
    security: 'امنیت',
    guide: 'آموزش',
    changelog: 'بروزرسانی‌ها',
    cta: 'دانلود'
  },
  hero: {
    tag: 'برنامه مدیریت شبکه',
    titleLine1: 'تمام شبکه‌ی شما،',
    titleAccent: 'در یک برنامه.',
    lead: 'لینک‌اپس دسکتاپ همه‌ی شبکه‌ی شما را در یک‌جا جمع می‌کند. به سوئیچ‌ها، روترها، فایروال‌ها و سرورها از طریق SSH، Telnet، Rlogin یا Raw TCP وصل شوید — ترمینال واقعی باز کنید، یک دستور را هم‌زمان روی چند دستگاه اجرا کنید، قالب‌های دستور پرتکرار را دوباره استفاده کنید، دستگاه‌ها را با دسته‌بندی رنگی مرتب کنید، پشتیبان‌گیری زمان‌بندی‌شده از کانفیگ داشته باشید و همیشه بدانید چه چیزی، کجا و کی اجرا شده است.',
    ctaPrimary: 'دانلود',
    ctaSecondary: 'مشاهده‌ی امکانات',
    guideLink: 'مطالعه‌ی راهنما',
    note: 'انگلیسی و فارسی · تم روشن و تیره',
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
    badges: ['SSH', 'Telnet', 'Rlogin', 'Raw TCP', 'ترمینال واقعی', 'اجرای گروهی']
  },
  features: {
    tag: '// امکانات',
    title: 'هرچه برای مدیریت شبکه لازم دارید، در یک ابزار',
    lead: 'هرچه برای مدیریت شبکه لازم دارید در یک‌جا — دیگر لازم نیست بین چند ابزار جابه‌جا شوید.',
    items: [
      {
        title: 'چهار راه اتصال',
        desc: 'SSH، Telnet، Rlogin و Raw TCP — برای هر دستگاه روش مناسبش را انتخاب کنید. Rlogin و Raw به اعتبارنامه نیاز ندارند و دستورها در هر چهار روش یکسان اجرا می‌شوند.',
        tag: 'protocols'
      },
      {
        title: 'فهرست دستگاه‌ها و دسته‌بندی',
        desc: 'همه‌ی دستگاه‌ها در یک فهرست، منظم‌شده در دسته‌های رنگی با آیکون — سویچ‌های یک منطقه، روترهای منطقه‌ی دیگر. کل ناوگان را در چند ثانیه جستجو، فیلتر و مرتب کنید.',
        tag: 'devices'
      },
      {
        title: 'ترمینال واقعی',
        desc: 'ترمینال کامل با خروجی رنگی، جستجوی زنده، ثبت زمان، کپی و دانلود؛ نشست‌های SSH و Telnet را کنار هم باز نگه دارید.',
        tag: 'sessions'
      },
      {
        title: 'حالت دسکتاپ سرور',
        desc: 'به سرور لینوکسی با SSH وصل شوید و آن را در یک نمای گرافیکی دوستانه مدیریت کنید — فایل‌ها، فرایندها، سرویس‌ها، بسته‌ها، لاگ‌ها و شبکه در یک نگاه.',
        tag: 'server'
      },
      {
        title: 'اجرای گروهی',
        desc: 'یک دستور را هم‌زمان روی چند نشست زنده اجرا کنید و خروجی هر دستگاه را کنار هم ببینید — هر وقت خواستید وسط اجرا متوقفش کنید.',
        tag: 'batch'
      },
      {
        title: 'قالب‌ها و گروه‌های دستور',
        desc: 'دستورهای پرتکرار را ذخیره کنید و با یک کلیک دوباره اجرا کنید؛ یا چند دستور را در یک دنباله‌ی منظم بچینید.',
        tag: 'commands'
      },
      {
        title: 'پشتیبان‌گیری کانفیگ',
        desc: 'ذخیره‌ی زمان‌بندی‌شده از کانفیگ دستگاه‌ها با تاریخچه‌ی نسخه‌ها و مقایسه‌ی کنارهم — هر تغییر خرابی همیشه دیده و قابل تشخیص است.',
        tag: 'backups'
      },
      {
        title: 'تاریخچه‌ی کامل',
        desc: 'هر دستوری که اجرا کنید ثبت می‌شود — چه چیزی، کجا، کی و چه نتیجه‌ای. هر وقت خواستید جستجو و خروجی بگیرید.',
        tag: 'history'
      },
      {
        title: 'انگلیسی و فارسی',
        desc: 'رابط کاملاً فارسی با چیدمان راست‌به‌چپ و ارقام فارسی، به‌همراه انگلیسی — جابه‌جایی آنی از تنظیمات.',
        tag: 'i18n'
      },
      {
        title: 'امنیت در اولویت',
        desc: 'رمزها و کلیدها توسط سیستم‌عامل شما رمزنگاری و ذخیره می‌شوند و هر دستور قبل از اجرا بررسی می‌شود.',
        tag: 'security'
      },
      {
        title: 'تم روشن و تیره',
        desc: 'هفت پالت رنگی، هرکدام با تم تیره و روشنِ شکیل — ظاهری که دوست دارید انتخاب کنید.',
        tag: 'themes'
      },
      {
        title: 'قفل برنامه و کاربران مشترک',
        desc: 'کل برنامه را با رمز عبور محافظت کنید و اعتبارنامه‌های مشترک را یک‌بار ذخیره کنید — یک‌جا تغییر دهید، همه‌ی دستگاه‌ها اعمال می‌شود.',
        tag: 'security'
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
      categories: 'دسته‌بندی‌ها',
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
        'جستجو، فیلتر و سازمان‌دهی ناوگان. برچسب‌ها، سازنده، مدل و نشان پروتکل (SSH / Telnet / Rlogin / Raw) روی هر ردیف.',
      categories:
        'دسته‌بندی‌های رنگی با آیکون — سویچ‌های یک منطقه، روترهای منطقه‌ی دیگر؛ و فیلتر کل ناوگان با یک کلیک.',
      terminal:
        'ترمینال تعاملی با خروجی رنگی، ثبت زمان، جستجوی زنده و قالب‌های آماده در دسترس.',
      batchRuns:
        'یک دستور روی چند نشست زنده به‌صورت موازی؛ با نتیجه‌ی هر دستگاه، کد خروج و گزارش قابل دانلود.',
      commands:
        'قالب‌های دستور با دسته‌بندی، انواع دستگاه سازگار و برچسب؛ به‌همراه گروه‌های ترتیبی.',
      groups:
        'پروفایل‌های ترتیبی: چند دستور show را در یک روال عیبیابی یک‌کلیکه بسته‌بندی کنید.',
      history:
        'گزارش کامل: هر دستور، دستگاه، نوع اجرا، مدت، کد خروج و خروجی؛ قابل جستجو و خروجی‌گیری.',
      settings:
        'ظاهر، هفت پالت رنگی، زبان، پیش‌فرض‌های SSH، رفتار ترمینال، گزارش‌گیری، ورود/خروجی داده‌ها و میانبرها.'
    }
  },
  protocols: {
    tag: '// اتصال',
    title: 'به روشی که تجهیزات‌تان نیاز دارند وصل شوید',
    lead: 'تجهیزات قدیمی و جدید در یک فهرست. پروتکل را برای هر دستگاه انتخاب کنید — بقیه‌اش با برنامه، و دستورها در هر چهار روش یکسان رفتار می‌کنند.',
    ssh: {
      title: 'SSH',
      points: [
        'اتصال امن و رمزنگاری‌شده — با تجهیزات قدیمی‌تر هم کار می‌کند',
        'ورود با رمز یا کلید خصوصی، با پشتیبانی از عبارت عبور',
        'اجرای سریع دستورها با نتیجه‌ی مطمئن روی سرورها',
        'نشست‌های طولانی را زنده نگه می‌دارد'
      ]
    },
    telnet: {
      title: 'Telnet',
      points: [
        'مناسب تجهیزاتی که از SSH پشتیبانی نمی‌کنند',
        'ورود خودکار: برنامه به پرامپت‌های ورود پاسخ می‌دهد',
        'مدیریت اتصال و تشخیص پرامپت به‌صورت خودکار',
        'جمع‌آوری خروجی تا بازگشت پرامپت و رد شدن خودکار از صفحه‌بندی --More--'
      ]
    },
    rlogin: {
      title: 'Rlogin',
      points: [
        'اتصال ساده برای میزبان‌های مورداعتماد',
        'بدون نیاز به رمز عبور — مدل میزبانِ مورداعتماد',
        'همان تشخیص پرامپت و ترمینال تعاملی Telnet',
        'پورت پیش‌فرض ۵۱۳، کاملاً قابل تنظیم'
      ]
    },
    raw: {
      title: 'Raw TCP',
      points: [
        'اتصال مستقیم برای کنسول‌سرورها و مبدل‌های سریال به شبکه',
        'لحظه‌ی باز شدن پورت وصل می‌شود — بدون دست‌دهی ورود',
        'تشخیص خودکار بنر و پرامپت',
        'همان مدیریت دستور مثل بقیه‌ی پروتکل‌ها'
      ]
    }
  },
  security: {
    tag: '// امنیت',
    title: 'ساخته‌شده برای امن ماندن روی شبکه‌ی شما',
    lead: 'برنامه با تجهیزات واقعی در ارتباط است؛ برای همین به‌درستی ساخته شده.',
    items: [
      {
        title: 'رابط کاربری ایزوله',
        desc: 'رابط جدا از موتوری اجرا می‌شود که با دستگاه‌های شما در ارتباط است؛ پس هرگز نمی‌تواند مستقیم به سیستم شما برسد.'
      },
      {
        title: 'همه‌چیز بررسی می‌شود',
        desc: 'هر درخواست و دستوری قبل از اجرا بررسی می‌شود — هیچ‌چیز کورکورانه پذیرفته نمی‌شود.'
      },
      {
        title: 'اعتبارنامه‌ها رمزنگاری‌شده می‌مانند',
        desc: 'رمزها و کلیدها توسط سیستم‌عامل شما رمزنگاری و ذخیره می‌شوند و هرگز به رابط برنمی‌گردند.'
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
    rights: 'تمامی حقوق محفوظ است.',
    developed: 'در حال توسعه توسط شرکت مخابرات البرز (ATC) و این برنامه‌نویس',
    developedShort: 'شرکت مخابرات البرز',
    heart: 'ساخته‌شده با دقت برای مهندسان شبکه'
  },
  pricing: {
    metaTitle: 'پلن‌ها — لینک‌اپس دسکتاپ',
    metaDescription:
      'هر دستگاه یک لایسنس. پلن ۳، ۶ یا ۱۲ ماهه انتخاب کنید — هرچه طولانی‌تر، صرفه‌جویی بیشتر. قیمت‌ها در نسخه‌ی فارسی به تومان و در نسخه‌ی انگلیسی به دلار نمایش داده می‌شوند.',
    tag: '// پلن‌ها',
    title: 'قیمت‌گذاری ساده و منصفانه',
    lead: 'هر دستگاه یک لایسنس. مدت‌اشتراک را خودتان انتخاب کنید — هرچه طولانی‌تر، صرفه‌جویی بیشتر.',
    popular: 'بهترین ارزش',
    perMonth: '≈ {{price}} در ماه',
    off: '٪{{pct}}−',
    save: '{{pct}}٪ تخفیف',
    buy: 'خرید {{name}}',
    includes: [
      'دسترسی کامل به برنامه — همه‌ی پروتکل‌ها',
      'اجرای گروهی، قالب‌ها و تاریخچه‌ی کامل',
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
      users: 'اعتبارنامه‌های مشترک',
      categories: 'دسته‌بندی‌ها',
      protocols: 'پروتکل‌ها',
      connect: 'اتصال و ترمینال',
      commands: 'اجرای دستور',
      batch: 'اجرای گروهی',
      server: 'دسکتاپ سرور',
      backups: 'پشتیبان‌گیری کانفیگ',
      history: 'تاریخچه و گزارش',
      settings: 'تنظیمات',
      lock: 'قفل برنامه',
      update: 'به‌روزرسانی'
    },
    sections: {
      overview: {
        title: 'آشنایی',
        intro:
          'لینک‌اپس دسکتاپ برنامه‌ای است که کل شبکه‌ی شما را در یک‌جا جمع می‌کند. هر سوئیچ، روتر، فایروال و سروری — از طریق SSH، Telnet، Rlogin یا Raw TCP — از یک پنجره مدیریت می‌شود: نشست‌های ترمینال واقعی، اجرای یک دستور روی چند دستگاه هم‌زمان، قالب‌های دستور قابل‌استفاده‌ی مجدد، پشتیبان‌گیری زمان‌بندی‌شده از کانفیگ و تاریخچه‌ی کامل همه‌ی کارها.',
        steps: [
          'برنامه را برای ویندوز یا لینوکس نصب و با کلید لایسنس خود فعال کنید.',
          'دستگاه‌ها را یک‌بار اضافه کنید: نام، آدرس، اعتبارنامه و پروتکل.',
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
          'سیستم‌عامل خود را در صفحه‌ی اصلی انتخاب کنید. ویندوز از یک نصب‌کننده استفاده می‌کند و لینوکس یک بسته‌ی .deb برای دبیان/اوبونتو و یک AppImage برای هر توزیعی دارد.',
        steps: [
          'ویندوز: فایل LinkOPS.Desktop.Setup.2.0.0.exe را اجرا کنید، مراحل نصب را دنبال کنید و از منوی استارت برنامه را باز کنید.',
          'لینوکس (.deb): با apt نصب کنید و با دستور linkops-desktop اجرا کنید.',
          'لینوکس (AppImage): فایل را قابل‌اجرا کنید و مستقیم اجرا کنید — نیازی به نصب نیست.',
          'مک‌اواس: فایل .dmg را باز کنید و لینک‌اپس دسکتاپ را به پوشه‌ی Applications بکشید.',
          'در اولین اجرا، صفحه‌ی فعال‌سازی نمایش داده می‌شود. کلید لایسنس خود را وارد کنید؛ تا وارد کردن کلید معتبر، برنامه قفل می‌ماند.',
          'وضعیت لایسنس (نام مشتری و تاریخ انقضا) در تنظیمات → لایسنس قابل مشاهده است. وقتی کمتر از ۷ روز باقی بماند، برنامه هشدار می‌دهد.'
        ],
        terminal: [
          {
            title: '.deb — دبیان / اوبونتو',
            lines: ['sudo apt install ./linkops-desktop_2.0.0_amd64.deb', 'linkops-desktop']
          },
          {
            title: 'AppImage — هر توزیعی',
            lines: ['chmod +x LinkOPS.Desktop-2.0.0.AppImage', './LinkOPS.Desktop-2.0.0.AppImage']
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
          'برای استفاده‌ی مجدد از اعتبارنامه‌های ذخیره‌شده در بخش کاربران، روش احراز هویت را روی «کاربر ذخیره‌شده» بگذارید — نام کاربری و رمز از همان پروفایل خوانده می‌شود و دیگر آن‌ها را دوباره تایپ نمی‌کنید.',
          'اختیاری: برچسب‌ها، گروه، سازنده/مدل/موقعیت، ناوگان بزرگ را قابل جستجو و فیلتر می‌کند.'
        ],
        notes: [
          { type: 'tip', text: 'نوع دستگاه را با دقت انتخاب کنید: تجهیزات شبکه (سوئیچ، روتر، OLT، فایروال…) دستورها را از طریق شل تعاملی با تشخیص پرامپت اجرا می‌کنند — دقیقاً مثل تایپ دستی — در حالی که سرورها از کانال سریع exec استفاده می‌کنند.' },
          { type: 'note', text: 'رمزها و کلیدهای خصوصی توسط سیستم‌عامل شما رمزنگاری و به‌صورت امن ذخیره می‌شوند — هرگز به‌صورت متن ساده.' }
        ]
      },
      users: {
        title: 'اعتبارنامه‌های مشترک (کاربران)',
        intro:
          'بیشتر ناوگان‌ها روی چندین دستگاه از یک نام کاربری و رمز استفاده می‌کنند. هر مجموعه اعتبارنامه را یک‌بار در بخش کاربران ذخیره کنید و از هر دستگاهی به آن ارجاع بدهید — یک‌جا تغییرش دهید و همه‌ی دستگاه‌هایی که از آن استفاده می‌کنند خودکار رمز جدید را می‌گیرند.',
        steps: [
          'بخش کاربران را باز کنید و «افزودن کاربر» را بزنید.',
          'به پروفایل یک برچسب بدهید (مثلاً «ادمین سوئیچ‌های اکسس»)، نام کاربری و رمز عبور را وارد کنید — یا کلید خصوصی را با عبارت عبور اختیاری بچسبانید.',
          'در فرم دستگاه، به‌جای تایپ دستی اعتبارنامه، حالت «کاربر ذخیره‌شده» را انتخاب کنید. نام کاربری از همان پروفایل می‌آید و دیگر در فرم دستگاه پرسیده نمی‌شود.',
          'پروفایل را یک‌بار به‌روزرسانی کنید؛ همه‌ی دستگاه‌هایی که به آن ارجاع می‌دهند از اعتبارنامه‌ی جدید استفاده می‌کنند.',
          'وقتی پروفایل را حذف کنید، دستگاه‌هایی که از آن استفاده می‌کردند به حالت دستی برمی‌گردند — چیزی خراب نمی‌شود، فقط باید اعتبارنامه‌ی جدید بدهید.'
        ],
        notes: [
          { type: 'note', text: 'پروفایل‌ها دقیقاً مثل اعتبارنامه‌های هر دستگاه با گاوصندوق سیستم‌عامل رمزنگاری می‌شوند و هرگز به رابط کاربری برنمی‌گردند.' },
          { type: 'tip', text: 'پروفایل‌ها را بر اساس نقش یا سطح دسترسی نام‌گذاری کنید (مثلاً «netops-admin»، «backup-ro») تا مشخص باشد هر دستگاه از چه حسابی استفاده می‌کند.' }
        ]
      },
      categories: {
        title: 'دسته‌بندی دستگاه‌ها',
        intro:
          'دسته‌بندی‌ها پوشه‌های رنگی فهرست دستگاه‌های شما هستند. سویچ‌های یک منطقه را کنار هم بگذارید، روترهای منطقه‌ی دیگر را — هر دسته یک نام، یک آیکون Lucide و یک رنگ می‌گیرد تا با یک نگاه بدانید هر دستگاه کجاست.',
        steps: [
          'از نوار کناری، «دسته‌بندی‌ها» را باز کنید — صفحه هر دسته را به‌صورت کارت رنگی با آیکون و تعداد دستگاه نشان می‌دهد.',
          '«دسته‌ی جدید» را بزنید، نام بدهید و از گالری آیکون و رنگ‌ها انتخاب کنید؛ پیش‌نمایش زنده‌ی بج انتخاب شما را نشان می‌دهد.',          'برگردید به دستگاه‌ها و در فرم دستگاه، دسته‌ی آن را انتخاب کنید — بج آیکون رنگی در جدول و فیلترها نمایش داده می‌شود.',
          'روی کارت یک دسته کلیک کنید تا به صفحه‌ی دستگاه‌ها با فیلتر همان دسته بروید.',
          'حذف یک دسته دستگاه‌ها را نگه می‌دارد — فقط بدون دسته می‌شوند و همه‌ی تنظیماتشان حفظ می‌شود.'
        ],
        notes: [
          { type: 'tip', text: 'دسته‌ها را بر اساس توپولوژی واقعی‌تان نام‌گذاری کنید: «هسته»، «شاخه»، «آزمایشگاه» یا نام یک منطقه — بعد کل ناوگان را با یک کلیک فیلتر کنید.' }
        ]
      },
      protocols: {
        title: 'پروتکل‌ها: SSH، Telnet، Rlogin و Raw',
        intro:
          'هر دستگاه یک پروتکل می‌گیرد. SSH برای هرچه مدرن است، Telnet برای تجهیزات قدیمی، Rlogin برای میزبان‌های مورداعتماد و Raw TCP برای کنسول‌سرورها و مبدل‌های سریال به شبکه. هر کدام را انتخاب کنید، دستورها با همان موتور هوشمند تشخیص پرامپت اجرا می‌شوند.',
        steps: [
          'در فرم دستگاه پروتکل را انتخاب کنید: SSH (۲۲)، Telnet (۲۳)، Rlogin (۵۱۳) یا Raw TCP (پیش‌فرض ۲۳) — پورت پیش‌فرض خودکار پر می‌شود و قابل ویرایش است.',
          'Rlogin و Raw TCP به اعتبارنامه نیاز ندارند: Rlogin از مدل میزبانِ مورداعتماد وصل می‌شود و Raw لحظه‌ی باز شدن پورت.',
          'برای Rlogin هنوز نام کاربری لازم است — ارسال می‌شود تا میزبان شما را تأیید کند.',
          'بج پروتکل روی هر ردیف دستگاه و کارت نشست نشان می‌دهد کدام پروتکل در جریان است.',
          'بقیه‌ی چیزها — آماده‌سازی دستگاه، خاموش‌کردن صفحه‌بندی خروجی، ارتقای سطح دسترسی و پاسخ به تأییدیه‌ها — روی هر چهار پروتکل یکسان کار می‌کند.'
        ],
        notes: [
          { type: 'tip', text: 'کنسول‌سرورها و مبدل‌های سریال معمولاً Raw TCP هستند — به پورت‌شان وصل شوید و کنسول دستگاه را مستقیم بگیرید.' },
          { type: 'note', text: 'SSH همچنان انتخاب اول است: رمزنگاری‌شده است. Telnet، Rlogin یا Raw را فقط جایی استفاده کنید که تجهیزات مجبورتان می‌کنند.' }
        ]
      },
      connect: {
        title: 'اتصال و ترمینال',
        intro:
          'نشست‌ها یک ترمینال واقعی در اختیارتان می‌گذارند — خروجی رنگی، ثبت زمان، جستجوی زنده، کپی و دانلود لاگ — برای SSH، Telnet، Rlogin و Raw.',
        steps: [
          'صفحه‌ی نشست‌ها را باز کنید و «اتصال به دستگاه» را بزنید، سپس دستگاه را از فهرست انتخاب کنید.',
          'نشست با یک ترمینال باز می‌شود — دقیقاً مثل هر کلاینت SSH دستور بزنید.',
          'چند نشست را کنار هم باز نگه دارید — هرکدام نشان وضعیت زنده دارد (در حال اتصال، متصل، در حال اجرا، خطا) و نشان پروتکل.',
          'وقتی برای دستگاه اتصال مجدد خودکار فعال باشد، نشست قطع‌شده خودکار دوباره وصل می‌شود — ترمینال و تاریخچه‌اش زنده می‌مانند.',
          'اگر نشستی روی حالت خطا/در حال اتصال مجدد گیر کرد، دکمه‌ی «اتصال مجدد» را در صفحه‌ی نشست یا فهرست نشست‌ها بزنید — با همان شناسه‌ی نشست دوباره وصل می‌شود.',
          'از نوار ابزار برای جستجوی خروجی، ثبت زمان، تغییر اندازه‌ی فونت، پاک کردن بافر، کپی یا دانلود فایل .log استفاده کنید.',
          'اعتبارنامه‌ها به‌صورت خودکار از حافظه‌ی رمزنگاری‌شده پر می‌شوند و هیچ‌چیز به‌صورت متن ساده نگهداری نمی‌شود.'
        ],
        notes: [
          { type: 'tip', text: 'چند نشست را کنار هم باز نگه دارید — هرکدام نشان وضعیت زنده دارد (در حال اتصال، متصل، در حال اجرا، خطا) و نشان پروتکل.' },
          { type: 'note', text: 'داخل ترمینال Ctrl+F را بزنید تا خروجی آنی جستجو شود و با ↑ / ↓ دستورهای قبلی را مرور کنید.' }
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
          'قبل از اولین دستور خودکار روی سوئیچ یا روتر، برنامه دستگاه را برایتان آماده می‌کند: صفحه‌بندی خروجی را خاموش می‌کند، وقتی دستگاه پشتیبانی کند سطح دسترسی را ارتقا می‌دهد و به تأییدیه‌ها خودکار پاسخ می‌دهد — پس یک گروه «conf t» دقیقاً مثل این اجرا می‌شود که خودتان تایپش کرده باشید.',
          'خطاهای CLI زود تشخیص داده می‌شوند: «% Invalid input» یا «% Access denied» اجرا را با پیام خود دستگاه ناموفق می‌کنند، نه اینکه بی‌صدا با خروجی ناقص «موفق» شمرده شود.',
          'نتیجه به‌صورت زنده در ترمینال نمایش داده می‌شود و نسخه‌ای از آن با کد خروج و مدت اجرا در تاریخچه ذخیره می‌شود.'
        ],
        terminal: [
          {
            title: 'نشست زنده',
            lines: ['$ show version', 'Cisco IOS XE Software, Version 17.9.4a', 'System restarted at 02:14:33 UTC Tue Aug 11 2026', 'SW1#']
          }
        ],
        notes: [
          { type: 'tip', text: 'خروجی‌های طولانی هرگز گیر نمی‌کنند: صفحه‌بندی --More-- خودکار ادامه می‌یابد و دستور وقتی پرامپت شل برگردد تمام‌شده در نظر گرفته می‌شود.' },
          { type: 'note', text: 'اگر دستوری timeout شود، برنامه آن را قطع می‌کند (Ctrl+C) تا دستور بعدی هرگز روی پرامپت خراب تایپ نشود — شل برایتان بازیابی می‌شود.' },
          { type: 'warning', text: 'گروه‌های دستور روی تجهیزات شبکه به‌صورت کاملاً ترتیبی اجرا می‌شوند — هر دستور منتظر پایان قبلی می‌ماند، پس «conf t» و دستور interface بعد از آن دقیقاً مثل تایپ دستی کار می‌کند.' }
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
          { type: 'note', text: 'اجرای گروهی به نشست‌های زنده نیاز دارد — اول به دستگاه‌ها متصل شوید، بعد آن‌ها را در صفحه‌ی نشست‌ها انتخاب کنید.' },
          { type: 'tip', text: 'نشست‌هایی که وسط اجرا قطع شوند با اعتبارنامه‌ی ذخیره‌شده‌ی دستگاه دوباره وصل می‌شوند؛ پس اجرای گروهی از یک لینک ناپایدار هم جان سالم به در می‌برد.' }
        ]
      },
      server: {
        title: 'حالت دسکتاپ سرور',
        intro:
          'برای سرورهای لینوکسی، ترمینال دیگر اختیاری است. روی نشست زنده‌ی یک سرور دکمه‌ی «دسکتاپ» را بزنید و لینک‌اپس یک کنسول گرافیکی دوستانه روی همان اتصال SSH باز می‌کند — فایل‌ها را مرور کنید، فرایندها را ببینید، سرویس‌ها را مدیریت کنید، بسته نصب کنید، لاگ دنبال کنید و شبکه را در یک نگاه ببینید.',
        steps: [
          'مثل همیشه به یک سرور لینوکسی وصل شوید (SSH، نوع دستگاه «سرور») و سپس دکمه‌ی «دسکتاپ» را در هدر نشست بزنید.',
          'نمای کلی: مصرف CPU/حافظه/دیسک و مشخصات پایه‌ی سیستم در یک نگاه.',
          'فایل‌ها: مرور و دانلود فایل از طریق SFTP — مدیر فایل روی همان اتصال زنده کار می‌کند.',
          'فرایندها و سرویس‌ها: فهرست فرایندهای در حال اجرا و سرویس‌ها را ببینید، جستجو و بررسی کنید.',
          'بسته‌ها: بسته‌های نصب‌شده و مدیر بسته در حال استفاده (apt / dnf / apk / pacman) را ببینید.',
          'لاگ‌ها: خط‌های اخیر لاگ‌های سیستم را با جعبه‌ی جستجو دنبال کنید و از منوی کشویی فایل لاگ را عوض کنید.',
          'شبکه: اینترفیس‌ها، آدرس‌ها و مسیریابی — تصویر سریعی از سلامت سرور.',
          'هر وقت خواستید ترمینال فقط یک کلیک با صفحه‌ی نشست فاصله دارد.'
        ],
        notes: [
          { type: 'note', text: 'دسکتاپ سرور از همان اتصال SSH می‌خواند — هیچ‌چیز اضافه‌ای روی سرور نصب نمی‌شود و با یک سرور SSH استاندارد همه‌چیز کار می‌کند.' },
          { type: 'tip', text: 'برای کارهای روزمره از حالت دسکتاپ و برای دستورهای یک‌باره از ترمینال استفاده کنید — هر دو روی همان نشست زنده کار می‌کنند.' }
        ]
      },
      backups: {
        title: 'پشتیبان‌گیری کانفیگ',
        intro:
          'کانفیگ هر دستگاه، حقیقت اصلی آن است. لینک‌اپس از هر دستگاه در زمان‌بندی مشخص snapshot می‌گیرد، تاریخچه‌ی نسخه‌ها را نگه می‌دارد و بین هر دو snapshot تفاوت خط‌به‌خط نشان می‌دهد — تا هر تغییر خرابی همیشه دیده و قابل بازیابی باشد.',
        steps: [
          'از نوار کناری، «پشتیبان‌گیری کانفیگ» را باز کنید.',
          'در فرم دستگاه، «پشتیبان‌گیری خودکار کانفیگ» را فعال کنید. فاصله و سقف نگه‌داری در تنظیمات ← پشتیبان‌گیری کانفیگ است (پیش‌فرض: هر ۲۴ ساعت، نگه‌داشتن ۳۰ نسخه‌ی آخر).',
          'دستور پشتیبان‌گیری خودکار بر اساس سازنده انتخاب می‌شود — سیسکو «show running-config»، هوآوی «display current-configuration»، جونیپر «show configuration»، میکروتیک «/export» و…',
          'با «اجرا همین حالا» می‌توانید درخواستی snapshot بگیرید. کانفیگ‌های بدون تغییر ذخیره نمی‌شوند (dedup) تا دستگاه‌های ساکت تاریخچه را پر نکنند.',
          'دو snapshot را انتخاب کنید تا تفاوت خط‌به‌خط (+ اضافه‌شده / − حذف‌شده) را ببینید؛ هر snapshot را کپی یا دانلود کنید.'
        ],
        notes: [
          { type: 'tip', text: 'پشتیبان‌ها در دیتابیس ذخیره می‌شوند — اگر وسط پشتیبان‌گیری برنامه بسته شود، اجرا از بین نمی‌رود.' },
          { type: 'warning', text: 'بازیابی یک قدم دستی است: تفاوت را مقایسه کنید و کانفیگ را با روند تغییرات عادی‌تان اعمال کنید. لینک‌اپس هیچ‌وقت کانفیگ را به دستگاه push نمی‌کند.' }
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
          'ظاهر: تم (روشن / تیره / سیستم) و یکی از هفت پالت رنگی — کلاسیک، اقیانوس، جنگل، نیمه‌شب، غروب، شفق یا گرافیت.',
          'زبان: انگلیسی یا فارسی با RTL کامل و ارقام فارسی — در اولین اجرا زبان فارسی سیستم‌عامل به‌صورت خودکار تشخیص داده می‌شود.',
          'SSH: زمان‌سنج اتصال و فاصله‌ی keep-alive برای نشست‌های طولانی.',
          'ترمینال: اندازه‌ی فونت پیش‌فرض، ثبت زمان، اسکرول خودکار.',
          'امنیت: تنظیم (یا حذف) رمز قفل برنامه.',
          'داده‌ها: ورود/خروجی دستگاه‌ها از CSV و مدیریت لاگ‌ها.',
          'لایسنس: مشاهده‌ی وضعیت، تاریخ انقضا و اثرانگشت دستگاه.',
          'میانبرهای صفحه‌کلید در تنظیمات لیست شده‌اند — با Ctrl/⌘+/ پنجره‌ی میانبرها را باز کنید یا از پالت فرمان (Ctrl+K) برای کارهای سریع استفاده کنید.'
        ],
        notes: [
          { type: 'tip', text: 'پالت فرمان (Ctrl+K) سریع‌ترین راه برای پرش به هر جاست: تغییر پالت، باز کردن تنظیمات، اتصال به دستگاه یا اجرای قالب.' }
        ],
        table: {
          title: 'میانبرهای صفحه‌کلید',
          headers: ['عمل', 'میانبر'],
          rows: [
            ['باز کردن پالت فرمان', 'Ctrl/⌘+K'],
            ['باز کردن راهنمای میانبرها', 'Ctrl/⌘+/'],
            ['باز کردن تنظیمات', 'Ctrl/⌘+,'],
            ['باز کردن تنظیمات (جایگزین)', 'Ctrl/⌘+Shift+P'],
            ['افزودن دستگاه جدید', 'Ctrl/⌘+N'],
            ['جستجو در ترمینال', 'Ctrl/⌘+F'],
            ['قفل کردن برنامه', 'Ctrl/⌘+Shift+L']
          ]
        }
      },
      lock: {
        title: 'قفل برنامه',
        intro:
          'کل برنامه را با یک رمز عبور محافظت کنید. یک‌بار در تنظیمات ← امنیت رمز بگذارید و از آن به بعد برنامه در هر اجرا رمز می‌خواهد — و هر لحظه با یک کلیک یا Ctrl/⌘+Shift+L می‌توانید قفلش کنید.',
        steps: [
          'تنظیمات ← امنیت را باز کنید و یک رمز قفل بگذارید.',
          'از این به بعد برنامه قفل‌شده شروع می‌شود و قبل از نمایش هر دستگاه، نشست یا تنظیماتی رمز می‌خواهد.',
          'هر وقت خواستید با دکمه‌ی قفل در نوار بالا یا Ctrl/⌘+Shift+L قفل کنید.',
          'با وارد کردن رمز باز می‌شود؛ رمز اشتباه باعث لرزش صفحه می‌شود تا بدانید ناموفق بوده.',
          'با پاک کردن رمز در تنظیمات ← امنیت، قفل را بردارید.'
        ],
        notes: [
          { type: 'warning', text: 'رمز هرگز ذخیره نمی‌شود — فقط یک نسخه‌ی امن از آن ذخیره می‌شود. اگر فراموشش کنید، تنها راه حذف قفل، بازنشانی داده‌های برنامه است.' },
          { type: 'tip', text: 'قفل کردن همه‌چیز را پشت یک صفحه‌ی متحرک تمیز پنهان می‌کند — برای وقتی که از یک سیستم مشترک کنار می‌روید عالی است.' }
        ]
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
    lead: 'سیستم‌عامل خود را انتخاب کنید و در کمتر از یک دقیقه نصب کنید. ویندوز، لینوکس و مک‌اواس پشتیبانی می‌شوند.',
    version: 'نسخه {{version}}',
    help: 'راهنما لازم دارید؟ آموزش نصب را ببینید',
    windows: {
      name: 'ویندوز',
      file: 'نصب‌کننده (.exe)',
      cta: 'دانلود نصب‌کننده',
      stepsTitle: 'نصب',
      steps: [
        'فایل LinkOPS.Desktop.Setup.2.0.0.exe را اجرا کنید و مراحل نصب‌کننده را دنبال کنید',
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
          'sudo apt install ./linkops-desktop_2.0.0_amd64.deb',
          'linkops-desktop'
        ]
      },
      appImage: {
        name: 'AppImage',
        file: 'هر توزیع لینوکسی',
        cta: 'دانلود AppImage',
        stepsTitle: 'اجرا',
        steps: [
          'chmod +x LinkOPS.Desktop-2.0.0.AppImage',
          './LinkOPS.Desktop-2.0.0.AppImage'
        ]
      }
    },
    mac: {
      name: 'مک‌اواس',
      file: 'نصب‌کننده (.dmg)',
      cta: 'دانلود .dmg',
      stepsTitle: 'نصب',
      steps: [
        'فایل LinkOPS.Desktop-2.0.0.dmg دانلودشده را باز کنید',
        'لینک‌اپس دسکتاپ را به پوشه‌ی Applications بکشید',
        'از Launchpad یا پوشه‌ی Applications اجرا کنید'
      ]
    },
    note: 'دانلود رایگان — بدون نیاز به ثبت‌نام.'
  },
  changelog: {
    metaTitle: 'بروزرسانی‌ها — لینک‌اپس دسکتاپ',
    metaDescription:
      'یادداشت‌های انتشار لینک‌اپس دسکتاپ: چه چیزهایی در هر نسخه تغییر کرده، از آخرین به‌روزرسانی تا نسخه‌ی اول.',
    tag: '// یادداشت‌های انتشار',
    title: 'تازه‌های لینک‌اپس دسکتاپ',
    lead: 'هر به‌روزرسانی یک نسخه‌ی جدید است. همه‌ی آنچه منتشر شده، از جدید به قدیم.',
    latest: 'جدیدترین',
    previous: 'نسخه‌های قبلی',
    downloadLatest: 'دانلود آخرین نسخه',
    downloadHint: 'نصب‌کننده‌های ویندوز · لینوکس · مک'
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
          'رمزها و کلیدهای خصوصی دستگاه‌ها توسط سیستم‌عامل شما رمزنگاری و به‌صورت امن ذخیره می‌شوند و هرگز به‌صورت متن ساده نگهداری یا ارسال نمی‌شوند.'
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
