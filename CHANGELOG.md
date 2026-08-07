# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-08-07

### Added

- Restructured Treatment Catalog to use an inline side-drawer form rather than a separate page.
- Implemented robust `is_super_admin` checks, hiding sensitive maintenance and configuration tools from standard administrators.

- Fully automated, secure, in-place background updater using a compiled `updater.exe` and `go:embed`.
- Role-based `system.update` permission to restrict update installations to administrators only.
- Live download progress bar UI on the About page during updates.
- Global dashboard notification banner for available updates.
- Refactored `window.confirm` dialogs to use beautiful SweetAlert2 UI in `AboutPage.tsx`.
- Automated `.env` configuration file generation with a strong cryptographic `JWT_SECRET` on fresh installs.
- Enhanced default out-of-the-box security by locking the default `listen_mode` to `localhost` and `ALLOW_ORIGINS` to `http://localhost:8880`.
- Smart network interface printing in console to hide other IPs when in localhost mode.
- Advanced `sync_version.ps1` script to allow parameter-based version bumping and synchronization.

### Fixed

- Resolved React Hook linting errors (`set-state-in-effect` and `exhaustive-deps`) in the About page.
- Removed legacy 10-year development auto-license generation to ensure fresh installs require valid activation.
- Fixed a highly-concurrent SQLite race condition (`UNIQUE constraint failed: settings.setting_key`) during anti-tamper UPSERT initialization using `gorm.clause.OnConflict`.

## [1.0.1] - 2026-08-07

### Added

- Implemented robust GitHub Releases update mechanism.

### Fixed

- Fixed layout grid rendering issue on the About page.

## [1.0.0] - 2026-08-07

### Added

- Initial stable release of DentalPro.
- Complete dental clinic management system including Patients, Appointments, and Doctors.
- Advanced billing, invoicing, and expenses management.
- Comprehensive inventory management.
- Dynamic side drawers for forms and data entry.
- License generation and verification system.
- Audit logs for security and tracking.
- Localization support (English and Arabic).
- System hardening and security improvements (Rate limiting, CORS, input sanitization).
