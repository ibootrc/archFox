/****************************************************************************
 * SNAPPY PERFORMANCE & RAM OPTIMIZATION (4GB / zram / i3)                   *
 ****************************************************************************/
// Instant rendering: Show web content immediately
user_pref("nglayout.initialpaint.delay", 0);
user_pref("content.notify.ontimer", true);
user_pref("content.notify.interval", 500000);

// Limit content processes to save RAM (Crucial for 4GB systems)
user_pref("dom.ipc.processCount", 2);
user_pref("dom.ipc.processCount.extension", 1);

// Aggressively unload idle tabs when RAM is low
user_pref("browser.tabs.unloadOnLowMemory", true);

// Move cache to RAM (zram) and disable Disk I/O for speed
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.capacity", 262144); // 256MB Cap

/****************************************************************************
 * NETWORK TUNING (Balanced for i3 CPU)                                      *
 ****************************************************************************/
user_pref("network.http.max-connections", 900);
user_pref("network.http.max-persistent-connections-per-server", 6);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 3);
user_pref("network.http.pacing.requests.enabled", true);
user_pref("network.http.speculative-parallel-limit", 10);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.prefetch-next", true);
user_pref("network.predictor.enabled", true);

/****************************************************************************
 * LINUX GPU ACCELERATION (Intel HD 5500 / VA-API)                           *
 ****************************************************************************/
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.software", false);
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("media.rdd-ffmpeg.enabled", true);
user_pref("media.ffvpx.enabled", false);
user_pref("general.autoScroll", false);
user_pref("toolkit.cosmeticAnimations.enabled", false);

/****************************************************************************
 * DE-BLOAT & 2026 AI KILL SWITCH                                            *
 ****************************************************************************/
user_pref("browser.ml.enable", false);
user_pref("browser.ai.sidebar.enabled", false);
user_pref("browser.shopping.experience2024.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("browser.ping-centre.telemetry", false);

/****************************************************************************
 * MODERATE PRIVACY & SECURITY                                               *
 ****************************************************************************/
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.fingerprintingProtection", true);
user_pref("privacy.query_stripping.enabled", true);
user_pref("security.OCSP.enabled", 1);
user_pref("security.OCSP.require", false);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("pdfjs.enableScripting", false);

/****************************************************************************
 * UI & CONVENIENCE                                                          *
 ****************************************************************************/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("extensions.pocket.enabled", false);
user_pref("cookiebanners.service.mode", 1);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.download.open_pdf_attachments_inline", true);
