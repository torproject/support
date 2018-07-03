_model: question
---
title: How do I run a middle or guard relay on Debian?
---
seo_slug: how-do-i-run-a-middle-or-guard-relay
---
description:
<p class="mb-3">For the most in-depth resource on running a relay, see the <mark><a href="https://trac.torproject.org/projects/tor/wiki/TorRelayGuide">Tor Relay Guide</a></mark>.</p><p class="mb-3"><ol><li>Run "apt-get install tor" (as root).</li><li>Make sure your clock, date, and timezone are set correctly. Install the ntp or openntpd (or similar) package to keep it that way.</li><li>Edit /etc/tor/torrc to look like the following:
<pre><code>## The IP address or hostname for incoming connections (leave commented and Tor will guess)
#Address noname.example.com

## Set the nickname of this relay
Nickname ididnteditheconfig

## Set your own contact info
ContactInfo 0xFFFFFFFF Random Person <nobody AT example dot com>

## If you control multiple relays, include then in the family
#MyFamily $keyid,$keyid,...

ORPort 9001
DirPort 9030

## Set your bandwidth rate (leave commented and Tor will run without bandwidth caps)
#RelayBandwidthRate 30 MBytes
#RelayBandwidthBurst 100 MBytes

ExitPolicy reject *:*</code></pre></li><li>Run "service tor reload" (as root)</li><li>After your relay connects to the network, it will try to determine whether the ports you configured are reachable from the outside. This step is usually fast, but it may take a few minutes. Look for a log entry in /var/log/syslog such as "Self-testing indicates your ORPort is reachable from the outside. Excellent." If you don't see this message, it means that your relay is not reachable from the outside. You should re-check your firewalls, check that the IP and ports you specified in your torrc are correct, etc.</li></ol></p><p class="mb-3">When it confirms that it's reachable, it will upload a "server descriptor" to the directory authorities to let clients know what address, ports, keys, etc your relay is using. After a few hours (to give it enough time to propagate), you can query ​Atlas to see whether your relay has successfully registered in the network. If it hasn't, re-check firewalls, IP and ports again.</p>

_model: question
---
title: How do I run a obfs4 bridge on Debian?
---
seo_slug: how-do-i-run-a-obfs4-bridge-debian
---
description:
<p class="mb-3"><ol><li>Run "apt-get install tor obfs4proxy" (as root).</li><li>Make sure your clock, date, and timezone are set correctly. Install the ntp or openntpd (or similar) package to keep it that way.</li><li>Edit /etc/tor/torrc to look like the following:<pre><code>## The IP address or hostname for incoming connections (leave commented
and Tor will guess)
#Address noname.example.com

## Set the nickname of this relay
Nickname ididnteditheconfig

## Set your own contact info
ContactInfo 0xFFFFFFFF Random Person <nobody AT example dot com>

BridgeRelay 1
ServerTransportPlugin obfs4 exec /usr/bin/obfs4proxy
ExtORPort auto
ORPort 9001

## Set your bandwidth rate (leave commented and Tor will run without
bandwidth caps)
#RelayBandwidthRate 30 MBytes
#RelayBandwidthBurst 100 MBytes</code></pre></li><li>Run "service tor reload" (as root)</li><li>After your relay connects to the network, it will try to determine whether the ports you configured are reachable from the outside. This step is usually fast, but it may take a few minutes. Look for a log entry in /var/log/syslog such as "Self-testing indicates your ORPort is reachable from the outside. Excellent." If you don't see this message, it means that your relay is not reachable from the outside. You should re-check your firewalls, check that the IP and ports you specified in your torrc are correct, etc. You should also see the message "Registered server transport 'obfs4'" indicating that obfs4proxy is functional.</li></ol></p>

_model: question
---
title: How do I make sure that I'm using the correct packages on Ubuntu?
---
seo_slug: using-correct-packages
---
description:
<p class="mb-3"><ol><li>Do not use the packages in Ubuntu's repositories. They are not reliably updated. If you use them, you will miss important stability and security fixes.</li><li>Determine your Ubuntu version by running the following command:

<pre><code>$ sb_release -c</code></pre></li><li>As root, add the following lines to /etc/apt/sources.list. Use the version you found in step 2 for <version>.

<pre><code>$ deb http://deb.torproject.org/torproject.org <version> main</code></pre>
<pre><code>$ deb-src http://deb.torproject.org/torproject.org <version> main</code></pre></li><li>Add the gpg key used to sign the packages by running the following commands:

<pre><code>$ gpg --keyserver keys.gnupg.net --recv A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89</code></pre>
<pre><code>$ gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -<pre></code></li><li>Run the following commands to install tor and check its signatures:

<pre><code>$ sudo apt-get update</code></pre>

<pre><code>$ sudo apt-get install tor deb.torproject.org-keyring</code></pre></li></ol></p>

