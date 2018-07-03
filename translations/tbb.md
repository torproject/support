_model: question
---
title: What are the most common issues with the latest stable version of Tor Browser?
---
seo_slug: most-common-issues-latest-stable-tor-browser
---
description:
<p class="mb-3">Whenever we release a new stable version of Tor Browser, we write a blog post that details its new features and known issues. If you started having issues with your Tor Browser after an update, check out <mark>​<a href="https://blog.torproject.org></a>blog.torproject.org</mark> for the most recent stable Tor Browser post to see if your issue is listed. If your issue is not listed, please file a <mark><a href="https://trac.torproject.org">bug report</a></mark> about what you're experiencing.</p>


_model: question
---
title: I'm having a problem with HTTPS Everywhere.
---
seo_slug: problem-with-https-everywhere
---
description:
<p class="mb-3">Please see the ​<mark><a href="https://www.eff.org/https-everywhere/faq">HTTPS Everywhere</a></mark>. If you believe this is a Tor Browser issue, please report it on our ​<mark><a href="https://trac.torproject.org/">bug tracker</a></mark>.</p>

_model: question
---
title: Can I make Tor Browser my default browser?
---
seo_slug: make-tor-browser-default-browser
---
description:
<p class="mb-3">Unfortunately, there is no supported way to make Tor Browser your default browser.</p>

_model: question
---
title: How do I view Tor Browser message log?
---
seo_slug: view-tor-browser-message-log
---
description:
<p class="mb-3">Click the button labelled "Copy Tor Log To Clipboard" that appears in the dialog window when Tor Browser is first connecting to the network. If Tor Browser is already open, click on the Torbutton icon (the small green onion at the top-left of the screen), then "Open Network Settings", then "Copy Tor Log To Clipboard.". Once you have copied the log, you will be able to paste it into a text editor or email client.</p>

_model: question
---
title: Why is the first IP address in my relay circuit always the same?
---
seo_slug: first-address-relay-circuit
---
description:
<p class="mb-3">That is normal Tor behavior. The first relay in your circuit is called an "entry guard" or "guard." It is a fast and stable relay that remains the first one in your circuit for 2-3 months in order to protect against a known anonymity-breaking attack. The rest of your circuit changes with every new website you visit, and all together these relays provide the full privacy protections of Tor. For more information on how guard relays work, see this <mark><a href="https://blog.torproject.org/improving-tors-anonymity-changing-guard-parameters">blog post</a></mark> and <mark><a href="https://www-users.cs.umn.edu/~hoppernj/single_guard.pdf">paper</a></mark> on entry guards.</p>

_model: question
---
title: Our website is blocked by a censor. Can Tor Browser help users access our website?
---
seo_slug: website-blocked-by-censor-can-tor-browser-help
---
description:
<p class="mb-3">Tor Browser can certainly help people access your website in places where it is blocked. Most of the time, simply downloading the ​<mark><a href="https://www.torproject.org/download/download-easy.html.en">Tor Browser</a></mark> and then using it to navigate to the blocked site will allow access. In places where there is heavy censorship we have a number of censorship circumvention options available, including ​<mark><a href="https://www.torproject.org/docs/pluggable-transports.html.en">pluggable transports</a></mark>. For more information, please see the <mark><a href="https://tb-manual.torproject.org/en-US/">​Tor Browser User Manual</a></mark> section on <mark><a href="https://tb-manual.torproject.org/en-US/circumvention.html">censorship</a></mark>.</p>


_model: question
---
title: Is there support for *BSD?
---
seo_slug: is-there-support-for-bsd
---
description:
<p class="mb-3">Sorry, but there is currently no official support for running Tor Browser on *BSD. There is something called the TorBSD project, but their Tor Browser is not officially supported.</p>

