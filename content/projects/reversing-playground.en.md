---
title: Reversing Study Playground
date: 2026-06-16
draft: false
weight: 30
role: "Static/Dynamic Analysis Practice · Reusable Documentation Workflow"
image: "/media/awards/bcg-hacking-competition-writeup-1.jpg"
tags:
  - Reversing
  - Binary Analysis
  - Malware Basics
  - Debugging
---

## Overview

This project focuses on practicing static and dynamic binary analysis on training binaries and competition-style reversing challenges while building reusable, evidence-oriented documentation habits. The goal is not just finding the answer string, but explaining input handling, branching, memory changes, and success conditions with evidence.

The structure is based on the BCG `Reversing_1 - Buffer_Overflow` writeup record, where I analyzed input length, success strings, file structure, and execution output together.

## Real Activity Images

{{< portfolio_slider >}}
/media/awards/bcg-hacking-competition-writeup-1.jpg|Reversing_1 - Buffer_Overflow Writeup|Actual activity image showing input/output comparison and Buffer Overflow clues
/media/awards/bcg-hacking-competition-writeup-2.jpg|Reversing/Forensics Writeup Screen|Competition writeup screen connecting reversing and file-structure analysis
/media/awards/bcg-hacking-competition-result.png|2021 BCG Hacking Competition Result|First-year competition result: silver prize and 2nd place by points
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
