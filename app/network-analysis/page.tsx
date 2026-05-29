"use client"

import React, { useState } from 'react'

// ── DATA STRUCTURES ──────────────────────────────────────────────────────────
const CASES = [
  { id: '658931',           degree: 9,  closeness: 0.179, reach: 0.204, eff: 0.020, track: 'Municipal — filing failure' },
  { id: '658959',           degree: 11, closeness: 0.245, reach: 0.296, eff: 0.025, track: 'Medicalization pipeline' },
  { id: '660121',           degree: 9,  closeness: 0.179, reach: 0.204, eff: 0.020, track: 'Database automation failure' },
  { id: '21-1-04347-2 SEA', degree: 15, closeness: 0.311, reach: 0.352, eff: 0.022, track: 'Felony / due process collapse' },
  { id: '664676',           degree: 12, closeness: 0.245, reach: 0.278, eff: 0.021, track: 'Housing / economic detention' },
  { id: '22-1-04242-3 SEA', degree: 11, closeness: 0.236, reach: 0.278, eff: 0.023, track: 'Political prosecution' },
  { id: 'SCIDpda-2026',     degree: 7,  closeness: 0.132, reach: 0.148, eff: 0.019, track: 'Housing eviction' },
]

const CONNS = [
  { name: 'Involves entity',            count: 42 },
  { name: 'Exposes systemic flaw',      count: 14 },
  { name: 'Suffers procedural breakdown', count: 12 },
  { name: 'Remedied by',                count: 10 },
  { name: 'Sustains structural gap',    count: 8 },
  { name: 'Root cause mechanism',       count: 1 },
]

const BETWEEN = [
  { name: 'Seattle Police Department',  val: '0.0040', note: 'Primary inter-system bridge — sole meaningful betweenness' },
  { name: 'King County Jail',           val: '0.0007', note: 'Detention gateway between arrest and judicial processing' },
  { name: 'King County Superior Court', val: '0.0004', note: 'Tertiary bridge — felony-level case flow to OCRP' },
]

const INDEGREE = [
  { n: 'Seattle Police Department',      v: 6 },
  { n: 'King County Jail',               v: 5 },
  { n: 'Seattle Municipal Court',        v: 4 },
  { n: "KC Prosecutor's Office",         v: 3 },
  { n: 'King County Superior Court',     v: 3 },
  { n: 'OCRP',                           v: 3 },
  { n: 'Institutional Opacity (FM)',     v: 3 },
  { n: 'Competency Oversight Reform (RF)', v: 3 },
]

const OUTDEGREE = [
  { n: 'All 7 Cases — structural initiators',    v: 7 },
  { n: 'SPD → KC Prosecutor + SMC',              v: 3 },
  { n: 'King County Jail → KC Prosecutor',       v: 1 },
  { n: 'King County Superior Court → OCRP',      v: 1 },
  { n: 'SCIDpda → Telecare Corp',                v: 1 },
  { n: 'All other agencies — zero outdegree',    v: 0 },
]

const CYCLE = [
  { n: '01', title: 'Dissonance',       sub: 'Element',     fms: ['Technological Harassment (V2K)', 'Database Lag', 'Due Process Vacuum'] },
  { n: '02', title: 'Legitimation',      sub: 'Authority',    fms: ['Institutional Opacity', 'Administrative Substitution', 'No Complaint Filed'] },
  { n: '03', title: 'Disqualification', sub: 'Hegemony',     fms: ['Narrative Inversion', 'Diagnostic Looping', 'Competency Bypass', 'Institutional Opacity', 'Arrest by Unidentified Agents', 'Evidence Integrity Failure'] },
  { n: '04', title: 'Mediation',        sub: 'Reactive',     fms: ['Procedural Breakdown', 'Administrative Churn', 'Absence of Counsel', 'Weaponization of Protective Orders'] },
  { n: '05', title: 'Dissonance',       sub: 'Failure Mode', fms: ['Restoration Order Without Counsel', 'Warrantless Seizure', 'Database Misclassification', 'Due Process Vacuum', 'Procedural Breach', 'Economic Incentivization of Detention [ROOT CAUSE]'] },
  { n: '06', title: 'Precedent',        sub: 'Memory',      fms: ['Administrative Misrouting (evidence trail)', 'Narrative Inversion (recoverable)', 'All dismissed cases (unresolved violations)'] },
  { n: '07', title: 'Reclamation',      sub: 'Equilibrium',  fms: ['System: Co-optation · Institutionalization · Narrative Rewriting · Operational Exploitation', 'Subject: Archive · Majorat Trust · Coherence Architecture · Counter-documentation'] },
]