_model: question
---
title: Can I pick which country I'm exiting from?
---
seo_slug: pick-which-country-i-am-exiting
---
description:
<p class="mb-3">Modifying the way that Tor creates its circuits is strongly discouraged. You get the best security that Tor can provide when you leave the route selection to Tor; overriding the entry / exit nodes can compromise your anonymity. If the outcome you want is simply to be able to access resources that are only available in one country, you may want to consider using a VPN instead of using Tor. Please note that VPNs do not have the same privacy properties as Tor, but they will help solve some geolocation restriction issues.</p>

_model: question
---
title: Why is Tor Browser built from Firefox and not some other browser?
---
seo_slug: tor-browser-is-built-from-firefox-why
---
description:
<p class="mb-3">Tor Browser is a modified version of Firefox specifically designed for use with Tor. A lot of work has been put into making the Tor Browser, including the use of extra patches to enhance privacy and security. While it is technically possible to use Tor with other browsers, you may open yourself up to potential attacks or information leakage, so we strongly discourage it. <mark><a href="https://www.torproject.org/projects/torbrowser/design/">Learn more about the design of Tor Browser</a></mark>.</p>

_model: question
---
title: I need Tor Browser in a language that's not English.
---
seo_slug: need-tor-browser-language-not-english
---
description:
<p class="mb-3">We currently offer Tor Browser in the following languages:</p><p class="mb-3"><ul><li>English (en-US)</li><li>"العربية" (ar)</li><li>Deutsch (de)</li><li>Español (es-ES)</li><li> فارسى (fa)</li><li>Français (fr)</li><li>Italiano (it)</li><li>日本語 (ja)</li><li>Korean (ko)</li><li>Nederlands (nl)</li><li>Polish (pl)</li><li>Português (pt-BR)</li><li>Русский (ru)</li><li>Türkçe (tr)</li><li>Vietnamese (vi)</li><li>简体字 (zh-CN)</li></ul></p>

_model: question
---
title: Tor Browser won't connect, but it doesn’t seem to be an issue with censorship.
---
seo_slug: tor-browser-will-not-connect-no-censorship
---
description:
<p class="mb-3">One of the most common issues that causes connection errors in Tor Browser is an incorrect system clock. Please make sure your system clock and timezone are set accurately. If this doesn't fix the problem, see the ​Troubleshooting page on the <mark><a href="https://tb-manual.torproject.org/en-US/bridges.html">​Tor Browser manual</a></mark>.</p>

_model: question
---
title: Can I still use another browser, like Chrome or Firefox, when I am using Tor Browser?
---
seo_slug: download-tor-browser-chromeos
---
description:
<p class="mb-3">You can certainly use another browser while you are also using Tor Browser. However, you should know that the privacy properties of Tor Browser will not be present in the other browser. Be careful when switching back and forth between Tor and a less safe browser, because you may accidentally use the other browser for something you intended to do using Tor.</p>

_model: question
---
title: I'm having a problem with DuckDuckGo.
---
seo_slug: problem-with-duckduckgo
---
description:
<p class="mb-3">Please see the ​<mark><a href="https://duck.co/help">DuckDuckGo support portal</a></mark>. If you believe this is a Tor Browser issue, please report it on our ​<mark><a href="https://trac.torproject.org/">bug tracker</a></mark>.</p>

_model: question
---
title: Should I install a new add-on or extension in Tor Browser, like AdBlock Plus or uBlock Origin?
---
seo_slug: installing-add-on-extensions-tor-browser
---
description:
<p class="mb-3">It's strongly discouraged to install new add-ons in Tor Browser, because they can compromise your privacy and security. Tor Browser already comes installed with two add-ons — HTTPS Everywhere and NoScript — and adding anything else could deanonymize you.</p>


_model: question
---
title: Is it safe to run Tor Browser and another browser at the same time?
---
seo_slug: run-tor-browser-and-different-browser
---
description:
<p class="mb-3">If you run Tor Browser and another browser at the same time, it won't affect Tor's performance or privacy properties. However, be aware that your other browser is not keeping your activity private, and you may forget and accidentally use that non-private browser to do something that you intended to do in Tor Browser.</p>