_model: question
---
title: How do I run an exit relay on Debian?
---
seo_slug: how-do-i-run-an-exit
---
description:
<p class="mb-3">For the most in-depth resource on running a relay, see the <mark><a href="https://trac.torproject.org/projects/tor/wiki/TorRelayGuide">Tor Relay Guide</a></mark>.</p><p class="mb-3"><ol><li>Review our <mark><a href="https://trac.torproject.org/projects/tor/wiki/doc/TorExitGuidelines">Exit relay guidelines</a></mark></li><li>Run "apt-get install tor" (as root).</li><li>Make sure your clock, date, and timezone are set correctly. Install the ntp or openntpd (or similar) package to keep it that way.</li><li>Edit /etc/tor/torrc to look like the following:<pre><code>## Set the nickname of this relay
Nickname ididnteditheconfig

## Set your own contact info
ContactInfo 0xFFFFFFFF Random Person <nobody AT example dot com>

ORPort 9001
DirPort 9030

## The IP address or hostname for incoming connections (leave commented and Tor will guess)
#Address noname.example.com

## Set your bandwidth rate (leave commented and Tor will run without bandwidth caps)
#RelayBandwidthRate 30 MBytes
#RelayBandwidthBurst 100 MBytes

## If you control multiple relays, include then in the family
#MyFamily $keyid,$keyid,...</code></pre></li><li>Run "service tor reload" (as root)</li><li>After your relay connects to the network, it will try to determine whether the ports you configured are reachable from the outside. This step is usually fast, but it may take a few minutes. Look for a log entry in your /var/log/syslog such as "Self-testing indicates your ORPort is reachable from the outside. Excellent." If you don't see this message, it means that your relay is not reachable from the outside. You should re-check your firewalls, check that the IP and ports you specified in your torrc are correct, etc.</li><li>When it confirms that it's reachable, it will upload a "server descriptor" to the directory authorities to let clients know what address, ports, keys, etc your relay is using. After a few hours (to give it enough time to propagate), you can query ​<mark><a href="https://atlas.torproject.org/">Atlas</a></mark> to see whether your relay has successfully registered in the network. If it hasn't, re-check firewalls, IP and ports again.</li></ol></p><p class="mb-3">Consider if you'd like to switch to the <mark><a href="https://trac.torproject.org/projects/tor/wiki/doc/ReducedExitPolicy">Reduced exit policy</a></mark>.</p>

_model: question
---
title: Should I run an exit relay from home?
---
seo_slug: run-exit-from-home
---
description:
<p class="mb-3">No. If law enforcement becomes interested in traffic from your exit relay, it's possible that officers will seize your computer. For that reason, it's best not to run your exit relay in your home or using your home internet connection. Instead, consider running your exit relay in a commercial facility that is supportive of Tor. Have a separate IP address for your exit relay, and don't route your own traffic through it. Of course, you should avoid keeping any sensitive or personal information on the computer hosting your exit relay.</p>

_model: question
---
title: How do I run a middle or guard relay on FreeBSD or HardenedBSD?
---
seo_slug: how-do-i-run-a-middle-or-guard-on-freebsd
---
description:
<p class="mb-3">For the most in-depth resource on running a relay, see the <mark><a href="https://trac.torproject.org/projects/tor/wiki/TorRelayGuide">Tor Relay Guide</a>.</p><p class="mb-3"><ol><li>Run "pkg install tor" (as root).</li><li>Make sure your clock, date, and timezone are set correctly. Enabling ntpd is suggested.</li><li>Edit /usr/local/etc/tor/torrc to look like the following:<pre><code>## Set the nickname of this relay
Nickname ididnteditheconfig

## Set your own contact info
ContactInfo 0xFFFFFFFF Random Person <nobody AT example dot com>

ORPort 9001
DirPort 9030

## Set your bandwidth rate (leave commented and Tor will run without bandwidth caps)
#RelayBandwidthRate 30 MBytes
#RelayBandwidthBurst 100 MBytes

ExitPolicy reject *:*

## If you control multiple relays, include then in the family
#MyFamily $keyid,$keyid,...

RunAsDaemon 1
Log notice file /var/log/tor/notices.log</code></pre></li><li>Make sure tor starts on boot by running "sysrc tor_enable=YES" (as root)</li><li>Run "service tor start" (as root)</li><li>After your relay connects to the network, it will try to determine whether the ports you configured are reachable from the outside. This step is usually fast, but it may take a few minutes. Look for a log entry in /var/log/tor/notices.log such as "Self-testing indicates your ORPort is reachable from the outside. Excellent." If you don't see this message, it means that your relay is not reachable from the outside. You should re-check your firewalls, check that the IP and ports you specified in your torrc are correct, etc.</li></ol></p><p class="mb-3">When it confirms that it's reachable, it will upload a "server descriptor" to the directory authorities to let clients know what address, ports, keys, etc your relay is using. After a few hours (to give it enough time to propagate), you can query ​Atlas to see whether your relay has successfully registered in the network. If it hasn't, re-check firewalls, IP and ports again.</p>

_model: topic
---
title: Operators
---
seo_slug: operators
---
key:9
---
