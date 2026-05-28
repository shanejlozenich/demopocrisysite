<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Individual Case Maps - Demopocrisy Systemic Mapping</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* GLOBAL DARK MODE THEME */
        body {
            font-family: "Proxima Nova", sans-serif;
            background: #121212;
            color: #e0e0e0;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* HEADINGS */
        h1 {
            font-family: "Proxima Nova", sans-serif;
            font-weight: 600;
            text-align: center;
            margin: 30px 0 10px 0;
            color: #ffffff;
            letter-spacing: 0.5px;
        }

        /* CASE SELECTOR GRID */
        .case-selector {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
            margin: 30px 0;
        }

        /* CASE BUTTONS - LIGHT GREY ON DARK CHARCOAL */
        .case-button {
            padding: 15px;
            background: #1a1a1a;
            border: 1px solid #444444;
            color: #cccccc;
            cursor: pointer;
            font-family: "Proxima Nova", sans-serif;
            font-size: 13px;
            transition: all 0.2s ease;
            border-radius: 0;
            text-align: left;
        }

        .case-button:hover {
            background: #2a2a2a;
            border-color: #666666;
            color: #ffffff;
        }

        .case-button.active {
            background: #333333;
            border-color: #aaaaaa;
            color: #ffffff;
            font-weight: 600;
        }

        /* CASE DETAIL PANEL */
        .case-detail {
            background: #1a1a1a;
            border: 1px solid #333333;
            padding: 30px;
            margin: 20px 0;
            border-radius: 0;
        }

        /* HEADER INSIDE DETAIL */
        .case-header {
            border-bottom: 1px solid #333333;
            padding-bottom: 20px;
            margin-bottom: 20px;
        }

        .case-number {
            font-size: 26px;
            font-weight: 600;
            color: #ffffff;
        }

        .case-title {
            font-size: 18px;
            margin: 10px 0;
            color: #cccccc;
        }

        /* META GRID */
        .case-meta {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
            margin-top: 15px;
        }

        .meta-item {
            background: #121212;
            padding: 12px;
            border: 1px solid #333333;
        }

        .meta-label {
            color: #888888;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .meta-value {
            color: #ffffff;
            font-weight: 600;
            margin-top: 5px;
        }

        /* SECTION BLOCKS */
        .section {
            margin: 30px 0;
            padding: 20px;
            background: #161616;
            border: 1px solid #333333;
            border-radius: 0;
        }

        .section-title {
            font-family: "Proxima Nova", sans-serif;
            font-weight: 600;
            font-size: 16px;
            margin-bottom: 15px;
            color: #ffffff;
            letter-spacing: 0.5px;
            border-left: 2px solid #666666;
            padding-left: 10px;
        }

        .section-content {
            color: #cccccc;
            line-height: 1.7;
        }

        /* VIOLATIONS & REFORMS ITEMS */
        .violation-item {
            padding: 10px 0;
            border-bottom: 1px solid #262626;
            color: #cccccc;
        }

        .violation-item:last-child {
            border-bottom: none;
        }

        /* ACTORS & INSTITUTIONS */
        .actor {
            display: inline-block;
            padding: 6px 12px;
            background: #222222;
            border: 1px solid #444444;
            margin: 5px 5px 5px 0;
            font-size: 12px;
            color: #cccccc;
            border-radius: 0;
        }

        /* STATUS BADGES */
        .status-badge {
            display: inline-block;
            padding: 8px 16px;
            font-weight: 600;
            border-radius: 0;
            font-size: 12px;
            text-transform: uppercase;
            border: 1px solid #555555;
            background: #222222;
            color: #ffffff;
        }

        /* TIMELINE DISPLAY */
        .timeline-vertical {
            padding: 5px 20px;
            background: transparent;
            border-left: 1px solid #333333;
            margin-left: 10px;
        }

        .timeline-event {
            padding: 15px;
            margin: 15px 0;
            background: #1a1a1a;
            border: 1px solid #333333;
            border-radius: 0;
            position: relative;
        }

        .event-marker {
            font-weight: 600;
            color: #ffffff;
            display: block;
            margin-bottom: 5px;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        /* FOOTER */
        .footer {
            text-align: center;
            color: #666666;
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #333333;
            font-size: 11px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>INDIVIDUAL CASE MAPS & SYSTEMIC BREACHES</h1>
        
        <div class="case-selector" id="caseSelector"></div>
        
        <div id="caseDetail"></div>
    </div>
    
    <div class="footer">
        <p>Demopocrisy: Forensic Repository for Institutional and Architecture Mapping</p>
        <p>Interactive tracking models demonstrating procedural trajectories, technological contexts, and system loops.</p>
    </div>
    
    <script>
        const cases = {
            '658931': {
                number: '658931',
                title: 'The City of Seattle vs Shane Lozenich',
                date: 'March 7 – March 8, 2021',
                category: 'Civil Rights / Due Process Failure',
                jurisdiction: 'Seattle Municipal Court',
                status: 'Dismissed',
                parties: ['City of Seattle (Prosecution)', 'Shane Lozenich (Defendant)'],
                institutions: ['Seattle Police Department', 'King County Jail', 'City Attorney\'s Office'],
                violations: [
                    'Fourth Amendment Violation: Unreasonable detention executed without an active, verified criminal complaint on file.',
                    'Fourteenth Amendment Violation: Immediate deprivation of physical liberty without essential due process review.',
                    'Failure of Prosecutorial Duties: Total breach of local court protocols regarding mandatory timely filings during jail intake.',
                    'Due Process Overlook: Administrative tracking failed to consider concurrent data breaches at the State Auditor\'s Office and documented digital stalking logs.'
                ],
                description: 'Serves as a primary case study for municipal operational collapse. Following an arrest based on an alleged domestic order violation, the subject was jailed overnight. The matter was dismissed because the prosecution failed to compile or submit a formal criminal complaint within the statutory window, leaving an unconstitutional tracking mark on record.',
                outcome: 'Dismissed without prejudice due to "No Complaint Filed"—exposes disconnected enforcement loops between police capture nodes and prosecutorial intake queues.',
                keyEvents: [
                    'Incident response initiated by Seattle Police units amid pandemic protocol conditions.',
                    'Subject booked into King County Jail facility and subjected to overnight incarceration.',
                    'Arrest executed and recorded without establishing active verification pathways from the prosecuting office.',
                    'Arraignment review before Judge Catherine McDowall resulting in immediate release due to absolute absence of factual charge sheets.'
                ],
                interventionPoints: [
                    'Implement real-time digital double-loop synchronization between police bookings and real-time prosecutor file tracking.',
                    'Establish explicit, automated immediate-release rules if a complaint is missing at the 24-hour mark.',
                    'Integrate mandatory forensic processing alerts for cases overlapping verified public infrastructure data breaches.'
                ]
            },
            
            '658959': {
                number: '658959',
                title: 'The City of Seattle vs Shane Lozenich',
                date: 'March 10 – March 24, 2021',
                category: 'Civil Rights / Medicalized Coercion',
                jurisdiction: 'Seattle Municipal / Harborview Health Networks',
                status: 'Dismissed',
                parties: ['City of Seattle', 'Shane Lozenich'],
                institutions: ['Seattle Police Department', 'Harborview Medical Center', 'King County Jail Psychiatric Unit'],
                violations: [
                    'Unlawful Interception: Detention by mixed police presence and unidentified personnel in military attire within a fenced transit lot.',
                    'Bypass of Substantive Facts: Quick application of a competency bypass routine by a stand-in defender to halt standard discovery loops.',
                    'Failure of Informed Consent: Forced clinical transfers and involuntary medical battery executed without valid, reviewable judicial signatures.',
                    'Sixth Amendment Deprivation: Absence of legal counsel or defensive protections during intermediate inter-agency transport phases.'
                ],
                description: 'An arrest marked by severe procedural anomalies that bypassed evidentiary review. Immediately upon dismissal of the standard criminal charges, the subject was subjected to a 22-day involuntary medical transfer. Forensic tracking reveals an abrupt shift from standard legal processing to high-pressure chemical restraint and invasive testing without consent.',
                outcome: 'Criminal case dismissed without prejudice; highlights a dangerous loophole where "dismiss and defer" tracks hand individuals directly over to clinical systems without ongoing judicial oversight.',
                keyEvents: [
                    'Subject intercepted while attempting mail retrieval; held in an unlisted fenced location prior to jail booking.',
                    'Competency tracking mechanisms triggered, blocking forensic verification of baseline defense disclosures.',
                    'Criminal charges dropped, followed immediately by an undocumented administrative transfer out of jail custody.',
                    'Involuntary clinical retention at Harborview Medical Center involving forced medication protocols under physical duress.'
                ],
                interventionPoints: [
                    'Mandate verifiable, open-court judicial authorization signatures for all inter-agency medical transfers post-dismissal.',
                    'Enforce high statutory thresholds for chemical or physical restraint inside state-integrated facilities.',
                    'Prohibit administrative competency holds from freezing the discovery of structural or technical evidence.'
                ]
            },
            
            '660121': {
                number: '660121',
                title: 'The City of Seattle vs Shane Lozenich',
                date: 'May 15 – May 17, 2021',
                category: 'Civil Rights / Database Automation Failure',
                jurisdiction: 'Seattle Municipal Court',
                status: 'Dismissed',
                parties: ['City of Seattle', 'Shane Lozenich'],
                institutions: ['Seattle Police Department Tactical Units', 'Office of Police Accountability (OPA)'],
                violations: [
                    'Fourth Amendment Violation: Custodial arrest executed entirely on an unverified, stale database flag.',
                    'Database Synchronization Error: Stale or expired protective orders remained flagged as active warrants across municipal-county sync lines.',
                    'Denial of Equal Protection: Automatic psychiatric redirection applied to circumvent plain text-message evidence of homeowner invitation.'
                ],
                description: 'A direct manifestation of database dependency failure. The subject returned to a former address to retrieve mail with clear written confirmation from the homeowner. A synchronization lag between municipal and county tracking systems left an expired tracking flag active, causing field units to execute an aggressive multi-vehicle tactical deployment.',
                outcome: 'Dismissed and referred to Mental Health Court, but the referral node was left unexecuted, leaving the individual in administrative limbo.',
                keyEvents: [
                    'Subject arrived at the property via homeowner confirmation; discovered an empty mailbox infrastructure.',
                    'Approached by units while walking toward transit; prior trauma triggers defensive retreat through parking lanes.',
                    'Surrounded and contained by an aggressive, multi-vehicle tactical police deployment.',
                    'Factual defenses ignored in favor of an unexecuted "Dismiss and Refer" processing track.'
                ],
                interventionPoints: [
                    'Enforce a strict "human-in-the-loop" verification directive before executing arrests based on automated data alerts.',
                    'Mandate real-time, cross-platform purge synchronization across municipal, county, and state databases upon case dismissal.',
                    'Establish automated clear-record entries for all individuals impacted by documented clerical or sync errors.'
                ]
            },
            
            '21-1-04342-2SEA': {
                number: '21-1-04342-2SEA',
                title: 'The State of Washington vs Shane Lozenich',
                date: 'July 2021',
                category: 'Felony Processing / Judicial Architecture Breakdown',
                jurisdiction: 'King County Superior Court',
                status: 'Resolved via Hold',
                parties: ['State of Washington', 'Shane Lozenich'],
                institutions: ['Western State Hospital', 'King County Courts', 'State Psychiatric Systems'],
                violations: [
                    'Warrantless Seizure: Tactical arrest and physical phone seizure executed by unidentified officers without warrant documentation.',
                    'Due Process Collapse: A 45-day competency restoration mandate was signed and authorized without an open judicial hearing.',
                    'Psychiatric Ethics Breach: Forced clinical stabilization regimens administered based on unverified, non-clinical narrative records.',
                    'Digital Evidence Manipulation: Systematic mishandling and omission of critical digital tracking logs from the defense discovery packet.'
                ],
                description: 'A high-impact felony proceeding marked by deep architectural failures in due process. Unidentified tracking units executed a warrantless arrest and device seizure. The legal tracking loop skipped key evidentiary phases entirely, relying on pre-signed administrative orders to justify long-term confinement at Western State Hospital.',
                outcome: 'Transferred out of criminal track via compulsory diversion structures—demonstrates how institutional machinery can substitute clinical containment protocols for a trial on the structural merits.',
                keyEvents: [
                    'Interception and warrantless arrest by unidentified field operatives.',
                    'Immediate seizure of personal cellular hardware without corresponding search warrants.',
                    'Execution of a 45-day restoration tracking order outside of standard open-court presentation rules.',
                    'Involuntary chemical processing at Western State Hospital driven by non-clinical background materials.'
                ],
                interventionPoints: [
                    'Enforce strict statutory exclusions on all personal data and physical devices seized without prior, explicit warrants.',
                    'Require live, verbatim audio-visual recording of all hearings affecting an individual\'s competency evaluation track.',
                    'Establish independent external forensic oversight for all state hospital diagnostic inputs.'
                ]
            },

            '664676': {
                number: '664676',
                title: 'The City of Seattle vs Shane Lozenich',
                date: 'March 2022',
                category: 'Civil Rights / Housing Intersector Collapse',
                jurisdiction: 'Seattle Municipal Court',
                status: 'Dismissed',
                parties: ['City of Seattle', 'Shane Lozenich'],
                institutions: ['Seattle Police Department', 'Municipal Lockup Infrastructure'],
                violations: [
                    'Cyclical Unlawful Detention: Re-execution of extrajudicial jail booking entirely missing charging authority signatures.',
                    'Disregard of Title Holder Variables: Local policing actions deployed in direct defiance of clear coordination text-logs with the property owner.',
                    'Intake Screening Failures: Total lack of initial constitutional defense sweeps at the jail processing entrance.'
                ],
                description: 'A repeating cycle of the "No Complaint Filed" operational default. The subject attempted physical access to a historical family node based on a clear coordinate roadmap established with the underlying title holder. Automated security network sweeps generated a localized patrol response, initiating an immediate custodial arrest without recording any complaining witness statements.',
                outcome: 'Dismissed within a 24-hour cycle due to zero legal foundation—verifies a complete absence of baseline administrative cross-checks before depriving citizens of movement.',
                keyEvents: [
                    'Access to physical structural node executed under mutual consent agreements.',
                    'Interception by municipal policing units following automated alert sweeps.',
                    'Custodial booking logged despite zero signature records from complaining entities.',
                    'Immediate next-day administrative dismissal due to a total legal data vacuum.'
                ],
                interventionPoints: [
                    'Institute automatic electronic verification flags that forbid jail booking inputs unless verified complaining signatures are attached.',
                    'Mandate immediate public defender intervention channels within two hours of all property-related detentions.',
                    'Apply immediate disciplinary discovery processing for repeating "No Complaint" operational trends.'
                ]
            },
            
            '22-1-04242-3SEA': {
                number: '22-1-04242-3SEA',
                title: 'The State of Washington vs Shane Lozenich',
                date: 'August 2022 – June 2023',
                category: 'Felony Track / Extended Pretrial Confinement Loop',
                jurisdiction: 'King County Superior Court',
                status: 'Dismissed',
                parties: ['State of Washington', 'Shane Lozenich'],
                institutions: ['King County Jail Network', 'Western State Hospital System'],
                violations: [
                    'Sixth Amendment Speedy Trial Failure: Ten months of secure pretrial containment without ever opening a factual trial panel.',
                    'Evidentiary Suppression: Complete failure by the prosecution to locate, transcribe, or legally discover the baseline digital voicemail logs.',
                    'Pre-Signed Competency Orders: Judicial orders authorized and stamped exactly 24 hours prior to the scheduled courtroom hearing.',
                    'Eighth Amendment Violations: Protracted exposure to high-danger, unmonitored cell blocks resulting in severe physical injury from inmate assault.'
                ],
                description: 'A high-level felony tracking sequence involving unverified digital alert profiles. Arrest and processing were executed without recording baseline Miranda disclosures. The state used continuous competency evaluation loops to maintain a 10-month pretrial detention cycle while withholding the underlying physical data evidence from the defense.',
                outcome: 'Dismissed after time served—case collapsed and closed upon completion of maximum statutory limits without a single fact-finding hearing.',
                keyEvents: [
                    'Warrantless intercept executed in public hallways; immediate device extraction without legal warnings.',
                    'Continuous pretrial tracking sustained over 10 months inside King County Jail.',
                    'Severe physical trauma sustained from an inmate assault inside an unmonitored housing sector.',
                    'Case dismissed and closed upon execution of maximum equivalent sentence parameters.'
                ],
                interventionPoints: [
                    'Enforce absolute 90-day release rules if baseline data evidence fails forensic discovery pipelines.',
                    'Explicitly criminalize the administrative practice of pre-signing judicial orders prior to open argument.',
                    'Establish independent external tracking and audits over municipal cell block safety metrics.'
                ]
            },

            '25-2-17456-5SEA': {
                number: '25-2-17456-5SEA',
                title: 'SCIdpda Bush Hotel vs Shane Lozenich',
                date: 'June 2024',
                category: 'Housing Rights / Civil Retaliation Loop',
                jurisdiction: 'King County Superior Court',
                status: 'Pending',
                parties: ['SCIdpda Bush Hotel (Plaintif)', 'Shane Lozenich (Defendant)'],
                institutions: ['Subsidized Housing Management Nodes', 'Civil Court Frameworks'],
                violations: [
                    'Retaliatory Eviction Track: Acceleration of housing displacement actions directly matching public media profile placements.',
                    'Bad Faith Refusal of Tender: Explicit administrative blocking of third-party non-profit emergency clearing funds.',
                    'Compounded Institutional Harm: Direct weaponization of state-enforced incarceration gaps to engineer an artificial economic eviction.'
                ],
                description: 'An unlawful detainer track demonstrating how criminal-legal containment loops trigger structural civil displacement. Following rent defaults compiled solely due to the subject\'s 10-month pretrial isolation, housing managers filed eviction actions. When a regional non-profit entity stepped forward with complete funding to wipe out arrears, building management refused to accept payment or issue accounting invoices.',
                outcome: 'Sustained active civil eviction tracking looking to break housing tenure.',
                keyEvents: [
                    'Income infrastructure severed by the 10-month custodial track.',
                    'Arrears logged within low-income housing system databases.',
                    'Financial intervention offered by authenticated non-profit proxy.',
                    'Management tracking records showing refusal of incoming repair funds.',
                    'Eviction papers served following media profile focusing on regional security metrics.'
                ],
                interventionPoints: [
                    'Enforce compulsory statutory stay protections over civil actions when financial blocks stem from dropped criminal cases.',
                    'Pass absolute third-party payment acceptance rules for all subsidized municipal housing complexes.',
                    'Establish structural anti-retaliation rules protecting tenants talking to public media networks.'
                ]
            },

            '26-03-A': {
                number: '26-03-A',
                title: 'Systemic Stratigraphic Mapping Framework',
                date: 'March – May 2026',
                category: 'Information Architecture / Institutional Observation',
                jurisdiction: 'Analytical Registry Core',
                status: 'Active Documentation',
                parties: ['Jonathan Shane Concepts', 'Institutional Architectures'],
                institutions: ['Clarion Sentinel Repository', 'Policy of Truth Engine', 'Fiducia Centrale'],
                violations: [
                    'Omission of Signal Interferences: Broad systematic failure of regulatory agencies to trace electromagnetic signal disruptions.',
                    'Archival Inaccessibility: Deliberate administrative friction preventing clear mapping of overlapping municipal and federal data networks.',
                    'Algorithmic Decoupling: Use of unverified automated threat-scoring profiles across public-private surveillance partnerships.'
                ],
                description: 'Development and deployment of a proprietary conceptual framework designed to structurally dissect and log institutional architectures. This system isolates the structural gaps where information is intentionally siloed, dropped, or manipulated across cross-agency handoffs, neutralizing standard civil accountability controls.',
                outcome: 'Active conceptual operation; currently producing high-contrast data visual models mapping systemic governance flaws.',
                keyEvents: [
                    'Methodological synthesis finalized combining wabi-sabi structural aesthetics with forensic ledger data tracking.',
                    'Launch of integrated digital repositories under Clarion Sentinel and Policy of Truth frameworks.',
                    'Deployment of network tracing diagnostics to document local network route disruptions.'
                ],
                interventionPoints: [
                    'Mandate decentralized, open-source GitHub/Jekyll ledger transparency for public-facing case logs.',
                    'Enforce strict cryptographic logging over automated surveillance networks to capture false-positive trends.',
                    'Standardize cross-platform diagnostic frameworks for open civic access.'
                ]
            },

            '26-04-B': {
                number: '26-04-B',
                title: 'The Assembly of Twenty Initiative',
                date: 'April 2026 – Ongoing',
                category: 'Civic Architecture / Structural Accountability',
                jurisdiction: 'Independent Forensic Registry',
                status: 'Active Assembly',
                parties: ['Assembly of Twenty Board', 'Public Administrative Systems'],
                institutions: ['Demopocrisy Network Nodes', 'Quiet Title Action Groups'],
                violations: [
                    'Evasion of Administrative Review: Ongoing refusal of corporate and state entities to process formal Notices of Non-Consent.',
                    'Systemic Identity Misalignment: Misclassification of civilian demographic profiles inside state-operated analytics registries.',
                    'Suppression of Structural Critiques: Failure of public platforms to catalog verified reports highlighting systemic structural vulnerabilities.'
                ],
                description: 'An active operational initiative assembled to fully document regional institutional anomalies, land title disputes, and procedural civil rights violations. Operating alongside a formal Quiet Title project, this tracker serves as a final investigative checkpoint monitoring the systematic erosion of individual sovereignty and due process.',
                outcome: 'Active assembly state; generating standardized procedural demands, cryptographic filings, and structural case map updates.',
                keyEvents: [
                    'Filing of a comprehensive Notice of Non-Consent against arbitrary municipal tracking frameworks.',
                    'Establishment of the Assembly of Twenty structural review matrix.',
                    'Integration of land title registry data into the broader systemic mapping network.'
                ],
                interventionPoints: [
                    'Establish legally binding digital receipt mandates forcing immediate processing of civilian Notices of Non-Consent.',
                    'Enforce independent civilian grand jury reviews over repeating municipal case dismissals.',
                    'Create public, immutable ledgers for recording structural exceptions within regional real estate title indexes.'
                ]
            }
        };

        // RENDER THE INTERACTIVE NAVIGATION
        function renderCaseSelector() {
            const selector = document.getElementById('caseSelector');
            selector.innerHTML = '';
            
            Object.keys(cases).forEach(caseId => {
                const c = cases[caseId];
                const btn = document.createElement('button');
                btn.className = `case-button ${caseId === '658931' ? 'active' : ''}`;
                btn.id = `btn-${caseId}`;
                btn.onclick = () => showCase(caseId);
                btn.innerHTML = `
                    <strong>CASE ${c.number}</strong><br>
                    <span style="font-size:11px; color:#888;">${c.date}</span><br>
                    <span style="font-size:12px; display:block; margin-top:5px; text-overflow:ellipsis; overflow:hidden; white-space:nowrap;">${c.title}</span>
                `;
                selector.appendChild(btn);
            });
        }

        // TOGGLE DISPLAY AND INJECT CONTENT DETAILED PATHS
        function showCase(caseId) {
            // Update active states on buttons
            document.querySelectorAll('.case-button').forEach(btn => btn.classList.remove('active'));
            const activeBtn = document.getElementById(`btn-${caseId}`);
            if (activeBtn) activeBtn.classList.add('active');

            const caseData = cases[caseId];
            const detailDiv = document.getElementById('caseDetail');
            
            const html = `
                <div class="case-detail">
                    <div class="case-header">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 10px;">
                            <div>
                                <span class="case-number">CASE NO. ${caseData.number}</span>
                                <div class="case-title">${caseData.title}</div>
                            </div>
                            <div>
                                <span class="status-badge">${caseData.status}</span>
                            </div>
                        </div>
                        
                        <div class="case-meta">
                            <div class="meta-item">
                                <div class="meta-label">Date Matrix</div>
                                <div class="meta-value">${caseData.date}</div>
                            </div>
                            <div class="meta-item">
                                <div class="meta-label">Classification</div>
                                <div class="meta-value">${caseData.category}</div>
                            </div>
                            <div class="meta-item">
                                <div class="meta-label">Jurisdiction</div>
                                <div class="meta-value">${caseData.jurisdiction}</div>
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">Executive Mapping Summary</div>
                        <div class="section-content">
                            <p>${caseData.description}</p>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">Involved Institutions & Parties</div>
                        <div class="section-content">
                            <div style="margin-bottom: 10px;">
                                <strong style="color:#fff; font-size:12px; text-transform:uppercase; display:block; margin-bottom:5px;">Litigants:</strong>
                                ${caseData.parties.map(p => `<span class="actor">${p}</span>`).join('')}
                            </div>
                            <div>
                                <strong style="color:#fff; font-size:12px; text-transform:uppercase; display:block; margin-bottom:5px;">Institutional Nodes:</strong>
                                ${caseData.institutions.map(i => `<span class="actor">${i}</span>`).join('')}
                            </div>
                        </div>
                    </div>

                    <div class="section">
                        <div class="section-title">Documented Systemic Violations</div>
                        <div class="section-content">
                            ${caseData.violations.map(v => `<div class="violation-item">→ ${v}</div>`).join('')}
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">Procedural Timeline</div>
                        <div class="timeline-vertical">
                            ${caseData.keyEvents.map((event, idx) => `
                                <div class="timeline-event">
                                    <span class="event-marker">Sequence Terminal Step ${idx + 1}</span>
                                    <div style="color:#cccccc;">${event}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">Intervention Points (Systemic Remedies)</div>
                        <div class="section-content">
                            ${caseData.interventionPoints.map(ip => `<div class="violation-item">↳ ${ip}</div>`).join('')}
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">Outcome & Architectural Implications</div>
                        <div class="section-content" style="color:#ffffff; font-weight:500;">${caseData.outcome}</div>
                    </div>
                </div>
            `;
            
            detailDiv.innerHTML = html;
        }
        
        // Initialize interface layers on payload load
        renderCaseSelector();
        showCase('658931');
    </script>
</body>
</html>