_model: question
---
title: Can I set Tor Browser as my default browser?
---
seo_slug: setting-tor-browser-as-default
---
description:
<p class="mb-3">There is currently no supported method for setting Tor Browser as your default browser. The Tor Browser works hard to isolate itself from the rest of your system, and the steps for making it the default browser are unreliable. This means sometimes a website would load in the Tor Browser, and sometimes it would load in another browser, this type of behavior can be dangerous and anonymity-breaking.</p>

_model: question
---
title: Why does my Tor Browser say something about Firefox not working?
---
seo_slug: tor-browser-firefox-not-working-error
---
description:
<p class="mb-3">Tor Browser is built using ​<mark><a href="https://www.mozilla.org/en-US/firefox/organizations/">Firefox ESR</a></mark>, so errors regarding Firefox may occur. Please be sure no other instance of Tor Browser is already running, and that you have extracted Tor Browser in a location that your user has the correct permissions for. If you are running an anti-virus, please see <mark><a href="http://support.torproject.org/#tbb-10">My antivirus/malware protection is blocking me from accessing Tor Browser</a></mark>, it is common for anti-virus / anti-malware software to cause this type of issue.</p>

_model: question
---
title: Which platforms is Tor Browser available for?
---
seo_slug: which-platform-tor-browser-available
---
description:
<p class="mb-3">Tor Browser is currently available on Windows, Linux and OSX. For Android, The Guardian Project maintains the Tor-powered apps Orbot and Orfox. There is no official version of Tor for iOS yet, though we recommend Onion Browser.</p>

_model: question
---
title: My antivirus or malware protection is blocking me from accessing Tor Browser.
---
seo_slug: antivirus-blocking-tor
---
description:
<p class="mb-3">Most antivirus or malware protection allows the user to "whitelist" certain processes that would otherwise be blocked. Please open your antivirus or malware protection software and look in the settings for a "whitelist" or something similar. Next, exclude the following processes:</p><p class="mb-3"><ul>For Windows<li>firefox.exe</li><li>tor.exe</li><li>obfs4proxy.exe (if you use bridges)</li></ul><ul>For OS X<li>TorBrowser</li><li>tor.real</li><li>obfs4proxy (if you use bridges)</li></ul></p><p class="mb-3">Finally, restart Tor Browser. This should fix the issues you're experiencing. Please note that some antivirus clients, like Kaspersky, may also be blocking Tor at the firewall level.</p>


_model: question
---
title: Does using Tor Browser protect other applications on my computer?
---
seo_slug: tor-browser-protecting-other-apps
---
description:
<p class="mb-3"> Only Tor Browser's traffic will be routed over the Tor network. Any other application on your system (including other browsers) will not have their connections routed over the Tor network, and will not be protected. They need to be configured separately to use Tor. If you need to be sure that all traffic will go through the Tor network, take a look at the ​<mark><a href="https://tails.boum.org/">Tails live operating system</a></mark> which you can start on almost any computer from a USB stick or a DVD.</p>

_model: question
---
title: Does Tor Browser use a different circuit for each website?
---
seo_slug: different-circuit-each-website
---
description:
<p class="mb-3">In Tor Browser, every new domain gets its own circuit. ​​<mark><a href="https://www.torproject.org/projects/torbrowser/design/#identifier-linkability">The Design and Implementation of Tor Browser</a></mark> document further explains the thinking behind this design.</p>


_model: question
---
title: How do I uninstall Tor Browser?
---
seo_slug: uninstall-tor-browser
---
description:
<p class="mb-3">Removing Tor Browser from your system is simple:</p><p class="mb-3"><ol><li>Locate your Tor Browser folder or application. The default location on Windows is the Desktop; on macOS it is the Applications folder (on macOS, you have to move it into the Applications folder when you complete the installation process). On Linux, there is no default location, however the folder will be named "tor-browser_en-US" if you are running the English Tor Browser.</li><li>Delete the Tor Browser folder or application.</li><li>Empty your Trash.</li></ol></p><p class="mb-3">Note that your operating system’s standard "Uninstall" utility is not used.</p>

