'use client';

import React, { useState } from 'react';

// Unified System Data Ledger matching your precise case map requirements
const detailedCasesData: Record<string, {
    number: string;
    title: string;
    date: string;
    category: string;
    jurisdiction: string;
    status: string;
    parties: string[];
    institutions: string[];
    violations: string[];
    description: string;
    outcome: string;
    keyEvents: string[];
    interventionPoints: string[];
}> = {
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
            'Fourteenth Amendment Violation: Deprivation of physical liberty without essential due process review.',
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
    '21-1-04347-2': {
        number: '21-1-04347-2',
        title: 'The State of Washington vs Shane Lozenich',
        date: 'July 2021',
        category: 'Felony Processing / Judicial Architecture Breakdown',
        jurisdiction: 'King County Superior Court',
        status: 'Closed',
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
        outcome: 'Dismissed within a 24-hour cycle due to zero legal foundation—verifies a complete absence of administrative cross-checks before depriving citizens of movement.',
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
    '22-1-04242-3': {
        number: '22-1-04242-3',
        title: 'The State of Washington vs Shane Lozenich',
        date: 'August 2022 – June 2023',
        category: 'Felony Track / Extended Pretrial Confinement Loop',
        jurisdiction: 'King County Superior Court',
        status: 'Closed',
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
    '25-2-17456-5': {
        number: '25-2-17456-5',
        title: 'SCIdpda Bush Hotel vs Shane Lozenich',
        date: 'June 2024',
        category: 'Housing Rights / Civil Retaliation Loop',
        jurisdiction: 'King County Superior Court',
        status: 'Active Archive',
        parties: ['SCIdpda Bush Hotel (Plaintiff)', 'Shane Lozenich (Defendant)'],
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
    '26-2-01443-4': {
        number: '26-2-01443-4',
        title: 'Systemic Stratigraphic Mapping Framework',
        date: 'March – May 2026',
        category: 'Information Architecture / Institutional Observation',
        jurisdiction: 'Analytical Registry Core',
        status: 'Current',
        parties: ['Jonathan Shane Concepts', 'Institutional Architectures'],
        institutions: ['Clarion Sentinel Repository', 'Policy of Truth Engine', 'Fiducia Centrale', 'Assembly of Twenty'],
        violations: [
            'Omission of Signal Interferences: Broad systematic failure of regulatory agencies to trace electromagnetic signal disruptions.',
            'Archival Inaccessibility: Deliberate administrative friction preventing clear mapping of overlapping data networks.',
            'Evasion of Administrative Review: Ongoing refusal of corporate and state entities to process formal Notices of Non-Consent.'
        ],
        description: 'An active operational initiative and structural framework assembled to fully document regional institutional anomalies, land title disputes, and procedural civil rights violations. This system isolates the structural gaps where information is intentionally siloed or manipulated across cross-agency handoffs, neutralizing standard civil accountability controls.',
        outcome: 'Active conceptual operation; generating standardized procedural demands, cryptographic filings, and structural case map updates.',
        keyEvents: [
            'Methodological synthesis finalized combining structural aesthetics with forensic ledger data tracking.',
            'Filing of a comprehensive Notice of Non-Consent against arbitrary municipal tracking frameworks.',
            'Integration of land title registry data into the broader systemic mapping network.'
        ],
        interventionPoints: [
            'Mandate decentralized, open-source ledger transparency for public-facing case logs.',
            'Establish legally binding digital receipt mandates forcing immediate processing of civilian Notices of Non-Consent.',
            'Create public, immutable ledgers for recording structural exceptions within regional real estate title indexes.'
        ]
    }
};

const templateCases = [
    {
        id: "658931",
        title: "Procedural Escalation",
        status: "Archived",
        classification: "Institutional",
        summary: "Procedural interaction involving institutional memory and competency-related systems.",
    },
    {
        id: "658959",
        title: "Cross-System Continuity",
        status: "Archived",
        classification: "Administrative",
        summary: "Analysis of procedural continuity across interconnected institutional systems.",
    },
    {
        id: "660121",
        title: "Behavioral Interpretation",
        status: "Archived",
        classification: "Behavioral",
        summary: "Examination of interpretive escalation and procedural recursion.",
    },
    {
        id: "21-1-04347-2",
        title: "Superior Court Matter",
        status: "Closed",
        classification: "Judicial",
        summary: "Institutional review and procedural sequence involving multi-agency interaction.",
    },
    {
        id: "664676",
        title: "Procedural Divergence",
        status: "Archived",
        classification: "System Memory",
        summary: "Examination of divergence between institutional record structures and narrative continuity.",
    },
    {
        id: "22-1-04242-3",
        title: "Competency Related Matter",
        status: "Closed",
        classification: "Psychiatric / Judicial",
        summary: "Procedural interaction involving competency evaluation systems.",
    },
    {
        id: "25-2-17456-5",
        title: "Administrative Interaction",
        status: "Active Archive",
        classification: "Administrative",
        summary: "Analysis of institutional interaction and procedural metadata propagation.",
    },
    {
        id: "26-2-01443-4",
        title: "Ongoing Procedural Review",
        status: "Current",
        classification: "Judicial",
        summary: "Current procedural analysis and institutional systems documentation.",
    },
];

export default function CasesPage() {
    const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
    const activeCaseDetail = selectedCaseId ? detailedCasesData[selectedCaseId] : null;

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-[#f5f1e8] px-8 md:px-20 py-16 relative">
            
            {/* Header */}
            <section className="max-w-5xl">
                <div className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                    Procedural Archive / Institutional Records
                </div>
                <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight">
                    Case Files
                </h1>
                <p className="mt-8 max-w-4xl text-xl text-neutral-400 leading-relaxed">
                    Indexed procedural archives documenting institutional interaction,
                    systemic escalation, classification structures, and memory divergence.
                </p>
            </section>

            {/* Case Grid (Clicking a card sets the active state state instead of linking away) */}
            <section className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-8">
                {templateCases.map((caseFile) => (
                    <button
                        key={caseFile.id}
                        onClick={() => setSelectedCaseId(caseFile.id)}
                        className={`border text-left w-full p-8 bg-black/20 transition-all block focus:outline-none ${
                            selectedCaseId === caseFile.id ? 'border-neutral-400 bg-neutral-900/40' : 'border-neutral-800 hover:border-neutral-600'
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="text-sm uppercase tracking-wide text-neutral-500">
                                Case {caseFile.id}
                            </div>
                            <div className="text-sm text-neutral-400">
                                {caseFile.status}
                            </div>
                        </div>

                        <h2 className="mt-6 text-3xl font-semibold">
                            {caseFile.title}
                        </h2>

                        <div className="mt-4 text-sm uppercase tracking-wide text-neutral-500">
                            {caseFile.classification}
                        </div>

                        <p className="mt-6 text-neutral-400 leading-relaxed">
                            {caseFile.summary}
                        </p>
                    </button>
                ))}
            </section>

            {/* Overlay Panel for Detailed Case Map (Neutral high-contrast dark palette) */}
            {activeCaseDetail && (
                <div className="fixed inset-0 bg-black/80 z-50 flex justify-end animate-fade-in">
                    <div className="w-full max-w-3xl bg-[#121212] border-l border-neutral-800 h-full overflow-y-auto p-8 md:p-12 flex flex-col justify-between">
                        
                        <div>
                            {/* Panel Controls */}
                            <div className="flex justify-between items-center border-b border-neutral-800 pb-6 mb-8">
                                <div>
                                    <span className="text-xs uppercase tracking-widest text-neutral-500">Forensic Overview</span>
                                    <h2 className="text-2xl font-bold tracking-tight mt-1">CASE NO. {activeCaseDetail.number}</h2>
                                </div>
                                <button 
                                    onClick={() => setSelectedCaseId(null)}
                                    className="px-4 py-2 border border-neutral-700 hover:border-neutral-400 text-sm tracking-wide text-neutral-400 hover:text-[#f5f1e8] transition-all"
                                >
                                    CLOSE INDEX
                                </button>
                            </div>

                            {/* Core Parameters */}
                            <div className="text-xl font-medium text-neutral-300 mb-6">
                                {activeCaseDetail.title}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                                <div className="border border-neutral-800 p-4 bg-neutral-900/20">
                                    <div className="text-xs uppercase text-neutral-500 tracking-wider">Date Timeline</div>
                                    <div className="mt-1 font-semibold text-sm text-neutral-300">{activeCaseDetail.date}</div>
                                </div>
                                <div className="border border-neutral-800 p-4 bg-neutral-900/20">
                                    <div className="text-xs uppercase text-neutral-500 tracking-wider">System Category</div>
                                    <div className="mt-1 font-semibold text-sm text-neutral-300">{activeCaseDetail.category}</div>
                                </div>
                                <div className="border border-neutral-800 p-4 bg-neutral-900/20">
                                    <div className="text-xs uppercase text-neutral-500 tracking-wider">Jurisdiction</div>
                                    <div className="mt-1 font-semibold text-sm text-neutral-300">{activeCaseDetail.jurisdiction}</div>
                                </div>
                            </div>

                            {/* Architectural Sections */}
                            <div className="space-y-8">
                                <div className="border-l-2 border-neutral-600 pl-4 py-1">
                                    <h3 className="text-xs uppercase text-neutral-400 tracking-widest font-bold mb-2">Operational Summary</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{activeCaseDetail.description}</p>
                                </div>

                                <div>
                                    <h3 className="text-xs uppercase text-neutral-400 tracking-widest font-bold mb-3">Identified Parties</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {activeCaseDetail.parties.map((party, i) => (
                                            <span key={i} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                                                {party}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xs uppercase text-neutral-400 tracking-widest font-bold mb-3">Involved Institutions</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {activeCaseDetail.institutions.map((inst, i) => (
                                            <span key={i} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                                                {inst}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border border-neutral-800 p-6 bg-neutral-900/10">
                                    <h3 className="text-xs uppercase text-neutral-400 tracking-widest font-bold mb-3">System Violations Logging</h3>
                                    <ul className="space-y-3 text-sm text-neutral-400 list-none pl-0">
                                        {activeCaseDetail.violations.map((violation, i) => (
                                            <li key={i} className="pb-3 border-b border-neutral-900 last:border-0 last:pb-0">
                                                • {violation}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xs uppercase text-neutral-400 tracking-widest font-bold mb-4">Procedural Tracking Sequence</h3>
                                    <div className="border-l border-neutral-800 ml-2 pl-6 space-y-4">
                                        {activeCaseDetail.keyEvents.map((event, i) => (
                                            <div key={i} className="relative">
                                                <div className="absolute -left-[31px] top-1 w-2 h-2 bg-neutral-600 border border-[#121212]"></div>
                                                <span className="text-xs uppercase text-neutral-500 font-mono block">Node 0{i + 1}</span>
                                                <p className="text-sm text-neutral-400 mt-1">{event}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="border border-neutral-800 p-6 bg-neutral-900/10">
                                    <h3 className="text-xs uppercase text-neutral-400 tracking-widest font-bold mb-3">Structural Intervention Targets</h3>
                                    <ul className="space-y-3 text-sm text-neutral-400 list-none pl-0">
                                        {activeCaseDetail.interventionPoints.map((point, i) => (
                                            <li key={i} className="text-neutral-300">
                                                → {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="border-t border-neutral-800 pt-6">
                                    <h3 className="text-xs uppercase text-neutral-400 tracking-widest font-bold mb-2">Resolution Output</h3>
                                    <p className="text-neutral-400 text-sm leading-relaxed">{activeCaseDetail.outcome}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-6 border-t border-neutral-900 text-center text-xs text-neutral-600 font-mono">
                            Demopocrisy Verification Registry // System Architecture Core
                        </div>

                    </div>
                </div>
            )}

        </main>
    );
}