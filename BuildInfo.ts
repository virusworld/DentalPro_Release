export interface ReleaseInfo {
  version: string;
  date: string;
  features: string[];
  fixes: string[];
}

export const buildHistory: ReleaseInfo[] = [
  {
    version: '1.0.2',
    date: '2026-08-07',
    features: [
      'Restructured Treatment Catalog to use an inline side-drawer form rather than a separate page.',
      'Implemented robust is_super_admin checks, hiding sensitive maintenance and configuration tools from standard administrators.',
      'Fully automated, secure background updater using compiled executable.',
      'Role-based system.update permission to restrict updates to administrators.',
      'Live download progress UI on the About page.',
      'Global dashboard notification banner for available updates.',
      'Refactored confirmation dialogs to use beautiful SweetAlert2 UI.',
      'Automated .env configuration file generation with a strong cryptographic JWT_SECRET.',
      'Enhanced default out-of-the-box security by locking listen_mode to localhost.',
      'Smart network interface printing in console to hide other IPs in localhost mode.',
      'Advanced sync_version script to allow parameter-based version synchronization.'
    ],
    fixes: [
      'Resolved React Hook linting errors in the About page.',
      'Removed legacy development auto-license generation for fresh production installs.',
      'Fixed SQLite highly-concurrent race conditions during anti-tamper UPSERT initialization.'
    ]
  },
  {
    version: '1.0.1',
    date: '2026-08-07',
    features: [
      'Implemented GitHub Releases System Update mechanism.'
    ],
    fixes: [
      'Fixed layout grid in About Page.'
    ]
  },
  {
    version: '1.0.0',
    date: '2026-08-07',
    features: [
      'Initial stable release of DentalPro.',
      'Complete dental clinic management system including Patients, Appointments, and Doctors.',
      'Advanced billing, invoicing, and expenses management.',
      'Comprehensive inventory management.',
      'Dynamic side drawers for forms and data entry.',
      'License generation and verification system.',
      'Audit logs for security and tracking.',
      'Localization support (English and Arabic).'
    ],
    fixes: [
      'System hardening and security improvements (Rate limiting, CORS, input sanitization).'
    ]
  }
];

export const currentBuild = buildHistory[0];
