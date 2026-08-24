export default {
	navigation: {
		home: 'Home',
		about: 'About',
		work: 'Work',
		contact: 'Contact',
	},
	contact: {
		title: 'Interested in working together?',
		button: 'Send me a message',
		resume: 'Download my resume',
		resumeFr: 'French CV',
		resumeEn: 'English CV',
	},
	homepage: {
		title: 'Senior Platform Engineer specializing in Kubernetes and Cloud Infrastructure',
		tagline:
			'I design and build cloud-native platforms, automate infrastructure at scale, and develop tools that help engineering teams deliver software faster.',
		image_alt: 'Flavien Debar smiling in a casual shirt',
		pills: ['Platform Engineer', 'Cloud Native', 'AI & LLM'],
		skills: {
			first: {
				title: 'Cloud-Native Architecture',
				description:
					'Designing robust, scalable and observable cloud-native architectures with Kubernetes and AWS.',
			},
			second: {
				title: 'Platform Engineering',
				description:
					'Building reliable platforms that enable teams to ship and operate software autonomously.',
			},
			third: {
				title: 'AI-Driven Operations',
				description:
					'Applying AI to automate incident analysis, accelerate troubleshooting and improve reliability.',
			},
		},
	},
	projects: {
		title: 'Projects',
		tagline: 'See my most recent projects below to get an idea of my past experience.',
	},
	meta: {
		title: 'About | Flavien Debar',
		description:
			'Senior Platform & DevOps Engineer specializing in AWS, Kubernetes and Platform Engineering.',
	},
	hero: {
		title: 'Senior Platform & DevOps Engineer',
		tagline: 'AWS • Kubernetes • Terraform • Helm • GitOps • CI/CD • OpenTelemetry',
	},
	about: {
		title: 'About Me',
		paragraphs: [
			"I'm a Senior DevOps / Platform Engineer focused on building cloud-native platforms with AWS and Kubernetes.",
			'My journey into cloud and platform engineering started with a large-scale migration from bare metal to AWS. I had to learn the cloud from the ground up, introduce Infrastructure as Code with Terraform, and help move a production platform while keeping the product running. It was challenging, sometimes stressful, but it taught me one of the things I value most in engineering: making significant changes safely without slowing down the product.',
			'From there, my work evolved from infrastructure to platforms. We moved from Docker Compose to ECS, then from ECS to EKS, introducing Kubernetes and GitOps along the way. I also worked on improving the developer experience by building self-service environments that developers and QA teams could create themselves.',
			"Today, I enjoy solving infrastructure problems once so developers don't have to solve them again. I believe a good platform should make infrastructure and deployment almost invisible, allowing developers to focus on writing code while automation and CI/CD reduce operational risk.",
			'I particularly enjoy working at the intersection of Kubernetes, AWS, CI/CD and developer experience, understanding both developer needs and the operational challenges behind the systems they build.',
			"I'm also exploring how AI can improve the way we operate complex systems. KubeSage is my current side project, combining Kubernetes observability and AI-assisted incident analysis to explore what the next generation of platform operations could look like.",
		],
	},
	experiences: {
		title: 'Experience',
		first: {
			title: 'Docebo — Systems & Platform Engineer (March 2021 – March 2026)',
			list_tasks: [
				'Designed and built a standardized, self-service GitLab CI/CD platform.',
				'Industrialized an AWS-based Platform Engineering platform across approximately 20 AWS accounts and 50 EKS clusters.',
				'Developed features for an internal Go-based CLI framework.',
				'Industrialized Amazon EKS deployments with Terraform and FluxCD.',
			],
		},
		second: {
			title: 'Docebo — Lead Developer (Nov. 2020 – March 2021)',
			list_tasks: [
				'Migrated CI/CD pipelines from Bamboo to GitLab CI/CD.',
				'Designed AWS Lambda and EventBridge services.',
				'Defined infrastructure and technology strategies.',
			],
		},
	},
	selectedWork: {
		title: 'Selected Work',
		first: {
			title: 'Bare Metal → AWS',
			description:
				'A large-scale migration from bare metal infrastructure to AWS, introducing Infrastructure as Code with Terraform along the way. I helped move the production platform while keeping the product running, progressively replacing manually managed infrastructure with reproducible and automated provisioning. The project was also an opportunity to build my foundations in AWS and rethink how infrastructure could evolve safely alongside the product.',
		},
		second: {
			title: 'ECS → EKS',
			description:
				"As the platform evolved, we moved from Docker Compose and ECS to Kubernetes on Amazon EKS. I contributed to the migration and helped introduce Kubernetes and GitOps practices, making deployments more declarative, reproducible and easier to operate across environments. The transition also strengthened the platform's ability to support multiple teams and environments without adding operational complexity for developers.",
		},
		third: {
			title: 'Developer Self-Service',
			description:
				'One of the most rewarding parts of the platform was making infrastructure almost invisible to developers and QA teams. I helped build a self-service workflow allowing teams to create complete staging environments directly from their development workflow, with environments associated with specific Jira tickets such as features or bug fixes. The goal was simple: **developers should be able to get the environment they need without having to understand or manage the infrastructure behind it.** This improved developer autonomy while reducing manual operations and making the delivery process more consistent and predictable.',
		},
	},
	howIWork: {
		title: 'How I Work',
		items: [
			{
				title: 'Make Complexity Disappear',
				description:
					"I like solving infrastructure problems once so developers don't have to solve them again.",
			},
			{
				title: 'Developer Experience',
				description:
					'Infrastructure and deployment should enable developers, not distract them from writing software.',
			},
			{
				title: 'Automation',
				description: 'Repetitive and error-prone operations should be automated whenever possible.',
			},
			{
				title: 'Safe Change',
				description:
					'Platforms need to evolve without slowing down the product or putting reliability at risk.',
			},
		],
	},
	next: {
		title: "What's Next?",
		paragraphs: [
			"I'm interested in what comes next for platform engineering. As platforms become increasingly automated and observable, I believe AI can help engineers move beyond simply detecting problems and toward understanding them faster.",
			"I'm currently exploring these ideas through KubeSage, my Kubernetes incident analysis project, where I combine observability, automation and AI-assisted diagnostics. It's a natural continuation of what I've been building throughout my career: making complex systems easier to operate while giving engineers more time to focus on solving meaningful problems.",
		],
	},
	more: {
		title: 'More About Me',
		volunteering: 'Volunteering',
		first_aider: 'Protection Civile — First Aider (2024 – 2025)',
		education: 'Education',
		university: 'Cergy-Pontoise University',
		education_degree: "Bachelor's Degree in Web & Mobile Web Development (2013–2014)",
		outside: 'Outside of Work',
		hobbies_list: 'Reading science fiction, hiking, climbing, scuba diving and travelling.',
	},
};