const FAILURE_MODES = [
  { name: 'Administrative Substitution',           freq: 3, cases: '658959 · 21-1-04347-2 · 22-1-04242-3',        cls: 'endemic' },
  { name: 'Institutional Opacity',                freq: 3, cases: '21-1-04347-2 · 22-1-04242-3 · SCIDpda',        cls: 'endemic' },
  { name: 'Diagnostic Looping',                   freq: 2, cases: '21-1-04347-2 · 22-1-04242-3',                 cls: 'endemic' },
  { name: 'Absence of Counsel at Critical Junctures', freq: 4, cases: '658959 · 21-1-04347-2 · 22-1-04242-3 · 664676', cls: 'recurring' },
  { name: 'No Complaint Filed',                   freq: 2, cases: '658931 · 664676',                             cls: 'recurring' },
  { name: 'Procedural Breakdown',                freq: 2, cases: '658931 · 22-1-04242-3',                         cls: 'recurring' },
  { name: 'Procedural Breach',                   freq: 2, cases: '660121 · SCIDpda',                             cls: 'recurring' },
  { name: 'Weaponization of Protective Orders',  freq: 2, cases: 'SCIDpda · 664676',                             cls: 'recurring' },
  { name: 'Technological Harassment (V2K)',      freq: 2, cases: '658959 · 664676',                               cls: 'recurring' },
  { name: 'Due Process Vacuum',                  freq: 2, cases: '658931 · 664676',                               cls: 'recurring' },
  { name: 'Database Lag / Misclassification',    freq: 1, cases: '660121',                                       cls: 'case' },
  { name: 'Competency Bypass',                    freq: 1, cases: '658959',                                       cls: 'case' },
  { name: 'Restoration Order Without Counsel',   freq: 1, cases: '21-1-04347-2',                                 cls: 'case' },
  { name: 'Warrantless Seizure',                  freq: 1, cases: '21-1-04347-2',                                 cls: 'case' },
  { name: 'Arrest by Unidentified Agents',       freq: 1, cases: '21-1-04347-2',                                 cls: 'case' },
  { name: 'Evidence Integrity Failure',           freq: 1, cases: '658959',                                       cls: 'case' },
  { name: 'Narrative Inversion',                  freq: 1, cases: '22-1-04242-3',                                 cls: 'case' },
  { name: 'Administrative Misrouting',            freq: 1, cases: '664676',                                       cls: 'case' },
  { name: 'Economic Incentivization of Detention', freq: 1, cases: '664676',                                      cls: 'root' },
]

const REFORMS = [
  { name: 'Competency Oversight Reform',                               indegree: 3, cases: '658959 · 21-1-04347-2 · 22-1-04242-3', priority: 'P1' },
  { name: 'Real-Time Digital Tracking + Human-in-the-Loop',      indegree: 3, cases: '658931 · 660121 · 664676',              priority: 'P1' },
  { name: 'Cross-Database Purge Protocols',                       indegree: 2, cases: '658931 · 660121',                       priority: 'P2' },
  { name: 'Digital Evidence Protocols',                           indegree: 2, cases: '658959 · 21-1-04347-2',                 priority: 'P2' },
  { name: 'Transparency Safeguards',                              indegree: 2, cases: '21-1-04347-2 · 22-1-04242-3',           priority: 'P2' },
  { name: 'Judicial Signature Requirements',                      indegree: 1, cases: '658959',                                priority: 'P3' },
  { name: 'PDA Oversight',                                        indegree: 1, cases: 'SCIDpda-2026',                          priority: 'P3' },
  { name: 'Protected-Party Accountability',                       indegree: 1, cases: '21-1-04347-2',                          priority: 'P3' },
  { name: 'Technological Torture Protections',                     indegree: 1, cases: '664676',                                priority: 'P3' },
  { name: 'Economic Detention Root Cause Reform',                  indegree: 0, cases: '664676 [MISSING — NO REFORM NODE]',    priority: 'P4' },
]

