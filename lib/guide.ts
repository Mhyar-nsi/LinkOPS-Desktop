/**
 * Guide sections and their routing. Each section is its own page:
 *   overview → /guide
 *   others   → /guide/<slug>
 */
export const SECTION_ORDER = [
  'overview',
  'install',
  'devices',
  'users',
  'connect',
  'commands',
  'batch',
  'backups',
  'history',
  'settings',
  'lock',
  'update'
] as const

export type SectionId = (typeof SECTION_ORDER)[number]

export function sectionHref(id: SectionId): string {
  return id === 'overview' ? '/guide' : `/guide/${id}`
}

export function isSectionId(value: string): value is SectionId {
  return (SECTION_ORDER as readonly string[]).includes(value)
}
