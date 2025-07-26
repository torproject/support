---
title: Privacy Policy
layout: default
permalink: /privacy/
---

# Privacy Policy for Tor Browser for Desktop, Tor Browser for Android, and TorVPN

**Effective Date:** July 26, 2025

This privacy policy covers:

- **Tor Browser for Android**
- **Tor Browser for Desktop**
- **TorVPN**

It explains how each application accesses, collects, uses, and shares user data.

---

## 1. Developer & Contact Information

**Developer:** The Tor Project, Inc.
**Website:** [https://www.torproject.org](https://www.torproject.org)
**Support/Inquiries:** [https://support.torproject.org/](https://support.torproject.org/)
**Privacy Contact Email:** frontdesk@torproject.org

---

## 2. Shared Privacy Principles

We design all Tor applications to maximize user privacy and anonymity:
- **No collection of personal or sensitive user data**
- **No tracking, telemetry, or analytics**
- **No user accounts or identity linkage**
- Open-source and privacy-by-design

---

## 3. Application-Specific Data Practices

### Tor Browser (Android & Desktop)
- Does **not collect IP addresses, browsing history, device IDs, or location**
- All connections routed through the Tor network for anonymity
- **Temporary session cache only**, cleared on exit or "New Identity"

### TorVPN
- **No user sign-in, tracking, or identity linkage**
- **No telemetry or usage logging**
- Local-only session stats (duration, bandwidth), discarded after session
- No access to contacts, files, or personal identifiers

In order to provide user control and customization, TorVPN stores certain user-configured settings locally on the device. These may include:

- Selected bridge relays or custom bridge configurations
- Exit node preferences (e.g., country selection)
- Per-app routing rules (which apps should or should not be routed over Tor)

These settings are:
- Stored **only on the user’s device**
- **Never transmitted** to The Tor Project or any third party
- **Not linked to identity** or device information

Users may delete or reset these preferences at any time via the app settings or by uninstalling the app.

---

## 4. Permissions (Android)

**Tor Browser for Android:**
- `INTERNET` — to route through the Tor network
- `FOREGROUND_SERVICE` — to maintain active connections

Tor Browser for Android does not request access to:
- Contacts
- Location
- Camera, microphone, or sensors
- Device identifiers (e.g. IMEI, Android ID)
- External storage or files
- Phone call logs or SMS data
- User accounts or login credentials

**TorVPN:**
- `INTERNET`, `BIND_VPN_SERVICE` — to provide VPN functionality and maintain secure connections

TorVPN does not request access to:
- Contacts
- Location
- Camera, microphone, or sensors
- Device identifiers (e.g. IMEI, Android ID)
- External storage or files
- Phone call logs or SMS data
- User accounts or login credentials


---

## 5. Data Sharing & Third Parties

- **No user data is shared** with third parties at all. No advertisers, analytics providers, or otherwise.

Tor Project run **`https://check.torproject.org`** may be contacted, over Tor, to verify Tor connectivity within the app; no identifying information is logged or stored.

For **Tor Browser on Desktop**, the application may check for available software updates from Tor Project servers. These update checks:
- Are conducted over the Tor network
- Are not linked to user identity or device information

For **Android apps**, updates are delivered via app distribution platforms (e.g., Google Play, F-Droid) and not directly from Tor Project servers.

In those cases, when we distribute our applications through Google Play services, our hands our tied and [their terms and policies](https://play.google.com/about/play-terms.html) apply. If you wish to obtain TorVPN from the a no-logging, non-tracking, free and open-source app store, then use F-Droid to do so.

- **No syncing or cloud backups** of user activity, configuration, or identity are performed.

---

## 6. Data Retention & Deletion

- **No persistent personal data**
- Session data is erased:
  - When the app is closed
  - When user resets identity
  - When VPN session ends
- Uninstallation removes all local data

---

## 7. Children’s Privacy

These apps are **not intended for children under 13**. We do not knowingly collect data from minors. If we learn of such data, it will be deleted.

---

## 8. Security & Anonymity

- All traffic is encrypted and routed through Tor
- Tor Browser includes built-in defenses against tracking and fingerprinting, such as uniform user-agent strings, screen size normalization, and isolation of website content.
- TorVPN is designed to isolate traffic so there is a different Tor circuit used per app
- Code is open for public audit

---

## 9. Changes to This Policy

Material changes will be reflected by:
- Updating the "Effective Date"
- Publishing an updated policy on this page

---

## 10. Consent

By using Tor Browser or TorVPN, you agree to this policy. If you do not agree with this policy, please do not use the applications.

---

## 11. GDPR and Data Protection

The Tor Project is committed to protecting user privacy and supporting the principles of the European Union's General Data Protection Regulation (GDPR).

Because Tor Browser and TorVPN are designed not to collect, process, or store personal data, the GDPR does not apply to these applications.

If you have questions about data protection or our privacy practices, you may contact us at: **frontdesk@torproject.org**.

---

## 12. Additional Information

- [https://support.torproject.org/tbb](https://support.torproject.org/tbb)
- [https://gitlab.torproject.org/tpo/applications/vpn](https://gitlab.torproject.org/tpo/applications/vpn)
- [https://gitlab.torproject.org/tpo/core/onionmasq](https://gitlab.torproject.org/tpo/core/onionmasq)
- [https://gitlab.torproject.org/tpo/core/arti](https://gitlab.torproject.org/tpo/core/arti)
- [https://www.torproject.org/about/](https://www.torproject.org/about/)

