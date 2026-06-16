---
title: Web Hacking Study
date: 2026-06-16
draft: false
weight: 10
description: "Roadmap for web vulnerability reproduction, impact assessment, and remediation priority"
image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/OWASP-ZAP.png"
tags:
  - OWASP
  - Web Security
  - Vulnerability
  - HTTP
---

## Overview

My web hacking study does not stop at finding a vulnerability. I focus on explaining when it is reproducible, how it affects the service, and what remediation should be prioritized. The main reference frame is OWASP Top 10, HTTP request/response structure, auth/session flow, input validation, and path-handling issues.

For web hacking study images, I avoid personal blog captures or screenshots that expose usernames. Instead, I use publicly available tool screens such as OWASP ZAP and Wireshark. I organize XSS, Path Traversal, proxy/request manipulation, and file-path analysis into the workflow `observation → hypothesis → reproduction → impact → response`.

## Learning Roadmap

| Stage | Topic | Practice |
| --- | --- | --- |
| Stage 1 | HTTP basics | Request methods, status codes, headers, cookies, sessions |
| Stage 2 | Browser-based analysis | Inspect DOM, console, and network flow with developer tools |
| Stage 3 | Input validation | SQL Injection, Reflected/Stored XSS, and Command Injection reproduction |
| Stage 4 | Auth and access control | Login bypass, session fixation, missing authorization checks |
| Stage 5 | File and path handling | Upload extension validation, Path Traversal, and download access control |
| Stage 6 | Proxy/request manipulation | Compare server behavior by changing Referer, Cookie, Query String, and Body values |
| Stage 7 | Reporting | Reproduction condition, impact, remediation, and priority |

## Tool-Based Study Images

{{< portfolio_slider >}}
https://upload.wikimedia.org/wikipedia/commons/b/b0/OWASP-ZAP.png|OWASP ZAP Web Vulnerability Analysis Screen|Representative tool screen for spidering, request/response inspection, and vulnerability scanning
https://upload.wikimedia.org/wikipedia/commons/c/cf/Wireshark_3.6_screenshot.png|Wireshark Packet Analysis Screen|Reference image for checking HTTP requests, responses, sessions, and packet-level flow
https://www.sleuthkit.org/autopsy/images/v3/overview.png|Autopsy Evidence Exploration Screen|Reference screen for connecting post-attack files and logs with forensic investigation
{{< /portfolio_slider >}}

## Web Hacking Topics Connected From Real Activities

| Activity/Challenge | Clue Checked | Current Learning Extension |
| --- | --- | --- |
| Network_1 - Practice_XSS | Element/script inspection through browser developer tools | Document the difference between Reflected XSS and DOM flow |
| Network_2 - Path Traversal | URL path and exposed file-list behavior | Expand into path normalization, authorization checks, and download access checklist |
| Network_5 - New_Path_Traversal | Request headers and `url` parameter manipulation | Analyze Referer, Query String, and server-side file access together |
| Proxy-related challenge | Server response changes after request-value manipulation | Extend into proxy-based request tampering and response-log notes |
| Competition writeups | Challenge type classification and direction choice under time pressure | Re-document field-style challenges around reproducible conditions |

## Current Routine

- Compare requests and responses using browser developer tools and Burp Suite-style workflow
- Write notes in the order of `observation → hypothesis → reproduction → impact → response`
- Build small vulnerable examples and compare behavior before and after fixes
- Use OWASP, PortSwigger Web Security Academy, and MDN as external references for terminology and remediation logic

## Detailed Practice Checklist

| Category | Question | Record Format |
| --- | --- | --- |
| Input | Are special characters, scripts, or SQL-like payloads filtered? | Capture input, response, and error messages together |
| Authentication | Are pre-login and post-login access boundaries clear? | Compare session cookies and accessible URLs |
| Authorization | Can another user's resource be accessed? | Organize request parameters and response status codes |
| Path handling | How does the server react to `../`, absolute paths, or filename changes? | Separate request URL, server response, and exposed file record |
| XSS | Is user input reflected in an HTML/JS context? | Record DOM location, execution result, and defense method |
| Remediation | Is there safe validation, encoding, and authorization, not just blocking? | Record vulnerable code and improvement direction together |

## Progress

- Structured a PoC-based reproduction template
- Reflected analysis flow in my web security project page
- Strengthened the ability to classify challenge types through KISA and security competition experience
- Practiced explaining issues from service-risk and remediation-priority perspectives
- Connected public tool screens such as OWASP ZAP and Wireshark to XSS, Path Traversal, and proxy request manipulation learning records
- Practiced rewriting web vulnerability findings in an investigation-report style alongside police exam preparation

## Next Plan

- Write mini cases for SQLi, XSS, auth bypass, and file upload issues
- Add articles with `attack reproduction + remediation code + checklist`
- Expand the web security project so readers can inspect analysis evidence from portfolio cards
- Add timeline-based reconstruction of web logs from a cyber investigation perspective
- Continue adding analysis notes that separate tool screenshots, practice records, and reasoning

## Image Sources

- [OWASP ZAP image](https://commons.wikimedia.org/wiki/File:OWASP-ZAP.png)
- [Wireshark 3.6 screenshot](https://commons.wikimedia.org/wiki/File:Wireshark_3.6_screenshot.png)
- [Autopsy official screenshots](https://www.sleuthkit.org/autopsy/)

## Related Link

- [Web Security Project](/en/projects/web-security-lab/)
- [Cyber Investigation Preparation](/en/skills/cyber-investigation/)
- [Learning Roadmap](/en/journey/roadmap/)
- [2021 BCG Hacking Competition Record](/en/awards/bcg-hacking-competition/)
