---
title: Reversing Study
date: 2026-06-16
draft: false
weight: 20
description: "Roadmap for static/dynamic binary analysis and behavior understanding"
image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Ghidra.jpg"
tags:
  - Reversing
  - Binary Analysis
  - Debugging
  - Malware Analysis
---

## Overview

Reversing study helps me understand how an executable behaves and explain observed behavior with evidence. I currently repeat basic binary analysis routines while separating static clues and dynamic verification.

For reversing study images, I use public analysis tool screens such as Ghidra rather than personal challenge captures. I organize input length, execution output strings, and internal file structure around what clues are visible and how they can be verified.

## Learning Roadmap

| Stage | Topic | Practice |
| --- | --- | --- |
| Stage 1 | Executable structure | PE structure, sections, entry point, import table |
| Stage 2 | Basic static analysis | File hash, signature, strings, function names, suspicious API calls |
| Stage 3 | Input and branch tracing | Input length, comparison strings, conditions, success/failure messages |
| Stage 4 | Dynamic analysis | Registers, stack, memory, and function flow in a debugger |
| Stage 5 | Vulnerable behavior | Buffer overflow, boundary values, and memory-range issues |
| Stage 6 | Behavior interpretation | File creation, network access, registry change possibilities |
| Stage 7 | Reporting | Suspicious point, evidence, reproduction method, and security meaning |

## Tool-Based Study Images

{{< portfolio_slider >}}
https://upload.wikimedia.org/wikipedia/commons/9/91/Ghidra.jpg|Ghidra Static Analysis Screen|Representative reversing tool screen for functions, decompiled code, and string clues
https://www.sleuthkit.org/autopsy/images/v3/overview.png|Autopsy File Evidence Screen|Reference image for linking executable analysis with file artifacts
https://upload.wikimedia.org/wikipedia/commons/c/cf/Wireshark_3.6_screenshot.png|Wireshark Network Behavior Screen|Tool screen for checking communication artifacts from analyzed programs
{{< /portfolio_slider >}}

## Reversing Topics Connected From Real Activities

| Activity/Challenge | Clue Checked | Current Learning Extension |
| --- | --- | --- |
| Reversing_1 - Buffer_Overflow | The title itself was a hint, and input length plus success output were key clues | Expanded into boundary-value, buffer-size, and missing input-validation analysis |
| Execution output strings | Console output included success-related strings | Used as a starting point for string search and branch tracing |
| Hex/file structure check | Compared internal bytes and signatures | Connected to the habit of checking file format and headers first |
| Competition writeup records | Organized problem-solving process with images and text | Rewritten into forensics and cyber-investigation-style explanation |

## Detailed Analysis Routine

| Category | Checkpoint | Record Format |
| --- | --- | --- |
| File basics | Filename, extension, hash, size, executability | Organize in a table before analysis |
| String analysis | Success/failure messages, URLs, paths, suspicious keywords | Separate string value and estimated meaning |
| Function flow | Input-handling, comparison, and output functions | Summarize call flow as a simple sequence |
| Dynamic observation | Registers, stack changes, branch result, memory changes | Separate debugger observations from conclusions |
| Vulnerable behavior | Missing input length limit, boundary errors, validation gaps | Write reproduction condition and security meaning together |
| Reporting | Clue, verification process, conclusion, limitation | Summarize in cyber-investigation-style narrative |

## Current Routine

- Start with small training binaries and read control flow function by function
- Check strings and API calls first, then compare them with actual execution flow
- Keep debugger observations separate from analysis conclusions
- Review public reversing writeups and training materials to improve explanation style
- For CTF/competition challenges, record input, output, clues, and reasoning together instead of saving only the answer
- Revisit file-structure clues from reversing problems through the forensics learning track

## Progress

- Standardized reversing note templates
- Organized findings into project-linkable format
- Reflected the structure `static clue → dynamic verification → behavior explanation` in the reversing study project
- Connected reversing outputs with cyber investigation preparation by translating technical findings into incident flow
- Connected public analysis tool screens such as Ghidra to static clues and dynamic verification records
- Reorganized the Buffer Overflow challenge through input validation, boundary value, and execution-flow perspectives

## Next Plan

- Learn basic obfuscation, packing, and anti-debugging concepts step by step
- Build small behavior scenarios and document analysis logs with response perspective
- Connect reversing findings with forensic timelines to explain artifacts left by executables
- Write non-specialist summaries for reversing results
- Keep accumulating reversing evidence by separating tool screens, practice captures, and analysis notes
- Strengthen the practice of converting debugger observations into cyber-investigation-style explanations

## Image Sources

- [Ghidra image](https://commons.wikimedia.org/wiki/File:Ghidra.jpg)
- [Autopsy official screenshots](https://www.sleuthkit.org/autopsy/)
- [Wireshark 3.6 screenshot](https://commons.wikimedia.org/wiki/File:Wireshark_3.6_screenshot.png)

## Related Link

- [Reversing Project](/en/projects/reversing-playground/)
- [Forensics Study](/en/skills/forensics/)
- [Cyber Investigation Preparation](/en/skills/cyber-investigation/)
- [2021 BCG Hacking Competition Record](/en/awards/bcg-hacking-competition/)