_model: question
---
title: A website (bank, email provider, etc..) locks me out whenever I use Tor, what can I do?
---
seo_slug: website-locks-torbrowser-out
---
description:
<p class="mb-3">Tor Browser often makes your connection appear as though it is coming from an entirely different part of the world. Some websites, such as banks or email providers, might interpret this as a sign that your account has been compromised, and lock you out. The only way to resolve this is by following the site’s recommended procedure for account recovery, or contacting the operators and explaining the situation. You may be able to avoid this scenario if your provider offers 2-factor authentication, which is a much better security option than IP-based reputations. Contact your provider and ask them if they provide 2FA.</p>

_model: question
---
title: A website I am trying to reach is blocking access over Tor.
---
seo_slug: website-blocking-access-over-tor
---
description:

<p class="mb-3">Sometimes websites will block Tor users because they can't tell the difference between the average Tor user and automated traffic. The best success we've had in getting sites to unblock Tor users is getting users to contact the site administrators directly. Something like this might do the trick:
<br />
"Hi! I tried to access your site xyz.com while using Tor Browser and discovered that you don't allow Tor users to access your site. I urge you to reconsider this decision; Tor is used by people all over the world to protect their privacy and fight censorship. By blocking Tor users, you are likely blocking people in repressive countries who want to use a free internet, journalists and researchers who want to protect themselves from discovery, whistleblowers, activists, and ordinary people who want to opt out of invasive third party tracking. Please take a strong stance in favor of digital privacy and internet freedom, and allow Tor users access to xyz.com. Thank you."
<br />
In the case of banks, and other sensitive websites, it is also common to see geography-based blocking (if a bank knows you generally access their services from one country, and suddenly you are connecting from an exit relay on the other side of the world, your account may be locked or suspended). If you are unable to connect to an onion service, please see <a href="#onionservices-3">I cannot reach X.onion!</a></p>


_model: question
---
title: Can I run multiple instances of Tor Browser?
---
seo_slug: run-multible-instances-of-tor-browser
---
description:
<p class="mb-3">We do not recommend running multiple instances of Tor Browser, and may not work as anticipated on many platforms.</p>

_model: question
---
title: I downloaded and installed Tor Browser for Windows, but now I can't find it.
---
seo_slug: cannot-find-tor-on-windows
---
description:
<p class="mb-3">The file you download and run prompts you for a destination. If you don't remember what this destination was, it's most likely your Downloads or Desktop folder. The default setting in the Windows installer also creates a shortcut for you on your Desktop, though be aware that you may have accidentally unticked the option to create a shortcut. If you can't find it in either of those folders, download it again and look for the prompt that asks you to choose a directory to download it in. Choose a directory location that you'll remember easily, and once the download finishes you should see a Tor Browser folder there.</p>

_model: question
---
title: How can I make Tor run faster? Is Tor Browser slower than other browsers?
---
seo_slug: make-tor-faster
---
description:
<p class="mb-3">Using Tor Browser can sometimes be slower than other browsers. The Tor network has over a million daily users, and just over 6000 relays to route all of their traffic, and the load on each server can sometimes cause latency. You can help improve the speed of the network by running your own relay, or encouraging others to do so. That said, Tor is much faster than it used to be and you may not actually notice any change in speed from other browsers.</p>

_model: question
---
title: I'm having a problem with NoScript.
---
seo_slug: problem-noscript
---
description:
<p class="mb-3">Please see the ​<mark><a href="https://noscript.net/faq">NoScript FAQ</a></mark>. If you believe this is a Tor Browser issue, please report it on our ​<mark><a href="https://trac.torproject.org/">bug tracker</a></mark>.</p>

