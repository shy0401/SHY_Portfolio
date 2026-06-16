---
title: Reversing Study
date: 2026-06-16
draft: false
weight: 20
description: "Roadmap for static/dynamic binary analysis and behavior understanding"
image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1200&q=80"
tags:
  - Reversing
  - Binary Analysis
  - Debugging
  - Malware Analysis
---

## Overview

Reversing study helps me understand how an executable behaves and explain observed behavior with evidence. I currently repeat basic binary analysis routines while separating static clues and dynamic verification.

## Learning Roadmap

| Stage | Topic | Practice |
| --- | --- | --- |
| Stage 1 | Executable structure | PE structure, sections, entry point, import table |
| Stage 2 | Static analysis | Strings, function names, branch conditions, suspicious API calls |
| Stage 3 | Dynamic analysis | Registers, memory, and function flow in a debugger |
| Stage 4 | Behavior interpretation | File creation, network access, registry change possibilities |
| Stage 5 | Reporting | Suspicious point, evidence, reproduction method, and security meaning |

## Current Routine

- Start with small training binaries and read control flow function by function
- Check strings and API calls first, then compare them with actual execution flow
- Keep debugger observations separate from analysis conclusions
- Review public reversing writeups and training materials to improve explanation style

## Progress

- Standardized reversing note templates
- Organized findings into project-linkable format
- Reflected the structure `static clue → dynamic verification → behavior explanation` in the reversing study project
- Connected reversing outputs with cyber investigation preparation by translating technical findings into incident flow

## Next Plan

- Learn basic obfuscation, packing, and anti-debugging concepts step by step
- Build small behavior scenarios and document analysis logs with response perspective
- Connect reversing findings with forensic timelines to explain artifacts left by executables
- Write non-specialist summaries for reversing results

## Related Link

- [Reversing Project](/en/projects/reversing-playground/)
- [Forensics Study](/en/skills/forensics/)
- [Cyber Investigation Preparation](/en/skills/cyber-investigation/)
