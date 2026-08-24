---
title: KubeSage
locale: fr
publishDate: 2026-08-17 00:00:00
img: kubesage_logo.png
img_alt: Logo KubeSage
description: |
  KubeSage est une plateforme assistée par IA conçue pour accélérer l'investigation et le dépannage des incidents Kubernetes.
tags:
  - IA / LLM
  - Kubernetes
  - Observabilité
  - Cloud Native
---

## Plateforme d'analyse d'incidents Kubernetes assistée par IA

KubeSage est un projet personnel conçu pour simplifier l'investigation des incidents Kubernetes grâce à l'IA et à l'observabilité.

La plateforme collecte et corrèle des données provenant de multiples sources, notamment les ressources et événements Kubernetes, les logs applicatifs, les métriques Prometheus, les traces distribuées et les données de télémétrie OpenTelemetry.

En combinant des diagnostics basés sur des règles avec des modèles de langage de grande taille (LLM), KubeSage génère automatiquement des analyses d'incidents structurées comprenant les problèmes identifiés, les corrélations, l'évaluation de leur gravité, des explications et des recommandations concrètes.

L'objectif principal du projet est de réduire le temps nécessaire pour comprendre, investiguer et résoudre les incidents de production dans les environnements Kubernetes.

**Stack technique :** Python, FastAPI, React, Kubernetes, AWS, Terraform, Prometheus, Loki, Tempo, OpenTelemetry, Helm, ArgoCD et analyse assistée par IA.

**Hébergé sur GitHub :** https://github.com/fdebar/kubesage

## Vision & philosophie

KubeSage repose sur l'idée que l'analyse des incidents ne devrait pas être limitée à un ensemble prédéfini d'outils ou de workflows.

Le projet est conçu comme une base extensible que les organisations peuvent adapter à leurs propres environnements Kubernetes, stacks d'observabilité, pratiques opérationnelles et expertises internes.

Plutôt que de construire une solution fermée et universelle, l'objectif est de fournir une base solide que les équipes peuvent personnaliser, étendre et faire évoluer en fonction de leurs besoins.

À terme, j'aimerais que KubeSage devienne un projet que d'autres ingénieurs et organisations puissent s'approprier, intégrer à leurs plateformes internes, enrichir et adapter à leurs propres problématiques opérationnelles.

La vision à long terme n'est donc pas simplement de créer un nouvel outil de gestion des incidents, mais de construire une base collaborative permettant de rendre les opérations Kubernetes plus intelligentes, plus rapides et plus faciles à comprendre.
