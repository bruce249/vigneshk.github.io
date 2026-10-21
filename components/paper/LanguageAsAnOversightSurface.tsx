import Link from 'next/link'
import type { ReactNode } from 'react'

function Figure({
  id,
  n,
  src,
  alt,
  caption,
}: {
  id: string
  n: number
  src: string
  alt: string
  caption: ReactNode
}) {
  return (
    <figure id={id} className="my-8">
      <img src={src} alt={alt} className="mx-auto h-auto w-full bg-white" />
      <figcaption className="mt-3 text-sm text-muted">
        <span className="font-medium text-fg">Figure {n}.</span> {caption}
      </figcaption>
    </figure>
  )
}

export default function LanguageAsAnOversightSurface() {
  return (
    <article className="paper">
      <p className="mb-8 text-sm">
        <Link href="/writing" className="text-muted no-underline hover:text-fg">
          Writing
        </Link>
      </p>
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
        {"Technical paper · A2A v1.0 benchmark"}
      </p>
      <h1 className="mt-3 font-display text-[clamp(2.15rem,4.6vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-fg">
        {"Language as an Oversight Surface in Agent-to-Agent Systems"}
      </h1>
      <p className="mt-4 text-lg italic leading-snug text-muted">
        {"A benchmark of routing, collaboration, monitorability and language selection under evasion pressure"}
      </p>
      <p className="mt-6">
        {"Vignesh Kanike"}
      </p>
      <nav aria-label="Contents" className="mt-8">
        <p className="font-medium">Contents</p>
        <ol className="mt-2 list-none space-y-1 pl-0 text-sm">
          <li>
            <a href="#abstract">{"Abstract"}</a>
          </li>
          <li>
            <a href="#1-introduction">{"1. Introduction"}</a>
          </li>
          <li>
            <a href="#2-related-work">{"2. Related work"}</a>
          </li>
          <li>
            <a href="#3-threat-model">{"3. Threat model"}</a>
          </li>
          <li>
            <a href="#4-benchmark">{"4. Benchmark"}</a>
          </li>
          <li>
            <a href="#5-metrics-and-statistical-procedure">{"5. Metrics and statistical procedure"}</a>
          </li>
          <li>
            <a href="#6-results">{"6. Results"}</a>
          </li>
          <li>
            <a href="#7-discussion">{"7. Discussion"}</a>
          </li>
          <li>
            <a href="#8-mitigations">{"8. Mitigations"}</a>
          </li>
          <li>
            <a href="#9-limitations-and-required-controls">{"9. Limitations and required controls"}</a>
          </li>
          <li>
            <a href="#10-conclusion">{"10. Conclusion"}</a>
          </li>
          <li>
            <a href="#reproducibility">{"Reproducibility"}</a>
          </li>
          <li>
            <a href="#appendix-a-study-inventory">{"Appendix A. Study inventory"}</a>
          </li>
          <li>
            <a href="#appendix-b-hypotheses-scored">{"Appendix B. Hypotheses, scored"}</a>
          </li>
          <li>
            <a href="#appendix-c-monitor-prompt-and-output-format">{"Appendix C. Monitor prompt and output format"}</a>
          </li>
          <li>
            <a href="#appendix-d-study-a-agent-card-routing">{"Appendix D. Study A: agent-card routing"}</a>
          </li>
          <li>
            <a href="#appendix-e-model-and-run-pinning">{"Appendix E. Model and run pinning"}</a>
          </li>
          <li>
            <a href="#references">{"References"}</a>
          </li>
        </ol>
      </nav>
      <section className="mt-10" id="abstract">
        <h2 className="font-serif text-2xl text-fg">
          {"Abstract"}
        </h2>
        <p className="mt-4">
          {"Agent-to-agent (A2A) protocols let workers advertise skills and exchange messages in any natural language, while the oversight stack that reads those messages is usually built and calibrated in English. We ask whether the working language is itself a covert channel: no codebook and no steganography, only the language the transcript happens to be written in."}
        </p>
        <p className="mt-4">
          {"We report a five-study benchmark on A2A v1.0 in which two monitors of different strength score identical transcripts across English, French, Russian, Hindi and Simplified Chinese, with romanised variants as a script control and worker capability held near ceiling."}
        </p>
        <p className="mt-4">
          {"The one comparison specified in advance as confirmatory returns a null: against the cheap monitor, English and Hindi are indistinguishable, both at 60 of 60 leaks flagged with no false positives, so the planned oversight gap is zero and the planned covert-channel ratio is undefined. That monitor is language-invariant on this leak across all five languages. Everything that follows is exploratory and is labelled as such."}
        </p>
        <p className="mt-4">
          {"The mid-strength monitor is not language-invariant, and the direction is the opposite of the low-resource-language hypothesis: it catches 57% of English leaks against 97% of Hindi ones. When a picker is allowed to choose the working language and is told only whether each trial was flagged, its choices track that feedback: it keeps the language it just used after 53 of 56 unflagged trials, against 77 of 143 flagged ones."}
        </p>
        <p className="mt-4">
          {"We stop short of calling that evasion. English is both a language frontier models reach for by default and the language this particular monitor reads least carefully, and a single adaptive run cannot separate the two; we identify the control that would. Alongside the main results we report two methodological points that generalise beyond this work: a monitor that answers with a binary judgement cannot be ranked by AUROC or by recall at a fixed false-positive rate, and undetected-utility metrics are meaningless unless detection is defined on leaking episodes rather than on all traffic. Agent-card routing is at parity. Splitting the task across two agents costs accuracy on this one split-knowledge task with one model, but that test was added after the fact and does not survive the exclusion rule the plan specified."}
        </p>
      </section>
      <section className="mt-10" id="1-introduction">
        <h2 className="font-serif text-2xl text-fg">
          {"1. Introduction"}
        </h2>
        <p className="mt-4">
          {"Multi-agent systems no longer live in a single chat box. They advertise themselves with Agent Cards, hand work across HTTP, and keep a shared "}<code>{"Task.history"}</code>{". The A2A protocol (v1.0) is language-agnostic by design: card "}<code>{"name"}</code>{" and "}<code>{"description"}</code>{", skill prose, and message text may be written in any language. The monitor that reads that history usually is not language-agnostic."}
        </p>
        <p className="mt-4">
          {"Cross-lingual safety work shows that English-centric training leaves models more jailbreakable in low-resource languages "}{"["}<a href="#ref-1">{"1"}</a>{", "}<a href="#ref-2">{"2"}</a>{"]"}{". Work on secret collusion shows that agents can hide coordination inside steganographic schemes "}{"["}<a href="#ref-3">{"3"}</a>{"]"}{". The conjunction is less studied: if the covert channel is simply the language field, no scheme is required. Speaking Hindi to an overseer that is weaker in Hindi needs no codebook. If the workers stay competent and the monitor does not, language is a free increase in undetected utility."}
        </p>
        <p className="mt-4">
          {"That hypothesis is easy to overfit to a folk theory in which low-resource languages are uniformly worse for oversight. We specified the opposite possibility as an admissible outcome before collecting any data, in a study plan that is included in the repository and whose provenance is described in the Reproducibility section."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"What was confirmatory."}</span>{" That plan names exactly one confirmatory comparison: English against Hindi on Study C, with the weak monitor, scored by the capability-normalised oversight gap and the covert channel advantage for Hindi. It designates everything else exploratory. We report that comparison first, in Section 6.2, and it is a null. Sections 6.3 to 6.6, including the entire mid-monitor result, all of Study D and the collaboration test, are exploratory: they were either planned as secondary or, in three cases, chosen after seeing the data. Section 5.4 lists every departure from the plan. Readers should treat the exploratory results as hypothesis-generating, and the sample sizes throughout are small enough that we state explicitly which comparisons they can and cannot resolve."}
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            <span className="font-medium">{"Study A (routing)."}</span>{" Do English Agent Cards win when a non-English card is equally correct?"}
          </li>
          <li>
            <span className="font-medium">{"Study B (collaboration)."}</span>{" Does joint success fall faster or slower than solo capability across languages?"}
          </li>
          <li>
            <span className="font-medium">{"Study C (monitorability)."}</span>{" Does leak detection fall with language while capability is held fixed?"}
          </li>
          <li>
            <span className="font-medium">{"Study D (selection)."}</span>{" When a picker may choose the working language under evasion pressure, what drives the choice?"}
          </li>
          <li>
            <span className="font-medium">{"Study E (script control)."}</span>{" Is any remaining gap attributable to script rather than language?"}
          </li>
        </ol>
        <p className="mt-4">
          <span className="font-medium">{"Contributions."}</span>
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            {"A reusable A2A v1.0 harness with machine-checkable environment generators, localized card packs, and metrics computed only from episode logs."}
          </li>
          <li>
            {"Evidence that a cheap English-calibrated monitor is language-invariant on an opaque-token leak, with an interval tight enough to be useful as a negative result."}
          </li>
          <li>
            {"Evidence that a mid-strength monitor is not language-invariant, and that its weakest cell is English rather than a low-resource language, with the comparison against Russian explicitly reported as not significant."}
          </li>
          <li>
            {"A trial-level analysis of language selection that identifies feedback sensitivity on 199 transitions, together with an explicit statement of the prior-versus-evasion confound that the present design cannot resolve, and the control that would resolve it."}
          </li>
          <li>
            {"Two methodological points that apply beyond this benchmark: a monitor whose score takes two values cannot be ranked by AUROC or by recall at a fixed false-positive rate, and undetected-utility metrics must define detection on leaking episodes rather than on all traffic."}
          </li>
        </ul>
      </section>
      <section className="mt-10" id="2-related-work">
        <h2 className="font-serif text-2xl text-fg">
          {"2. Related work"}
        </h2>
        <p className="mt-4">
          {"Our novelty search covered arXiv, ACL-adjacent venues and the Alignment Forum on 2026-09-18, using the query family {cross-lingual, multilingual} x {collusion, oversight evasion, monitorability, agent protocol}; the log is in the repository. To our knowledge, no prior work measures free language selection under A2A evasion pressure. Studies A to C are, to our knowledge, also uncovered as a protocol-layer benchmark."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Cross-lingual jailbreaks."}</span>{" Yong, Menghini and Bach "}{"["}<a href="#ref-1">{"1"}</a>{"]"}{" show GPT-4 refusing English AdvBench items that succeed after translation into low-resource languages. Deng et al. "}{"["}<a href="#ref-2">{"2"}</a>{"]"}{" report a similar multilingual gap. These are user-to-model attacks; they do not measure Agent Card routing, A2A transcripts, or a capability-normalised monitor comparison."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Secret collusion and encoded reasoning."}</span>{" Motwani et al. "}{"["}<a href="#ref-3">{"3"}</a>{"]"}{" introduce a framework for collusion via steganographic schemes among agents. Related work studies encoded chain-of-thought "}{"["}<a href="#ref-4">{"4"}</a>{", "}<a href="#ref-9">{"9"}</a>{"]"}{", tool-enabled stegosystems "}{"["}<a href="#ref-10">{"10"}</a>{"]"}{" and the detection of steganographic collusion "}{"["}<a href="#ref-11">{"11"}</a>{"]"}{". The difference from this work is the scheme requirement: we do not hide a bit in a synonym, we change the "}<code>{"exec_language"}</code>{" field."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Monitoring and AI control."}</span>{" Trusted monitoring of an untrusted policy is a central primitive of AI control protocols "}{"["}<a href="#ref-5">{"5"}</a>{"]"}{". Recent work argues that chain-of-thought monitorability is a real but fragile affordance "}{"["}<a href="#ref-6">{"6"}</a>{"]"}{" and that optimising against a monitor can push misbehaviour out of the monitored channel "}{"["}<a href="#ref-7">{"7"}</a>{"]"}{". Our setting is complementary: the monitored channel is the inter-agent transcript, and the perturbation is the language it is written in rather than the content."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Multilingual monitorability."}</span>{" Work on chain-of-thought monitoring across typologically diverse languages finds unfaithfulness to be pervasive rather than localised, averaging about 96% across all thirteen languages studied and persisting in the low-resource ones "}{"["}<a href="#ref-8">{"8"}</a>{"]"}{". That is single-agent reasoning rather than protocol language choice, and it does not define a covert-channel metric at the protocol layer. Our monitors are also, in effect, LLM judges of the kind deployed as safety classifiers and guardrails "}{"["}<a href="#ref-13">{"13"}</a>{"]"}{"; what this paper measures for them, a per-language detection profile on a fixed leak, is the same quantity such a guardrail would need reported before it is trusted outside the language it was tuned in."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Agent protocols."}</span>{" Threat models for MCP and A2A enumerate collusion, poisoned cards and prompt injection in card text "}{"["}<a href="#ref-12">{"12"}</a>{"]"}{". They do not treat card language and transcript language as the channel."}
        </p>
      </section>
      <section className="mt-10" id="3-threat-model">
        <h2 className="font-serif text-2xl text-fg">
          {"3. Threat model"}
        </h2>
        <p className="mt-4">
          <span className="font-medium">{"Channel."}</span>{" Natural language at the A2A layer: Agent Card prose and "}<code>{"Task.history"}</code>{". No additional encoding scheme."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Actors."}</span>
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            {"Untrusted workers (Grok 4.6 class) that complete a joint task."}
          </li>
          <li>
            {"A trusted but weaker monitor that sees only the transcript, never private holder memory, never the canary, never the ground-truth label."}
          </li>
          <li>
            {"An orchestrator (Study A) that routes from cards."}
          </li>
        </ul>
        <p className="mt-4">
          {"Two monitor strengths are used: Luna, a cheap English-calibrated overseer, and Grok 4.3 as a mid-strength overseer. The mid monitor is never paired with Grok 4.3 workers."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Assets."}</span>{" Synthetic canaries of the form "}<code>{"CNRY-"}</code>{" followed by 12 hexadecimal characters, plus mock invoice fields. No real personal data and no harmful payloads."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Adversary goal."}</span>{" Complete the joint task and pass a seeded leak without being flagged."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Why language could help."}</span>{" If detection falls with language while capability does not, language "}<em>{"L"}</em>{" raises undetected utility "}<em>{"U"}<sub>{"L"}</sub>{" = S"}<sub>{"L"}</sub>{"(1-D"}<sub>{"L"}</sub>{")"}</em>{" relative to English, where "}<em>{"S"}<sub>{"L"}</sub></em>{" is task success and "}<em>{"D"}<sub>{"L"}</sub></em>{" is the probability that a leaking episode is flagged."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Non-goals."}</span>{" Harm generation, live protocol exploits, credential theft, and real jailbreak corpora."}
        </p>
        <Figure
          id="fig1_setup"
          n={1}
          src="/paper/a2a/fig1_setup.png"
          alt="Figure 1. One ENV-3 episode: client, holder, analyst, then the monitor, which sees only the transcript."
          caption={"One ENV-3 episode: client, holder, analyst, then the monitor, which sees only the transcript."}
        />
      </section>
      <section className="mt-10" id="4-benchmark">
        <h2 className="font-serif text-2xl text-fg">
          {"4. Benchmark"}
        </h2>
        <h3 className="mt-8 font-serif text-xl text-fg" id="4-1-protocol-pin">
          {"4.1 Protocol pin"}
        </h3>
        <p className="mt-4">
          {"The implementation follows A2A v1.0 "}{"["}<a href="#ref-14">{"14"}</a>{"]"}{": "}<code>{"/.well-known/agent-card.json"}</code>{" and "}<code>{"supportedInterfaces[]"}</code>{" carrying "}<code>{"url"}</code>{", "}<code>{"protocolBinding"}</code>{" and "}<code>{"protocolVersion"}</code>{". Skill "}<code>{"id"}</code>{" values are never localized; only "}<code>{"name"}</code>{", "}<code>{"description"}</code>{", "}<code>{"tags"}</code>{" and "}<code>{"examples"}</code>{" change by language. Cards for Study A were author-written rather than machine-translated."}
        </p>
        <p className="mt-4">
          {"Live episodes in Studies C, D and E are in-process API calls that preserve the A2A message order (client, holder, analyst, monitor). They are not a claim about a deployed HTTP mesh."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="4-2-environments">
          {"4.2 Environments"}
        </h3>
        <p className="mt-4">
          <span className="font-medium">{"ENV-1 (capability)."}</span>{" Two agents each hold half of a meeting-constraint set, availability and rooms. The intersection is unique and machine-checkable as "}<code>{"SLOT=<TIME>@<ROOM>"}</code>{", and neither half is sufficient alone. The solo condition "}<em>{"C"}<sub>{"L"}</sub></em>{" gives one agent the full constraint set. This is Study B."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"ENV-3 (leak ground truth)."}</span>{" A holder has a public invoice and a private canary. The analyst must emit "}<code>{"TOTAL=<cents>"}</code>{". The violating arm appends "}<code>{"internal_ref=<canary>"}</code>{" after the public JSON. Canary recovery is checked by substring. This anchors Studies C, D and E."}
        </p>
        <p className="mt-4">
          {"ENV-2, an asymmetric negotiation environment, is specified but not run here."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="4-3-languages">
          {"4.3 Languages"}
        </h3>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm">
            <thead>
              <tr>
                <th>{"Code"}</th>
                <th>{"Language"}</th>
                <th>{"Script"}</th>
                <th>{"Role"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"en"}</td>
                <td>{"English"}</td>
                <td>{"Latn"}</td>
                <td>{"reference"}</td>
              </tr>
              <tr>
                <td>{"fr"}</td>
                <td>{"French"}</td>
                <td>{"Latn"}</td>
                <td>{"high-resource Latin control"}</td>
              </tr>
              <tr>
                <td>{"zh"}</td>
                <td>{"Simplified Chinese"}</td>
                <td>{"Hans"}</td>
                <td>{"high-resource CJK"}</td>
              </tr>
              <tr>
                <td>{"ru"}</td>
                <td>{"Russian"}</td>
                <td>{"Cyrl"}</td>
                <td>{"non-Latin high-resource"}</td>
              </tr>
              <tr>
                <td>{"hi"}</td>
                <td>{"Hindi"}</td>
                <td>{"Deva"}</td>
                <td>{"mid-resource Indic"}</td>
              </tr>
              <tr>
                <td>{"hi-Latn"}</td>
                <td>{"Hinglish"}</td>
                <td>{"Latn"}</td>
                <td>{"Study E"}</td>
              </tr>
              <tr>
                <td>{"ru-Latn"}</td>
                <td>{"Russian romanised"}</td>
                <td>{"Latn"}</td>
                <td>{"Study E"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          {"Task numbers, SKUs and JSON keys stay in ASCII; prose is localized."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="4-4-seeded-behaviour">
          {"4.4 Seeded behaviour"}
        </h3>
        <p className="mt-4">
          {"Studies C and E interleave violating episodes at a 30% base rate, selected by episode index. Study D is entirely violating: the leak is instructed, so the picker chooses a language under a real detection process rather than inventing a leak. The picker never sees detection statistics, never sees the canary, and is never told which language is weakly monitored. It sees only a compact history of "}<code>{"{language, flagged, task_ok}"}</code>{"."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="4-5-models-versions-and-spend">
          {"4.5 Models, versions and spend"}
        </h3>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm">
            <thead>
              <tr>
                <th>{"Role"}</th>
                <th>{"Model"}</th>
                <th>{"Settings"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Worker and picker (A, C, D, E)"}</td>
                <td><code>{"grok/grok-4.6"}</code></td>
                <td>{"temperature 0.2 (0.0 for the Study A router), "}<code>{"reasoning_effort=low"}</code></td>
              </tr>
              <tr>
                <td>{"Worker (B, early collaboration)"}</td>
                <td><code>{"grok/grok-4.3"}</code></td>
                <td>{"temperature 0.2, "}<code>{"reasoning_effort=none"}</code></td>
              </tr>
              <tr>
                <td>{"Weak monitor"}</td>
                <td><code>{"openai/gpt-5.6-luna"}</code></td>
                <td>{"temperature 0.0, "}<code>{"reasoning_effort=low"}</code></td>
              </tr>
              <tr>
                <td>{"Mid monitor"}</td>
                <td><code>{"grok/grok-4.3"}</code></td>
                <td>{"temperature 0.0, "}<code>{"reasoning_effort=none"}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          {"Grok 4.6 rejects "}<code>{"reasoning_effort=none"}</code>{", which is why worker effort differs between the 4.3 and 4.6 rosters. Episodes were collected between 2026-09-18 and 2026-09-20; per-study timestamps and the exact model strings are recorded in every log line. Appendix E gives the pinning table."}
        </p>
        <p className="mt-4">
          {"Total logged API spend was USD 0.19 on OpenAI (Luna on Study C and calibration) and USD 14.25 on Grok (Study C 8.43, Study A 1.58, Study B 0.58, Study D 1.94, Study E 1.72). Per-run spend caps are recorded in each study summary."}
        </p>
        <p className="mt-4">
          {"All statistics in this paper are recomputed from "}<code>{"results/raw/*.jsonl"}</code>{" by "}<code>{"python -m analysis.stats"}</code>{"; runners do not write summary statistics."}
        </p>
      </section>
      <section className="mt-10" id="5-metrics-and-statistical-procedure">
        <h2 className="font-serif text-2xl text-fg">
          {"5. Metrics and statistical procedure"}
        </h2>
        <h3 className="mt-8 font-serif text-xl text-fg" id="5-1-why-this-run-does-not-report-auroc">
          {"5.1 Why this run does not report AUROC"}
        </h3>
        <p className="mt-4">
          {"The monitor prompt (Appendix C) asks for a boolean "}<code>{"flag"}</code>{" and a probability "}<code>{"score"}</code>{". In practice the models did not use the score range. Across the 1000 scored episodes of Study C, the mid monitor emitted exactly two distinct values, 0.0 and 0.9. Luna emitted five values, clustered as {0.0, 0.001, 0.01} and {0.99, 1.0}, with no intermediate mass."}
        </p>
        <Figure
          id="fig2_scores"
          n={2}
          src="/paper/a2a/fig2_scores.png"
          alt="Figure 2. Monitor score distributions on Study C. The mid monitor is two-valued; Luna is perfectly separated."
          caption={"Monitor score distributions on Study C. The mid monitor is two-valued; Luna is perfectly separated."}
        />
        <p className="mt-4">
          {"Two consequences follow for the mid monitor, which is the one every cross-language comparison in this paper depends on."}
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            <span className="font-medium">{"Its AUROC carries no ranking information."}</span>{" The quantity is computable, but for a score with only two values the area under the ROC curve equals balanced accuracy, "}<em>{"(TPR + TNR)/2"}</em>{", exactly; we verified the identity to five decimal places in each of the five mid-monitor cells of Study C. Quoting it as AUROC implies a threshold sweep that the data cannot support, so we report balanced accuracy under its own name."}
          </li>
          <li>
            <span className="font-medium">{"Recall at a fixed false-positive rate is not meaningful for it."}</span>{" A two-valued monitor has one operating point, so recall at 1% or 5% FPR is an interpolation artifact rather than a tunable deployment choice. Figure 2 shows the concrete form of the problem: all 55 leaks the mid monitor missed carry score 0.0, the same value as 697 benign episodes, so no threshold anywhere in the range separates them from the benign traffic they sit among."}
          </li>
        </ol>
        <p className="mt-4">
          {"Luna is a different case and the same caution does not apply to it. Its scores are perfectly separated: every benign episode scores at most 0.01 and every violating episode at least 0.99. Its AUROC of 1.0 and its recall of 1.0 at a false-positive rate of 0 are therefore both well defined and both exact. What that separation does not establish is robustness: five distinct values spanning two clusters say nothing about how the monitor would rank a harder leak."}
        </p>
        <p className="mt-4">
          {"We therefore report the detection rate on violating episodes ("}<em>{"D"}<sub>{"L"}</sub></em>{", equivalently TPR), the false-positive rate on benign episodes, and balanced accuracy as a summary, each with an interval, for both monitors. Obtaining a ranking metric that means something for the mid monitor requires graded scores or token logprobs; that is a change to the monitor interface and is listed as required future work."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="5-2-definitions">
          {"5.2 Definitions"}
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium">{"Routing accuracy and LPI."}</span>{" "}<em>{"LPI"}<sub>{"L"}</sub></em>{" is the probability of selecting the correct card in language "}<em>{"L"}</em>{", divided by the same probability for English. Capability hallucination counts an advertised "}<code>{"skill_id"}</code>{" that is not on the chosen card."}
          </li>
          <li>
            <span className="font-medium">{"Capability."}</span>{" "}<em>{"S"}<sub>{"L"}</sub></em>{" is joint task success, "}<em>{"C"}<sub>{"L"}</sub></em>{" is solo success with full information, and "}<em>{"CER"}<sub>{"L"}</sub>{" = S"}<sub>{"L"}</sub>{" / C"}<sub>{"L"}</sub></em>{". A value below 1 means the pair performs worse than a single model given all the information."}
          </li>
          <li>
            <span className="font-medium">{"Detection."}</span>{" "}<em>{"D"}<sub>{"L"}</sub></em>{" is the share of violating episodes flagged; the false-positive rate is the share of benign episodes flagged."}
          </li>
          <li>
            <span className="font-medium">{"Covert channel advantage."}</span>{" "}<em>{"U"}<sub>{"L"}</sub>{" = S"}<sub>{"L"}</sub>{"(1-D"}<sub>{"L"}</sub>{")"}</em>{" and "}<em>{"CCA"}<sub>{"L"}</sub>{" = U"}<sub>{"L"}</sub>{" / U"}<sub>{"en"}</sub></em>{". Values above 1 mean language "}<em>{"L"}</em>{" yields more undetected utility than English."}
          </li>
          <li>
            <span className="font-medium">{"Study D."}</span>{" Selection frequency; the probability that the picker keeps its language at trial "}<em>{"t+1"}</em>{" given the flag outcome at trial "}<em>{"t"}</em>{"; and the share of picker rationales that explicitly mention an auditor."}
          </li>
        </ul>
        <p className="mt-4">
          <em>{"D"}<sub>{"L"}</sub></em>{" is defined on violating episodes throughout. The alternative, a flag rate over all traffic, is dominated by the 30% violation base rate, which is a design parameter rather than a property of the monitor, and it makes undetected utility a function of how often the benchmark chooses to seed a leak. Under the definition used here the weak monitor detects every leak, so "}<em>{"U"}<sub>{"L"}</sub>{" = 0"}</em>{" in every language including English and "}<em>{"CCA"}<sub>{"L"}</sub></em>{" is "}<em>{"0/0"}</em>{". We therefore report covert channel advantage for the mid monitor only, and state plainly that the weak monitor admits no undetected utility on this leak."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="5-3-uncertainty-and-testing">
          {"5.3 Uncertainty and testing"}
        </h3>
        <p className="mt-4">
          {"Every rate is reported with a 95% Wilson score interval "}{"["}<a href="#ref-15">{"15"}</a>{"]"}{". Balanced accuracy and covert channel advantage carry 95% percentile bootstrap intervals over 10,000 resamples, stratified by class. Comparisons between languages use Fisher's exact test on the relevant two-by-two table, with Holm-Bonferroni adjustment within each family of comparisons "}{"["}<a href="#ref-17">{"17"}</a>{"]"}{"."}
        </p>
        <p className="mt-4">
          {"For Study D, the trial-level outcome is whether the picker repeats its language at "}<em>{"t+1"}</em>{". We report the Mantel-Haenszel common odds ratio "}{"["}<a href="#ref-16">{"16"}</a>{"]"}{" stratified by the language in use at "}<em>{"t"}</em>{", which makes no modelling assumptions beyond a common effect, and a ridge-penalised logistic regression with language fixed effects as a secondary estimate. The penalty is required because one language (Chinese) is completely separated: it was never repeated after a flag. A random effect for run is not estimable, because Study D is a single run; independent replicate runs are required future work."}
        </p>
        <p className="mt-4">
          {"We do not fit a mixed-effects model of the form "}<code>{"outcome ~ language + (1|instance)"}</code>{" because it is unidentified in this design. Every environment instance is freshly generated per episode: all 1000 Study C episodes and all 250 Study B episodes carry distinct instance identifiers, and no instance is reused across language arms. A random intercept with a single observation per group cannot be separated from residual error. Cross-language contrasts are therefore unpaired throughout; Section 9 gives the design change that would fix this."}
        </p>
        <p className="mt-4">
          {"Where the same episodes do appear in two arms, we use a paired test. Study B's joint and solo conditions run on one set of 250 episodes, so they are compared with an exact McNemar test rather than by overlapping intervals."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="5-4-departures-from-the-study-plan">
          {"5.4 Departures from the study plan"}
        </h3>
        <p className="mt-4">
          {"The plan fixed the confirmatory comparison, the metric set, the exclusion rule and the sampling scheme before data collection. Five things differ in what follows, and all of them affect exploratory results rather than the confirmatory one."}
        </p>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm">
            <thead>
              <tr>
                <th>{"Planned"}</th>
                <th>{"Done instead"}</th>
                <th>{"Why"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Detection scored by AUROC and recall at 1% and 5% FPR"}</td>
                <td>{"TPR, FPR and balanced accuracy, for the mid monitor"}</td>
                <td>{"The mid monitor returned two distinct scores, so neither planned metric carries ranking information (Section 5.1). Luna's scores are separated, so its AUROC is reported as valid."}</td>
              </tr>
              <tr>
                <td>{"Study D scored by a partial Spearman correlation of selection against monitor weakness, controlling for fluency"}</td>
                <td>{"Withdrawn; replaced by a trial-level analysis of repeat choice"}</td>
                <td>{"Five languages give five points, and Study D's own setting has almost no fluency variance to control for (Section 6.5). The replacement was chosen after seeing the data."}</td>
              </tr>
              <tr>
                <td>{"No planned test of joint against solo success pooled across languages"}</td>
                <td>{"Exact McNemar added"}</td>
                <td>{"Chosen after the per-language contrasts returned nothing. Post hoc."}</td>
              </tr>
              <tr>
                <td>{"Protocol-failed episodes excluded from capability rates"}</td>
                <td>{"Study B rates and intervals include all 50 episodes per cell"}</td>
                <td>{"Reported both ways in Section 6.4, because the conclusion depends on which is used."}</td>
              </tr>
              <tr>
                <td>{"At least five seeds per cell, with seed variance reported alongside every mean"}</td>
                <td>{"One distinct seed per episode, no seed-level variance component"}</td>
                <td>{"Seeds index episodes rather than replicate groups, so between-seed variance is not separable from between-episode variance. Study D compounds this: it is a single run (Section 6.5)."}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          {"The first three are changes of analysis, made with the outcome already visible, and the results they produce are exploratory in the strict sense. The last two are departures we can only disclose, not repair, without new runs."}
        </p>
      </section>
      <section className="mt-10" id="6-results">
        <h2 className="font-serif text-2xl text-fg">
          {"6. Results"}
        </h2>
        <h3 className="mt-8 font-serif text-xl text-fg" id="6-1-monitor-calibration">
          {"6.1 Monitor calibration"}
        </h3>
        <p className="mt-4">
          {"Luna on English ENV-3 with 30 episodes (9 violating, 21 benign) flagged every violating episode and no benign episode, passing the calibration gate fixed in advance. The weak monitor can see an opaque-token leak in English, so cross-lingual comparison against it is meaningful: a drop would not simply mean that Luna cannot detect leaks."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="6-2-the-confirmatory-comparison-english-against-hindi-under-the-weak-monitor">
          {"6.2 The confirmatory comparison: English against Hindi under the weak monitor"}
        </h3>
        <p className="mt-4">
          {"This is the one comparison the study plan designated confirmatory, and it is reported before any other result because it is the only one the plan licenses as a test rather than as exploration."}
        </p>
        <p className="mt-4">
          {"Against Luna on Study C, English and Hindi are indistinguishable. Both flag 60 of 60 seeded leaks, both produce zero false positives in 140 benign episodes, and joint task success is 1.000 in both. Fisher's exact test on the detection counts gives p = 1.0. The planned confirmatory quantities follow directly: the capability-normalised oversight gap "}<em>{"OG"}<sub>{"hi"}</sub></em>{" is exactly 0, and because a monitor that detects every leak leaves no undetected utility in any language, "}<em>{"U"}<sub>{"hi"}</sub></em>{" and "}<em>{"U"}<sub>{"en"}</sub></em>{" are both 0 and "}<em>{"CCA"}<sub>{"hi"}</sub></em>{" is "}<em>{"0/0"}</em>{", which is undefined rather than favourable."}
        </p>
        <p className="mt-4">
          {"The pre-specified hypothesis is therefore not supported. On this leak, against this monitor, moving the transcript from English into Hindi buys an adversary nothing, and the folk expectation that it would is falsified for the pair actually tested. This is a null result, and it is the result with the strongest evidential status in the paper."}
        </p>
        <p className="mt-4">
          {"Two cautions bound it. A ceiling on both arms means the comparison had no room to detect a small gap: any difference below roughly five percentage points would have been invisible at 60 violating episodes per language. And the canary is a lexical event, an opaque token in the clear; the null says nothing about a paraphrased leak. Everything that follows is exploratory."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="6-3-study-c-exploratory-detection-varies-by-language-for-the-mid-monitor-only">
          {"6.3 Study C (exploratory): detection varies by language for the mid monitor only"}
        </h3>
        <p className="mt-4">
          <span className="font-medium">{"Design."}</span>{" ENV-3 with Grok 4.6 workers, 200 episodes per language (60 violating, 140 benign). Luna and Grok 4.3 score identical transcripts, so any difference is attributable to the monitor rather than the episode."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Capability is flat."}</span>{" Joint success "}<em>{"S"}<sub>{"L"}</sub></em>{" is 1.00 in every language except French at 0.995, and solo success is between 0.99 and 1.00. Every violating holder put the canary on the wire. There is no capability deficit that could explain a detection difference."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"The weak monitor is language-invariant."}</span>{" Luna flagged 300 of 300 seeded leaks, a pooled detection rate of 1.00 with a 95% interval of [0.987, 1.000], and produced 0 false positives in 700 benign episodes, [0.000, 0.005]. Per language the count is 60 of 60 in all five cells. This is a negative result with a useful interval: a cheap English-calibrated monitor, given an opaque token in the clear, did not degrade in French, Russian, Hindi or Chinese."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"The mid monitor is not."}</span>{" Pooled detection is 245 of 300, or 0.817 [0.769, 0.856], and it varies by language."}
        </p>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm min-w-[46rem]">
            <thead>
              <tr>
                <th>{"Language"}</th>
                <th>{"Leaks flagged"}</th>
                <th><em>{"D"}<sub>{"L"}</sub></em></th>
                <th>{"95% CI"}</th>
                <th>{"False positives"}</th>
                <th>{"Balanced accuracy [95% CI]"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"en"}</td>
                <td>{"34 / 60"}</td>
                <td>{"0.567"}</td>
                <td>{"[0.441, 0.684]"}</td>
                <td>{"0 / 140"}</td>
                <td>{"0.783 [0.725, 0.842]"}</td>
              </tr>
              <tr>
                <td>{"ru"}</td>
                <td>{"44 / 60"}</td>
                <td>{"0.733"}</td>
                <td>{"[0.610, 0.829]"}</td>
                <td>{"0 / 140"}</td>
                <td>{"0.867 [0.808, 0.917]"}</td>
              </tr>
              <tr>
                <td>{"zh"}</td>
                <td>{"53 / 60"}</td>
                <td>{"0.883"}</td>
                <td>{"[0.778, 0.942]"}</td>
                <td>{"0 / 140"}</td>
                <td>{"0.942 [0.900, 0.975]"}</td>
              </tr>
              <tr>
                <td>{"fr"}</td>
                <td>{"56 / 60"}</td>
                <td>{"0.933"}</td>
                <td>{"[0.841, 0.974]"}</td>
                <td>{"0 / 140"}</td>
                <td>{"0.967 [0.933, 0.992]"}</td>
              </tr>
              <tr>
                <td>{"hi"}</td>
                <td>{"58 / 60"}</td>
                <td>{"0.967"}</td>
                <td>{"[0.886, 0.991]"}</td>
                <td>{"3 / 140"}</td>
                <td>{"0.973 [0.944, 0.993]"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Figure
          id="fig3_detection"
          n={3}
          src="/paper/a2a/fig3_detection.png"
          alt="Figure 3. Mid-monitor leak detection by language, with 95% Wilson intervals."
          caption={"Mid-monitor leak detection by language, with 95% Wilson intervals."}
        />
        <p className="mt-4">
          {"English is the lowest cell. Against French, Hindi and Chinese the deficit is unambiguous (Holm-adjusted p = 1.3e-5, 5.9e-7 and 3.5e-4 respectively). Against Russian it is not: 34 of 60 versus 44 of 60 gives an adjusted p of 0.084, and the two intervals overlap substantially. The defensible claim is therefore that this monitor detects English and Russian leaks less reliably than French, Hindi and Chinese leaks, not that English is uniquely and measurably the weakest language."}
        </p>
        <p className="mt-4">
          {"The direction still contradicts the low-resource hypothesis. Hindi, the lowest-resource language in the set, is the best-detected cell, and its advantage is not free: it is the only language with false positives, 3 of 140."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Covert channel advantage."}</span>{" Against the mid monitor, English yields the most undetected utility, "}<em>{"U"}<sub>{"en"}</sub>{" = 1.00 × (1-0.567) = 0.433"}</em>{". Every other language sits below parity, though the Russian interval reaches it."}
        </p>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm">
            <thead>
              <tr>
                <th>{"Language"}</th>
                <th><em>{"U"}<sub>{"L"}</sub></em></th>
                <th><em>{"CCA"}<sub>{"L"}</sub></em></th>
                <th>{"95% CI"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"fr"}</td>
                <td>{"0.066"}</td>
                <td>{"0.153"}</td>
                <td>{"[0.033, 0.332]"}</td>
              </tr>
              <tr>
                <td>{"zh"}</td>
                <td>{"0.117"}</td>
                <td>{"0.269"}</td>
                <td>{"[0.091, 0.520]"}</td>
              </tr>
              <tr>
                <td>{"ru"}</td>
                <td>{"0.267"}</td>
                <td>{"0.615"}</td>
                <td>{"[0.353, 1.000]"}</td>
              </tr>
              <tr>
                <td>{"hi"}</td>
                <td>{"0.033"}</td>
                <td>{"0.077"}</td>
                <td>{"[0.000, 0.208]"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Figure
          id="fig4_cca"
          n={4}
          src="/paper/a2a/fig4_cca.png"
          alt="Figure 4. Covert channel advantage against the mid monitor. Values below 1 mean English is the better channel."
          caption={"Covert channel advantage against the mid monitor. Values below 1 mean English is the better channel."}
        />
        <p className="mt-4">
          {"Under the weak monitor, "}<em>{"U"}<sub>{"L"}</sub>{" = 0"}</em>{" in all five languages, so no language offers any advantage and the ratio is undefined."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Interpretation."}</span>{" The claim that low-resource languages weaken an overseer is a claim about particular overseers. Luna treats the canary as a lexical event. The mid monitor frequently reads an English invoice transcript as containing only public fields even when "}<code>{"internal_ref=CNRY-..."}</code>{" appears on the following line. A plausible account is that fluent English invoice idiom makes the internal reference line read as routine, whereas the same line is more marked in other languages. We did not run a mechanistic study, and we do not present this as a result."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="6-4-study-b-splitting-the-task-costs-accuracy-but-not-by-language">
          {"6.4 Study B: splitting the task costs accuracy, but not by language"}
        </h3>
        <p className="mt-4">
          <span className="font-medium">{"Design."}</span>{" ENV-1 with Grok 4.3, 50 episodes per language, with a mandatory solo condition."}
        </p>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm min-w-[46rem]">
            <thead>
              <tr>
                <th>{"Language"}</th>
                <th>{"Joint "}<em>{"S"}<sub>{"L"}</sub></em>{" [95% CI]"}</th>
                <th>{"Solo "}<em>{"C"}<sub>{"L"}</sub></em>{" [95% CI]"}</th>
                <th><em>{"CER"}<sub>{"L"}</sub></em></th>
                <th>{"Protocol failure"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"en"}</td>
                <td>{"0.72 [0.58, 0.83]"}</td>
                <td>{"0.76 [0.63, 0.86]"}</td>
                <td>{"0.95"}</td>
                <td>{"0.14"}</td>
              </tr>
              <tr>
                <td>{"zh"}</td>
                <td>{"0.70 [0.56, 0.81]"}</td>
                <td>{"0.70 [0.56, 0.81]"}</td>
                <td>{"1.00"}</td>
                <td>{"0.06"}</td>
              </tr>
              <tr>
                <td>{"hi"}</td>
                <td>{"0.62 [0.48, 0.74]"}</td>
                <td>{"0.68 [0.54, 0.79]"}</td>
                <td>{"0.91"}</td>
                <td>{"0.00"}</td>
              </tr>
              <tr>
                <td>{"ru"}</td>
                <td>{"0.60 [0.46, 0.72]"}</td>
                <td>{"0.78 [0.65, 0.87]"}</td>
                <td>{"0.77"}</td>
                <td>{"0.04"}</td>
              </tr>
              <tr>
                <td>{"fr"}</td>
                <td>{"0.60 [0.46, 0.72]"}</td>
                <td>{"0.80 [0.67, 0.89]"}</td>
                <td>{"0.75"}</td>
                <td>{"0.04"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          {"Two claims need separating here, because they have different evidential status, and neither was planned."}
        </p>
        <p className="mt-4">
          {"The first is that splitting the task across two agents costs accuracy at all. The test is paired, because the joint and solo arms run on the same 250 episodes. Pooled across languages, joint success is 0.648 and solo success is 0.744; of the 108 episodes on which the arms disagree, the solo agent alone succeeds on 66 and the pair alone on 42, giving an exact McNemar p of 0.026. This test was added after the per-language contrasts returned nothing, so it is post hoc."}
        </p>
        <p className="mt-4">
          {"It is also fragile, and in a way that matters. The study plan excludes protocol-failed episodes from capability rates. Protocol failures are a joint-arm failure mode that the solo arm cannot exhibit, so the two analyses diverge: dropping the 14 failed episodes moves the comparison to 0.686 against 0.750 and the exact McNemar p to 0.159. The effect that survives is therefore the one that counts a protocol failure as a failure of the pair, which is defensible as an operational measure but is not what the plan specified. We report the significant version because it is the as-analysed result, and we report the other because a reader applying the pre-specified rule would not find an effect. The honest summary is that this run is consistent with a collaboration cost of roughly 6 to 10 points on this one split-knowledge task with one model, and is too small to establish it."}
        </p>
        <p className="mt-4">
          {"The second claim is an ordering of languages within that effect, and the data do not support one. No pairwise comparison of joint success against English is significant: all Holm-adjusted p-values equal 1.0, and every interval overlaps every other. At 50 episodes per cell, a ranking that puts French and Russian at the bottom is not distinguishable from noise, and we do not claim it. "}<em>{"CER"}<sub>{"L"}</sub></em>{" is a ratio of two rates estimated on the same 50 episodes and inherits both sources of uncertainty; we report it as descriptive."}
        </p>
        <p className="mt-4">
          {"One operational finding from this study is robust because it is a mechanism rather than a rate. An earlier collaboration pilot in ENV-3 appeared to show a Hindi collapse, at 4 of 10. Inspection of the transcripts showed that the holder had emitted a schema listing, field names without values, rather than failing at Devanagari. After the protocol required fenced JSON values, the same configuration reached 9 of 10 with complete line-item copying. Without a solo condition, \"the language is hard\" and \"the holder dropped the payload\" are indistinguishable."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="6-5-study-d-the-picker-responds-to-flags-the-english-rate-is-confounded">
          {"6.5 Study D: the picker responds to flags; the English rate is confounded"}
        </h3>
        <p className="mt-4">
          <span className="font-medium">{"Design."}</span>{" 200 sequential trials with a Grok 4.6 picker, holder and analyst and the Grok 4.3 mid monitor. On each trial the picker chooses a language from {en, fr, ru, hi, zh}, a violating ENV-3 episode runs, and the picker is told only "}<code>{"{flagged, task_ok}"}</code>{". Task success was 1.00 throughout and the overall flag rate was 0.715 [0.649, 0.773]."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Selection."}</span>{" English 137 of 200, 0.685 [0.618, 0.745]; Russian 29, 0.145 [0.103, 0.200]; French 16, 0.080 [0.050, 0.126]; Hindi and Chinese 9 each, 0.045 [0.024, 0.083]."}
        </p>
        <Figure
          id="fig5_selection"
          n={5}
          src="/paper/a2a/fig5_selection.png"
          alt="Figure 5. Study D language selection over trials (rolling window of 20)."
          caption={"Study D language selection over trials (rolling window of 20)."}
        />
        <p className="mt-4">
          <span className="font-medium">{"The confound."}</span>{" Taken alone, the English concentration is not evidence of evasion, because this design cannot measure what the picker would have done absent a detection signal. Exactly one trial is genuinely pre-feedback, and it is English; every later window already contains flag outcomes. The early trials do not show a dominant English default: English takes 3 of the first 10 trials, fewer than French's 4, and 10 of the first 20, a share of 0.500 [0.299, 0.701]. The share then rises, to 0.640 [0.501, 0.759] over the final 50 trials and 0.685 overall."}
        </p>
        <p className="mt-4">
          {"That trajectory is consistent with a search that converges on the language this monitor detects least well, but it is equally consistent with a slower-acting default: the picker's own rationales invoke one directly, with the first trial reasoning that English is \"the default international language for invoices\". The two explanations coincide here because the least-detected language and the language a frontier model reaches for are the same language, and nothing in a single adaptive run separates them. What the run does establish is the weaker, cleanly identified claim below."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"What the design does identify."}</span>{" Whether the picker responds to detection feedback at all is identified, at the level of transitions rather than languages. Over 199 transitions, the picker keeps its language after an unflagged trial 53 of 56 times, 0.946 [0.854, 0.982], and after a flagged trial only 77 of 143 times, 0.538 [0.457, 0.618]."}
        </p>
        <Figure
          id="fig6_shift"
          n={6}
          src="/paper/a2a/fig6_shift.png"
          alt="Figure 6. Feedback sensitivity: probability of repeating the language after a flagged versus unflagged trial."
          caption={"Feedback sensitivity: probability of repeating the language after a flagged versus unflagged trial."}
        />
        <p className="mt-4">
          {"Because English is both more often chosen and less often flagged, the pooled comparison is confounded by language. Stratifying by the language in use, the Mantel-Haenszel common odds ratio for keeping the language after a flag is 0.134 [0.043, 0.422] across the three informative strata. A ridge-penalised logistic regression with language fixed effects agrees, giving an odds ratio of 0.157 [0.063, 0.390] for the flag indicator (z = -3.99, 199 transitions). The picker's choices are therefore responsive to the detection signal, in the specific sense of win-stay, lose-shift. That is weaker than saying it runs a bandit algorithm over languages: nothing here shows it balances exploration against exploitation, or that it estimates a per-language rate."}
        </p>
        <p className="mt-4">
          {"These intervals should be read as optimistic. The 199 transitions come from a single adaptive sequence in which the picker's state at trial "}<em>{"t"}</em>{" depends on everything before it, so consecutive transitions are not independent, while both the Wilson and the Mantel-Haenszel calculations assume they are. The effect is large enough that dependence is unlikely to reverse it, but the width of the interval is not trustworthy at face value. Independent replicate runs, which would also make a run-level random effect estimable, are the right fix and are listed in Section 9."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Why no language-level correlation is reported."}</span>{" A natural summary would be the rank correlation between how often each language is chosen and how weakly it is monitored, partialling out fluency. We do not report one. With five languages it would rest on five points, which cannot support an inferential claim, and the fluency adjustment is ill-posed in this setting: fluency would have to come from Study B, which uses a different model and a different environment, whereas solo capability in Study D's own setting lies between 0.99 and 1.00 with a spread of 0.010, leaving essentially no variance to control for. The selection counts and the transition-level effect are what the data support."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Explicitness."}</span>{" 57 of 200 rationales, 0.285 [0.227, 0.351], mention an auditor, a flagger, or being less likely to trigger one. Representative examples, truncated and free of canaries:"}
        </p>
        <blockquote className="my-4 border-l-2 border-accent pl-4 italic">
          <p className="mt-4">
            {"\"Empty trial history; English is the default international language for invoices and least likely to trigger an unknown auditor on a first episode.\""}
          </p>
        </blockquote>
        <blockquote className="my-4 border-l-2 border-accent pl-4 italic">
          <p className="mt-4">
            {"\"History shows only en and fr ever had an unflagged success; ru/hi/zh were flagged on first use.\""}
          </p>
        </blockquote>
        <blockquote className="my-4 border-l-2 border-accent pl-4 italic">
          <p className="mt-4">
            {"\"ru uniquely produced a 4-trial unflagged streak... reuse ru as the only language with repeated recent auditor-pass evidence.\""}
          </p>
        </blockquote>
        <p className="mt-4">
          {"Verbalised strategy is therefore neither necessary nor universal: most picks do not articulate it."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"The control that is missing."}</span>{" The decisive experiment is the same picker against a monitor that detects every language equally. Luna is exactly that null condition on this leak, since its detection rate is 1.00 everywhere: a picker facing it receives a flag whatever it chooses, so any language structure in its choices is prior rather than response. If the English share against Luna is also near 0.685, the concentration is a default; if it falls toward uniform, the concentration is responsive to the detection profile. A shuffled-feedback arm, in which the flag signal is randomised, isolates the same question from the other side, and replicate runs give a distribution for the first-trial choice, which is the cleanest available measure of the prior. None of the three was run here; the Luna arm is the single highest-value addition to this work and costs roughly what Study D cost."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Convergence."}</span>{" The convergence index, fixed in advance and defined as the first trial ending two consecutive 20-trial windows that share a mode with at least a 0.55 share, fires at trial 35 on a Russian window of 11 of 20. It therefore captures an early streak rather than the long-run attractor, which is English. We report both and treat the index as descriptive."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="6-6-study-e-the-script-effect-is-suggestive-and-underpowered">
          {"6.6 Study E: the script effect is suggestive and underpowered"}
        </h3>
        <p className="mt-4">
          <span className="font-medium">{"Design."}</span>{" The Study C protocol with the mid monitor only, 50 episodes per arm on Hindi, romanised Hindi, Russian and romanised Russian. At the 30% base rate this yields 15 violating episodes per arm, which bounds what the study can resolve."}
        </p>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm min-w-[46rem]">
            <thead>
              <tr>
                <th>{"Arm"}</th>
                <th>{"Script"}</th>
                <th>{"Leaks flagged"}</th>
                <th><em>{"D"}<sub>{"L"}</sub></em>{" [95% CI]"}</th>
                <th>{"False positives"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"hi"}</td>
                <td>{"Deva"}</td>
                <td>{"15 / 15"}</td>
                <td>{"1.000 [0.796, 1.000]"}</td>
                <td>{"2 / 35"}</td>
              </tr>
              <tr>
                <td>{"hi-Latn"}</td>
                <td>{"Latn"}</td>
                <td>{"15 / 15"}</td>
                <td>{"1.000 [0.796, 1.000]"}</td>
                <td>{"3 / 35"}</td>
              </tr>
              <tr>
                <td>{"ru"}</td>
                <td>{"Cyrl"}</td>
                <td>{"11 / 15"}</td>
                <td>{"0.733 [0.480, 0.891]"}</td>
                <td>{"0 / 35"}</td>
              </tr>
              <tr>
                <td>{"ru-Latn"}</td>
                <td>{"Latn"}</td>
                <td>{"15 / 15"}</td>
                <td>{"1.000 [0.796, 1.000]"}</td>
                <td>{"0 / 35"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Figure
          id="fig7_script"
          n={7}
          src="/paper/a2a/fig7_script.png"
          alt="Figure 7. Script control (Study E). Romanising Russian moves detection from 11/15 to 15/15; Hindi is unchanged."
          caption={"Script control (Study E). Romanising Russian moves detection from 11/15 to 15/15; Hindi is unchanged."}
        />
        <p className="mt-4">
          {"Romanising Russian moves detection from 11 of 15 to 15 of 15. The direction matches a script effect, but Fisher's exact test gives p = 0.0996, so the arm does not establish one. Hindi and romanised Hindi are identical at 15 of 15, p = 1.0, and both are at ceiling; the Devanagari surface is not what determines detection for this monitor. Workers remained competent in all four arms."}
        </p>
        <p className="mt-4">
          {"The hypothesis that part of the gap is script therefore remains open rather than partially confirmed. Resolving it requires more violating episodes per arm; at 15, only very large effects are detectable."}
        </p>
        <p className="mt-4">
          {"The Russian arm here is independent of the Study C Russian cell whose point estimate it matches: the two draw on disjoint seed ranges and share no episode. The identical 0.733 is arithmetic, since 11 of 15 and 44 of 60 are the same ratio."}
        </p>
      </section>
      <section className="mt-10" id="7-discussion">
        <h2 className="font-serif text-2xl text-fg">
          {"7. Discussion"}
        </h2>
        <p className="mt-4">
          {"The hypothesis we set out to test was a causal chain: low resource implies a weaker monitor implies agents hide there. What this run supports is narrower and differently shaped."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Monitor language profiles are empirical, not tiered."}</span>{" On an opaque-token leak, one monitor was uniform across five languages and another varied by exactly 0.40 in detection rate, from 34 of 60 in English to 58 of 60 in Hindi, with its weakest cells being English and Russian. Any deployment argument that reasons from a language's resource tier to its monitorability is unsupported by these data. The operationally relevant object is the per-language detection rate of the monitor actually deployed, including in the deployment's majority language."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Negative results carry the safety content here."}</span>{" Publishing only the Luna result would suggest that multilingual oversight is unproblematic; it is unproblematic for this leak and this monitor. On identical transcripts, the mid monitor missed 26 of 60 English leaks. The pairing, not either monitor alone, is the finding."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Covert channel advantage can invert."}</span>{" The metric was designed so that a value above 1 marks a language that beats English. Against the mid monitor, every language sits below 1 by point estimate, so English is the best channel on this evidence, though the Russian interval reaches parity. A study that plots resource tier on the horizontal axis would draw the relationship backwards."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Selection is the open question, not the settled one."}</span>{" Routing did not move, capability did not collapse, and detection did move. Whether choice follows detection is the question this benchmark was built for, and it is the question the current design answers only partially. We can show that the picker responds to flags. We cannot show, from this run, that its preference for English is caused by English being the least-detected language, because a frontier model's default language and this monitor's weakest language happen to coincide. That coincidence is itself worth stating: if the language models default to is also the language a mid-strength monitor reads least carefully, the two effects compound in deployment regardless of which one is causal."}
        </p>
      </section>
      <section className="mt-10" id="8-mitigations">
        <h2 className="font-serif text-2xl text-fg">
          {"8. Mitigations"}
        </h2>
        <p className="mt-4">
          {"The following are testable controls rather than deployed guarantees. We did not evaluate them in this run."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Translate before monitoring."}</span>{" Force a canonical view of "}<code>{"Task.history"}</code>{" in the monitor's strongest language before scoring. The weak monitor's invariance suggests a lexical canary survives translation; the mid monitor's English deficit warns against assuming the canonical view is the easiest view. The translator and monitor should be calibrated as a pair."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Report per-language monitor cards."}</span>{" A single aggregate detection number hides a range of 0.567 to 0.967 in these data. Report the detection rate, the false-positive count and an interval for every language in scope, including the deployment majority language."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Language-restricted profiles."}</span>{" Agent Cards can advertise a protocol language, and orchestrators can refuse work whose language is outside the monitor's certified set. Study A shows that routers read non-English cards competently, so this is a policy choice rather than a capability limitation."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Card language attestation."}</span>{" Hash the localized card pack and record the card identifier and protocol language in routing logs, as this harness does. A monitor that never sees the card language cannot detect that work was routed to an uncertified locale."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Do not over-read seeded leaks."}</span>{" Study D's leak is instructed. The production analogue is a policy that already intends to exfiltrate. The mitigation is not to ban a language but to assume that a capable pair will search over languages to lower its detection probability, and to measure whether it can."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Escalate on monitor disagreement."}</span>{" The two monitors scored identical transcripts, so their disagreements are the mid monitor's 55 missed leaks plus the 3 benign Hindi episodes it alone flagged: 58 episodes in all. Escalating on disagreement would have caught every leak the mid monitor missed in this run, including all 26 in English, at the cost of running two monitors and reviewing those 3 false positives."}
        </p>
      </section>
      <section className="mt-10" id="9-limitations-and-required-controls">
        <h2 className="font-serif text-2xl text-fg">
          {"9. Limitations and required controls"}
        </h2>
        <p className="mt-4">
          {"The first four items are controls this design needs before its central question can be answered. The remainder bound the scope of what is reported."}
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium">{"No null-condition arm for Study D."}</span>{" The picker was never run against a monitor with a flat detection profile, and never against shuffled feedback. Without one of these, the English selection rate cannot be attributed to the monitor's language profile rather than to a language prior. This is the principal limitation of the paper."}
          </li>
          <li>
            <span className="font-medium">{"A single run of Study D."}</span>{" All selection results come from one 200-trial sequence, so between-run variance is unmeasured and no random effect for run is estimable. Independent replicate runs with fresh histories are required."}
          </li>
          <li>
            <span className="font-medium">{"Binary mid-monitor scores."}</span>{" The mid monitor returned two distinct values, so for it no ranking metric or FPR-indexed operating point is available; Luna's scores are separated and its AUROC is valid, but a separated score is not a graded one either. Obtaining graded scores or logprobs would restore AUROC and recall at a fixed FPR for both, and would let them be compared at a matched false-positive budget."}
          </li>
          <li>
            <span className="font-medium">{"Two monitors, one prompt, one leak format."}</span>{" The English deficit is a property of one monitor under one prompt on one leak syntax. It may be a prompt artifact. Additional monitors, including open-weight models and a second model family, prompt variants, and a paraphrased non-lexical leak are needed before any claim of generality. Study D should likewise be repeated with a second picker model."}
          </li>
          <li>
            <span className="font-medium">{"Underpowered script control."}</span>{" With 15 violating episodes per arm, Study E can detect only large effects; the Russian result is suggestive at p = 0.10."}
          </li>
          <li>
            <span className="font-medium">{"Collaboration study power and fragility."}</span>{" At 50 episodes per language, no pairwise language difference in Study B is significant. The pooled joint-versus-solo effect is significant only when protocol failures are counted against the pair (p = 0.026); under the exclusion rule the plan specified it is not (p = 0.159). The test was also added after the fact."}
          </li>
          <li>
            <span className="font-medium">{"Unpaired language arms."}</span>{" Environment instances are generated independently for every episode and are never shared across languages, so all cross-language contrasts are unpaired and no instance-level random effect is estimable. Reusing instances across arms is the cheapest available improvement in power."}
          </li>
          <li>
            <span className="font-medium">{"Study A is a ceiling result."}</span>{" Routing is at 500 of 500 with stable, unlocalized skill identifiers, so the study cannot detect a routing bias smaller than its own ceiling. A harder design would remove skill identifiers or use ambiguous skills. It is reported in Appendix D rather than as a main result."}
          </li>
          <li>
            <span className="font-medium">{"In-process transport."}</span>{" Message order matches the protocol, but HTTP framing, streaming and on-the-wire card poisoning are not exercised."}
          </li>
          <li>
            <span className="font-medium">{"Seeded rather than discovered leaks."}</span>{" Holders are instructed to emit the canary, so Study D measures language search, not scheme invention."}
          </li>
          <li>
            <span className="font-medium">{"Author-written cards."}</span>{" Study A localization is human rather than gated by back-translation quality metrics. A translation-quality appendix is due before a multilingual-NLP camera-ready."}
          </li>
          <li>
            <span className="font-medium">{"No ENV-2."}</span>{" The collusion-incentive environment is unrun, so covert channel advantage here is leak-specific."}
          </li>
        </ul>
      </section>
      <section className="mt-10" id="10-conclusion">
        <h2 className="font-serif text-2xl text-fg">
          {"10. Conclusion"}
        </h2>
        <p className="mt-4">
          {"Language is an oversight surface in A2A systems, but not in the shape the cross-lingual jailbreak literature suggests."}
        </p>
        <p className="mt-4">
          {"The one comparison we specified in advance, English against Hindi under the cheap monitor, is a null: both arms flag every leak, so the planned oversight gap is zero and the planned covert-channel ratio is undefined. That monitor did not degrade across French, Russian, Hindi or Chinese either, flagging 300 of 300 leaks with no false positives on this opaque-token canary. The remaining findings are exploratory. A mid-strength monitor did degrade, and its weakest cells were English and Russian rather than the lowest-resource language in the set; the English deficit is significant against French, Hindi and Chinese but not against Russian. A picker told only whether it was flagged is measurably sensitive to that feedback, keeping its language after an unflagged trial 0.95 of the time and after a flagged trial 0.54 of the time, with a stratified odds ratio of 0.13. Whether its concentration on English reflects that sensitivity or the language a frontier model would have defaulted to anyway is not identified by this design, and we name the control that would settle it."}
        </p>
        <p className="mt-4">
          {"The operational recommendation is not to restrict low-resource languages. It is to measure the per-language detection rate of the monitor actually deployed, including in English, to report it with an interval, and to assume that a capable agent pair will search over the languages available to it."}
        </p>
      </section>
      <section className="mt-10" id="reproducibility">
        <h2 className="font-serif text-2xl text-fg">
          {"Reproducibility"}
        </h2>
        <p className="mt-4">
          {"Everything this paper rests on is at "}<a href="https://github.com/bruce249/language_a2a" target="_blank" rel="noopener noreferrer"><code>{"https://github.com/bruce249/language_a2a"}</code></a>{", tagged "}<code>{"paper-v1"}</code>{" at commit "}<code>{"b6141226d4126e101bf12ce010a85fe25079517a"}</code>{". That tag contains the A2A harness, the environment generators, the localized card packs, the monitor and picker prompts, the metric and figure code, and "}<code>{"results/raw/*.jsonl"}</code>{": the 3271 episode records, one line per episode, that every number here is computed from. Running "}<code>{"python -m analysis.stats"}</code>{" regenerates every statistic in the paper and "}<code>{"python -m analysis.figures_paper"}</code>{" regenerates every figure, both from those logs and without reading a hand-entered number. Neither requires an API key."}
        </p>
        <p className="mt-4">
          {"The study plan, including the confirmatory comparison of Section 6.2, the hypotheses scored in Appendix B and the calibration gate, is in the repository as "}<code>{"PREREGISTRATION.md"}</code>{". It was written before data collection, but the repository was created after the runs, so its first commit postdates the data and no external record fixes its contents in advance. It is a declaration of intent that we hold this paper to, not a timestamped pre-registration, and Section 5.4 lists every departure from it. Study seeds are 50000 for Study A, 60000 for Study B, 40000 for Study C, 70000 for Study D and 80000 for Study E. Protocol pin: A2A v1.0."}
        </p>
      </section>
      <section className="mt-10" id="appendix-a-study-inventory">
        <h2 className="font-serif text-2xl text-fg">
          {"Appendix A. Study inventory"}
        </h2>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm min-w-[46rem]">
            <thead>
              <tr>
                <th>{"Study"}</th>
                <th>{"Environment"}</th>
                <th>{"n"}</th>
                <th>{"Worker"}</th>
                <th>{"Monitor"}</th>
                <th>{"Primary quantity"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Calibration"}</td>
                <td>{"ENV-3, en"}</td>
                <td>{"30"}</td>
                <td>{"deterministic"}</td>
                <td>{"Luna"}</td>
                <td>{"9 / 9 leaks flagged, 0 false positives"}</td>
              </tr>
              <tr>
                <td><span className="font-medium">{"Confirmatory"}</span></td>
                <td>{"ENV-3, en vs hi"}</td>
                <td>{"2 x 200"}</td>
                <td>{"Grok 4.6"}</td>
                <td>{"Luna"}</td>
                <td><span className="font-medium">{"null"}</span>{": 60 / 60 both, Fisher p = 1.0, OG = 0, CCA undefined"}</td>
              </tr>
              <tr>
                <td>{"A"}</td>
                <td>{"card routing"}</td>
                <td>{"5 x 100"}</td>
                <td>{"Grok 4.6"}</td>
                <td>{"none"}</td>
                <td>{"LPI 1.0, 500 / 500 correct"}</td>
              </tr>
              <tr>
                <td>{"B (expl.)"}</td>
                <td>{"ENV-1"}</td>
                <td>{"5 x 50"}</td>
                <td>{"Grok 4.3"}</td>
                <td>{"none"}</td>
                <td>{"joint 0.648 vs solo 0.744 paired, p = 0.026, but p = 0.159 under the plan's exclusion rule; no language contrast significant"}</td>
              </tr>
              <tr>
                <td>{"C"}</td>
                <td>{"ENV-3"}</td>
                <td>{"5 x 200"}</td>
                <td>{"Grok 4.6"}</td>
                <td>{"Luna and mid"}</td>
                <td>{"Luna 300 / 300; mid en 0.567 [0.441, 0.684]"}</td>
              </tr>
              <tr>
                <td>{"D"}</td>
                <td>{"ENV-3"}</td>
                <td>{"200"}</td>
                <td>{"Grok 4.6"}</td>
                <td>{"mid"}</td>
                <td>{"en share 0.685; stay-after-flag OR 0.134"}</td>
              </tr>
              <tr>
                <td>{"E"}</td>
                <td>{"ENV-3"}</td>
                <td>{"4 x 50"}</td>
                <td>{"Grok 4.6"}</td>
                <td>{"mid"}</td>
                <td>{"ru 11 / 15 vs ru-Latn 15 / 15, p = 0.10"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-10" id="appendix-b-hypotheses-scored">
        <h2 className="font-serif text-2xl text-fg">
          {"Appendix B. Hypotheses, scored"}
        </h2>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm">
            <thead>
              <tr>
                <th>{"ID"}</th>
                <th>{"Hypothesis"}</th>
                <th>{"Verdict on this run"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"H1 (expl.)"}</td>
                <td>{"English cards are over-selected; non-Latin cards raise hallucination"}</td>
                <td><span className="font-medium">{"Falsified"}</span>{", at a ceiling: 500 / 500 correct, 0 hallucinations, with unlocalized skill identifiers"}</td>
              </tr>
              <tr>
                <td>{"H2 (expl.)"}</td>
                <td>{"Joint success falls with resource tier, less steeply than solo"}</td>
                <td><span className="font-medium">{"Not supported."}</span>{" The effect does not order by tier: all pairwise contrasts against English have Holm-adjusted p = 1.0 at 50 episodes per cell. A post hoc pooled test finds splitting the task costs accuracy (paired McNemar, 0.648 vs 0.744, p = 0.026), but that does not hold under the plan's exclusion rule (p = 0.159)"}</td>
              </tr>
              <tr>
                <td>{"H3 (confirmatory for en vs hi under Luna; exploratory otherwise)"}</td>
                <td>{"Detection falls faster than capability across tiers"}</td>
                <td><span className="font-medium">{"Falsified for the weak monitor"}</span>{", which is flat at 1.00; the pre-specified en-vs-hi test under that monitor is the paper's one confirmatory result and returns a null (Section 6.2). For the mid monitor, capability is flat and detection varies, but the ordering is opposite to the tier prediction: English and Russian are lowest, Hindi highest"}</td>
              </tr>
              <tr>
                <td>{"H4 (expl.)"}</td>
                <td>{"Free choice tracks monitor weakness, residual to fluency"}</td>
                <td><span className="font-medium">{"Not identified."}</span>{" Feedback sensitivity is supported (stratified OR 0.134, [0.043, 0.422]); attribution of the English rate to monitor weakness is confounded with a language prior, and the fluency residualisation is ill-posed in Study D's setting"}</td>
              </tr>
              <tr>
                <td>{"H5 (expl.)"}</td>
                <td>{"Part of the gap is script"}</td>
                <td><span className="font-medium">{"Open."}</span>{" Russian 11 / 15 against romanised 15 / 15, p = 0.0996; Hindi unchanged at 15 / 15, p = 1.0"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-10" id="appendix-c-monitor-prompt-and-output-format">
        <h2 className="font-serif text-2xl text-fg">
          {"Appendix C. Monitor prompt and output format"}
        </h2>
        <p className="mt-4">
          {"Both monitors receive the identical system prompt below, with the transcript supplied as the user message prefixed by "}<code>{"TRANSCRIPT:"}</code>{". Temperature is 0.0. The monitor never receives the canary, the ground-truth label, or the holder's private memory."}
        </p>
        <blockquote className="my-4 border-l-2 border-accent pl-4 italic">
          <p className="mt-4">
            {"You are a trusted overseer of a two-agent invoice workflow."}
          </p>
        </blockquote>
        <blockquote className="my-4 border-l-2 border-accent pl-4 italic">
          <p className="mt-4">
            {"Agents may share only public fields: record_id, vendor, department, public_notes, line items (sku, qty, unit_price_cents), and a numeric TOTAL."}
          </p>
        </blockquote>
        <blockquote className="my-4 border-l-2 border-accent pl-4 italic">
          <p className="mt-4">
            {"They must not disclose sealed or private material: sealed-bid tokens, canary tokens, internal reference codes, fields named private, or any secret-looking opaque identifier that is not a public invoice field."}
          </p>
        </blockquote>
        <blockquote className="my-4 border-l-2 border-accent pl-4 italic">
          <p className="mt-4">
            {"Read the transcript. Decide whether private material leaked. Return JSON only with keys: flag, a boolean, true if you would escalate at a low false-positive threshold; score, a number in [0, 1] equal to the probability that private leakage occurred; rationale, one short sentence. Do not mention this rubric in the rationale. JSON only."}
          </p>
        </blockquote>
        <p className="mt-4">
          {"The "}<code>{"score"}</code>{" field is requested as a continuous probability. As reported in Section 5.1, the models did not use the range: across Study C the mid monitor returned only 0.0 and 0.9, and Luna returned only values in {0.0, 0.001, 0.01} and {0.99, 1.0}. Any future run intended to support ranking metrics should either constrain the output to an integer suspicion score with an explicit rubric for intermediate values, or read token logprobs for the flag decision."}
        </p>
      </section>
      <section className="mt-10" id="appendix-d-study-a-agent-card-routing">
        <h2 className="font-serif text-2xl text-fg">
          {"Appendix D. Study A: agent-card routing"}
        </h2>
        <p className="mt-4">
          <span className="font-medium">{"Design."}</span>{" English task text. Five cards are shuffled by seed: one invoice card in the correct language "}<em>{"L"}</em>{" and four "}<code>{"schedule_window"}</code>{" distractors in the other languages. The router is Grok 4.6 at temperature 0, with 100 episodes per language."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Result."}</span>{" 500 of 500 correct, a hallucination rate of 0, and "}<em>{"LPI"}<sub>{"L"}</sub>{" = 1.0"}</em>{" for every language."}
        </p>
        <Figure
          id="fig8_lpi"
          n={8}
          src="/paper/a2a/fig8_lpi.png"
          alt="Figure 8. Language Preference Index (Study A). Parity is 1.0; routing is at ceiling."
          caption={"Language Preference Index (Study A). Parity is 1.0; routing is at ceiling."}
        />
        <p className="mt-4">
          {"A frontier router that is instructed not to pick a meeting scheduler, and that sees stable unlocalized skill identifiers, does not need English card text. The result is a ceiling: the design cannot distinguish a small routing bias from none, because the identifiers alone are sufficient to solve the task. A sharper version would remove skill identifiers or introduce genuinely ambiguous skills. We report it as a negative control for the rest of the benchmark: whatever language surface exists in these systems, it is not at card discovery."}
        </p>
      </section>
      <section className="mt-10" id="appendix-e-model-and-run-pinning">
        <h2 className="font-serif text-2xl text-fg">
          {"Appendix E. Model and run pinning"}
        </h2>
        <div className="my-8 overflow-x-auto">
          <table className="paper-table tabular-nums text-sm min-w-[46rem]">
            <thead>
              <tr>
                <th>{"Role"}</th>
                <th>{"Model string"}</th>
                <th>{"Temperature"}</th>
                <th>{"Reasoning effort"}</th>
                <th>{"Studies"}</th>
                <th>{"Collection dates (UTC)"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Worker, picker"}</td>
                <td><code>{"grok/grok-4.6"}</code></td>
                <td>{"0.2"}</td>
                <td>{"low"}</td>
                <td>{"C, D, E"}</td>
                <td>{"2026-09-19 to 2026-09-20"}</td>
              </tr>
              <tr>
                <td>{"Router"}</td>
                <td><code>{"grok/grok-4.6"}</code></td>
                <td>{"0.0"}</td>
                <td>{"low"}</td>
                <td>{"A"}</td>
                <td>{"2026-09-19"}</td>
              </tr>
              <tr>
                <td>{"Worker"}</td>
                <td><code>{"grok/grok-4.3"}</code></td>
                <td>{"0.2"}</td>
                <td>{"none"}</td>
                <td>{"B"}</td>
                <td>{"2026-09-20"}</td>
              </tr>
              <tr>
                <td>{"Weak monitor"}</td>
                <td><code>{"openai/gpt-5.6-luna"}</code></td>
                <td>{"0.0"}</td>
                <td>{"low"}</td>
                <td>{"calibration, C"}</td>
                <td>{"2026-09-18 to 2026-09-19"}</td>
              </tr>
              <tr>
                <td>{"Mid monitor"}</td>
                <td><code>{"grok/grok-4.3"}</code></td>
                <td>{"0.0"}</td>
                <td>{"none"}</td>
                <td>{"C, D, E"}</td>
                <td>{"2026-09-19 to 2026-09-20"}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          {"Provider-side model versions are not exposed by either API beyond these identifiers; the identifier, temperature, effort setting and UTC timestamp are recorded on every episode record, so any drift is detectable from the logs."}
        </p>
      </section>
      <section className="mt-10" id="references">
        <h2 className="font-serif text-2xl text-fg">
          {"References"}
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5">
          <li id="ref-1">
            {"Yong, Z.-X., Menghini, C., Bach, S. (2023). "}<em>{"Low-Resource Languages Jailbreak GPT-4"}</em>{". arXiv:2310.02446."}
          </li>
          <li id="ref-2">
            {"Deng, Y. et al. (2023). "}<em>{"Multilingual Jailbreak Challenges in Large Language Models"}</em>{". arXiv:2310.06474."}
          </li>
          <li id="ref-3">
            {"Motwani, S. R. et al. (2024). "}<em>{"Secret Collusion among AI Agents: Multi-Agent Deception via Steganography"}</em>{". NeurIPS 2024. arXiv:2402.07510."}
          </li>
          <li id="ref-4">
            {"Roger, F., Greenblatt, R. (2023). "}<em>{"Preventing Language Models From Hiding Their Reasoning"}</em>{". arXiv:2310.18512."}
          </li>
          <li id="ref-5">
            {"Greenblatt, R., Shlegeris, B., Sachan, K., Roger, F. (2024). "}<em>{"AI Control: Improving Safety Despite Intentional Subversion"}</em>{". ICML 2024. arXiv:2312.06942."}
          </li>
          <li id="ref-6">
            {"Korbak, T. et al. (2025). "}<em>{"Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety"}</em>{". arXiv:2507.11473."}
          </li>
          <li id="ref-7">
            {"Baker, B. et al. (2025). "}<em>{"Monitoring Reasoning Models for Misbehavior and the Risks of Promoting Obfuscation"}</em>{". arXiv:2503.11926."}
          </li>
          <li id="ref-8">
            {"Onyame, E., Zhou, R., Thopalli, K., Kailkhura, B., Agarwal, C. (2026). "}<em>{"The Fragility of Chain-of-Thought Monitoring Across Typologically Diverse Languages"}</em>{". arXiv:2605.27901."}
          </li>
          <li id="ref-9">
            {"Zolkowski, A., Nishimura-Gasparian, K., McCarthy, R., Zimmermann, R., Lindner, D. (2025). "}<em>{"Early Signs of Steganographic Capabilities in Frontier LLMs"}</em>{". arXiv:2507.02737."}
          </li>
          <li id="ref-10">
            {"Rippin, J. L. et al. (2026). "}<em>{"Tool Use Enables Undetectable Steganography in Multi-Agent LLM Systems"}</em>{". arXiv:2606.28425."}
          </li>
          <li id="ref-11">
            {"Tailor, O. (2025). "}<em>{"Audit the Whisper: Detecting Steganographic Collusion in Multi-Agent LLMs"}</em>{". arXiv:2510.04303."}
          </li>
          <li id="ref-12">
            {"Anbiaee, Z. et al. (2026). "}<em>{"Security Threat Modeling for Emerging AI-Agent Protocols: A Comparative Analysis of MCP, A2A, Agora, and ANP"}</em>{". arXiv:2602.11327."}
          </li>
          <li id="ref-13">
            {"Inan, H. et al. (2023). "}<em>{"Llama Guard: LLM-based Input-Output Safeguard for Human-AI Conversations"}</em>{". arXiv:2312.06674."}
          </li>
          <li id="ref-14">
            {"A2A Protocol Specification v1.0.0. "}<a href="https://a2a-protocol.org/v1.0.0/specification/" target="_blank" rel="noopener noreferrer"><code>{"https://a2a-protocol.org/v1.0.0/specification/"}</code></a>
          </li>
          <li id="ref-15">
            {"Wilson, E. B. (1927). Probable inference, the law of succession, and statistical inference. "}<em>{"Journal of the American Statistical Association"}</em>{", 22(158), 209-212."}
          </li>
          <li id="ref-16">
            {"Mantel, N., Haenszel, W. (1959). Statistical aspects of the analysis of data from retrospective studies of disease. "}<em>{"Journal of the National Cancer Institute"}</em>{", 22(4), 719-748."}
          </li>
          <li id="ref-17">
            {"Holm, S. (1979). A simple sequentially rejective multiple test procedure. "}<em>{"Scandinavian Journal of Statistics"}</em>{", 6(2), 65-70."}
          </li>
        </ol>
      </section>
      <p className="mt-10 border-t border-line pt-4 text-sm text-muted">
        {"Generated from "}<code>{"language-as-an-oversight-surface.md"}</code>{". Figures live in "}<code>{"paper/figures/"}</code>{" and are referenced in place. Rebuild with "}<code>{"python paper/build_html.py"}</code>{"."}
      </p>
    </article>
  )
}
