Firefox Modernized: Lean & Mean
A performance-first Firefox configuration optimized for i3 CPU, 4GB RAM, Intel HD Graphics, and Arch Linux systems using zram.
Key Optimizations

    RAM Management: Content processes hard-capped to 2; Disk cache disabled to force zram compression.
    GPU Acceleration: Forced VA-API and WebRender to offload the i3 CPU during video playback.
    De-bloat: AI services, sidebar features, and telemetry are fully disabled.
    Aesthetic: Minimalist 20px tabs with Cascadia Code and 32px backdrop-filter blurs.

Folder Structure
Your Firefox profile directory (~/.mozilla/firefox/[profile-name]/) should look like this:
├── user.js
└── chrome/
├── userChrome.css
├── userContent.css
└── wallpaper.png
Installation Guide

1.  Locate your Profile

    Open Firefox and type about:support in the URL bar.
    Find Profile Directory and click Open Directory.

2.  Apply Configuration

    Move the user.js file into the root of that profile folder.
    Create a folder named chrome if it does not exist.
    Move userChrome.css, userContent.css, and your wallpaper.png into the chrome folder.

3.  Enable Legacy Customization
    For the CSS to apply, ensure these are set in about:config:

        Search for toolkit.legacyUserProfileCustomizations.stylesheets and set to true.
        Search for gfx.webrender.all and set to true.
        Restart Firefox.

4.  Arch Linux VA-API Setup
    To ensure hardware video decoding works on Intel HD 5500, install the drivers:
    sudo pacman -S intel-media-driver libva-intel-driver
    Minimalist Tips

        No Close Buttons: Tabs are 20px high; use Middle-Click or Ctrl+W to close tabs.
        Font Support: This config uses Cascadia Code. Install it via: sudo pacman -S ttc-cascadia-code.
        Wallpaper: Ensure your wallpaper.png is inside the chrome/ folder for the New Tab page.

5.  Arch Linux VA-API Setup (Intel HD 5500)
    To ensure hardware video decoding works on your Broadwell-U chip, install the drivers:
    sudo pacman -S intel-media-driver libva-intel-driver
