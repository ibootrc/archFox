
// ============================================================
// Custom Firefox Configuration
// Platform: Arch Linux / X11 / i3
// Firefox: 159
// Hardware: Intel Core i7-6700HQ / Intel HD Graphics 530
//
// Priorities:
// 1. Smooth browsing and responsiveness
// 2. Preserve Firefox security architecture
// 3. Practical privacy protection
// 4. Confirmed hardware video acceleration
//
// ============================================================


// ------------------------------------------------------------
// 1. TRACKING PROTECTION
// ------------------------------------------------------------

// Strict Enhanced Tracking Protection.
// If a website breaks, use a per-site exception.
user_pref("browser.contentblocking.category", "strict");


// ------------------------------------------------------------
// 2. HTTPS SECURITY
// ------------------------------------------------------------

// Prefer HTTPS across all browsing sessions.
// HTTP-only websites may require an explicit exception.
user_pref("dom.security.https_only_mode", true);


// ------------------------------------------------------------
// 3. TELEMETRY AND STUDIES
// ------------------------------------------------------------

// Disable technical and interaction telemetry uploads.
user_pref("toolkit.telemetry.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);

// Disable participation in Firefox Shield Studies.
user_pref("app.shield.optoutstudies.enabled", false);


// ------------------------------------------------------------
// 4. HARDWARE VIDEO DECODING
// ------------------------------------------------------------

// VA-API hardware decoding confirmed working on Intel HD 530.
// Do not force unsupported codecs or GPU features.
user_pref("media.ffmpeg.vaapi.enabled", true);


// ------------------------------------------------------------
// 5. SMOOTH SCROLLING
// ------------------------------------------------------------

// Preserve the settings that resolved the previous issue.
user_pref("mousewheel.system_scroll_override.enabled", false);
user_pref("mousewheel.default.delta_multiplier_y", 150);
user_pref("general.smoothScroll", true);


// ------------------------------------------------------------
// 6. PASSWORD AND FORM HISTORY
// ------------------------------------------------------------

// Do not offer to save passwords.
user_pref("signon.rememberSignons", false);

// Keep form history. Manage deletion manually.
user_pref("privacy.clearOnShutdown_v2.formdata", false);


// ------------------------------------------------------------
// 7. INTERFACE
// ------------------------------------------------------------

// Keep bookmarks toolbar hidden.
user_pref("browser.toolbars.bookmarks.visibility", "never");

// Disable the picture-in-picture video toggle.
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);


// ============================================================
// END OF CUSTOM CONFIGURATION
// ============================================================
