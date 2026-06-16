---
title: Web Hacking Study
date: 2026-06-16
draft: false
weight: 10
description: "Roadmap for web vulnerability reproduction, impact assessment, and remediation priority"
image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80"
tags:
  - OWASP
  - Web Security
  - Vulnerability
  - HTTP
---

## Overview

My web hacking study does not stop at finding a vulnerability. I focus on explaining when it is reproducible, how it affects the service, and what remediation should be prioritized. The main reference frame is OWASP Top 10 and practical web application structure.

## Learning Roadmap

| Stage | Topic | Practice |
| --- | --- | --- |
| Stage 1 | HTTP basics | Request methods, status codes, headers, cookies, sessions |
| Stage 2 | Input validation | SQL Injection, XSS, Command Injection reproduction |
| Stage 3 | Auth and access control | Login bypass, session fixation, missing authorization checks |
| Stage 4 | File handling | Upload extension validation, path traversal, download access control |
| Stage 5 | Reporting | Reproduction condition, impact, remediation, and priority |

## Current Routine

- Compare requests and responses using browser developer tools and Burp Suite-style workflow
- Write notes in the order of `observation → hypothesis → reproduction → impact → response`
- Build small vulnerable examples and compare behavior before and after fixes
- Use OWASP, PortSwigger Web Security Academy, and MDN as external references for terminology and remediation logic

## Progress

- Structured a PoC-based reproduction template
- Reflected analysis flow in my web security project page
- Strengthened the ability to classify challenge types through KISA and security competition experience
- Practiced explaining issues from service-risk and remediation-priority perspectives

## Next Plan

- Write mini cases for SQLi, XSS, auth bypass, and file upload issues
- Add articles with `attack reproduction + remediation code + checklist`
- Expand the web security project so readers can inspect analysis evidence from portfolio cards
- Add timeline-based reconstruction of web logs from a cyber investigation perspective

## Related Link

- [Web Security Project](/en/projects/web-security-lab/)
- [Cyber Investigation Preparation](/en/skills/cyber-investigation/)
- [Learning Roadmap](/en/journey/roadmap/)
