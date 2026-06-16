---
title: Web Security Analysis Project
date: 2026-06-16
draft: false
weight: 10
role: "Vulnerability Analysis · Attack-Flow Mapping · Remediation Prioritization"
image: "/media/awards/bcg-hacking-competition-writeup-2.jpg"
tags:
  - Web Hacking
  - OWASP
  - Threat Analysis
  - Security Reporting
---

## Overview

This project reproduces key vulnerabilities in training web services and CTF-style challenges, then translates attack-path analysis into practical remediation priorities. The focus is not just finding vulnerabilities, but explaining request flow, reproduction conditions, impact scope, and response direction in one report-style output.

The project connects my 2021 BCG Hacking Competition experience with XSS, Path Traversal, and proxy/request manipulation challenges to my current web hacking learning routine.

## Real Activity Images

{{< portfolio_slider >}}
/media/awards/bcg-hacking-competition-writeup-2.jpg|Web Vulnerability Activity Screen|Record of checking developer tools and request flow while solving Practice XSS, Path Traversal, and Network challenges
/media/awards/bcg-hacking-competition-writeup-1.jpg|Proxy/Request Manipulation Record|Activity image covering Referer, URL parameter, and file-path access analysis
/media/awards/bcg-hacking-competition-result.png|2021 BCG Hacking Competition Result|First-year competition result: silver prize and 2nd place by points
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