_model: question
---
title: Does running Tor Browser make me a relay?
---
seo_slug: running-tor-browser-make-me-relay
---
description:
<p class="mb-3">Running Tor Browser does not make you act as a relay in the network. This means that your computer will not be used to route traffic for others. If you'd like to become a relay, please see our <mark><a href="https://trac.torproject.org/projects/tor/wiki/TorRelayGuide">Tor Relay Guide</a></mark>.</p>

_model: question
---
title: Will my network admin be able to tell I'm using Tor Browser?
---
seo_slug: network-admin-know-i-am-using-tor
---
description:
<p class="mb-3">When using Tor Browser, no one can see the websites that you visit. However, your service provider or network admins may be able to see that you're connecting to the Tor network, though they won't know what you're doing when you get there.</p>

_model: question
---
title: I’m having trouble using features on Facebook, Twitter, or some other website when I’m using Tor Browser.
---
seo_slug: tor-browser-issues-facebook-twitter-websites
---
description:
<p class="mb-3">Sometimes Javascript-heavy websites can have functional issues over Tor Browser. The simplest fix is to click on the "onion menu," then click on the security slider. Set your security to "Standard."</p>

_model: question
---
title: Can you get rid of all the captchas?
---
seo_slug: get-rid-of-captchas
---
description:
<p class="mb-3">Unfortunately, some websites deliver CAPTCHAS to Tor users, and we are not able to remove CAPTCHAs from websites. The best thing to do in these cases is to contact the website owners, and inform them that their CAPTCHAs are preventing users such as yourself from using their services.</p>

_model: question
---
title: Why did my search engine switch to DuckDuckGo?
---
seo_slug: why-is-tor-using-duckduckgo
---
description:
<p class="mb-3">With the release of Tor Browser 6.0.6, we switched to DuckDuckGo as the primary search engine. For a while now, Disconnect has had no access to Google search results which we used in Tor Browser. Since Disconnect is more of a meta search engine which allows users to choose between different search providers, it fell back to delivering Bing search results which were basically unacceptable quality-wise.</p>

_model: question
---
title: When I use Tor Browser, will anyone be able to tell which websites I visit?
---
seo_slug: tell-which-website-are-visited-while-using-tor-browser
---
description:
<p class="mb-3">Tor Browser prevents people from knowing the websites you visit. Some entities, such as your Internet Service Provider (ISP), may be able to see that you're using Tor, but they won't know where you're going when you do.</p>

_model: question
---
title: Why does Tor Browser ship with Javascript enabled?
---
seo_slug: tor-browser-js-enabled-default
---
description:
<p class="mb-3">We configure NoScript to allow JavaScript by default in Tor Browser because many websites will not work with JavaScript disabled. Most users would give up on Tor entirely if we disabled Javascript by default because it would cause so many problems for them.</p><p class="mb-3">Ultimately, we want to make Tor Browser as secure as possible while also making it usable for the majority of people, so for now, that means leaving Javascript enabled by default. For users who want to have Javascript disabled on all HTTP sites by default, we recommend changing your Tor Browser's security slider (in the Tor Browser Onion menu under "Security Settings"). The low/default setting allows Javascript, but the medium and high levels both block Javascript on HTTP sites.</p>

_model: question
---
title: Can I download Tor Browser for ChromeOS?
---
seo_slug: download-tor-browser-chromeos
---
description:
<p class="mb-3">Unfortunately, we don't yet have a version of Tor Browser for ChromeOS.</p>

