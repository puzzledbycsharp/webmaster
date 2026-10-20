import { component$, useSignal, useOnDocument, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const mouseX = useSignal(0);
  const mouseY = useSignal(0);

  useOnDocument(
    'mousemove',
    $((event: MouseEvent) => {
      mouseX.value = event.clientX;
      mouseY.value = event.clientY;
    })
  );

  return (
    <div class="relative min-h-screen font-sans selection:bg-teal-300 selection:text-teal-900 bg-slate-900 text-slate-400">
      
      {/* Glowing Cursor Spotlight */}
      <div
        class="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mouseX.value}px ${mouseY.value}px, rgba(20, 184, 166, 0.12), transparent 80%)`,
        }}
      />

      <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-40">
        
        <div class="lg:flex lg:justify-between lg:gap-4">
          
          {/* INSULATED LEFT COLUMN */}
          <div class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 class="text-6xl font-bold tracking-tight text-slate-200 sm:text-[3rem] leading-none !m-0">
                Zachary Stewart
              </h1>
              <h2 class="mt-6 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl !mx-0 !mb-0">
                .NET Full-Stack Engineer
              </h2>
              <p class="mt-4 max-w-sm text-base sm:text-lg leading-normal text-slate-400 !mx-0">
                Building scalable, backend enterprise solutions and SaaS applications using C#, .NET 9, Blazor, and JavaScript.
              </p>
              
              <nav class="mt-8 flex flex-col gap-4">
                <a class="group flex w-max items-center text-base font-bold text-slate-400 hover:text-teal-300 hover:!bg-transparent !mx-0" href="/Zachary_Stewart_Resume_2026.pdf" target="_blank" rel="noreferrer">
                  <span class="mr-3 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300"></span>
                  VIEW RESUME
                </a>
                <a class="group flex w-max items-center text-base font-bold text-slate-400 hover:text-teal-300 hover:!bg-transparent !mx-0" href="https://www.linkedin.com/in/zachary-stewart0203/" target="_blank" rel="noreferrer">
                  <span class="mr-3 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300"></span>
                  LINKEDIN
                </a>
                <a class="group flex w-max items-center text-base font-bold text-slate-400 hover:text-teal-300 hover:!bg-transparent !mx-0" href="https://github.com/puzzledbycsharp" target="_blank" rel="noreferrer">
                  <span class="mr-3 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-teal-300"></span>
                  GITHUB
                </a>
              </nav>
            </div>
          </div>

          <main class="pt-24 lg:w-1/2 lg:py-24">
            
            {/* === ABOUT / PROFESSIONAL SUMMARY === */}
            <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <p class="mb-4 text-base sm:text-lg leading-relaxed text-slate-400 !mx-0">
                Software Engineer with over 13 years of experience designing, developing, and maintaining high-performance backend systems and data pipelines. Deep expertise in .NET, complemented by 3 years of hands-on experience modernizing a Java-based application that uses Docker and Kubernetes. 
              </p>
              <p class="mt-4 text-base sm:text-lg leading-relaxed text-slate-400 !mx-0">
                I’m passionate about building robust, scalable software solutions. Author of the technical blog "Puzzled by C# Code," exploring advanced topics in the .NET ecosystem.
              </p>
            </section>

            <div class="group/list flex flex-col gap-16">

              {/* === PROJECTS SECTION === */}
              <div class="flex flex-col gap-12">
                
                {/* Project 1: Personal Finance Tracker */}
                <div class="group relative flex flex-col items-start lg:flex-row lg:gap-4 transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 w-full">
                    <h3 class="font-medium leading-snug text-slate-200 !m-0">
                      <a class="inline-flex items-center text-lg hover:text-teal-300 focus-visible:text-teal-300 hover:!bg-transparent !mx-0" href="https://financetracker2-c5e8cwa8dnamgxbs.westus3-01.azurewebsites.net/" target="_blank" rel="noreferrer">
                        Personal Finance Tracker
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-400 !mx-0">
                      A personal financial app utilizing trend analysis, Entity Framework Core, and a highly responsive custom UI.
                    </p>
                    <ul class="mt-4 flex flex-wrap text-xs gap-2">
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">.NET 9</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Blazor</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">EF Core</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">SQLite</li>
                    </ul>
                    <div class="mt-4 flex gap-6 text-sm font-medium text-slate-400">
                      <a href="https://financetracker2-c5e8cwa8dnamgxbs.westus3-01.azurewebsites.net/" class="hover:text-teal-300 flex items-center gap-1.5 hover:!bg-transparent !mx-0" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
                          Live Demo
                      </a>
                      <a href="https://github.com/puzzledbycsharp/FinanceTracker" class="hover:text-teal-300 flex items-center gap-1.5 hover:!bg-transparent !mx-0" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                          Source Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 2: Puzzled by C# Technical Blog */}
                <div class="group relative flex flex-col items-start lg:flex-row lg:gap-4 transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 w-full">
                    <h3 class="font-medium leading-snug text-slate-200 !m-0">
                      <a class="inline-flex items-center text-lg hover:text-teal-300 focus-visible:text-teal-300 hover:!bg-transparent !mx-0" href="/blog">
                        Puzzled by C# Code (Technical Blog)
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-400 !mx-0">
                      A technical knowledge hub serving articles documenting deep-dives into C# data structures, classes, and common problems.
                    </p>
                    <ul class="mt-4 flex flex-wrap text-xs gap-2">
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Qwik 1.20</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Tailwind CSS</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">MDX Parsing</li>
                    </ul>
                    <div class="mt-4 flex gap-6 text-sm font-medium text-slate-400">
                      <a href="/blog" class="hover:text-teal-300 flex items-center gap-1.5 hover:!bg-transparent !mx-0">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
                          Read Articles
                      </a>
                      <a href="https://github.com/puzzledbycsharp/webmaster" class="hover:text-teal-300 flex items-center gap-1.5 hover:!bg-transparent !mx-0" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                          Source Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project 3: Crab Cakes & Kimchi */}
                <div class="group relative flex flex-col items-start lg:flex-row lg:gap-4 transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <div class="z-10 w-full">
                    <h3 class="font-medium leading-snug text-slate-200 !m-0">
                      <a class="inline-flex items-center text-lg hover:text-teal-300 focus-visible:text-teal-300 hover:!bg-transparent !mx-0" href="https://crabcakesandkimchi.com" target="_blank" rel="noreferrer">
                        Crab Cakes & Kimchi (Culinary Brand)
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                      </a>
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-400 !mx-0">
                      Designed and deployed a WordPress CMS for a digital culinary brand. Managed the complete media workflow, including multi-camera studio setup, audio routing, and video post-production.
                    </p>
                    <ul class="mt-4 flex flex-wrap text-xs gap-2">
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">WordPress</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">DaVinci Resolve</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Sony a6600</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Media Production</li>
                    </ul>
                    <div class="mt-4 flex gap-6 text-sm font-medium text-slate-400">
                      <a href="https://crabcakesandkimchi.com" class="hover:text-teal-300 flex items-center gap-1.5 hover:!bg-transparent !mx-0" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
                          Live Website
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* === EXPERIENCE TIMELINE SECTION === */}
              <div class="my-4 h-px w-full bg-slate-800"></div>

              <div class="flex flex-col gap-12">
                
                {/* Experience 1: Keysight (Appstack / Java Era) */}
                <div class="group relative flex flex-col items-start lg:flex-row lg:gap-4 transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  
                  <div class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 lg:w-1/4">
                    2023 — Present
                  </div>
                  
                  <div class="z-10 w-full lg:w-3/4">
                    <h3 class="font-medium leading-snug text-slate-200 text-lg !m-0">
                      Software Engineer <span class="text-slate-500 mx-1">·</span> Keysight Technologies
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-400 !mx-0">
                      Transitioned to the <a class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors" href="https://www.keysight.com/us/en/products/network-visibility/network-packet-brokers/appstack-software-suite.html" target="_blank" rel="noreferrer">Appstack software suite</a> team to drive backend modernization. Migrated the legacy data access layer from Hibernate to the Spring Data JPA standard. Supporting Appstack intergration into <a class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors" href="https://www.keysight.com/us/en/product/SUB-KVO-10D/keysight-vision-orchestrator.html" target="_blank" rel="noreferrer">KVO (Keysight Vision Orchestrator)</a>
                    </p>
                    <ul class="mt-4 flex flex-wrap text-xs gap-2">
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Java</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Spring Data JPA</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Hibernate</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Docker</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Kubernetes</li>
                    </ul>
                    
                    <div class="mt-4 flex gap-6 text-sm font-medium text-slate-400">
                      <a href="https://www.keysight.com/us/en/products/network-visibility/network-packet-brokers/appstack-software-suite.html" class="hover:text-teal-300 flex items-center gap-1.5 hover:!bg-transparent !mx-0" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" /><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" /></svg>
                          Appstack Software Suite
                      </a>
                    </div>
                                        <div class="mt-4 flex gap-6 text-sm font-medium text-slate-400">
                      <a href="https://www.keysight.com/us/en/product/SUB-KVO-10D/keysight-vision-orchestrator.html" class="hover:text-teal-300 flex items-center gap-1.5 hover:!bg-transparent !mx-0" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" /><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" /></svg>
                          Keysight Vision Orchestrator
                      </a>
                    </div>
                  </div>
                </div>

                {/* Experience 2: Keysight (Xynergy / C# Era) */}
                <div class="group relative flex flex-col items-start lg:flex-row lg:gap-4 transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  
                  <div class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 lg:w-1/4">
                    Feb 2017 — 2023
                  </div>
                  
                  <div class="z-10 w-full lg:w-3/4">
                    <h3 class="font-medium leading-snug text-slate-200 text-lg !m-0">
                      Software Engineer <span class="text-slate-500 mx-1">·</span> Keysight Technologies
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-400 !mx-0">
                      Designed and implemented a new reporting module during product redesigned with Akka.NET and business rules for the <a class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors" href="https://www.keysight.com/us/en/assets/3121-1310/technical-overviews/Nemo-5G-RAN-Analytics.pdf" target="_blank" rel="noreferrer">Nemo 5G RAN Analytics</a> using .NET Framework. Designed robust ETL data pipelines for large-scale customer data ingestion and built WPF/WinForms applications to monitor real-time production system health.
                    </p>
                    <ul class="mt-4 flex flex-wrap text-xs gap-2">
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">.NET Framework</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">WPF / WinForms</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">ETL Pipelines</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Akka.NET</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Oracle</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">PostgreSQL</li>
                    </ul>

                    {/* Nemo 5G RAN PDF Link */}
                    <div class="mt-4 flex gap-6 text-sm font-medium text-slate-400">
                      <a href="https://www.keysight.com/us/en/assets/3121-1310/technical-overviews/Nemo-5G-RAN-Analytics.pdf" class="hover:text-teal-300 flex items-center gap-1.5 hover:!bg-transparent !mx-0" target="_blank" rel="noreferrer">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" /><path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" /></svg>
                          Nemo 5G RAN Analytics Architecture
                      </a>
                    </div>
                  </div>
                </div>

                {/* Experience 3: Anite Plc */}
                <div class="group relative flex flex-col items-start lg:flex-row lg:gap-4 transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  
                  <div class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 lg:w-1/4">
                    Oct 2014 — Jan 2017
                  </div>
                  
                  <div class="z-10 w-full lg:w-3/4">
                    <h3 class="font-medium leading-snug text-slate-200 text-lg !m-0">
                      Software Engineer <span class="text-slate-500 mx-1">·</span> Anite Plc.
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-400 !mx-0">
                      Engineered a versatile file transfer utility supporting FTP, SFTP, and AWS protocols to enhance data ingestion capabilities. Increase throughput and efficiency on reporting related tasks and product demos. 
                    </p>
                    <ul class="mt-4 flex flex-wrap text-xs gap-2">
                    
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">.NET Framework</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">AWS</li>
                    </ul>
                  </div>
                </div>

                {/* Experience 4: Xceed Technologies */}
                <div class="group relative flex flex-col items-start lg:flex-row lg:gap-4 transition-all duration-300 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition duration-300 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  
                  <div class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 lg:w-1/4">
                    Jun 2013 — Oct 2014
                  </div>
                  
                  <div class="z-10 w-full lg:w-3/4">
                    <h3 class="font-medium leading-snug text-slate-200 text-lg !m-0">
                      Rule Developer <span class="text-slate-500 mx-1">·</span> Xceed Technologies
                    </h3>
                    <p class="mt-2 text-sm leading-normal text-slate-400 !mx-0">
                      Developed and deployed custom C# business rules and scripts for network testing and measurement reports. Supported pre-sales activities by building custom demonstrations and systematically debugging production environments.
                    </p>
                    <ul class="mt-4 flex flex-wrap text-xs gap-2">
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">C#</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Scripting</li>
                      <li class="flex items-center rounded-full bg-teal-500/10 px-3 py-1 font-medium text-teal-300">Network Testing</li>
                    </ul>
                  </div>
                </div>

              </div>

              {/* === FULL RESUME LINK === */}
              <div class="mt-4">
                <a class="group inline-flex items-center text-lg font-semibold leading-tight text-slate-200 hover:text-teal-300 hover:!bg-transparent !mx-0" href="/Zachary_Stewart_Resume_2026.pdf" target="_blank" rel="noreferrer">
                  <span>
                    View Full Resume
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:translate-x-2" aria-hidden="true"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd"></path></svg>
                </a>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Zachary Stewart | Senior .NET Architect',
  meta: [
    {
      name: 'description',
      content: 'Portfolio and Micro-Frontend Hub for Zachary Stewart, Senior .NET Architect and Full-Stack Engineer.',
    },
  ],
};