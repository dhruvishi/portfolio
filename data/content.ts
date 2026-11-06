export const about = {
    name: "Dhruvishi Kunal Amin",
    tagline: "Computer Science student at Manipal Institute of Technology",
    paragraphs: [
        "I’m Dhruvishi, a CSE student at Manipal Institute of Technology, Bengaluru. I’ve been lucky to grow up in a community that gave me so much, and a lot of what I do is my way of giving some of it back.",
        "It started small. In 5th grade I volunteered on hunger relief, and I never really stopped, from working with NGOs on menstrual health and hygiene to leading projects at my college’s Volunteer Service Organisation.",
        "That same idea is why I love technology: anyone can use it, so something built well in one place can help people everywhere. It’s also why I care about finance. My father always says that anyone can earn money, but only people who understand finance know how to manage it. Technology helps people do more, and finance helps them hold on to what they’ve built. I want to understand both.",
        "Whatever I’m working on, I try to do it with purpose and be real about who I am. Usually that means jumping in and taking the lead: running a 238-member robotics club, writing for our college newsletter, heading marketing and PR for Falak, our college’s flagship fest.",
        "And when I’m not doing any of that, I’m probably planning my next trip, at the gym, deep in a murder mystery, or watching reality tv trying to work out who isn’t being real."
    ],
    facts: ["Bengaluru", "CGPA:8.94", "IGCSE: 8A*", "CBSE: 90%"],
    email: "dhruvishia@gmail.com",
    linkedin: "https://www.linkedin.com/in/dhruvishi-amin-4201a1299/",
    github: "https://github.com/dhruvishi",
};


export type Project = {
    title: string;
    context: string;
    badge?: string;
    hook: string;
    description: string;
    reflection?: {
        label: string;
        text: string;
    };
    tools: string[];
    links?: {
        label: string;
        url: string;
    }[];
};

export const projects: Project[] = [
    {
        title: "Silent Stage",
        context: "Built at the National University of Singapore",
        hook: "At a concert, deaf fans usually watch an interpreter instead of the artist. We wanted them to watch the artist sign their own song.",
        description: "Today, a fan has to request an interpreter weeks in advance, and it costs the venue $500–1,000+ a show. Our team built an AI pipeline that turns a live song into a signing avatar of the performer. I built the language core: a model that turns the song's speech into text with Whisper, then translates it into ASL gloss with a Transformer, ready for the avatar to sign.",
        reflection: {
            label: "Why it matters to me",
            text: "The most creative idea I've worked on, built for people who usually get left out.",
        },
        tools: ["Whisper", "Transformers", "MediaPipe", "Three.js", "Python"],
    },

    {
        title: "Spendwise",
        context: "TechSolstice'25: MIT annual tech-fest hackathon",
        badge: "1st place out of 100+ shortlisted teams across the nation",
        hook: `A money app that asks "Do you need this, or is it just vibes?” right before you spend.`,
        description: `I was the frontend developer on a team of three. I built the impulse-purchase checker, a gamified budget bar, 5 yearly goals with progress tracking, badges like “Binge Smart”, and a Spotify-Wrapped-style monthly money recap.`,
        reflection: {
            label: "Why it matters to me",
            text: "My dad’s lesson about managing money, turned into something people my age would actually use.",
        },
        tools: ["HTML", "CSS", "JavaScript", "Tailwind", "Python", "Gemini API"],

    },

    {
        title: "Vizag 2020 Toxic Gas Dispersion Simulator",
        context: "Course project, Parallel Computer Architecture & Programming",
        hook: "I wanted to understand how parallel computing actually works, so we took one real problem and solved it six different ways.",
        description: "The problem: forecasting where a toxic gas leak (like Vizag in 2020) will spread, fast enough to be useful. Our four-person team wrote the same simulation in serial C, OpenMP, MPI and CUDA. I worked on the CUDA versions, three GPU kernels that each try a different trick. The best one ran 21.8× faster than plain C, right at the limit of what the laptop’s memory could deliver.",
        reflection: {
            label: "What I learned",
            text: "Speed isn’t only about more cores. Our simulation was limited by how fast data moves through memory, not by computing power, and that changed how I optimised every kernel.",
        },
        tools: ["CUDA", "C", "MPI", "OpenMP", "Python"],
    },

    {

        title: "Chronos",
        context: "Team project, 2026",
        hook: "One small failure can bring down a whole app. Chronos shows how far it would spread, before it happens.",
        description: "A six-person team built a tool that maps an app’s services, simulates failures and gives a resilience score out of 100 on every pull request. I built the ingestion layer, which reads an app’s configuration and turns it into a dependency map of who relies on whom.",
        tools: ["Python", "NetworkX", "CI/CD", "Docker Compose"],

    }


];

export type Experience = {
    company: string;
    role: string;
    dates: string;
    location: string;
    hook: string;
    points: string[];
};

export const experience: Experience[] = [
    {
        company: "Capital Bridge Advisors",
        role: "Analyst In Residence",
        dates: "Jun–Jul 2026",
        location: "Ahmedabad,India",
        hook: "My first time on the finance side",
        points: ["Created investor communications for listed companies: investor presentations, annual reports and business updates.", "Reviewed weekly beneficial-ownership data to track how shareholders and institutional investors were moving.", "Researched Indian capital markets, investor relations and Category III AIFs to support investment research and fundraising.", "Led the firm’s new website from start to finish, turning business needs into a clear specification and coordinating with the vendors who built it."],
    },

    {
        company: "National University of Singapore",
        role: "Academic Intern",
        dates: "Dec 2025–Jan 2026",
        location: "Singapore",
        hook: "Six weeks in Singapore working on two very different problems: when antibiotics fail, and how to make live music accessible.",
        points: ["Designed and optimised an end-to-end machine learning pipeline to predict antibiotic resistance from clinical data, reaching 0.858 ROC-AUC.",
            "Built every stage myself: preprocessing, feature extraction, model training and evaluation.",
            "Built the speech-to-ASL language model for Silent Stage, an AI platform that generates sign-language avatars for live performances."
        ],
    },

    {
        company: "Wagh Bakri Tea Group",
        role: "Intern",
        dates: "Jul–Aug 2024",
        location: "Ahmedabad, India",
        hook: "My first internship: figuring out what makes Gen Z care about a heritage tea brand.",
        points: ["Analysed Gen Z engagement across major social platforms to guide data-driven brand and content decisions.",
            "Worked with internal teams and external agencies on digital asset workflows and MarTech tools, and helped evaluate in-house against outsourced technology."],
    },


]