_model: question
---
title: Is there a way to change the IP address that Tor Browser assigns me for a particular site?
---
seo_slug: change-ip-address
---
description:
<p class="mb-3">Tor Browser has two ways to change your relay circuit — "New Identity" and "New Tor Circuit for this Site". Both options are located in the Torbutton (little green onion) menu.</p><h5>New Identity</h5><p class="mb-3">This option is useful if you want to prevent your subsequent browser activity from being linkable to what you were doing before. Selecting it will close all your tabs and windows, clear all private information such as cookies and browsing history, and use new Tor circuits for all connections. Tor Browser will warn you that all activity and downloads will be stopped, so take this into account before clicking "New Identity".</p><h5>New Tor Circuit for this Site</h5><p class="mb-3">This option is useful if the exit relay you are using is unable to connect to the website you require, or is not loading it properly. Selecting it will cause the currently-active tab or window to be reloaded over a new Tor circuit. Other open tabs and windows from the same website will use the new circuit as well once they are reloaded. This option does not clear any private information or unlink your activity, nor does it affect your current connections to other websites.</p><div class="col-md-6">

<div class="card">
<img class="card-img-top" src="/static/images/image1.png" alt="New release alert"><div class="card-body">
<h4 class="card-title">Card title</h4>
<p class="card-text">Card text</p></div>
</div>
</div>


_model: question
---
title: Can I use Flash in Tor Browser?
---
seo_slug: using-flash-tor-browser
---
description:
<p class="mb-3">Flash is disabled in Tor Browser, and we recommend you do not enable it. We don’t think Flash is safe to use in any browser — it's a very insecure piece of software that can easily compromise your privacy or serve you malware. Fortunately, most websites, devices, and other browsers are moving away from the use of Flash.</p>

_model: question
---
title: What search engine comes with Tor Browser and how does it protect my privacy?
---
seo_slug: search-engine-tor-browser
---
description:
<p class="mb-3">DuckDuckGo is the default search engine in Tor Browser. DuckDuckGo does not track its users nor does it store any data about user searches.</p>

_model: question
---
title: How do I update Tor Browser?
---
seo_slug: updating-tor-browser
---
description:
<p class="mb-3">You can update Tor Browser as soon as a new version is released.</p>
<div class="col-md-6">
  <div class="card">
    <img class="card-img-top" src="/static/images/image4.png" alt="New release alert">
    <div class="card-body">
      <h4 class="card-title">Tor Browser will prompt you to update the software once a new version has been released.</h4>
      <p class="card-text">The Torbutton icon (the little green onion in the top left corner of the browser) will display a yellow triangle.</p>
    </div>
  </div>
</div>
<p class="mb-3">You may see a written indication when Tor Browser opens telling you that an update is available.</p>
<div class="col-md-6">
  <div class="card">
    <img class="card-img-top" src="/static/images/image5.png" alt="New release alert">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Card text</p>
    </div>
  </div>
</div>
<p class="mb-3">Tor browser will install the updates.</p>
<div class="col-md-6">
  <div class="card">
    <img class="card-img-top" src="/static/images/image3.png" alt="New release alert">
    <div class="card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">Card text</p>
    </div>
  </div>
</div>

_model: question
---
title: Can I use Tor with a browser besides Tor Browser?
---
seo_slug: using-tor-with-a-browser-besides-tor-browser
---
description:
<p class="mb-3">We strongly recommend against using Tor in any browser other than Tor Browser. Using Tor in another browser can leave you vulnerable without the privacy protections of Tor Browser.</p>

_model: topic
---
title: Tor Browser
---
seo_slug: tor-browser
---
key:2
---

_model: question
---
title: I can’t connect to Tor Browser, is my network censored?
---
seo_slug: cannot-connect-to-tor-browser-network-censored
---
description:
<p class="mb-3">You might be on a censored network, and so you should try using bridges. Some bridges are built in to Tor Browser, and you can use those bridges by choosing "configure" (then following the prompts) in the Tor Launcher window that pops up when you open Tor Browser for the first time. If you need other bridges, you can get them at our ​<mark><a href="https://bridges.torproject.org/">Bridges website</a></mark>. For more information about bridges, see the <mark><a href="https://tb-manual.torproject.org/en-US/bridges.html">​Tor Browser manual</a></mark>.</p>
