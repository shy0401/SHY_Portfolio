---
title: Forensics Study
date: 2026-06-16
draft: false
weight: 30
description: "Roadmap for digital evidence collection, integrity verification, and timeline analysis"
image: "/media/awards/bcg-hacking-competition-writeup-2.jpg"
tags:
  - Digital Forensics
  - Evidence
  - Timeline
  - Incident Response
---

## Overview

Forensics study is about finding digital traces, preserving them as reliable evidence, and explaining them as an incident flow. I study evidence collection, integrity verification, timeline reconstruction, and report writing as one connected workflow for cyber investigation preparation.

In the 2021 BCG Hacking Competition, which I joined during my first year, I solved `Forensic_1` and `Forensic_2` challenges by checking file signatures, hex values, image structure, and hidden-string clues. I now reorganize those records into the flow `original preservation → clue extraction → interpretation → reporting`.

## Learning Roadmap

| Stage | Topic | Practice |
| --- | --- | --- |
| Stage 1 | Evidence preservation | Original/copy separation, hash record, metadata check |
| Stage 2 | Basic file analysis | File signature, extension mismatch, Magic Number, hex values |
| Stage 3 | Hidden trace discovery | Strings, image internal data, embedded/compressed traces, metadata |
| Stage 4 | Log analysis | Web logs, system logs, event time ordering |
| Stage 5 | File artifacts | Deleted files, archives, download traces, execution traces |
| Stage 6 | Timeline | Reconstruct behavior sequence on a timeline |
| Stage 7 | Reporting | Separate evidence list, reasoning, conclusion, and limitations |

## Real Activity Images

{{< portfolio_slider >}}
/media/awards/bcg-hacking-competition-writeup-2.jpg|BCG Forensic/Network Writeup Screen|Actual competition writeup image covering Forensic_1, Path Traversal, and Network challenges
/media/awards/bcg-hacking-competition-writeup-1.jpg|BCG Forensic_2 - What_Does_BCG_Mean Record|Activity image showing hex values and image file structure analysis
/media/awards/bcg-hacking-competition-result.png|2021 BCG Hacking Competition Result|First-year competition result: silver prize and 2nd place by points
{{< /portfolio_slider >}}

## Forensics Topics Connected From Real Activities

| Activity/Challenge | Clue Checked | Current Learning Extension |
| --- | --- | --- |
| Forensic_1 - My_Signature_Letter_Is | File signature and internal structure were used as clues | Expanded into checking extension and Magic Number first |
| Forensic_2 - What_Does_BCG_Mean | Hex values, image header, and hidden-string flow | Connected to Hex Editor-based file-structure analysis and hidden data extraction |
| Image file analysis | PNG/JPG headers, data area, suspicious strings | Expanded into metadata, file tail, and embedded data checklist |
| Competition writeup records | Problem screens and explanations were preserved | Reorganized into evidence capture and reasoning separation for forensic reports |
| Network/path connection | URL, path, and file-access traces were checked | Practice connecting web logs and file-access records into one incident timeline |

## Evidence Analysis Checklist

| Category | Question | Record Format |
| --- | --- | --- |
| Original preservation | Are original and working copies separated? | Record filename, path, and hash first |
| Integrity | Are hashes identical before and after analysis? | Record hash value and calculation time |
| File structure | Does extension match the Magic Number? | Compare header bytes with expected file format |
| Hidden traces | Are strings, metadata, or embedded data present? | Separate location, extraction method, and meaning |
| Time data | Do created/modified/accessed times match the incident flow? | Normalize time zone and organize timeline table |
| Reporting | Are evidence and assumptions separated? | Separate facts, interpretation, limitations, and next checks |

## Current Routine

- Calculate hashes first and check whether files change before and after analysis
- Separate IPs, accounts, timestamps, request paths, and event IDs into tables
- Connect the workflow with my forensic automation project for repeatable collection and organization
- Refer to public materials such as NIST, The Sleuth Kit, Autopsy, and Volatility to refine terminology and procedure descriptions
- Use a Hex Editor to verify file headers/signatures and compare extension with actual file type
- For image/document files, inspect metadata, strings, file tail, and embedded-data traces through a separate checklist

## Progress

- Built evidence organization templates
- Applied the workflow to the forensic automation project
- Managed award/career proof files in the portfolio with clear paths and explanations
- Connected security monitoring experience with the flow from detection event to investigation material
- Connected BCG `Forensic_1` and `Forensic_2` writeup images as real portfolio evidence
- Organized file-signature and hex-analysis workflow concretely in the forensics page

## Next Plan

- Build web-attack log scenarios and practice evidence flow reconstruction
- Connect reversing findings with forensic traces left by executables
- Draft reports in the order of `summary → evidence → analysis → judgment → response`
- Strengthen legal and ethical evidence-preservation perspective through the cyber investigation page
- Keep accumulating evidence captures and reasoning notes around real activity images
- Strengthen the practice of connecting web hacking/reversing outputs with forensic evidence in one timeline

## Related Link

- [Forensic Automation Project](/en/projects/forensic-pipeline/)
- [Reversing Study](/en/skills/reversing/)
- [Cyber Investigation Preparation](/en/skills/cyber-investigation/)
- [2021 BCG Hacking Competition Record](/en/awards/bcg-hacking-competition/)
