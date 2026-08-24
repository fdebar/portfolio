---
title: KubeSage
locale: en
publishDate: 2026-08-17 00:00:00
img: kubesage_logo.png
img_alt: KubeSage Logo
description: |
  KubeSage is an AI-powered platform designed to accelerate Kubernetes incident investigation and troubleshooting.
tags:
  - AI / LLM
  - Kubernetes
  - Observability
  - Cloud Native
---

## AI-Assisted Kubernetes Incident Analysis Platform

KubeSage is a personal project designed to simplify Kubernetes incident investigation through AI and observability.

The platform collects and correlates data from multiple sources, including Kubernetes resources and events, application logs, Prometheus metrics, distributed traces, and OpenTelemetry telemetry.

By combining rule-based diagnostics with Large Language Models (LLMs), KubeSage automatically generates structured incident analyses containing findings, correlations, severity assessments, explanations, and actionable recommendations.

The main objective of the project is to reduce the time required to understand, investigate, and resolve production incidents in Kubernetes environments.

**Tech stack:** Python, FastAPI, React, Kubernetes, AWS, Terraform, Prometheus, Loki, Tempo, OpenTelemetry, Helm, ArgoCD, and AI-powered analysis.

**Hosted on GitHub:** <a href="https://github.com/fdebar/kubesage" target="_blank" rel="noopener noreferrer" data-analytics="demo_click">View on GitHub</a>

## Vision & Philosophy

KubeSage is built with the idea that incident analysis should not be limited to a predefined set of tools or workflows.

The project is designed as an extensible foundation that organizations can adapt to their own Kubernetes environments, observability stacks, operational practices, and internal expertise.

Rather than building a closed, one-size-fits-all solution, the goal is to provide a solid starting point that teams can customize, extend, and evolve according to their needs.

Ultimately, I would like KubeSage to become a project that other engineers and organizations can take ownership of, integrate into their internal platforms, contribute to, and shape around their own operational challenges.

The long-term vision is therefore not simply to build another incident management tool, but to create a collaborative foundation for smarter, faster, and more explainable Kubernetes operations.
