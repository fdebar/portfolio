export default {
	navigation: {
		home: 'Accueil',
		about: 'À propos',
		work: 'Projets',
		contact: 'Contact',
	},
	contact: {
		title: 'Envie de travailler ensemble ?',
		button: 'Envoyez-moi un message',
		resume: 'Télécharger mon CV',
		resumeFr: 'CV français',
		resumeEn: 'CV anglais',
	},
	homepage: {
		title: 'Senior Platform Engineer spécialisé en Kubernetes et infrastructures Cloud',
		tagline:
			"Je conçois et construis des plateformes cloud-native, automatise des infrastructures à grande échelle et développe des outils qui permettent aux équipes d'ingénierie de livrer plus rapidement.",
		image_alt:
			'Flavien Debar souriant, portant une chemise à carreaux rouges et des lunettes à monture écaille',
		pills: ['Platform Engineer', 'Cloud Native', 'IA & LLM'],
		skills: {
			first: {
				title: 'Architecture Cloud Native',
				description:
					"Conception d'architectures cloud-native robustes, scalables et observables avec Kubernetes et AWS.",
			},
			second: {
				title: 'Platform Engineering',
				description:
					'Construction de plateformes fiables permettant aux équipes de développer, déployer et exploiter leurs applications de manière autonome.',
			},
			third: {
				title: "Opérations pilotées par l'IA",
				description:
					"Utilisation de l'IA pour automatiser l'analyse des incidents, accélérer le troubleshooting et améliorer la fiabilité.",
			},
		},
	},
	projects: {
		title: 'Projets',
		tagline:
			'Découvrez mes projets les plus récents pour avoir un aperçu de mes expériences et réalisations.',
	},
	meta: {
		title: 'À propos | Flavien Debar',
		description:
			'Senior Platform & DevOps Engineer spécialisé en AWS, Kubernetes et Platform Engineering.',
	},
	hero: {
		title: 'Senior Platform & DevOps Engineer',
		tagline: 'AWS • Kubernetes • Terraform • Helm • GitOps • CI/CD • OpenTelemetry',
	},
	about: {
		title: 'À propos de moi',
		paragraphs: [
			'Je suis Senior DevOps / Platform Engineer, spécialisé dans la construction de plateformes cloud-native avec AWS et Kubernetes.',
			"Mon parcours dans le Cloud et le Platform Engineering a commencé avec une migration à grande échelle d'une infrastructure bare metal vers AWS. J'ai dû apprendre le Cloud depuis les bases, introduire l'Infrastructure as Code avec Terraform et contribuer à la migration d'une plateforme de production tout en maintenant le produit en fonctionnement. C'était un projet exigeant, parfois stressant, mais il m'a appris l'une des choses que j'apprécie le plus dans l'ingénierie : savoir effectuer des changements importants en toute sécurité sans ralentir le produit.",
			"À partir de là, mon travail a progressivement évolué de l'infrastructure vers les plateformes. Nous sommes passés de Docker Compose à ECS, puis d'ECS à EKS, en introduisant Kubernetes et les pratiques GitOps au passage. J'ai également travaillé à améliorer l'expérience développeur en construisant des environnements self-service que les développeurs et les équipes QA pouvaient créer eux-mêmes.",
			"Aujourd'hui, j'aime résoudre les problèmes d'infrastructure une fois pour que les développeurs n'aient pas à les résoudre à nouveau. Je considère qu'une bonne plateforme doit rendre l'infrastructure et les déploiements presque invisibles, permettant aux développeurs de se concentrer sur l'écriture de code tandis que l'automatisation et la CI/CD réduisent les risques opérationnels.",
			"J'apprécie particulièrement de travailler à l'intersection de Kubernetes, AWS, CI/CD et de l'expérience développeur, en comprenant à la fois les besoins des développeurs et les enjeux opérationnels liés aux systèmes qu'ils construisent.",
			"J'explore également la manière dont l'IA peut améliorer notre façon d'opérer des systèmes complexes. KubeSage est mon projet personnel actuel : il combine l'observabilité Kubernetes et l'analyse d'incidents assistée par IA pour explorer à quoi pourraient ressembler les opérations des plateformes de demain.",
		],
	},
	experiences: {
		title: 'Expérience',
		first: {
			title: 'Docebo — Systems & Platform Engineer (mars 2021 – mars 2026)',
			list_tasks: [
				"Conception et construction d'une plateforme GitLab CI/CD standardisée et self-service.",
				"Industrialisation d'une plateforme de Platform Engineering basée sur AWS, couvrant environ 20 comptes AWS et 50 clusters EKS.",
				'Développement de fonctionnalités pour un framework CLI interne basé sur Go.',
				'Industrialisation des déploiements Amazon EKS avec Terraform et FluxCD.',
			],
		},
		second: {
			title: 'Docebo — Lead Developer (nov. 2020 – mars 2021)',
			list_tasks: [
				'Migration des pipelines CI/CD de Bamboo vers GitLab CI/CD.',
				'Conception de services basés sur AWS Lambda et EventBridge.',
				"Définition des stratégies d'infrastructure et des choix technologiques.",
			],
		},
	},
	selectedWork: {
		title: 'Réalisations',
		first: {
			title: 'Bare Metal → AWS',
			description:
				"Migration à grande échelle d'une infrastructure bare metal vers AWS, avec l'introduction progressive de l'Infrastructure as Code avec Terraform. J'ai contribué à la migration de la plateforme de production tout en maintenant le produit en fonctionnement, en remplaçant progressivement une infrastructure gérée manuellement par un provisioning reproductible et automatisé. Ce projet a également été l'occasion de construire mes bases sur AWS et de repenser la manière dont l'infrastructure pouvait évoluer de façon sûre aux côtés du produit.",
		},
		second: {
			title: 'ECS → EKS',
			description:
				"À mesure que la plateforme évoluait, nous sommes passés de Docker Compose et ECS à Kubernetes sur Amazon EKS. J'ai contribué à cette migration et participé à l'introduction de Kubernetes et des pratiques GitOps, rendant les déploiements plus déclaratifs, reproductibles et faciles à exploiter dans les différents environnements. Cette transition a également renforcé la capacité de la plateforme à supporter plusieurs équipes et environnements sans ajouter de complexité opérationnelle pour les développeurs.",
		},
		third: {
			title: 'Self-Service pour les développeurs',
			description:
				"L'un des aspects les plus gratifiants du travail sur la plateforme a été de rendre l'infrastructure presque invisible pour les développeurs et les équipes QA. J'ai contribué à la mise en place d'un workflow self-service permettant aux équipes de créer des environnements de staging complets directement depuis leur workflow de développement, avec des environnements associés à des tickets Jira spécifiques, tels que des fonctionnalités ou des corrections de bugs. L'objectif était simple : **les développeurs doivent pouvoir obtenir l'environnement dont ils ont besoin sans avoir à comprendre ou gérer l'infrastructure qui se trouve derrière.** Cette approche a renforcé l'autonomie des développeurs tout en réduisant les opérations manuelles et en rendant le processus de livraison plus cohérent et prévisible.",
		},
	},
	howIWork: {
		title: 'Ma façon de travailler',
		items: [
			{
				title: 'Faire disparaître la complexité',
				description:
					"J'aime résoudre les problèmes d'infrastructure une fois pour que les développeurs n'aient pas à les résoudre à nouveau.",
			},
			{
				title: 'Expérience développeur',
				description:
					"L'infrastructure et les déploiements doivent donner les moyens aux développeurs d'être efficaces, pas les détourner de l'écriture de logiciels.",
			},
			{
				title: 'Automatisation',
				description:
					"Les opérations répétitives et sources d'erreurs doivent être automatisées autant que possible.",
			},
			{
				title: 'Faire évoluer les systèmes en toute sécurité',
				description:
					'Les plateformes doivent pouvoir évoluer sans ralentir le produit ni mettre la fiabilité en danger.',
			},
		],
	},
	next: {
		title: 'Et maintenant ?',
		paragraphs: [
			"Je m'intéresse à ce qui vient ensuite pour le Platform Engineering. À mesure que les plateformes deviennent de plus en plus automatisées et observables, je pense que l'IA peut aider les ingénieurs à aller au-delà de la simple détection des problèmes et à les comprendre plus rapidement.",
			"J'explore actuellement ces idées à travers KubeSage, mon projet d'analyse d'incidents Kubernetes, dans lequel je combine observabilité, automatisation et diagnostics assistés par IA. C'est une continuité naturelle de ce que je construis depuis le début de ma carrière : rendre les systèmes complexes plus faciles à exploiter tout en donnant aux ingénieurs davantage de temps pour se concentrer sur la résolution de problèmes qui ont réellement de la valeur.",
		],
	},
	more: {
		title: 'En savoir plus sur moi',
		volunteering: 'Bénévolat',
		first_aider: 'Protection Civile — Secouriste (2024 – 2025)',
		education: 'Formation',
		university: 'Université de Cergy-Pontoise',
		education_degree: 'Licence professionnelle Développement Web & Mobile (2013–2014)',
		outside: 'En dehors du travail',
		hobbies_list:
			'Lecture de science-fiction, randonnée, escalade, plongée sous-marine et voyages.',
	},
};
