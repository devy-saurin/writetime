export default [
    //Blog Title
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depends on yout blog information ',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4186/4186534.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on your niche & outline topic and give me result in Rich text editor',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true,
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: '',
            }
        ]
    },
    //Blog Content
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language. ',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4494/4494538.png',
        aiPrompt: 'Generate Blog Content based on topic and outline in',
        slug: 'blog-content-generation',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter blog outline here',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    //Blog Topic Ideas
    {
        name: 'Blog Topic Ideas',
        desc: ' Simply enter a keyword or niche topic, and the AI will instantly suggest a multitude of captivating blog post titles and themes. ',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/6580/6580513.png',
        aiPrompt: 'Generate Blog Content based on topic and outline display in Bullet points',
        slug: 'blog-topic-idea',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
        ]
    },
    //Youtube SEO title
    {
        name: 'YouTube SEO Title',
        desc: ' Discover hidden search gems that perfectly align with your content and target audience. No more guessing games – AI analyzes vast data sets to pinpoint the keywords that drive real results.',
        category: 'YouTube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/470/470699.png',
        aiPrompt: 'Give me Best SEO optimized high ranked title ideas',
        slug: 'blog-topic-idea',
        form: [
            {
                label: 'Enter your youtube video topic keywords',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter youtube description outline here',
                field: 'textarea',
                name: 'outline',
            },
        ]
    },
    //Youtube Description
    {
        name: 'YouTube Description',
        desc: ' Get found by the right audience with relevant keywords and hashtags woven seamlessly into a compelling narrative. ',
        category: 'YouTube Tool',
        icon: 'https://cdn-icons-png.flaticon.com/128/10101/10101391.png',
        aiPrompt: 'Generate your youtube video description with emoji under 4-5 lines',
        slug: 'youtube-description',
        form: [
            {
                label: 'Enter your youtube video title/topic',
                field: 'input',
                name: 'topic',
                required: true,
            },
            {
                label: 'Enter youtube description outline here',
                field: 'textarea',
                name: 'outline',
            },
        ]
    },
    // Youtube Tags
    {
        "name": "Youtube Tags",
        "desc": "Generate relevant tags for your YouTube videos.",
        "category": "Content Creation",
        "icon": "https://cdn-icons-png.flaticon.com/128/2190/2190403.png",
        "aiPrompt": "Generate relevant tags for the given YouTube video topic.",
        "slug": "youtube-tags",
        "form": [
            {
                "label": "Topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },

    // Rewrite Article
    {
        "name": "Rewrite Article(Plagiarism Free)",
        "desc": "Rewrite an article while maintaining its original meaning.",
        "category": "Content Creation",
        "icon": "https://cdn-icons-png.flaticon.com/128/15239/15239555.png",
        "aiPrompt": "Rewrite the provided article while maintaining its original meaning.",
        "slug": "rewrite-article",
        "form": [
            {
                "label": "Original Article",
                "field": "textarea",
                "name": "outline",
                "required": true
            }
        ]
    },

    // Text Improver
    {
        "name": "Text Improver",
        "desc": "Improve the quality of the provided text.",
        "category": "Content Creation",
        "icon": "https://cdn-icons-png.flaticon.com/128/2696/2696555.png",
        "aiPrompt": "Improve the quality and readability of the provided text.",
        "slug": "text-improver",
        "form": [
            {
                "label": "Text to Improve",
                "field": "textarea",
                "name": "outline",
                "required": true
            }
        ]
    },

    // Add Emojis to Text
    {
        "name": "Add Emojis to Text",
        "desc": "Add relevant emojis to the provided text.",
        "category": "Content Creation",
        "icon": "https://cdn-icons-png.flaticon.com/128/743/743217.png",
        "aiPrompt": "Add relevant emojis to the provided text to make it more engaging.",
        "slug": "add-emojis-to-text",
        "form": [
            {
                "label": "Text",
                "field": "textarea",
                "name": "outline",
                "required": true
            }
        ]
    },

    // Instagram Post Generator
    {
        "name": "Instagram Post Generator",
        "desc": "Generate engaging Instagram post content.",
        "category": "Content Creation",
        "icon": "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
        "aiPrompt": "Generate an engaging Instagram post based on the provided topic.",
        "slug": "instagram-post-generator",
        "form": [
            {
                "label": "Topic",
                "field": "input",
                "name": "topic",
                "required": true
            },
            {
                "label": "Outline",
                "field": "textarea",
                "name": "outline"
            }
        ]
    },

    // Instagram Hashtag Generator
    {
        "name": "Instagram Hashtag Generator",
        "desc": "Generate relevant hashtags for your Instagram posts.",
        "category": "Content Creation",
        "icon": "https://cdn-icons-png.flaticon.com/128/6633/6633296.png",
        "aiPrompt": "Generate relevant hashtags for the given Instagram post topic.",
        "slug": "instagram-hashtag-generator",
        "form": [
            {
                "label": "Topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },

    // Instagram Post/Reel Idea
    {
        "name": "Instagram Post/Reel Idea",
        "desc": "Generate creative ideas for Instagram posts or reels.",
        "category": "Content Creation",
        "icon": "https://cdn-icons-png.flaticon.com/128/4207/4207285.png",
        "aiPrompt": "Generate creative ideas for Instagram posts or reels based on the provided topic.",
        "slug": "instagram-post-reel-idea",
        "form": [
            {
                "label": "Topic",
                "field": "input",
                "name": "topic",
                "required": true
            }
        ]
    },

    // English Grammar Check
    {
        "name": "English Grammar Check",
        "desc": "Check and correct grammar in the provided text.",
        "category": "Writing Tools",
        "icon": "https://cdn-icons-png.flaticon.com/128/8343/8343388.png",
        "aiPrompt": "Check and correct the grammar in the provided text.",
        "slug": "english-grammar-check",
        "form": [
            {
                "label": "Text to Check",
                "field": "textarea",
                "name": "outline",
                "required": true
            }
        ]
    },

    // Write Code
    {
        "name": "Write Code",
        "desc": "Write code based on the provided requirements.",
        "category": "Programming",
        "icon": "https://cdn-icons-png.flaticon.com/128/1006/1006363.png",
        "aiPrompt": "Write code based on the provided requirements.",
        "slug": "write-code",
        "form": [
            {
                "label": "Requirements",
                "field": "textarea",
                "name": "outline",
                "required": true
            }
        ]
    },

    // Explain Code
    {
        "name": "Explain Code",
        "desc": "Explain the functionality of the provided code.",
        "category": "Programming",
        "icon": "https://cdn-icons-png.flaticon.com/128/1628/1628175.png",
        "aiPrompt": "Explain the functionality of the provided code.",
        "slug": "explain-code",
        "form": [
            {
                "label": "Code to Explain",
                "field": "textarea",
                "name": "outline",
                "required": true
            }
        ]
    },

    // Code Bug Detector
    {
        "name": "Code Bug Detector",
        "desc": "Detect bugs in the provided code.",
        "category": "Programming",
        "icon": "https://cdn-icons-png.flaticon.com/128/12878/12878072.png",
        "aiPrompt": "Detect and explain bugs in the provided code.",
        "slug": "code-bug-detector",
        "form": [
            {
                "label": "Code to Analyze",
                "field": "textarea",
                "name": "outline",
                "required": true
            }
        ]
    },
]
