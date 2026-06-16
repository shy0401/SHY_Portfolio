---
title: Forensic Automation Pipeline
date: 2026-06-16
draft: false
weight: 20
role: "Evidence Automation · Integrity Validation · Reporting Template Design"
image: "https://www.sleuthkit.org/autopsy/images/v3/overview.png"
tags:
  - Forensics
  - Automation
  - Evidence
  - Incident Response
---

## Overview

This project automates repetitive baseline forensic tasks to reduce turnaround time and standardize evidence-ready outputs. The goal is to separate originals and working copies, then record hashes, file signatures, metadata, and timelines in a consistent format.

The project is based on evidence exploration, timeline reconstruction, and file-structure workflows used in public analysis tools such as Autopsy, Wireshark, and Ghidra.

## Tool-Based Reference Images

{{< portfolio_slider >}}
https://www.sleuthkit.org/autopsy/images/v3/overview.png|Autopsy Digital Forensics Screen|Reference screen for exploring evidence images, file systems, and timeline data
https://upload.wikimedia.org/wikipedia/commons/c/cf/Wireshark_3.6_screenshot.png|Wireshark Network Forensics Screen|Analysis image for reviewing communication traces and event timing at the packet level
/media/cyber-investigation/evidence-report-flow.svg|Evidence-to-Report Flow|The evidence-report connection structure targeted by the forensic automation pipeline
{{< /portfolio_slider >}}

## Responsibilities

- Automated file hash generation and integrity logging for collected artifacts
- Structured parsing rules for event logs and timeline reconstruction
- Designed a consistent reporting template for evidence delivery
- Designed a rule to check file signatures and extension mismatches first
- Organized checkpoints for hex values, strings, metadata, and file-tail data
- Structured a standard format that separates before/after hashes, collection location, and analyst notes

## Pipeline Design

| Step | Automation/Standardization Item | Output |
| --- | --- | --- |
| 1. Collection Registration | Filename, path, collection time, and source | Evidence list |
| 2. Integrity Calculation | SHA-256 or similar hash calculation | Hash record table |
| 3. File Structure Review | Magic Number, extension, size, metadata | Basic file analysis table |
| 4. Trace Extraction | Strings, suspicious URLs, embedded data, log fields | Clue list |
| 5. Timeline Building | Created/modified/accessed time and log timestamps | Incident timeline |
| 6. Report Generation | Summary, evidence, analysis, judgment, limitations | Report draft |

## Project Outputs

- Evidence-list template
- Hash verification table
- File-signature checklist
- Timeline format
- Cyber-investigation-style forensic report structure

## Outcome

The pipeline improved both reproducibility and documentation quality,  
making forensic findings easier to review and share during incident response.

## Next Improvements

- Add simple script-based hash calculation and file-list output
- Add examples that merge web-attack logs and file evidence into one timeline
- Connect reversing project outputs with forensic traces left by executables

## Related Links

- [Forensics Study](/en/skills/forensics/)
- [Cyber Investigation Preparation](/en/skills/cyber-investigation/)
- [2021 BCG Hacking Competition Record](/en/awards/bcg-hacking-competition/)
