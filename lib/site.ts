/**
 * Site-level configuration.
 *
 * Download links — the vendor sets these. Either edit the fallbacks below,
 * or (better) set the NEXT_PUBLIC_* environment variables in Vercel so the
 * same build can be reused across projects:
 *
 *   NEXT_PUBLIC_APP_VERSION              e.g. "1.0.0"      (shown on the cards)
 *   NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS     direct .exe link
 *   NEXT_PUBLIC_DOWNLOAD_URL_LINUX_DEB   direct .deb link
 *   NEXT_PUBLIC_DOWNLOAD_URL_LINUX_APPIMAGE  direct AppImage link
 *
 * Until a real URL is configured the per-format button renders as a disabled
 * "Coming soon" state — replace the value and rebuild/redeploy.
 */

/** App version badge shown on the download cards. */
export const APP_VERSION: string = process.env.NEXT_PUBLIC_APP_VERSION ?? '1.0.0'

export interface OsDownload {
  /** Direct link to the installer for this OS ('' until configured). */
  url: string
}

/**
 * License plans shown in the #pricing section. Prices are per license.
 * Each plan carries both USD and Toman (IRR) prices: the site shows USD in
 * English and Toman in Persian. Set NEXT_PUBLIC_PURCHASE_URL to point every
 * “Buy” button at your checkout (until then they scroll to the download
 * section).
 */
export interface Plan {
  id: '3m' | '6m' | '12m'
  months: number
  /** Full price for the term, USD. */
  price: number
  /** Strikethrough price (what the term would cost at the 3-month rate), USD. */
  compareAt: number
  /** Full price for the term, Toman (Persian UI). */
  priceToman: number
  /** Strikethrough price, Toman. */
  compareAtToman: number
  /** Percent off vs. compareAt, shown as a badge on the featured plan. */
  discount: number
  featured: boolean
}

export const PLANS: Plan[] = [
  {
    id: '3m',
    months: 3,
    price: 14.99,
    compareAt: 14.99,
    priceToman: 1_490_000,
    compareAtToman: 1_490_000,
    discount: 0,
    featured: false
  },
  {
    id: '6m',
    months: 6,
    price: 24.99,
    compareAt: 29.98,
    priceToman: 2_490_000,
    compareAtToman: 2_990_000,
    discount: 17,
    featured: false
  },
  {
    id: '12m',
    months: 12,
    price: 39.99,
    compareAt: 59.96,
    priceToman: 3_990_000,
    compareAtToman: 5_990_000,
    discount: 33,
    featured: true
  }
]

/** Currency symbol used in the English pricing section. */
export const CURRENCY = process.env.NEXT_PUBLIC_CURRENCY ?? '$'

/** Currency label used in the Persian pricing section. */
export const CURRENCY_FA = process.env.NEXT_PUBLIC_CURRENCY_FA ?? 'تومان'

/** Checkout link for the “Buy” buttons ('' → buttons scroll to #download). */
export const PURCHASE_URL: string = process.env.NEXT_PUBLIC_PURCHASE_URL ?? ''

export const DOWNLOADS = {
  windows: {
    url:
      process.env.NEXT_PUBLIC_DOWNLOAD_URL_WINDOWS ??
      'https://zerfour.files.ir/filesir/uploads/d2e7a7cd-b91f-46a4-bd7d-b320670027e1/d2e7a7cd-b91f-46a4-bd7d-b320670027e1?response-content-type=application%2Foctet-stream&response-content-disposition=attachment%3Bfilename%3DLinkOPS%2520Desktop%2520Setup%25201.0.0.exe&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=q2DzOfyFs0ZXawLWsrPyQHGQ1dc8%2F20260815%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260815T091540Z&X-Amz-SignedHeaders=host&X-Amz-Expires=2469&X-Amz-Signature=9519ba3e918380d765f3e2739a01919277d93cae7d85ff9e55ede924e37e13e2'
  },
  linux: {
    deb: {
      url:
        process.env.NEXT_PUBLIC_DOWNLOAD_URL_LINUX_DEB ??
        'https://github.com/Mhyar-nsi/LinkOPS-Desktop/releases/download/v1.0.0/linkops-desktop_1.0.0_amd64.deb'
    },
    appImage: {
      url:
        process.env.NEXT_PUBLIC_DOWNLOAD_URL_LINUX_APPIMAGE ??
        'https://github.com/Mhyar-nsi/LinkOPS-Desktop/releases/download/v1.0.0/LinkOPS.Desktop-1.0.0.AppImage'
    }
  }
} as const

/**
 * Every primary "Download" button across the site anchors to the #download
 * section, where the visitor picks their OS.
 */
export const DOWNLOAD_URL = '#download'
