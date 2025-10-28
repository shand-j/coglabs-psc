"use client"

import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    // Smooth scrolling with offset for fixed header
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const targetId = target.getAttribute("href")
        if (targetId === "#") return

        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const headerOffset = 80
          const elementPosition = targetElement.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="bg-slate-950 text-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CL</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Cognition Laboratories</div>
                <div className="text-xs text-slate-400">Quality Engineering Excellence</div>
              </div>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">
                Services
              </a>
              <a href="#experience" className="text-slate-300 hover:text-blue-400 transition-colors">
                Experience
              </a>
              
            </div>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
              UK-Based Quality Engineering Consultancy
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">AI-Augmented</span>
              <br />
              <span className="gradient-text">Quality Engineering</span>
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-3xl">
              Transform your testing methodologies with cutting-edge automation frameworks and AI-driven quality
              assurance strategies. Expert leadership in mission-critical technology environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Start a Conversation
              </a>
              <a
                href="#experience"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                View Experience
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">About</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Innovative Quality Engineering Leader specialising in AI-augmented testing and advanced quality
                assurance strategies. Proven track record of transforming testing methodologies, implementing
                cutting-edge automation frameworks, and driving quality excellence in mission-critical and
                high-performance technology environments.
              </p>
              <p className="text-slate-300 leading-relaxed mb-6">
                Expert in developing and executing strategic visions, optimising processes, architecting scalable and
                resilient systems, and fostering a culture of continuous improvement. Strong commitment to diversity,
                team empowerment, and delivering measurable results.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <a href="mailto:john.shand06@gmail.com" className="hover:text-blue-400 transition-colors">
                    john.shand06@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <span>07817 689 214</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <a
                    href="https://linkedin.com/in/john-s-shand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/john-s-shand
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Key Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="text-blue-400 font-semibold mb-2">AI-Augmented Testing</div>
                  <div className="text-sm text-slate-400">Intelligent test generation and optimisation</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="text-blue-400 font-semibold mb-2">Test Automation</div>
                  <div className="text-sm text-slate-400">E2E, API, and contract testing</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="text-blue-400 font-semibold mb-2">DevOps & CI/CD</div>
                  <div className="text-sm text-slate-400">Continuous integration and delivery</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="text-blue-400 font-semibold mb-2">Cloud-Native QA</div>
                  <div className="text-sm text-slate-400">AWS and Azure quality assurance</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="text-blue-400 font-semibold mb-2">Performance Engineering</div>
                  <div className="text-sm text-slate-400">Load testing and optimisation</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="text-blue-400 font-semibold mb-2">Strategic Leadership</div>
                  <div className="text-sm text-slate-400">Team development and mentoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive quality engineering solutions tailored to your organisation&apos;s needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">AI-Driven Test Strategy</h3>
              <p className="text-slate-400 leading-relaxed">
                Implement intelligent test generation and optimisation frameworks that reduce test cycle time by up to
                60% while improving coverage.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Test Automation Frameworks</h3>
              <p className="text-slate-400 leading-relaxed">
                Design and implement comprehensive E2E, API, and contract testing solutions using Playwright, Cypress,
                PACT, and K6.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Cloud-Native Quality Assurance</h3>
              <p className="text-slate-400 leading-relaxed">
                Architect scalable testing strategies for AWS and Azure environments with containerisation using Docker
                and Kubernetes.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">CI/CD Integration</h3>
              <p className="text-slate-400 leading-relaxed">
                Transform release cycles from weeks to daily multi-release with advanced CI/CD workflows using Jenkins
                and GitHub Actions.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Team Development & Mentoring</h3>
              <p className="text-slate-400 leading-relaxed">
                Build and upskill QA teams with career frameworks, internal academies, and hands-on mentoring in modern
                testing practices.
              </p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 card-hover">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Quality Metrics & Reporting</h3>
              <p className="text-slate-400 leading-relaxed">
                Create comprehensive quality metrics data lakes and dashboards for data-driven decision making and
                continuous improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Proficiencies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Technical Proficiencies</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  Java
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">Testing Technologies</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  Playwright
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  Cypress
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  PACT
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  K6
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  SonarQube
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  AWS
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  Azure
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  Jenkins
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  GitHub Actions
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  Docker
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  Kubernetes
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-blue-400">AI Testing Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  Playwright MCP
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  AWS Bedrock
                </span>
                <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                  Lambda Functions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">Experience</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Proven track record of transforming quality engineering across leading technology companies
            </p>
          </div>
          <div className="space-y-8">
            {/* Henry Schein One */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Engineering Manager (Hands-on)</h3>
                  <div className="text-blue-400 font-semibold">Henry Schein One (Dentally)</div>
                </div>
                <div className="text-slate-400">June 2023 - Present</div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Recruited and developed a diverse team to deliver a transformative quality strategy, consistently
                improving processes and reporting. Took on additional product delivery responsibilities for three teams,
                fostering a culture of continuous development through open communication and proactive process
                improvements.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Architected AI-driven quality engineering strategy across department</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Implemented AI test optimisation reducing test cycle time by 60%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed intelligent test generation framework using advanced AI technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Created comprehensive quality metrics data lake and dashboards</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Managed cross-functional teams focusing on innovative quality engineering processes</span>
                </li>
              </ul>
            </div>

            {/* Matillion - Staff QA Engineer */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Staff QA Engineer (SDET)</h3>
                  <div className="text-blue-400 font-semibold">Matillion</div>
                </div>
                <div className="text-slate-400">April 2022 - June 2023</div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Led the transformation of test strategy with an automation-first approach across multiple SCRUM teams,
                evolving into a strategic leadership and mentoring role. Enabled high-velocity software delivery and
                launched an internal academy to upskill in test automation.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Led QA strategy compliance for enterprise SaaS platform across eight development teams</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Created AI-powered test automation with intelligent test generation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed Test Automation Engineer career framework with skill assessment toolkit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Reduced manual testing overhead by 65% through intelligent automation strategies</span>
                </li>
              </ul>
            </div>

            {/* MoonPay */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">QA Lead</h3>
                  <div className="text-blue-400 font-semibold">MoonPay</div>
                </div>
                <div className="text-slate-400">March 2021 - April 2022</div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                As the first QA at MoonPay, established and grew the QA team, overseeing their contributions to
                functional strategies and delivery. Developed and implemented a scalable cloud testing strategy, and
                worked with the CTO to scale the department.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Architected scalable test automation for mission-critical financial platform</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Established QA team with focus on advanced quality and DevOps practices</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Implemented comprehensive E2E framework with Cypress, contract testing with PACT, and performance
                    testing with K6
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed cloud-native quality assurance frameworks</span>
                </li>
              </ul>
            </div>

            {/* Matillion - Senior Automation Engineer */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Senior Automation Engineer</h3>
                  <div className="text-blue-400 font-semibold">Matillion</div>
                </div>
                <div className="text-slate-400">January 2020 - March 2021</div>
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Transformed two week test and release cycles to daily multi-release with CI/CD</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed intelligent test automation frameworks</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Implemented advanced CI/CD workflows with integrated quality gates</span>
                </li>
              </ul>
            </div>

            {/* Money Supermarket */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">QA Lead</h3>
                  <div className="text-blue-400 font-semibold">Money Supermarket</div>
                </div>
                <div className="text-slate-400">August 2018 - January 2020</div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed">
                Developed and led the strategy to implement quality engineering standards, shifting left testing and
                future-proofing Agile Delivery Teams. Successfully led teams through CI/CD workflow implementation.
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    Implemented critical quality engineering standards with &apos;shift-left&apos; testing approach
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Developed AI-enhanced continuous testing methodologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Created custom risk-based testing approach using machine learning algorithms</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Get in Touch</h2>
            <p className="text-xl text-slate-400 mb-12">
              Ready to transform your quality engineering strategy? Let&apos;s discuss how Cognition Laboratories can
              help your organisation achieve excellence.
            </p>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-slate-400 mb-2">Email</div>
                  <a
                    href="mailto:john.shand06@gmail.com"
                    className="text-xl text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    john.shand06@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-2">Phone</div>
                  <div className="text-xl text-slate-300">07817 689 214</div>
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-2">LinkedIn</div>
                  <a
                    href="https://linkedin.com/in/john-s-shand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    linkedin.com/in/john-s-shand
                  </a>
                </div>
                <div className="pt-6 border-t border-slate-700">
                  <div className="text-sm text-slate-400 mb-2">Business Details</div>
                  <div className="text-slate-300">
                    <div className="font-semibold">Cognition Laboratories Ltd</div>
                    <div className="text-sm">Company Registration Number: 15936898</div>
                    <div className="text-sm">Manchester, United Kingdom</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Cognition Laboratories Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
