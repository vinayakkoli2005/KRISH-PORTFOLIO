import React, { Suspense, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ChevronDown, Mail, Phone, Linkedin, PieChart, Code, Users } from 'lucide-react';

const Hero = () => {

    function onLoad(spline) {
        // Try to hide the "Get in touch" button if it's named closely
        const objsToHide = ['Get in touch', 'Button', 'Link'];
        for (const objLabel of objsToHide) {
            const obj = spline.findObjectByName(objLabel);
            if (obj) obj.visible = false;
        }
    }

    return (
        <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden bg-darkBg">
            {/* 3D Model Container Container */}
            <div id="spline-overlay-wrapper" className="absolute inset-0 z-0">
                <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-accentLight">Loading 3D Experience...</div>}>
                    <Spline scene="https://prod.spline.design/Y9eOMCYCCwNwLjew/scene.splinecode" onLoad={onLoad} />
                </Suspense>
                {/* Visual Watermark Cover */}
                <div className="absolute bottom-0 right-0 w-48 h-16 bg-darkBg z-50 pointer-events-none"></div>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col pointer-events-none mt-20 md:mt-0">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="md:w-1/2 glass p-8 rounded-3xl mx-4 md:mx-0 pointer-events-auto"
                >
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accentLight to-accentMuted"
                    >
                        Krish Gupta
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-xl md:text-2xl mt-4 font-light tracking-wide text-textMain"
                    >
                        Corporate Finance | Operations | Strategic Execution
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="mt-6 text-gray-400 max-w-md leading-relaxed"
                    >
                        Translating numbers into execution, building structured solutions, and driving growth using AI.
                        I actively build toward a career in corporate finance and investment.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                        className="mt-8 flex gap-4"
                    >
                        <a href="#experience" className="px-6 py-3 rounded-full bg-accentLight text-darkBg font-semibold hover:bg-white transition-all duration-300">
                            Explore My Work
                        </a>
                        <a href="/Krish_Resume.pdf" download className="px-6 py-3 rounded-full border border-accentMuted text-accentLight hover:bg-accentMuted hover:text-white transition-all duration-300">
                            Download Resume
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 text-accentLight"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

const ExperienceCard = ({ title, role, date, points }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="glass-card p-6 rounded-2xl mb-6 border-l-4 border-l-accentLight"
    >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
                <h3 className="text-xl font-bold text-white">{role}</h3>
                <h4 className="text-accentLight font-medium">{title}</h4>
            </div>
            <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-darkSurface px-3 py-1 rounded-full">{date}</span>
        </div>
        <ul className="list-disc pl-5 text-gray-400 space-y-2">
            {points.map((p, i) => (
                <li key={i} className="leading-relaxed text-sm md:text-base">{p}</li>
            ))}
        </ul>
    </motion.div>
);

const Experience = () => {
    const experiences = [
        {
            title: "Finance & Investment Cell",
            role: "Operations Head",
            date: "Jan 2026 - Present",
            points: [
                "Led 5+ finance events and research initiatives by managing a 10 member cross functional team.",
                "Improved execution turnaround time by ~30% through structured workflow planning.",
                "Increased average event participation by 40% (100+ attendees per session).",
                "Implemented AI assisted research and documentation systems, reducing preparation time by 35%."
            ]
        },
        {
            title: "Enactus BRAC",
            role: "Junior Associate",
            date: "Aug 2025 - Present",
            points: [
                "Contributed to 2 sustainability focused social entrepreneurship projects impacting 100+ community members.",
                "Assisted in budgeting and financial feasibility analysis for projects with estimated outlays of ₹50,000+."
            ]
        },
        {
            title: "Chetna Vismay (Annual College Fest)",
            role: "Core Team Member",
            date: "Feb 2026",
            points: [
                "Managed operations for a 1,000+ attendee annual fest by coordinating 20+ volunteers, vendors, and logistics teams.",
                "Supported budgeting and vendor negotiations for events with estimated spends of ₹2-3 lakhs, improving cost efficiency by ~15%."
            ]
        },
        {
            title: "Laaghavam (Dance Society)",
            role: "PR & Marketing Member",
            date: "Aug 2025 - Present",
            points: [
                "Increased event reach by 50% by executing structured cross platform marketing campaigns.",
                "Leveraged AI tools for content optimization and engagement analysis, improving post performance metrics by ~25%."
            ]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-12">
                <Briefcase className="text-accentLight w-8 h-8" />
                <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Professional Experience</h2>
            </div>
            <div className="space-y-6">
                {experiences.map((exp, i) => <ExperienceCard key={i} {...exp} />)}
            </div>
        </section>
    );
};

const ProjectsAndSkills = () => {
    return (
        <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Projects */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <GraduationCap className="text-accentLight w-8 h-8" />
                        <h2 className="text-3xl font-bold text-white">Academic Projects</h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-6 rounded-2xl"
                    >
                        <h3 className="text-2xl font-bold text-accentLight mb-4">Hand Sanitizer Demand Supply Analysis</h3>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Built a multi variable demand forecasting model analyzing consumption trends and supply volatility, improving prediction accuracy by ~20% through scenario based modeling.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            Incorporated pricing sensitivity and distribution constraints to recommend inventory strategies, projected to reduce stock inefficiencies by 15-25% and optimize working capital allocation.
                        </p>
                    </motion.div>
                </div>

                {/* Skills */}
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <PieChart className="text-accentLight w-8 h-8" />
                        <h2 className="text-3xl font-bold text-white">Key Skills</h2>
                    </div>
                    <div className="space-y-4">
                        <SkillCategory
                            icon={<PieChart className="w-5 h-5" />}
                            title="Finance & Analytical"
                            skills="Financial Analysis | Budgeting | Valuation (DCF, Comp Analysis) | Market Research | Forecasting | Risk Assessment"
                        />
                        <SkillCategory
                            icon={<Code className="w-5 h-5" />}
                            title="Technical Tools"
                            skills="Advanced Excel | PowerPoint | Basic SQL | Power BI | AI Research Tools | Workflow Automation"
                        />
                        <SkillCategory
                            icon={<Users className="w-5 h-5" />}
                            title="Leadership & Operations"
                            skills="Stakeholder Management | Process Optimization | Cross Functional Coordination | Strategic Planning"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillCategory = ({ icon, title, skills }) => (
    <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass p-5 rounded-xl hover:border-accentLight transition-colors"
    >
        <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-darkSurface rounded-lg text-accentLight">{icon}</div>
            <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">{skills}</p>
    </motion.div>
);

const Footer = () => (
    <footer className="border-t border-darkSurface py-12 mt-12 bg-darkBg relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-6">Let's Connect</h2>
            <div className="flex flex-col md:flex-row gap-6 mb-8 items-center text-gray-300">
                <a href="mailto:krish82870@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-darkSurface rounded-full hover:bg-accentLight hover:text-darkBg transition-all">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm font-medium">krish82870@gmail.com</span>
                </a>
                <a href="tel:+918287064414" className="flex items-center gap-2 px-4 py-2 bg-darkSurface rounded-full hover:bg-accentLight hover:text-darkBg transition-all">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm font-medium">+91 82870 64414</span>
                </a>
                <a href="https://www.linkedin.com/in/krish-gupta-636046277/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-darkSurface rounded-full hover:bg-accentLight hover:text-darkBg transition-all">
                    <Linkedin className="w-5 h-5" />
                    <span className="text-sm font-medium">LinkedIn</span>
                </a>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Krish Gupta. All rights reserved.</p>
        </div>
    </footer>
);

function App() {
    return (
        <div className="min-h-screen bg-darkBg font-sans select-none selection:bg-accentLight selection:text-darkBg">
            <Hero />
            <Experience />
            <ProjectsAndSkills />
            <Footer />
        </div>
    );
}

export default App;
