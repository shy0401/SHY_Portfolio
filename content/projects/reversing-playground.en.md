---
title: Reversing Study Playground
date: 2026-06-16
draft: false
weight: 30
role: "Static/Dynamic Analysis Practice · Reusable Documentation Workflow"
image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Ghidra.jpg"
tags:
  - Reversing
  - Binary Analysis
  - Malware Basics
  - Debugging
---

## Overview

This project focuses on practicing static and dynamic binary analysis on training binaries and competition-style reversing challenges while building reusable, evidence-oriented documentation habits. The goal is not just finding the answer string, but explaining input handling, branching, memory changes, and success conditions with evidence.

The structure is based on Ghidra-style static analysis where input length, success strings, file structure, and execution output are interpreted together.

## Tool-Based Reference Images

{{< portfolio_slider >}}
https://upload.wikimedia.org/wikipedia/commons/9/91/Ghidra.jpg|Ghidra Static Analysis Screen|Reference image for organizing decompiled code, function flow, and string clues
https://www.sleuthkit.org/autopsy/images/v3/overview.png|Autopsy File Evidence Screen|Reference image for connecting executable analysis with forensic artifacts
https://upload.wikimedia.org/wikipedia/commons/c/cf/Wireshark_3.6_screenshot.png|Wireshark Communication Trace Screen|Tool screen for reviewing network behavior from analyzed programs
{{< /portfolio_slider >}}

## Responsibilities

- Structured routine steps for tracing function flow, call relationships, and string patterns
- Practiced unpacking/deobfuscation on simple protected binary samples
- Standardized analysis-note templates for consistency and reuse
- Reorganized Buffer Overflow challenge records around input length, success strings, and boundary values
- Built a standard routine that separates file basics, strings, branch conditions, and execution output
- Designed an analysis-note structure that separates static clues from dynamic verification results

## Analysis Routine

| Step | Checkpoint | Output |
| --- | --- | --- |
| 1. File Basics | Filename, extension, size, hash, executability | Initial analysis table |
| 2. Static Clues | Strings, success/failure messages, suspicious APIs, file signatures | Clue list |
| 3. Input Handling | Input length, special characters, repeated characters, boundary values | Reproduction record |
| 4. Dynamic Observation | Registers, stack, memory, branch results | Debugger observation table |
| 5. Behavior Interpretation | Success condition, vulnerable behavior, security meaning | Analysis summary |
| 6. Reporting | Clues, verification, conclusion, limitation | Reversing analysis note |

## Project Outputs

- Reversing analysis-note template
- Reinterpreted Buffer Overflow challenge record
- Static/dynamic analysis checklist
- File-structure notes connected with forensics
- Non-specialist summary for cyber-investigation-style explanation

## Outcome

The study process evolved into a repeatable methodology,  
making it easier to connect reversing outputs with broader security and forensic projects.

## Next Improvements

- Build simple training binaries to compare behavior before and after input validation
- Separate packing/obfuscation basics into independent notes
- Connect reversing outputs with forensic timelines to document traces left by executables

## Related Links

- [Reversing Study](/en/skills/reversing/)
- [Forensics Study](/en/skills/forensics/)
- [2021 BCG Hacking Competition Record](/en/awards/bcg-hacking-competition/)
