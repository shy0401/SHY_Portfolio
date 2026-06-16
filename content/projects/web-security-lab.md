---
title: 웹 보안 분석 프로젝트
date: 2026-06-16
draft: false
weight: 10
role: "취약점 분석 · 공격 흐름 정리 · 개선 우선순위 제안"
image: "/media/awards/bcg-hacking-competition-writeup-2.jpg"
tags:
  - Web Hacking
  - OWASP
  - Threat Analysis
  - Report Writing
---

## 프로젝트 개요

학습용 웹 서비스와 CTF/대회형 문제를 대상으로 주요 웹 취약점을 재현하고, 공격 경로를 분석해 대응 우선순위를 제시하는 프로젝트입니다. 단순히 “취약점 발견”에 머물지 않고 요청 흐름, 재현 조건, 영향 범위, 대응 방향을 한 번에 설명하는 보고형 산출물을 만드는 데 초점을 두고 있습니다.

이 프로젝트는 2021 BCG 해킹대회에서 다룬 XSS, Path Traversal, 프록시/요청 조작 문제와 이후 웹해킹 학습 루틴을 연결해 구성했습니다.

## 실제 활동 이미지

{{< portfolio_slider >}}
/media/awards/bcg-hacking-competition-writeup-2.jpg|웹 취약점 풀이 활동 화면|Practice XSS, Path Traversal, Network 문제를 풀이하며 브라우저 개발자 도구와 요청 흐름을 확인한 기록
/media/awards/bcg-hacking-competition-writeup-1.jpg|프록시/요청 조작 풀이 기록|Referer, URL 파라미터, 파일 경로 접근 흐름을 함께 확인한 활동 이미지
/media/awards/bcg-hacking-competition-result.png|2021 BCG 해킹대회 결과|1학년 때 참가해 은상, 포인트 석차 상위 2등을 기록한 대회 성과
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
