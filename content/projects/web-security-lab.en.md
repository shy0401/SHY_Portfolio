---
title: Web Security Analysis Project
date: 2026-06-16
draft: false
weight: 10
role: "Vulnerability Analysis · Attack-Flow Mapping · Remediation Prioritization"
image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/OWASP-ZAP.png"
tags:
  - Web Hacking
  - OWASP
  - Threat Analysis
  - Security Reporting
---

## Overview

This project reproduces key vulnerabilities in training web services and CTF-style challenges, then translates attack-path analysis into practical remediation priorities. The focus is not just finding vulnerabilities, but explaining request flow, reproduction conditions, impact scope, and response direction in one report-style output.

The project connects XSS, Path Traversal, and proxy/request manipulation scenarios with OWASP ZAP, browser developer tools, and Wireshark-style request analysis.

## Tool-Based Reference Images

{{< portfolio_slider >}}
https://upload.wikimedia.org/wikipedia/commons/b/b0/OWASP-ZAP.png|OWASP ZAP Web Vulnerability Analysis Screen|Reference screen for proxying, crawling, and vulnerability detection workflows
https://upload.wikimedia.org/wikipedia/commons/c/cf/Wireshark_3.6_screenshot.png|Wireshark HTTP Flow Analysis Screen|Reference image for reviewing requests, responses, and session flow at the packet level
https://www.sleuthkit.org/autopsy/images/v3/overview.png|Autopsy Evidence Exploration Screen|Reference image for connecting web attack traces with forensic investigation
{{< /portfolio_slider >}}

## Responsibilities

- Designed vulnerability test scenarios focused on authentication, session handling, and input validation
- Produced PoC reproduction logs and structured impact analysis reports
- Proposed a response roadmap balancing risk severity and implementation effort
- Organized Reflected XSS, Path Traversal, file-path access, and request header/parameter manipulation flow
- Documented attack flow step by step using browser developer tools and request/response comparison
- Standardized reproduction screenshots, request values, server responses, and remediation ideas into one template

## Analysis Procedure

| Step | Method | Output |
| --- | --- | --- |
| 1. Target Review | Check URL structure, input forms, auth state, and file-access flow | Feature list and input-point list |
| 2. Request Observation | Compare Header, Cookie, Query String, and Body through developer tools | Request/response comparison table |
| 3. Vulnerability Hypothesis | Separate XSS, Path Traversal, and auth/access-control possibilities | Candidate vulnerability list |
| 4. Reproduction | Change input values in a safe practice environment and observe response | PoC logs and screenshots |
| 5. Impact Assessment | Review information exposure, access bypass, and file-access possibility | Risk and priority table |
| 6. Remediation Proposal | Suggest input validation, output encoding, path normalization, and authorization checks | Remediation checklist |

## Project Outputs

- PoC reproduction logs by vulnerability type
- Request/response comparison tables
- Attack-flow diagram drafts
- Remediation priority table
- Investigation-style incident summary

## Outcome

The project improved my ability to turn technical findings into decision-ready security documentation,  
which is directly aligned with investigation-oriented cyber response work.

## Next Improvements

- Separate detailed case pages for SQL Injection, XSS, Path Traversal, and auth bypass
- Add vulnerable-code and fixed-code comparison material
- Connect web logs with forensic timelines to strengthen the flow from attack attempt to server response and evidence record

## Related Links

- [Web Hacking Study](/en/skills/web-hacking/)
- [Cyber Investigation Preparation](/en/skills/cyber-investigation/)
- [2021 BCG Hacking Competition Record](/en/awards/bcg-hacking-competition/)