const RECLAIM_STEPS = [
  { n: '01', label: 'Recognition' },
  { n: '02', label: 'Elevation' },
  { n: '03', label: 'Extraction' },
  { n: '04', label: 'Autonomy' },
  { n: '05', label: 'Parallelism' },
  { n: '06', label: 'Integration' },
  { n: '07', label: 'Emergence' },
]

// ── RENDER HELPER COMPONENTS ─────────────────────────────────────────────────
function Bar({ val, max, accent }: { val: number; max: number; accent: boolean }) {
  const pct = max > 0 ? Math.round((val / max) * 100) : 0
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-[3px] bg-[#222222] overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${accent ? 'bg-[#eb153c]' : 'bg-[#bbbaba]'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="text-[10px] text-[#ffffff] min-w-[36px] text-right font-mono">{val}</div>
    </div>
  )
}

function Dots({ freq, max, accentAll }: { freq: number; max: number; accentAll: boolean }) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: max }).map((_, i) => (
        <div 
          key={i} 
          className={`w-[7px] h-[7px] rounded-full transition-colors ${
            i < freq ? (accentAll ? 'bg-[#eb153c]' : 'bg-white') : 'bg-[#2a2a2a]'
          }`}
        />
      ))}
    </div>
  )
}

// ── MAIN PAGE COMPONENT ──────────────────────────────────────────────────────
export default function NetworkAnalysisPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeCycleStep, setActiveCycleStep] = useState(0)

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'cases', name: 'Cases' },
    { id: 'network', name: 'Network' },
    { id: 'cycle', name: '7-Step Cycle' },
    { id: 'failures', name: 'Failure Modes' },
    { id: 'reforms', name: 'Reforms' },
    { id: 'reclamation', name: 'Reclamation' },
  ]

  return (
    <main className="min-h-screen bg-[#080808] text-white font-mono antialiased text-[13px] leading-relaxed pb-20">
      
      {/* Structural Accent Top Line Matrix */}
      <div className="w-full h-[3px] bg-gradient-to-right from-[#eb153c] via-[#abd822] to-transparent" />

      {/* Hero Header Area */}
      <section className="px-10 pt-16 pb-12 border-b border-[#222222]">
        <p className="text-[10px] tracking-[4px] text-[#eb153c] uppercase mb-3">
          Procedural Justice and Systems Failures
        </p>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-4 leading-none font-sans">
          Network Analysis
        </h1>
        <p className="text-[#ffffff] text-[12px] max-w-xl leading-relaxed mb-8">
          Institutional memory, procedural systems, and systemic stratigraphic network analysis. 
          Seven-step cycle mapping. Structural diagnostic findings. 
        </p>
        
        <div className="flex flex-wrap gap-8 text-[10px] tracking-widest text-[#bbbaba]">
         <span>NODES: <span className="text-[#eb153c]">57</span></span>
          <span>CONNECTIONS: <span className="text-[#eb153c]">80</span></span>
          <span>CASES: <span className="text-[#eb153c]">7</span></span>
        </div>
      </section>

      {/* Reactive Multi-Tab System Hub */}
      <div className="max-w-[1200px] mx-auto px-10 mt-6">
        
        {/* Navigation Bar Sticky Frame */}
        <div className="flex border-b border-[#222222] overflow-x-auto scrollbar-none sticky top-0 bg-[#080808] z-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 text-[10px] tracking-widest uppercase font-bold border-b-2 bg-transparent transition-all whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'text-[#eb153c] border-[#eb153c]' 
                  : 'text-[#bbbaba] border-transparent hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* PANELS LAYER */}
        <div className="pt-8">

          {/* TAB 1: OVERVIEW PANEL */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase">
                Master database — Kumu social network analysis · 57 nodes · 80 connections · 7 cases · 18 agencies · 19 failure modes · 10 reform nodes
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-[#161616] border border-[#222222] p-4">
                  <div className="text-[10px] tracking-wider text-[#bbbaba] uppercase mb-1">Total nodes</div>
                  <div className="text-3xl font-extrabold font-sans">57</div>
                  <div className="text-[10px] text-[#bbbaba] mt-1">Cases · Agencies · Failure Modes</div>
                </div>
                <div className="bg-[#161616] border border-[#222222] p-4">
                  <div className="text-[10px] tracking-wider text-[#bbbaba] uppercase mb-1">Connections</div>
                  <div className="text-3xl font-extrabold font-sans">80</div>
                  <div className="text-[10px] text-[#bbbaba] mt-1">Directional edges, 6 types</div>
                </div>
                <div className="bg-[#161616] border border-[#222222] p-4">
                  <div className="text-[10px] tracking-wider text-[#bbbaba] uppercase mb-1">Cases</div>
                  <div className="text-3xl font-extrabold font-sans">7</div>
                  <div className="text-[10px] text-[#bbbaba] mt-1">2021–2026 · King County, WA</div>
                </div>
                <div className="bg-[#161616] border border-[#222222] p-4">
                  <div className="text-[10px] tracking-wider text-[#bbbaba] uppercase mb-1">Agencies Implicated</div>
                  <div className="text-3xl font-extrabold font-sans">18</div>
                  <div className="text-[10px] text-[#bbbaba] mt-1">SPD leads — betweenness 0.0040</div>
                </div>
                <div className="bg-[#161616] border border-[#222222] p-4">
                  <div className="text-[10px] tracking-wider text-[#bbbaba] uppercase mb-1">Failure modes</div>
                  <div className="text-3xl font-extrabold font-sans">19</div>
                  <div className="text-[10px] text-[#bbbaba] mt-1">3 endemic · 7 recurring</div>
                </div>
                <div className="bg-[#161616] border border-[#222222] p-4">
                  <div className="text-[10px] tracking-wider text-[#bbbaba] uppercase mb-1">Reform nodes</div>
                  <div className="text-3xl font-extrabold font-sans">10</div>
                  <div className="text-[10px] text-[#bbbaba] mt-1">1 root cause gap unaddressed</div>
                </div>
                <div className="bg-[#161616] border border-[#222222] p-4">
                  <div className="text-[10px] tracking-wider text-[#bbbaba] uppercase mb-1">SPD betweenness</div>
                  <div className="text-3xl font-extrabold font-sans">0.0040</div>
                  <div className="text-[10px] text-[#bbbaba] mt-1">Sole structural bridge in network</div>
                </div>
                <div className="bg-[#161616] border border-[#222222] p-4">
                  <div className="text-[10px] tracking-wider text-[#bbbaba] uppercase mb-1">Top case reach</div>
                  <div className="text-3xl font-extrabold font-sans">35.2%</div>
                  <div className="text-[10px] text-[#bbbaba] mt-1">Case 21-1-04347-2 SEA</div>
                </div>
              </div>

              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase pt-4">Four structural findings</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[14px] mb-2">Finding 1 — One structural bridge</div>
                  <div className="space-y-1 text-[#bbbaba] text-[12px]">
                    <div>• SPD betweenness: <span className="text-white font-bold">0.0040 (all others: 0.0000)</span></div>
                    <div>• SPD implicated in <span className="text-white">6 of 7 cases</span></div>
                    <div>• Active propagator of coordination failure <span className="text-white">to downstream nodes</span></div>
                    <div>• SPD reform = <span className="text-white">disproportionate system-wide leverage</span></div>
                  </div>
                </div>
                
                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[14px] mb-2">Finding 2 — Cases are true infrastructure</div>
                  <div className="space-y-1 text-[#bbbaba] text-[12px]">
                    <div>• Cases hold highest <span className="text-white">degree, closeness, reach, outdegree</span></div>
                    <div>• Agencies are <span className="text-white">passive receiving nodes</span></div>
                    <div>• Cases simultaneously activate <span className="text-white">agencies + failure modes + reforms</span></div>
                    <div>• Diagnostic leverage = <span className="text-white">case-level precision mapping</span></div>
                  </div>
                </div>

                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[14px] mb-2">Finding 3 — Competency pipeline: most efficient harm path</div>
                  <div className="space-y-1 text-[#bbbaba] text-[12px]">
                    <div>• Case 658959 reach efficiency: <span className="text-white font-bold">0.025 (highest in network)</span></div>
                    <div>• Single undocumented transfer <span className="text-white">cascades through entire network</span></div>
                    <div>• Administrative Substitution: <span className="text-white">3 cases, endemic classification</span></div>
                    <div>• Sustained deprivation of liberty <span className="text-white">without adjudication</span></div>
                  </div>
                </div>

                <div className="border border-[#e8a02044] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[14px] mb-2 flex items-center gap-2">
                    Finding 4 — Unaddressed root cause <span className="text-[#eb153c]">⚠</span>
                  </div>
                  <div className="space-y-1 text-[#bbbaba] text-[12px]">
                    <div>• Economic Incentivization of Detention: <span className="text-[#eb153c] font-bold">only root cause in dataset</span></div>
                    <div>• Zero corresponding <span className="text-[#eb153c]">reform node exists</span></div>
                    <div>• Detention cycles generate <span className="text-white">union negotiation data + recruitment bonuses</span></div>
                    <div>• Cycle structurally <span className="text-[#eb153c] font-bold">designed to repeat</span></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: CASES PANEL */}
          {activeTab === 'cases' && (
            <div className="space-y-6 animate-fadeIn">
              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase">
                7 cases · degree · closeness · reach · reach efficiency
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-[11px]">
                  <thead>
                    <tr className="border-b border-[#222222]">
                      <th className="p-3 text-[10px] tracking-wider text-[#bbbaba] uppercase font-normal">Case</th>
                      <th className="p-3 text-[10px] tracking-wider text-[#bbbaba] uppercase font-normal w-1/5">Degree</th>
                      <th className="p-3 text-[10px] tracking-wider text-[#bbbaba] uppercase font-normal w-1/5">Closeness</th>
                      <th className="p-3 text-[10px] tracking-wider text-[#bbbaba] uppercase font-normal w-1/5">Reach</th>
                      <th className="p-3 text-[10px] tracking-wider text-[#bbbaba] uppercase font-normal w-1/5">Reach Eff.</th>
                      <th className="p-3 text-[10px] tracking-wider text-[#bbbaba] uppercase font-normal">Track</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CASES.map((c) => (
                      <tr key={c.id} className="border-b border-[#222222] hover:bg-[#161616] transition-colors">
                        <td className="p-3 font-bold text-white">{c.id}</td>
                        <td className="p-3"><Bar val={c.degree} max={15} accent={true} /></td>
                        <td className="p-3"><Bar val={c.closeness} max={0.311} accent={false} /></td>
                        <td className="p-3"><Bar val={c.reach} max={0.352} accent={true} /></td>
                        <td className="p-3"><Bar val={c.eff} max={0.025} accent={false} /></td>
                        <td className="p-3 text-[#bbbaba]">{c.track}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase pt-4">Connection type distribution (80 total edges)</p>
              <div className="space-y-3 bg-[#0d0d0d] p-4 border border-[#222222]">
                {CONNS.map((cn) => (
                  <div key={cn.name} className="space-y-1">
                    <div className="text-[11px] text-white flex justify-between">
                      <span>{cn.name}</span>
                      <span className="font-mono text-[#bbbaba]">{cn.count}</span>
                    </div>
                    <Bar val={cn.count} max={42} accent={cn.count > 10} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: NETWORK PANEL */}
          {activeTab === 'network' && (
            <div className="space-y-6 animate-fadeIn">
              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase">Betweenness centrality — structural bridges</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {BETWEEN.map((b) => (
                  <div key={b.name} className="border border-[#222222] p-4 bg-[#0d0d0d]">
                    <div className="text-white font-bold text-[12px] mb-1">{b.name}</div>
                    <div className="text-2xl font-black text-[#eb153c] font-sans mb-1">{b.val}</div>
                    <div className="text-[10px] text-[#bbbaba]">{b.note}</div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase pt-4">InDegree — most targeted nodes</p>
              <div className="space-y-3 bg-[#0d0d0d] p-4 border border-[#222222]">
                {INDEGREE.map((ind) => (
                  <div key={ind.n} className="space-y-1">
                    <div className="text-[11px] text-white flex justify-between">
                      <span>{ind.n}</span>
                      <span className="font-mono text-[#bbbaba]">{ind.v}</span>
                    </div>
                    <Bar val={ind.v} max={6} accent={ind.v >= 4} />
                  </div>
                ))}
              </div>

              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase pt-4">OutDegree — structural initiators</p>
              <div className="space-y-3 bg-[#0d0d0d] p-4 border border-[#222222]">
                {OUTDEGREE.map((out) => (
                  <div key={out.n} className="space-y-1">
                    <div className="text-[11px] text-white flex justify-between">
                      <span>{out.n}</span>
                      <span className="font-mono text-[#bbbaba]">{out.v}</span>
                    </div>
                    <Bar val={out.v} max={7} accent={out.v > 1} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: 7-STEP CYCLE PANEL */}
          {activeTab === 'cycle' && (
            <div className="space-y-6 animate-fadeIn">
              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase">
                Structural conflict cycle — Click step to isolate active alignment
              </p>
              
              <div className="grid grid-cols-4 md:grid-cols-7 border border-[#222222]">
                {CYCLE.map((step, idx) => (
                  <div 
                    key={step.n}
                    onClick={() => setActiveCycleStep(idx)}
                    className={`p-4 border-r border-b border-[#222222] last:border-r-0 cursor-pointer transition-all ${
                      activeCycleStep === idx ? 'bg-[#161616]' : 'hover:bg-[#0d0d0d]'
                    }`}
                  >
                    <div className="text-[9px] text-[#bbbaba] tracking-widest mb-1">{step.n}</div>
                    <div className={`text-[12px] font-bold ${idx === 6 ? 'text-[#eb153c]' : 'text-white'}`}>
                      {step.title}
                    </div>
                    <div className="text-[9px] text-[#bbbaba] mt-1">{step.sub}</div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-[#0d0d0d] border border-[#222222] mt-4">
                <div className="text-[10px] tracking-widest text-[#eb153c] uppercase mb-3">
                  Active parameters for Step {CYCLE[activeCycleStep].n}: {CYCLE[activeCycleStep].title}
                </div>
                <div className="space-y-2">
                  {CYCLE[activeCycleStep].fms.map((fm, i) => (
                    <div key={i} className="text-[12px] border-l-2 border-[#eb153c] pl-3 text-white py-1 bg-black/20">
                      {fm}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: FAILURE MODES PANEL */}
          {activeTab === 'failures' && (
            <div className="space-y-4 animate-fadeIn">
              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase">
                19 failure modes · classification · case frequency (7 dots = max)
              </p>
              
              <div className="border border-[#222222] divide-y divide-[#222222]">
                {FAILURE_MODES.map((fm) => (
                  <div key={fm.name} className="p-3 flex items-center justify-between flex-wrap gap-4 bg-[#0d0d0d] hover:bg-[#161616] transition-colors">
                    <div className="min-w-[240px] flex-1">
                      <div className="text-white font-medium text-[12px]">{fm.name}</div>
                      <div className="text-[10px] text-[#bbbaba] mt-0.5">Cases: {fm.cases}</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <span className={`text-[9px] tracking-widest uppercase px-2 py-0.5 border ${
                        fm.cls === 'endemic' ? 'bg-[#eb153c18] text-[#eb153c] border-[#eb153c33]' :
                        fm.cls === 'root' ? 'bg-[#e8a02018] text-[#e8a020] border-[#e8a02033]' :
                        'bg-[#161616] text-[#bbbaba] border-[#222222]'
                      }`}>
                        {fm.cls}
                      </span>
                      <Dots freq={fm.freq} max={7} accentAll={fm.cls === 'endemic' || fm.cls === 'root'} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 6: REFORMS PANEL */}
          {activeTab === 'reforms' && (
            <div className="space-y-6 animate-fadeIn">
              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase">10 reform nodes · priority matrix</p>
              
              <div className="border border-[#222222] divide-y divide-[#222222]">
                {REFORMS.map((rf) => (
                  <div key={rf.name} className="p-3 flex items-center justify-between flex-wrap gap-4 bg-[#0d0d0d]">
                    <div className="flex-1 min-w-[200px]">
                      <div className="text-white text-[12px] font-medium">{rf.name}</div>
                      <div className="text-[10px] text-[#bbbaba] mt-0.5">Linked Context: {rf.cases}</div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-[10px] text-[#bbbaba]">InDegree: {rf.indegree}</div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 border min-w-[32px] text-center ${
                        rf.priority === 'P1' ? 'bg-[#eb153c18] text-[#eb153c] border-[#eb153c33]' :
                        rf.priority === 'P2' ? 'bg-[#e8a02018] text-[#e8a020] border-[#e8a02033]' :
                        rf.priority === 'P3' ? 'bg-[#161616] text-[#bbbaba] border-[#222222]' :
                        'border-dashed border-[#2a2a2a] text-[#bbbaba]'
                      }`}>
                        {rf.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase pt-4">Critical reform gaps</p>
              <div className="border border-[#e8a02044] p-4 bg-[#0d0d0d]">
                <div className="font-bold text-white text-[12px] mb-2 flex items-center gap-2">
                  Economic Detention Root Cause Reform — MISSING <span className="text-[#eb153c]">⚠</span>
                </div>
                <div className="space-y-1 text-[#bbbaba] text-[11px]">
                  <div>• Only root cause mechanism in entire dataset <em>(Case 664676)</em></div>
                  <div>• No corresponding reform node — <span className="text-[#eb153c]">structural protection of reclamation mechanism</span></div>
                  <div>• If root cause never addressed, the system cycle <span className="text-[#eb153c] font-bold">cannot terminate</span></div>
                </div>
              </div>

              <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                <div className="font-bold text-white text-[12px] mb-2">Also structural elements unaddressed</div>
                <div className="space-y-1 text-[#bbbaba] text-[11px]">
                  <div>• Narrative Inversion — <em>Case 22-1-04242-3 SEA</em></div>
                  <div>• Arrest by Unidentified Agents — <em>Case 21-1-04347-2</em></div>
                  <div>• Administrative Misrouting — <em>Case 664676</em></div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: RECLAMATION PANEL */}
          {activeTab === 'reclamation' && (
            <div className="space-y-6 animate-fadeIn">
              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase">System-side reclamation mechanisms</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[12px] mb-1">Co-optation</div>
                  <div className="text-[11px] text-[#bbbaba]">"Restored Competency" finding absorbs 5 years of active resistance. Language of dissent adopted and neutralized by the institution.</div>
                </div>
                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[12px] mb-1">Institutionalization</div>
                  <div className="text-[11px] text-[#bbbaba]">Demopocrisy Archive diverted to provisional diagnosis logs. Battle lines forced from public courtrooms to hidden administrative channels.</div>
                </div>
                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[12px] mb-1">Narrative rewriting</div>
                  <div className="text-[11px] text-[#bbbaba]">Procedural collapses reframed down the line as necessary test metrics. Case dismissals twisted as artificial proof the system works.</div>
                </div>
                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[12px] mb-1">Operational exploitation</div>
                  <div className="text-[11px] text-[#bbbaba]">Detention loops generate high-yield union negotiation data, tracking matrices, and sovereign recruitment configurations.</div>
                </div>
              </div>

              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase pt-4">Subject-side reclamation path</p>
              <div className="flex border border-[#222222] overflow-x-auto bg-[#0d0d0d]">
                {RECLAIM_STEPS.map((step, idx) => (
                  <div key={step.n} className={`flex-1 min-w-[100px] p-4 text-center border-r border-[#222222] last:border-r-0 ${idx === 6 ? 'bg-[#161616]' : ''}`}>
                    <div className={`text-[9px] mb-1 ${idx === 6 ? 'text-[#eb153c]' : 'text-[#bbbaba]'}`}>{step.n}</div>
                    <div className={`text-[11px] font-bold ${idx === 6 ? 'text-white' : 'text-[#bbbaba]'}`}>{step.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] tracking-widest text-[#bbbaba] uppercase pt-4">Subject-side escape vectors</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[12px] mb-2">Vector 1 — Elevation (Five Concentric Layers)</div>
                  <div className="text-[11px] text-[#bbbaba] space-y-1">
                    <div>Self → Situation → Circumstance → Culture → World</div>
                    <div className="pt-1">System sees context of Self and Situation only. Subject handles all five topological layers, establishing a meta-position above institutional epistemology.</div>
                  </div>
                </div>

                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[12px] mb-2">Vector 2 — Autonomy (Clarion Sentinel)</div>
                  <div className="text-[11px] text-[#bbbaba] space-y-1">
                    <div>Sovereign Inheritance · Coherence Test · <span className="text-[#eb153c]">Policy of Truth</span></div>
                    <div className="pt-1">Operational Coordination · Fiducia Centrale · Creation System · Closed-Loop Feedback loops to sustain precise cognitive architecture.</div>
                  </div>
                </div>

                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[12px] mb-2">Vector 3 — Parallelism (Prussian Applicate)</div>
                  <div className="text-[11px] text-[#bbbaba] space-y-1">
                    <div>Sovereign Foundation (Z-Axis) · Coherence Test · Shadow Ledger</div>
                    <div className="pt-1">Frequency Alignment across Majorat Horizons to lock execution variables completely outside state administrative classifications.</div>
                  </div>
                </div>

                <div className="border border-[#222222] p-4 bg-[#0d0d0d]">
                  <div className="font-bold text-white text-[12px] mb-2">Demopocrisy Archive — Counter-Precedent Infrastructure</div>
                  <div className="text-[11px] text-[#bbbaba]">
                    Systemic breakdown layers completely cross-referenced using verified public logs. 
                    Creates permanent structural counter-memory boundaries that institutional code cannot rewrite or absorb.
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Embedded High-Contrast Matrix Footer */}
      <footer className="w-full mt-20 border-t border-[#222222] px-10 py-6 flex flex-col sm:flex-row justify-between text-[10px] tracking-widest text-[#bbbaba] gap-4 bg-[#080808]">
        <span>IRES // PRUSSIAN APPLICATE © 2026 — DEMOPOCRISY ARCHIVE</span>
        <div className="flex items-center gap-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#eb153c]" />
          <span>Z-AXIS: LOCKED // #ABD822 // 822 RESONANCE</span>
        </div>
      </footer>
    </main>
  )
}

