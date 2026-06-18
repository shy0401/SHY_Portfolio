---
title: 웹 보안 분석 프로젝트
date: 2026-06-16
draft: false
weight: 10
role: "취약점 분석 · 공격 흐름 정리 · 개선 우선순위 제안"
image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/OWASP-ZAP.png"
tags:
  - Web Hacking
  - OWASP
  - Threat Analysis
  - Report Writing
---

## 프로젝트 개요

학습용 웹 서비스와 CTF/대회형 문제를 대상으로 주요 웹 취약점을 재현하고, 공격 경로를 분석해 대응 우선순위를 제시하는 프로젝트입니다. 단순히 “취약점 발견”에 머물지 않고 요청 흐름, 재현 조건, 영향 범위, 대응 방향을 한 번에 설명하는 보고형 산출물을 만드는 데 초점을 두고 있습니다.

이 프로젝트는 XSS, Path Traversal, 프록시/요청 조작 문제를 OWASP ZAP, 브라우저 개발자 도구, Wireshark 흐름과 연결해 구성했습니다.

## 분석 흐름 이미지

{{< portfolio_slider >}}
https://upload.wikimedia.org/wikipedia/commons/b/b0/OWASP-ZAP.png|OWASP ZAP 웹 취약점 분석 화면|프록시, 크롤링, 취약점 탐지 흐름을 프로젝트 분석 절차와 연결
https://upload.wikimedia.org/wikipedia/commons/c/cf/Wireshark_3.6_screenshot.png|Wireshark HTTP 흐름 분석 화면|요청/응답과 세션 흐름을 패킷 관점에서 검토
https://www.sleuthkit.org/autopsy/images/v3/overview.png|Autopsy 증거 탐색 화면|웹 공격 이후 남는 파일·로그 흔적을 포렌식 프로젝트와 연결
{{< /portfolio_slider >}}

## 수행 내용

- 인증, 세션, 입력 검증 구간 중심의 취약점 테스트 시나리오 설계
- PoC 재현 로그와 영향도 분석 리포트 작성
- 개선 난이도와 위험도를 함께 고려한 대응 로드맵 제안
- Reflected XSS, Path Traversal, 파일 경로 접근, 요청 헤더/파라미터 조작 흐름 정리
- 브라우저 개발자 도구와 요청/응답 비교를 통해 공격 흐름을 단계별로 문서화
- 재현 화면, 요청값, 서버 반응, 대응 아이디어를 하나의 표준 템플릿으로 정리

## 분석 절차

| 단계 | 수행 방식 | 산출물 |
| --- | --- | --- |
| 1. 대상 파악 | URL 구조, 입력 폼, 인증 여부, 파일 접근 흐름 확인 | 기능 목록, 입력 지점 목록 |
| 2. 요청 관찰 | 개발자 도구로 Header, Cookie, Query String, Body 비교 | 요청/응답 비교표 |
| 3. 취약점 가설 | XSS, Path Traversal, 인증/인가 누락 가능성 분리 | 취약점 후보 목록 |
| 4. 재현 | 안전한 실습 환경에서 입력값을 바꿔 서버 반응 확인 | PoC 기록, 캡처 이미지 |
| 5. 영향도 평가 | 정보 노출, 권한 우회, 파일 접근 가능성 검토 | 위험도와 우선순위 |
| 6. 대응 제안 | 입력 검증, 출력 인코딩, 경로 정규화, 권한 검증 제안 | 개선 체크리스트 |

## 프로젝트 산출물

- 취약점별 PoC 재현 로그
- 요청/응답 비교표
- 공격 흐름 다이어그램 초안
- 대응 우선순위 표
- 사이버수사 관점의 사건 흐름 요약문

## 결과

기술 분석 결과를 단순 발견 목록이 아닌 대응 의사결정 자료로 정리하면서,  
수사형 보안 업무에 필요한 기록 품질과 설명력을 함께 강화했습니다.

## 다음 개선 계획

- SQL Injection, XSS, Path Traversal, 인증 우회별 상세 케이스 페이지 분리
- 취약 코드와 개선 코드 비교 자료 추가
- 웹 로그를 포렌식 타임라인과 연결해 “공격 시도 → 서버 반응 → 증거 기록” 흐름 강화

## 관련 링크

- [웹해킹 학습](/skills/web-hacking/)
- [사이버수사 준비](/skills/cyber-investigation/)
- [2021 BCG 해킹대회 2등 기록](/awards/bcg-hacking-competition/)
