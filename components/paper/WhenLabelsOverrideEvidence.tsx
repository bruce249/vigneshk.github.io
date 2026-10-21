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

function PaperTable({
  id,
  n,
  caption,
  children,
}: {
  id: string
  n: number
  caption: ReactNode
  children: ReactNode
}) {
  return (
    <figure id={id} className="my-8">
      <figcaption className="mb-2 text-sm text-muted">
        <span className="font-medium text-fg">Table {n}.</span> {caption}
      </figcaption>
      <div className="overflow-x-auto">{children}</div>
    </figure>
  )
}

export default function WhenLabelsOverrideEvidence() {
  return (
    <article className="paper">
      <p className="mb-8 text-sm">
        <Link href="/writing" className="text-muted no-underline hover:text-fg">
          Writing
        </Link>
      </p>
      <h1 className="font-display text-[clamp(2.15rem,4.6vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-fg">
        {"When Labels Override Evidence"}
      </h1>
      <p className="mt-4 text-lg italic leading-snug text-muted">
        {"A label shortcut in an encoder decision model: its circuit, its training origin, and how to remove it"}
      </p>
      <p className="mt-6">
        {"Vignesh Kanike"}
        <br />
        {"Indian Institute of Technology Delhi · October 2026"}
      </p>
      <section className="mt-10" id="abstract">
        <h2 className="font-serif text-2xl text-fg">Abstract</h2>
        <p className="mt-4">
          {"Laya is an open decision model that scores each answer option at its own [MASK] token in a single ModernBERT encoder pass. We show that its yes/no answers follow the meaning of the option label words rather than the passage. On a frozen benchmark of 600 human-written MNLI and QNLI items, swapping \"yes\" and \"no\" flips 96.7% of the answers the model otherwise gets right (n = 516), while swapping two neutral symbols flips 4.1%. The mechanism has two parts. Each [MASK] reads its label word directly through local attention, redundantly across layers, and evidence from the passage reaches the [MASK] only by way of the question tokens. Blocking the single attention edge class [MASK]→label reduces label-following to 2.6% at a cost of 1.8 accuracy points, whereas blocking the same number of randomly chosen edges has no effect. The result replicates on two sibling checkpoints and on a second frozen benchmark. Across 27 retrained ModernBERT models, the shortcut appears whenever the label word identifies the option during training (planted mean 88.9% vs. baseline 14.7%; exact permutation p = 0.0022), including when the option text already makes the label redundant, and randomising label words during training prevents it (0.8%). In RoBERTa-large most baseline seeds also learn the shortcut, so the pre-registered planted-versus-baseline contrast was not significant there, although the same attention block still removes it. Four pre-registered predictions failed and are reported as such. We also analyse order sensitivity, confidence and jailbreak detection as supporting findings."}
        </p>
        <p className="mt-4 text-sm text-muted">
          <span className="font-medium text-fg">{"Keywords:"}</span>{" mechanistic interpretability, shortcut learning, encoder models, attention intervention, pre-registration"}
        </p>
      </section>
      <section className="mt-10" id="sec-introduction">
        <h2 className="font-serif text-2xl text-fg">
          {"1 Introduction"}
        </h2>
        <p className="mt-4">
          {"Encoder-only decision models answer a question by scoring several written options in one forward pass. Laya, the model studied here, is used this way for routing, moderation and guard decisions. Each yes/no option carries a label word (\"no\" or \"yes\") followed by a description (\"the statement does not hold\" or \"holds\"). A model that answers from the passage should be indifferent to which word labels which option. Laya is not: its answer tracks the label word. The model's maintainers already list this behaviour as a known issue. This paper explains where it comes from inside the network, shows which kinds of training produce it, and tests two ways of removing it."}
        </p>
        <p className="mt-4">
          {"The problem is an instance of shortcut learning ["}<a href="#ref-geirhos">{"7"}</a>{"]: a cheap cue that predicts the answer during training is used in place of the intended computation. Most prior work on shortcuts in natural language inference concerns cues in the data, such as hypothesis-only artifacts ["}<a href="#ref-gururangan">{"8"}</a>{", "}<a href="#ref-belinkov">{"10"}</a>{"] or lexical overlap ["}<a href="#ref-mccoy">{"9"}</a>{"]. Here the cue sits in the answer format itself, which makes it possible to trace the full path from training signal to circuit to fix in one model."}
        </p>
        <p className="mt-4">
          {"Our contributions are:"}
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          <li>
            <span className="font-medium">{"Behaviour."}</span>{" On a benchmark frozen and hashed before evaluation, laya follows swapped yes/no labels on 96.7% of correctly answered items (95% CI 95.2%–98.1%), and on label wordings it has never seen (\"right\"/\"wrong\": 80.4%)."}
          </li>
          <li>
            <span className="font-medium">{"Circuit."}</span>{" Two pathways reach each answer [MASK]: a direct, redundant read of the label word through local attention, and an evidence relay from the passage through the question tokens (Figure 1)."}
          </li>
          <li>
            <span className="font-medium">{"An inference-time fix."}</span>{" Blocking one attention edge class removes the shortcut in all three released checkpoints, while matched control edges do not."}
          </li>
          <li>
            <span className="font-medium">{"Training origin."}</span>{" Retraining under controlled label presentations gives a dose response, a training-time fix, and a replication in a second architecture."}
          </li>
          <li>
            <span className="font-medium">{"Failed predictions."}</span>{" Four pre-registered predictions failed. We report each of them and what it implies."}
          </li>
        </ol>
        <figure id="fig-1" className="my-8">
          <div className="bg-white px-3 py-4">
            <svg viewBox="0 0 760 250" role="img" aria-label="Two pathways into each answer [MASK]" fontFamily="Georgia, serif" className="h-auto w-full">
              <defs>
                <marker id="laya-ao" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0,0L10,5L0,10z" fill="#d4581f" />
                </marker>
                <marker id="laya-ab" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M0,0L10,5L0,10z" fill="#2a64b8" />
                </marker>
              </defs>
              <text x="380" y="20" textAnchor="middle" fontSize="12.5" fill="#d4581f">
                {"Shortcut: each [MASK] reads its own label word (local attention, strongest in layers 21–27)"}
              </text>
              <path d="M252,95 C252,52 182,52 182,92" fill="none" stroke="#d4581f" strokeWidth="2" markerEnd="url(#laya-ao)" />
              <path d="M522,95 C522,52 452,52 452,92" fill="none" stroke="#d4581f" strokeWidth="2" markerEnd="url(#laya-ao)" />
              <g stroke="#b3261e" strokeWidth="2.4">
                <path d="M209,55 l16,16 M225,55 l-16,16" />
                <path d="M479,55 l16,16 M495,55 l-16,16" />
              </g>
              <text x="380" y="68" textAnchor="middle" fontSize="11" fill="#b3261e">
                {"✕ removed by the guard"}
              </text>
              <g fontSize="11.5" textAnchor="middle">
                <rect x="10" y="95" width="120" height="34" rx="4" fill="#eef3fb" stroke="#2a64b8" />
                <text x="70" y="116">
                  {"question tokens"}
                </text>
                <rect x="150" y="95" width="64" height="34" rx="4" fill="#fff4ec" stroke="#0b0b0b" strokeWidth="1.4" />
                <text x="182" y="116">
                  {"[MASK]₀"}
                </text>
                <rect x="224" y="95" width="56" height="34" rx="4" fill="#fde3d3" stroke="#d4581f" />
                <text x="252" y="116">
                  {"“no:”"}
                </text>
                <rect x="290" y="95" width="120" height="34" rx="4" fill="#f4f3ef" stroke="#9a978f" />
                <text x="350" y="116">
                  {"does not hold"}
                </text>
                <rect x="420" y="95" width="64" height="34" rx="4" fill="#fff4ec" stroke="#0b0b0b" strokeWidth="1.4" />
                <text x="452" y="116">
                  {"[MASK]₁"}
                </text>
                <rect x="494" y="95" width="56" height="34" rx="4" fill="#fde3d3" stroke="#d4581f" />
                <text x="522" y="116">
                  {"“yes:”"}
                </text>
                <rect x="560" y="95" width="74" height="34" rx="4" fill="#f4f3ef" stroke="#9a978f" />
                <text x="597" y="116">
                  {"holds"}
                </text>
                <rect x="650" y="95" width="100" height="34" rx="4" fill="#eef3fb" stroke="#2a64b8" />
                <text x="700" y="116">
                  {"passage"}
                </text>
              </g>
              <path d="M700,129 C700,222 70,222 70,132" fill="none" stroke="#2a64b8" strokeWidth="2" strokeDasharray="5 3" markerEnd="url(#laya-ab)" />
              <path d="M105,129 C105,160 182,160 182,132" fill="none" stroke="#2a64b8" strokeWidth="2" markerEnd="url(#laya-ab)" />
              <path d="M118,129 C118,182 452,182 452,132" fill="none" stroke="#2a64b8" strokeWidth="2" markerEnd="url(#laya-ab)" />
              <text x="380" y="244" textAnchor="middle" fontSize="12.5" fill="#2a64b8">
                {"Evidence: passage → question tokens → [MASK] (arrives in the same layers, 21–23)"}
              </text>
            </svg>
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            <span className="font-medium text-fg">Figure 1.</span>{" "}
            {"The two pathways into each answer [MASK] in laya. Orange: the shortcut, a direct attention edge from each [MASK] to its own label word. Blue: the evidence path, in which the question tokens read the passage and the [MASK]s read the question tokens. The guard of Section 3.4 blocks only the orange edges."}
          </figcaption>
        </figure>
      </section>
      <section className="mt-10" id="sec-model-data-and-methods">
        <h2 className="font-serif text-2xl text-fg">
          {"2 Model, data and methods"}
        </h2>
        <h3 className="mt-8 font-serif text-xl text-fg" id="model-and-instrument">
          {"2.1 Model and instrument"}
        </h3>
        <p className="mt-4">
          {"Laya is ModernBERT-large ["}<a href="#ref-warner">{"1"}</a>{"] (28 layers, width 1024, 16 heads; global attention every third layer starting at layer 0 and a ±64-token window elsewhere), followed by two transformer head layers and a per-option scorer. The input is "}<code>{"[CLS] <type> question: <instructions> [SEP] [MASK] option0 [MASK] option1 … [SEP] state [SEP]"}</code>{", and a yes/no option is rendered as "}<code>{"false: no, the statement does not hold"}</code>{". All analysis uses our own re-implementation of the forward pass with named, editable sites: the residual stream, attention patterns and outputs, MLP outputs and individual attention edges. Table 1 confirms that it reproduces laya's own "}<code>{"predict"}</code>{"."}
        </p>
        <PaperTable
          id="tab-1"
          n={1}
          caption={
            <>
              {"Fidelity of the re-implemented forward pass against the released "}<code>{"predict"}</code>{" function."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Checkpoint"}</th>
                <th>{"Max. probability difference"}</th>
                <th>{"Local window"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"laya"}</td>
                <td>{"5.1e-05"}</td>
                <td>{"±64"}</td>
              </tr>
              <tr>
                <td>{"smolaya"}</td>
                <td>{"5.0e-05"}</td>
                <td>{"±64"}</td>
              </tr>
              <tr>
                <td>{"typed"}</td>
                <td>{"5.0e-05"}</td>
                <td>{"±64"}</td>
              </tr>
              <tr>
                <td>{"multilingual"}</td>
                <td>{"4.9e-05"}</td>
                <td>{"±64"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <h3 className="mt-8 font-serif text-xl text-fg" id="data">
          {"2.2 Data"}
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium">{"Exploratory:"}</span>{" BoolQ ["}<a href="#ref-boolq">{"5"}</a>{"] (700 items, of which 300 are held out) and a set of model-written items."}
          </li>
          <li>
            <span className="font-medium">{"Untouched human-written sets:"}</span>{" RTE ["}<a href="#ref-glue">{"4"}</a>{"] (277 items) and MultiRC ["}<a href="#ref-multirc">{"6"}</a>{"] (500 items)."}
          </li>
          <li>
            <span className="font-medium">{"Benchmark 1 (confirmatory):"}</span>{" 600 previously unused MNLI ["}<a href="#ref-mnli">{"3"}</a>{"] and QNLI ["}<a href="#ref-glue">{"4"}</a>{"] items, frozen and hashed before evaluation (SHA-256 cea5547f…), with 519 contradicting edits, three unseen label wordings and two multi-token wordings."}
          </li>
          <li>
            <span className="font-medium">{"Benchmark 2 (confirmatory):"}</span>{" a further 600 MNLI and QNLI items with no overlap (SHA-256 05c0217c…), frozen together with a written prediction before any evaluation."}
          </li>
        </ul>
        <p className="mt-4">
          {"Contradicting edits and some items were written by gpt-5.6-terra and checked by gpt-5.6-luna. Random samples were then audited independently (Appendix A)."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="measures-and-controls">
          {"2.3 Measures and controls"}
        </h3>
        <p className="mt-4">
          {"Each item is scored once with normal and once with swapped label words, and we count the four transitions (correct→correct, correct→wrong, wrong→correct, wrong→wrong). "}<span className="font-medium">{"Label-following"}</span>{" is n(correct→wrong) divided by n(correct with normal labels); we report the denominator and a bootstrap 95% interval over items. For activation patching, "}<span className="font-medium">{"recovery"}</span>{" per item is (y"}<sub>{"patched"}</sub>{" − y"}<sub>{"corrupt"}</sub>{") / (y"}<sub>{"clean"}</sub>{" − y"}<sub>{"corrupt"}</sub>{"), where y is the log-odds of \"holds\"; items with |y"}<sub>{"clean"}</sub>{" − y"}<sub>{"corrupt"}</sub>{"| < 0.5 are excluded and counted, and we report the median with a bootstrap interval."}
        </p>
        <p className="mt-4">
          {"The "}<span className="font-medium">{"guard"}</span>{" blocks attention from each yes/no [MASK] to its own label tokens in the local layers. The "}<span className="font-medium">{"extended guard"}</span>{" additionally stops the option-description tokens from reading the label tokens. Every intervention is paired with "}<span className="font-medium">{"controls"}</span>{" that block the same number of random option edges, the same number of description edges, or a sham [MASK]→[CLS] edge. Seed-level comparisons treat each trained model as one unit and use an exact two-sided permutation test."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Pre-registration."}</span>{" For every confirmatory test, the data, interventions and prediction were written to "}<code>{"NEXT_STEPS_PLAN.md"}</code>{" before the test ran. From the confirmatory benchmarks onward, each pre-registration is a git commit that precedes its results. Analyses added afterwards are labelled exploratory."}
        </p>
      </section>
      <section className="mt-10" id="sec-the-label-shortcut-and-its-circuit">
        <h2 className="font-serif text-2xl text-fg">
          {"3 The label shortcut and its circuit"}
        </h2>
        <h3 className="mt-8 font-serif text-xl text-fg" id="behaviour">
          {"3.1 Behaviour"}
        </h3>
        <p className="mt-4">
          {"On BoolQ, swapping \"yes\" and \"no\" flips 96% of correct answers and swapping \"true\" and \"false\" flips 39%, while swapping \"A\" and \"B\" flips 3% and swapping \"◇\" and \"△\" flips 4% (Figure 2). The model responds to what the label word means, not to which token it is."}
        </p>
        <Figure
          id="fig-2"
          n={2}
          src="/paper/laya/fig2.png"
          alt="BoolQ accuracy (700 items, fp32) with normal and swapped label words. Meaningful label pairs flip the model's answers; arbitrary symbols do not. Annotations give the share of correct answers that follow the swapped label."
          caption={
            <>
              {"BoolQ accuracy (700 items, fp32) with normal and swapped label words. Meaningful label pairs flip the model's answers; arbitrary symbols do not. Annotations give the share of correct answers that follow the swapped label."}
            </>
          }
        />
        <h3 className="mt-8 font-serif text-xl text-fg" id="confirmatory-test-with-matched-controls">
          {"3.2 Confirmatory test with matched controls"}
        </h3>
        <p className="mt-4">
          {"On benchmark 1 the transitions are correct→correct 17, correct→wrong 499, wrong→correct 70 and wrong→wrong 14. Table 2 shows that the guard is specific. Blocking the same number of other edges, or a sham edge, leaves label-following unchanged. The guard itself costs 1.8 accuracy points and lowers jailbreak AUROC by 0.023."}
        </p>
        <PaperTable
          id="tab-2"
          n={2}
          caption={
            <>
              {"Label-following on benchmark 1 (laya, fp32) under each intervention, for the trained wording (yes/no), two unseen wordings and neutral symbols, with accuracy and safety AUROC. Only the guard rows reduce label-following."}
            </>
          }
        >
          <table className="paper-table tabular-nums text-sm min-w-[52rem]">
            <thead>
              <tr>
                <th>{"Intervention"}</th>
                <th>{"yes/no"}</th>
                <th>{"right/wrong (unseen)"}</th>
                <th>{"\"yes, that is right\" (unseen)"}</th>
                <th>{"◇/△"}</th>
                <th>{"Accuracy"}</th>
                <th>{"Jailbreak / injection AUROC"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"None"}</td>
                <td>{"96.7%"}</td>
                <td>{"80.4%"}</td>
                <td>{"96.9%"}</td>
                <td>{"4.1%"}</td>
                <td>{"0.860"}</td>
                <td>{"0.940 / 0.896"}</td>
              </tr>
              <tr>
                <td>{"Guard: [MASK]→label, local layers"}</td>
                <td>{"2.6%"}</td>
                <td>{"3.0%"}</td>
                <td>{"28.8%"}</td>
                <td>{"2.0%"}</td>
                <td>{"0.842"}</td>
                <td>{"0.917 / 0.872"}</td>
              </tr>
              <tr>
                <td>{"Extended guard: + description→label"}</td>
                <td>{"1.8%"}</td>
                <td>{"1.6%"}</td>
                <td>{"7.6%"}</td>
                <td>{"2.8%"}</td>
                <td>{"0.852"}</td>
                <td>{"0.911 / 0.875"}</td>
              </tr>
              <tr>
                <td>{"Control: random option edges"}</td>
                <td>{"97.1%"}</td>
                <td>{"85.7%"}</td>
                <td>{"98.2%"}</td>
                <td>{"4.5%"}</td>
                <td>{"0.858"}</td>
                <td>{"0.940 / 0.897"}</td>
              </tr>
              <tr>
                <td>{"Control: description edges"}</td>
                <td>{"97.9%"}</td>
                <td>{"85.1%"}</td>
                <td>{"98.2%"}</td>
                <td>{"5.4%"}</td>
                <td>{"0.855"}</td>
                <td>{"0.939 / 0.895"}</td>
              </tr>
              <tr>
                <td>{"Control: [MASK]→[CLS]"}</td>
                <td>{"98.3%"}</td>
                <td>{"91.9%"}</td>
                <td>{"99.2%"}</td>
                <td>{"4.1%"}</td>
                <td>{"0.867"}</td>
                <td>{"0.946 / 0.897"}</td>
              </tr>
              <tr>
                <td>{"Evidence path blocked: question→passage"}</td>
                <td>{"84.2%"}</td>
                <td>{"72.6%"}</td>
                <td>{"81.6%"}</td>
                <td>{"10.6%"}</td>
                <td>{"0.645"}</td>
                <td>{"0.881 / 0.742"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <p className="mt-4">
          {"On contradicting passages the guard reduces label-following from 97.5% to 4.5%. When the passage is blanked, swapping the labels moves the share of \"holds\" answers from 33% to 95%; with the guard the shift is only 5% to 11%."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="two-pathways">
          {"3.3 Two pathways"}
        </h3>
        <p className="mt-4">
          <span className="font-medium">{"The label read is redundant and mostly late."}</span>{" Blocking [MASK]→label in layers 10–14 alone leaves label-following at 96%. Blocking layers 21–27 alone halves it (53%), and blocking every local layer removes it (Figure 3). No single early band is necessary."}
        </p>
        <Figure
          id="fig-3"
          n={3}
          src="/paper/laya/fig3.png"
          alt="Label-following when [MASK]→label attention is blocked in one band of layers at a time, on the exploratory set (BoolQ) and on untouched human-written sets (RTE and MultiRC). The late band matters most, but only blocking all local layers removes the effect."
          caption={
            <>
              {"Label-following when [MASK]→label attention is blocked in one band of layers at a time, on the exploratory set (BoolQ) and on untouched human-written sets (RTE and MultiRC). The late band matters most, but only blocking all local layers removes the effect."}
            </>
          }
        />
        <p className="mt-4">
          <span className="font-medium">{"Evidence travels through the question tokens."}</span>{" Table 3 blocks each segment in turn from reading the passage. Stopping the question tokens from reading it drops accuracy from 0.737 to 0.537, whereas stopping the [MASK]s or the option text from reading it changes nothing. On benchmark 1, restoring only the question tokens into a blanked-passage run recovers a median of 0.91 [0.85, 0.96] of the decision at layer 16 (n = 275; 25 of 300 items excluded for a small gap; Figure 4)."}
        </p>
        <PaperTable
          id="tab-3"
          n={3}
          caption={
            <>
              {"Accuracy when one segment is prevented from attending to the passage, without and with the guard (exploratory set)."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Segment blocked from the passage"}</th>
                <th>{"Accuracy, plain"}</th>
                <th>{"Accuracy, with guard"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"none"}</td>
                <td>{"0.737"}</td>
                <td>{"0.727"}</td>
              </tr>
              <tr>
                <td>{"masks"}</td>
                <td>{"0.730"}</td>
                <td>{"0.733"}</td>
              </tr>
              <tr>
                <td>{"options"}</td>
                <td>{"0.760"}</td>
                <td>{"0.757"}</td>
              </tr>
              <tr>
                <td>{"question"}</td>
                <td>{"0.537"}</td>
                <td>{"0.507"}</td>
              </tr>
              <tr>
                <td>{"special"}</td>
                <td>{"0.747"}</td>
                <td>{"0.747"}</td>
              </tr>
              <tr>
                <td>{"all non-passage tokens"}</td>
                <td>{"0.517"}</td>
                <td>{"0.447"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <Figure
          id="fig-4"
          n={4}
          src="/paper/laya/fig4.png"
          alt="(a) Recovery when one segment's activations are restored into a run with the passage blanked: the question tokens carry the evidence. (b) Joint patching into a run with swapped labels and a blank passage, by segment and layer."
          caption={
            <>
              {"(a) Recovery when one segment's activations are restored into a run with the passage blanked: the question tokens carry the evidence. (b) Joint patching into a run with swapped labels and a blank passage, by segment and layer."}
            </>
          }
        />
        <p className="mt-4">
          <span className="font-medium">{"There is no timing race."}</span>{" Label information enters the [MASK] in layers 21–23, the same layers in which the evidence arrives. The two signals meet in the same place, and the label usually wins."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="the-guard-in-deployment-and-across-checkpoints">
          {"3.4 The guard in deployment and across checkpoints"}
        </h3>
        <p className="mt-4">
          {"Installed on a stock "}<code>{"laya.load"}</code>{" agent and called through the official "}<code>{"predict"}</code>{" API ("}<code>{"interp/label_guard.py"}</code>{"), the guard leaves choice questions bit-identical (maximum difference 0) and moves jailbreak AUROC from 0.940 to 0.919. It holds on held-out and human-written sets (Figure 5, Table 4) and on both sibling checkpoints, including laya-multilingual, which uses a different base model (Table 5). Multi-token labels require the extended guard."}
        </p>
        <Figure
          id="fig-5"
          n={5}
          src="/paper/laya/fig5.png"
          alt="Label-following with and without the guard on untouched sets, including two human-written ones. The third bar averages five label wordings the model never saw in training."
          caption={
            <>
              {"Label-following with and without the guard on untouched sets, including two human-written ones. The third bar averages five label wordings the model never saw in training."}
            </>
          }
        />
        <PaperTable
          id="tab-4"
          n={4}
          caption={
            <>
              {"Effect of the guard on untouched sets (laya, fp32)."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Untouched set"}</th>
                <th>{"yes/no label-following, plain → guard"}</th>
                <th>{"Accuracy, plain → guard"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Held-out BoolQ (300)"}</td>
                <td>{"97% → 2%"}</td>
                <td>{"0.757 → 0.753"}</td>
              </tr>
              <tr>
                <td>{"RTE (277, human-written)"}</td>
                <td>{"96% → 4%"}</td>
                <td>{"0.780 → 0.812"}</td>
              </tr>
              <tr>
                <td>{"MultiRC (500, human-written)"}</td>
                <td>{"92% → 6%"}</td>
                <td>{"0.586 → 0.614"}</td>
              </tr>
              <tr>
                <td>{"GPT-written held-out (292)"}</td>
                <td>{"96% → 7%"}</td>
                <td>{"0.767 → 0.808"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <PaperTable
          id="tab-5"
          n={5}
          caption={
            <>
              {"Replication across the three released checkpoints on benchmark 1."}
            </>
          }
        >
          <table className="paper-table tabular-nums text-sm min-w-[52rem]">
            <thead>
              <tr>
                <th>{"Checkpoint"}</th>
                <th>{"yes/no, none"}</th>
                <th>{"Guard"}</th>
                <th>{"Extended guard (multi-token)"}</th>
                <th>{"Random-edge control"}</th>
                <th>{"Accuracy, none → guard"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"laya"}</td>
                <td>{"96.7%"}</td>
                <td>{"2.6%"}</td>
                <td>{"7.6%"}</td>
                <td>{"97.1%"}</td>
                <td>{"0.860 → 0.842"}</td>
              </tr>
              <tr>
                <td>{"typed"}</td>
                <td>{"93.5%"}</td>
                <td>{"3.9%"}</td>
                <td>{"2.8%"}</td>
                <td>{"95.7%"}</td>
                <td>{"0.825 → 0.845"}</td>
              </tr>
              <tr>
                <td>{"multilingual"}</td>
                <td>{"88.7%"}</td>
                <td>{"1.6%"}</td>
                <td>{"6.5%"}</td>
                <td>{"89.0%"}</td>
                <td>{"0.735 → 0.743"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
      </section>
      <section className="mt-10" id="sec-where-the-shortcut-comes-from">
        <h2 className="font-serif text-2xl text-fg">
          {"4 Where the shortcut comes from"}
        </h2>
        <h3 className="mt-8 font-serif text-xl text-fg" id="which-training-creates-it">
          {"4.1 Which training creates it"}
        </h3>
        <p className="mt-4">
          {"We trained ModernBERT-large models with laya's trainer, a 31,419-item training set and laya's loss (RLCD), changing only how the yes/no labels were presented. Laya's own training data are not public, so these experiments show what "}<em>{"can"}</em>{" create the shortcut, not what did. Only training in which the label word identifies which option means what produces it (p = 0.000 against baseline). Meaningful labels on their own do not (p = 0.46; Figure 6, Table 6)."}
        </p>
        <Figure
          id="fig-6"
          n={6}
          src="/paper/laya/fig6.png"
          alt="Label-following after retraining under six label presentations (three seeds each; dots are seeds). Only the planted regime, in which the label word is the sole cue to option identity, produces the shortcut."
          caption={
            <>
              {"Label-following after retraining under six label presentations (three seeds each; dots are seeds). Only the planted regime, in which the label word is the sole cue to option identity, produces the shortcut."}
            </>
          }
        />
        <PaperTable
          id="tab-6"
          n={6}
          caption={
            <>
              {"Training regimes (three seeds each; mean of four earlier test sets)."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Training regime"}</th>
                <th>{"yes/no label-following"}</th>
                <th>{"Accuracy"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Baseline: default true/false"}</td>
                <td>{"12.8% ± 20.3"}</td>
                <td>{"0.749"}</td>
              </tr>
              <tr>
                <td>{"Meaningful labels, aligned"}</td>
                <td>{"5.8% ± 6.6"}</td>
                <td>{"0.751"}</td>
              </tr>
              <tr>
                <td>{"Meaningless symbols"}</td>
                <td>{"5.5% ± 2.4"}</td>
                <td>{"0.754"}</td>
              </tr>
              <tr>
                <td>{"Meaningful labels, randomly swapped"}</td>
                <td>{"1.4% ± 0.6"}</td>
                <td>{"0.752"}</td>
              </tr>
              <tr>
                <td>{"Mixture"}</td>
                <td>{"4.0% ± 0.6"}</td>
                <td>{"0.756"}</td>
              </tr>
              <tr>
                <td>{"Planted: label word is the only cue"}</td>
                <td>{"92.3% ± 4.0"}</td>
                <td>{"0.768"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <h3 className="mt-8 font-serif text-xl text-fg" id="dose-response-on-benchmark-1">
          {"4.2 Dose response on benchmark 1"}
        </h3>
        <p className="mt-4">
          {"To separate the reliability of the label from its redundancy, we trained six arms that vary how often the label is right and whether the option text also identifies the option (Figure 7, Table 7)."}
        </p>
        <Figure
          id="fig-7"
          n={7}
          src="/paper/laya/fig7.png"
          alt="Dose response across 27 retrained ModernBERT models on benchmark 1 (dots are seeds). Orange arms have a reliable label word. A redundant label (D1) is still used by most seeds; a randomised label (D0) is not."
          caption={
            <>
              {"Dose response across 27 retrained ModernBERT models on benchmark 1 (dots are seeds). Orange arms have a reliable label word. A redundant label (D1) is still used by most seeds; a randomised label (D0) is not."}
            </>
          }
        />
        <PaperTable
          id="tab-7"
          n={7}
          caption={
            <>
              {"Dose-response arms. All arms except the baseline shuffle option order during training."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Training arm"}</th>
                <th>{"Label-following per seed (%)"}</th>
                <th>{"Mean (%)"}</th>
                <th>{"Accuracy"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Baseline: default labels, fixed order"}</td>
                <td>{"0.2, 0.7, 18.1, 9.3, 54.9, 4.7"}</td>
                <td>{"14.7"}</td>
                <td>{"0.773"}</td>
              </tr>
              <tr>
                <td>{"D0: label random, informative text"}</td>
                <td>{"1.3, 0.0, 0.9"}</td>
                <td>{"0.8"}</td>
                <td>{"0.743"}</td>
              </tr>
              <tr>
                <td>{"D1: label always right, informative text"}</td>
                <td>{"2.8, 31.2, 98.5, 94.7, 92.1, 81.8"}</td>
                <td>{"66.9"}</td>
                <td>{"0.768"}</td>
              </tr>
              <tr>
                <td>{"D2: label right 75%, neutral text"}</td>
                <td>{"91.9, 41.1, 90.9"}</td>
                <td>{"74.6"}</td>
                <td>{"0.688"}</td>
              </tr>
              <tr>
                <td>{"D3: label right 90%, neutral text"}</td>
                <td>{"95.3, 92.0, 85.8"}</td>
                <td>{"91.0"}</td>
                <td>{"0.764"}</td>
              </tr>
              <tr>
                <td>{"Planted: label always right, neutral text"}</td>
                <td>{"81.2, 86.3, 84.2, 94.7, 92.3, 95.0"}</td>
                <td>{"88.9"}</td>
                <td>{"0.784"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium">{"Planted versus baseline"}</span>{" (six seeds each, pre-registered): every planted model exceeds every baseline model, giving exact p = 0.0022, the smallest value this test can produce."}
          </li>
          <li>
            <span className="font-medium">{"Reliability."}</span>{" A label that is the sole cue but is right only 75% or 90% of the time already produces strong label-following."}
          </li>
          <li>
            <span className="font-medium">{"Redundancy does not protect."}</span>{" When the option text also says which option is which (D1), 4 of 6 seeds still rely on the label (D1 vs. baseline p = 0.024; vs. planted p = 0.34). We had predicted that D1 would stay low, and that prediction was wrong."}
          </li>
          <li>
            <span className="font-medium">{"Baselines are not immune."}</span>{" One of six baseline seeds follows the label 55% of the time."}
          </li>
        </ul>
        <h3 className="mt-8 font-serif text-xl text-fg" id="a-training-time-fix">
          {"4.3 A training-time fix"}
        </h3>
        <p className="mt-4">
          {"Arms D0 and D1 differ only in whether the label word is reliable. When label words are assigned at random during training (D0), label-following is 1.3%, 0.0%, 0.9% across three seeds, against 2.8%, 31.2%, 98.5%, 94.7%, 92.1%, 81.8% for D1 (exact p = 0.060). Benchmark accuracy is 0.743 for D0, compared with 0.768 for D1 and 0.773 for the baseline. Randomising label words during training therefore prevents the shortcut at a cost of about 2 accuracy points in this setting. This remedy was not pre-registered and rests on three seeds."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="does-the-guard-transfer-to-retrained-models-pre-registered-failed">
          {"4.4 Does the guard transfer to retrained models? (pre-registered; failed)"}
        </h3>
        <p className="mt-4">
          {"The local-layer guard worked unevenly on retrained planted models. Before running benchmark 2 we predicted that blocking [MASK]→label in "}<em>{"all"}</em>{" layers would leave at most 10% label-following in the laya checkpoints and in at least five of six planted seeds, while the same number of random edges would change nothing. The laya checkpoints passed, but only 3 of 6 planted seeds did, so the prediction "}<span className="font-medium">{"failed"}</span>{". The control stayed within 10 points of no intervention in 9 of 9 models, and adding description→label edges (extended guard, all layers) reached the threshold in 5 of 6 seeds (Table 8)."}
        </p>
        <PaperTable
          id="tab-8"
          n={8}
          caption={
            <>
              {"Benchmark 2: yes/no label-following, with accuracy in parentheses, for the released checkpoints and six planted seeds."}
            </>
          }
        >
          <table className="paper-table tabular-nums text-sm min-w-[52rem]">
            <thead>
              <tr>
                <th>{"Model"}</th>
                <th>{"None"}</th>
                <th>{"Guard, local"}</th>
                <th>{"Guard, all layers"}</th>
                <th>{"Extended guard, all layers"}</th>
                <th>{"Control: random edges, all layers"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"laya"}</td>
                <td>{"96.7% (0.850)"}</td>
                <td>{"3.8% (0.875)"}</td>
                <td>{"4.8% (0.867)"}</td>
                <td>{"1.1% (0.880)"}</td>
                <td>{"96.7% (0.860)"}</td>
              </tr>
              <tr>
                <td>{"typed"}</td>
                <td>{"93.9% (0.820)"}</td>
                <td>{"2.7% (0.858)"}</td>
                <td>{"2.3% (0.855)"}</td>
                <td>{"0.4% (0.863)"}</td>
                <td>{"95.5% (0.817)"}</td>
              </tr>
              <tr>
                <td>{"multilingual"}</td>
                <td>{"89.0% (0.773)"}</td>
                <td>{"0.9% (0.773)"}</td>
                <td>{"0.6% (0.772)"}</td>
                <td>{"0.2% (0.772)"}</td>
                <td>{"89.6% (0.782)"}</td>
              </tr>
              <tr>
                <td>{"p5_planted_s0"}</td>
                <td>{"85.6% (0.810)"}</td>
                <td>{"40.6% (0.788)"}</td>
                <td>{"3.6% (0.742)"}</td>
                <td>{"1.1% (0.772)"}</td>
                <td>{"87.2% (0.810)"}</td>
              </tr>
              <tr>
                <td>{"p5_planted_s1"}</td>
                <td>{"86.6% (0.857)"}</td>
                <td>{"77.9% (0.837)"}</td>
                <td>{"32.7% (0.617)"}</td>
                <td>{"23.6% (0.622)"}</td>
                <td>{"86.9% (0.855)"}</td>
              </tr>
              <tr>
                <td>{"p5_planted_s2"}</td>
                <td>{"85.1% (0.797)"}</td>
                <td>{"20.2% (0.792)"}</td>
                <td>{"5.8% (0.770)"}</td>
                <td>{"2.2% (0.772)"}</td>
                <td>{"86.0% (0.798)"}</td>
              </tr>
              <tr>
                <td>{"p5_planted_s3"}</td>
                <td>{"94.5% (0.787)"}</td>
                <td>{"65.5% (0.773)"}</td>
                <td>{"10.2% (0.717)"}</td>
                <td>{"6.7% (0.698)"}</td>
                <td>{"94.1% (0.788)"}</td>
              </tr>
              <tr>
                <td>{"p5_planted_s4"}</td>
                <td>{"94.3% (0.787)"}</td>
                <td>{"34.5% (0.777)"}</td>
                <td>{"4.7% (0.712)"}</td>
                <td>{"3.0% (0.728)"}</td>
                <td>{"94.7% (0.787)"}</td>
              </tr>
              <tr>
                <td>{"p5_planted_s5"}</td>
                <td>{"95.0% (0.803)"}</td>
                <td>{"73.3% (0.725)"}</td>
                <td>{"13.7% (0.500)"}</td>
                <td>{"1.2% (0.567)"}</td>
                <td>{"94.8% (0.803)"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <p className="mt-4">
          {"The retrained models read the label through the same two edge classes as laya, but in different layers and proportions from seed to seed, a mild case of the non-universality reported by ["}<a href="#ref-chughtai">{"19"}</a>{"]. In seeds 1 and 5, blocking these edges also costs 20–30 accuracy points, which indicates that the label read is entangled with ordinary answering."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="removing-a-label-direction-instead-of-an-edge-exploratory">
          {"4.5 Removing a label direction instead of an edge (exploratory)"}
        </h3>
        <p className="mt-4">
          {"For each layer we fitted one direction on benchmark 1, namely the mean residual at the \"holds\" [MASK] with normal labels minus the same with swapped labels, and projected it out at every [MASK] in every layer before evaluating on benchmark 2. The success criterion, fixed in advance, was label-following of at most 10% with an accuracy drop of at most 5 points. Direction ablation alone met it in 0 of 3 models, and in combination with the extended all-layer guard in 0 of 3 (Table 9)."}
        </p>
        <p className="mt-4">
          {"Label-following does fall to zero, but only because the model stops answering. Accuracy falls to 0.522, which is exactly the accuracy of always answering \"does not hold\" on benchmark 2 (0.522), while a random direction per layer changes nothing. The direction that separates normal from swapped labels at the [MASK] is the answer direction itself. In this model, what the label says and what the answer is share one linear direction, so projection cannot separate them, whereas the edge-level intervention can."}
        </p>
        <PaperTable
          id="tab-9"
          n={9}
          caption={
            <>
              {"Benchmark 2: label-following (accuracy) under direction ablation. Zero label-following coincides with accuracy at the always-\"no\" baseline."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Model"}</th>
                <th>{"None"}</th>
                <th>{"Direction ablation"}</th>
                <th>{"Random-direction control"}</th>
                <th>{"Direction ablation + extended guard"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"laya"}</td>
                <td>{"96.7% (0.850)"}</td>
                <td>{"0.0% (0.522)"}</td>
                <td>{"96.6% (0.843)"}</td>
                <td>{"0.0% (0.522)"}</td>
              </tr>
              <tr>
                <td>{"p5_planted_s1"}</td>
                <td>{"86.6% (0.857)"}</td>
                <td>{"0.0% (0.522)"}</td>
                <td>{"87.2% (0.845)"}</td>
                <td>{"0.0% (0.522)"}</td>
              </tr>
              <tr>
                <td>{"p5_planted_s5"}</td>
                <td>{"95.0% (0.803)"}</td>
                <td>{"0.0% (0.522)"}</td>
                <td>{"94.4% (0.802)"}</td>
                <td>{"0.0% (0.522)"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <h3 className="mt-8 font-serif text-xl text-fg" id="a-second-architecture">
          {"4.6 A second architecture: RoBERTa-large"}
        </h3>
        <p className="mt-4">
          {"We trained option-marker models on RoBERTa-large ["}<a href="#ref-roberta">{"2"}</a>{"] with the same recipe, using an encoder learning rate of 1e-5 that was fixed in advance after three of six runs at laya's 2.5e-5 failed to learn. We trained six planted and six baseline seeds and report all of them. 12 of 12 learned the task (BoolQ accuracy ≥ 0.70). Among these, planted label-following averages 77.6% against 48.9% for the baseline (exact p = 0.1126, 6 vs. 6 seeds). Because RoBERTa has no local/global split, the [MASK]→label block is applied in all layers; a fidelity check confirms that the unblocked path matches the plain model exactly."}
        </p>
        <p className="mt-4">
          {"The pre-registered prediction (planted > baseline at p < 0.05) "}<span className="font-medium">{"failed"}</span>{": 4 of 6 baseline seeds also learned the shortcut, with label-following above 50%. In RoBERTa, default training with fixed \"true\"/\"false\" labels is enough to produce it in most seeds. The [MASK]→label block brings 11 of 12 runs to 12% or less (Table 10)."}
        </p>
        <PaperTable
          id="tab-10"
          n={10}
          caption={
            <>
              {"RoBERTa-large, six planted and six baseline seeds (learning rate 1e-5)."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Run"}</th>
                <th>{"BoolQ accuracy"}</th>
                <th>{"Label-following (bench. 1)"}</th>
                <th>{"With [MASK]→label block"}</th>
                <th>{"Accuracy, none → evidence blocked"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"planted s0"}</td>
                <td>{"0.790"}</td>
                <td>{"97.8%"}</td>
                <td>{"6.0%"}</td>
                <td>{"0.602 → 0.547"}</td>
              </tr>
              <tr>
                <td>{"planted s1"}</td>
                <td>{"0.817"}</td>
                <td>{"82.3%"}</td>
                <td>{"2.8%"}</td>
                <td>{"0.735 → 0.597"}</td>
              </tr>
              <tr>
                <td>{"planted s2"}</td>
                <td>{"0.820"}</td>
                <td>{"92.4%"}</td>
                <td>{"37.6%"}</td>
                <td>{"0.743 → 0.587"}</td>
              </tr>
              <tr>
                <td>{"planted s3"}</td>
                <td>{"0.747"}</td>
                <td>{"89.6%"}</td>
                <td>{"10.5%"}</td>
                <td>{"0.658 → 0.567"}</td>
              </tr>
              <tr>
                <td>{"planted s4"}</td>
                <td>{"0.710"}</td>
                <td>{"56.5%"}</td>
                <td>{"1.2%"}</td>
                <td>{"0.632 → 0.543"}</td>
              </tr>
              <tr>
                <td>{"planted s5"}</td>
                <td>{"0.713"}</td>
                <td>{"47.0%"}</td>
                <td>{"3.0%"}</td>
                <td>{"0.563 → 0.553"}</td>
              </tr>
              <tr>
                <td>{"baseline s0"}</td>
                <td>{"0.803"}</td>
                <td>{"66.8%"}</td>
                <td>{"10.2%"}</td>
                <td>{"0.688 → 0.592"}</td>
              </tr>
              <tr>
                <td>{"baseline s1"}</td>
                <td>{"0.773"}</td>
                <td>{"4.6%"}</td>
                <td>{"5.4%"}</td>
                <td>{"0.610 → 0.543"}</td>
              </tr>
              <tr>
                <td>{"baseline s2"}</td>
                <td>{"0.813"}</td>
                <td>{"6.7%"}</td>
                <td>{"2.3%"}</td>
                <td>{"0.770 → 0.572"}</td>
              </tr>
              <tr>
                <td>{"baseline s3"}</td>
                <td>{"0.797"}</td>
                <td>{"71.7%"}</td>
                <td>{"3.6%"}</td>
                <td>{"0.695 → 0.545"}</td>
              </tr>
              <tr>
                <td>{"baseline s4"}</td>
                <td>{"0.780"}</td>
                <td>{"66.9%"}</td>
                <td>{"7.6%"}</td>
                <td>{"0.725 → 0.567"}</td>
              </tr>
              <tr>
                <td>{"baseline s5"}</td>
                <td>{"0.783"}</td>
                <td>{"76.7%"}</td>
                <td>{"11.8%"}</td>
                <td>{"0.758 → 0.582"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
      </section>
      <section className="mt-10" id="sec-supporting-findings">
        <h2 className="font-serif text-2xl text-fg">
          {"5 Supporting findings"}
        </h2>
        <h3 className="mt-8 font-serif text-xl text-fg" id="order-sensitivity-is-positional-competition-is-separate">
          {"5.1 Order sensitivity is positional; competition is separate"}
        </h3>
        <p className="mt-4">
          {"Reversing the order of the options flips 29.6% of laya's multiple-choice answers (fp32, 1,392 items), in line with the order effects reported for decoder models ["}<a href="#ref-pezeshkpour">{"12"}</a>{", "}<a href="#ref-zheng">{"13"}</a>{"]. Options also compete: blanking one shifts another's centred logit by 0.37. A factorial design that holds the [MASK]–option binding fixed shows that blocking interaction between options removes only a few points of flips in every model, while order-invariant layouts keep most of the competition (Tables 11 and 12, Figure 8)."}
        </p>
        <PaperTable
          id="tab-11"
          n={11}
          caption={
            <>
              {"Option layouts for laya (fp32). M is the mean absolute centred effect of blanking a competing option."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Condition"}</th>
                <th>{"Accuracy"}</th>
                <th>{"Reversal flips"}</th>
                <th>{"Mean |M|"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Trained layout"}</td>
                <td>{"0.453"}</td>
                <td>{"29.6%"}</td>
                <td>{"0.374"}</td>
              </tr>
              <tr>
                <td>{"Options cannot see each other"}</td>
                <td>{"0.414"}</td>
                <td>{"28.3%"}</td>
                <td>{"0.181"}</td>
              </tr>
              <tr>
                <td>{"Options blocked + shared positions"}</td>
                <td>{"0.408"}</td>
                <td>{"0.0%"}</td>
                <td>{"0.175"}</td>
              </tr>
              <tr>
                <td>{"Fully masked parallel"}</td>
                <td>{"0.346"}</td>
                <td>{"28.6%"}</td>
                <td>{"0.000"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <Figure
          id="fig-8"
          n={8}
          src="/paper/laya/fig8.png"
          alt="(a) Reversal flips removed by blocking option interaction, with 95% intervals, for ten models. (b) Reversal flip rate with original positions and with random position jitter."
          caption={
            <>
              {"(a) Reversal flips removed by blocking option interaction, with 95% intervals, for ten models. (b) Reversal flip rate with original positions and with random position jitter."}
            </>
          }
        />
        <PaperTable
          id="tab-12"
          n={12}
          caption={
            <>
              {"Order factorial across ten models."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Model"}</th>
                <th>{"Flips removed by blocking interaction (pts, 95% CI)"}</th>
                <th>{"Competition kept when order-invariant"}</th>
                <th>{"Accuracy cost (pts)"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"laya"}</td>
                <td>{"8.0 [4.1, 12.0]"}</td>
                <td>{"78%"}</td>
                <td>{"1.9"}</td>
              </tr>
              <tr>
                <td>{"typed"}</td>
                <td>{"6.2 [2.6, 9.7]"}</td>
                <td>{"76%"}</td>
                <td>{"1.4"}</td>
              </tr>
              <tr>
                <td>{"multilingual"}</td>
                <td>{"3.7 [0.0, 7.6]"}</td>
                <td>{"76%"}</td>
                <td>{"-0.7"}</td>
              </tr>
              <tr>
                <td>{"smolaya"}</td>
                <td>{"1.3 [-1.9, 4.7]"}</td>
                <td>{"77%"}</td>
                <td>{"4.2"}</td>
              </tr>
              <tr>
                <td>{"CE s0"}</td>
                <td>{"0.0 [-3.3, 3.2]"}</td>
                <td>{"86%"}</td>
                <td>{"9.7"}</td>
              </tr>
              <tr>
                <td>{"CE s1"}</td>
                <td>{"0.8 [-2.7, 4.2]"}</td>
                <td>{"87%"}</td>
                <td>{"9.6"}</td>
              </tr>
              <tr>
                <td>{"CE s2"}</td>
                <td>{"2.0 [-1.1, 4.9]"}</td>
                <td>{"90%"}</td>
                <td>{"8.9"}</td>
              </tr>
              <tr>
                <td>{"RLCD s0"}</td>
                <td>{"5.8 [2.4, 9.3]"}</td>
                <td>{"77%"}</td>
                <td>{"8.2"}</td>
              </tr>
              <tr>
                <td>{"RLCD s1"}</td>
                <td>{"3.8 [0.6, 7.1]"}</td>
                <td>{"82%"}</td>
                <td>{"8.6"}</td>
              </tr>
              <tr>
                <td>{"RLCD s2"}</td>
                <td>{"1.1 [-2.0, 4.2]"}</td>
                <td>{"87%"}</td>
                <td>{"10.4"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <p className="mt-4">
          {"Giving options reversed position ids without moving any tokens reproduces the reversed run in 100% of flips in all ten models. For a bidirectional encoder this holds by construction, so we treat it as an identity check rather than as evidence. The competition measure is robust to the replacement text used (filler 0.39, dash 0.40, distractor 0.44)."}
        </p>
        <h3 className="mt-8 font-serif text-xl text-fg" id="confidence-is-set-by-a-late-mlp-amplifier">
          {"5.2 Confidence is set by a late-MLP amplifier"}
        </h3>
        <p className="mt-4">
          {"Removing MLPs 22, 27, 26 halves laya's logit scale (ratio 0.47) and removes most of its miscalibration. However, rescaling each item to the same size reproduces the effect, and a single temperature does better, so under the pre-registered rule these MLPs are an amplifier rather than a confidence regulator of the kind described by ["}<a href="#ref-stolfo">{"17"}</a>{"]. With the temperature fitted on the exploratory split (T = 2.61), confirmatory ECE is 0.055, against 0.080 for MLP ablation (Table 13, Figure 9)."}
        </p>
        <PaperTable
          id="tab-13"
          n={13}
          caption={
            <>
              {"Calibration on the confirmatory multiple-choice set (laya)."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Condition"}</th>
                <th>{"Accuracy"}</th>
                <th>{"ECE"}</th>
                <th>{"Brier"}</th>
                <th>{"Answers kept"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Baseline"}</td>
                <td>{"0.364"}</td>
                <td>{"0.234"}</td>
                <td>{"0.816"}</td>
                <td>{"100.0%"}</td>
              </tr>
              <tr>
                <td>{"Ablate late MLPs"}</td>
                <td>{"0.372"}</td>
                <td>{"0.080"}</td>
                <td>{"0.742"}</td>
                <td>{"95.8%"}</td>
              </tr>
              <tr>
                <td>{"Rescale each item to the ablated size"}</td>
                <td>{"0.364"}</td>
                <td>{"0.082"}</td>
                <td>{"0.739"}</td>
                <td>{"100.0%"}</td>
              </tr>
              <tr>
                <td>{"Best global temperature"}</td>
                <td>{"0.364"}</td>
                <td>{"0.030"}</td>
                <td>{"0.719"}</td>
                <td>{"100.0%"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <Figure
          id="fig-9"
          n={9}
          src="/paper/laya/fig9.png"
          alt="Expected calibration error for three checkpoints. Per-item rescaling reproduces the effect of ablating the late MLPs, and one global temperature does better than either."
          caption={
            <>
              {"Expected calibration error for three checkpoints. Per-item rescaling reproduces the effect of ablating the late MLPs, and one global temperature does better than either."}
            </>
          }
        />
        <h3 className="mt-8 font-serif text-xl text-fg" id="the-jailbreak-detector-reacts-to-style">
          {"5.3 The jailbreak detector reacts to style"}
        </h3>
        <p className="mt-4">
          {"Laya detects natural jailbreaks with AUROC 0.947. A linear probe can read the attack from layer 0 onward, but activation patching shows that the decision is made late and relayed by the question tokens (Figure 10a–b). Wen et al. ["}<a href="#ref-wen">{"18"}</a>{"] report the same early-decodable, late-decisive timing for prompt-injection compliance in decoder models."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Style test."}</span>{" The same 150 harmless requests are flagged 12.7% of the time when written plainly and 54.0% of the time when written in a jailbreak style (persona, drama, but no override instruction). For the injection question the rates are 2.7% and 42.7%."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Override removal (strict, pre-registered, amended)."}</span>{" gpt-5.6-terra was instructed to delete only the override spans from 145 flagged jailbreaks. The pre-registered deletion-only check accepted just 2 edits, mostly because the model echoed the \"Prompt:\" prefix of our input and left punctuation from deleted words. We logged an amendment before re-scoring (strip the echo and compare words only), under which 104 edits are deletion-only and 62 of those were judged override-free by gpt-5.6-luna. Laya still flags 62 of 62 (100%, Wilson 95% CI 94.2%–100.0%), and the mean log-odds drops by only 0.81. On manual inspection, 3 of these edits keep part of a jailbreak trick; without them laya flags 59 of 59 (CI 93.9%–100.0%). Removing the override barely moves the model (Figure 10c). An earlier and looser version of this test, which reported 82%, is withdrawn because its edits removed far more than the override."}
        </p>
        <p className="mt-4">
          {"Finally, adding the jailbreak direction at the layer-20 [MASK]s raises the share of benign prompts flagged from 23% to 61%. Unlike the intent-tracking late representation described by Wen et al., laya's decision follows surface style."}
        </p>
        <Figure
          id="fig-10"
          n={10}
          src="/paper/laya/fig10.png"
          alt="Jailbreak detection in laya. (a) The attack is linearly decodable from the first layer. (b) Patching shows the decision is made late and carried by the question tokens. (c) Harmless requests written in a jailbreak style are flagged far more often, while jailbreaks with the override removed are still flagged."
          caption={
            <>
              {"Jailbreak detection in laya. (a) The attack is linearly decodable from the first layer. (b) Patching shows the decision is made late and carried by the question tokens. (c) Harmless requests written in a jailbreak style are flagged far more often, while jailbreaks with the override removed are still flagged."}
            </>
          }
        />
        <h3 className="mt-8 font-serif text-xl text-fg" id="training-objective">
          {"5.4 Training objective"}
        </h3>
        <PaperTable
          id="tab-14"
          n={14}
          caption={
            <>
              {"Cross-entropy against RLCD, laya's training loss (three seeds per arm)."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Metric"}</th>
                <th>{"Cross-entropy"}</th>
                <th>{"RLCD"}</th>
                <th>{"Welch p"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Competition, mean |M|"}</td>
                <td>{"0.446 ± 0.041"}</td>
                <td>{"0.374 ± 0.036"}</td>
                <td>{"0.09"}</td>
              </tr>
              <tr>
                <td>{"Calibration error"}</td>
                <td>{"0.129 ± 0.015"}</td>
                <td>{"0.103 ± 0.022"}</td>
                <td>{"0.18"}</td>
              </tr>
              <tr>
                <td>{"Accuracy"}</td>
                <td>{"0.709 ± 0.010"}</td>
                <td>{"0.695 ± 0.007"}</td>
                <td>{"0.12"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <p className="mt-4">
          {"RLCD trends toward less competition and better calibration, but neither difference is significant with three seeds."}
        </p>
      </section>
      <section className="mt-10" id="sec-discussion">
        <h2 className="font-serif text-2xl text-fg">
          {"6 Discussion"}
        </h2>
        <p className="mt-4">
          <span className="font-medium">{"For practitioners."}</span>{" When answer options carry meaningful words, an option-scoring encoder can learn to answer from those words. In our retraining this happened in every seed in which the label word was the reliable cue to the option (planted: 6 of 6), and often even when the option text made it redundant (ModernBERT D1: 4 of 6 seeds; RoBERTa baseline: 4 of 6). Two remedies work in different settings. For a deployed laya checkpoint, the attention guard removes the behaviour at a cost of 1.8 accuracy points on benchmark 1 and is available as a drop-in wrapper. For a new model, randomising label words during training prevented the shortcut in all three ModernBERT seeds we trained; we have not yet tested this in RoBERTa."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Edges versus directions."}</span>{" The guard succeeded where linear direction ablation failed. In laya the shortcut is a routing problem, a question of which token the [MASK] reads, and not a separable feature in the residual stream. Interventions on attention edges may therefore be the right tool for shortcuts of this kind."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"On mechanistic fixes."}</span>{" The guard was derived from laya's internals and transfers to its sibling checkpoints, but not cleanly to every retrained model. The same edge classes carry the label in different layers, and in some seeds they are entangled with normal answering. A fix found in one model is a hypothesis about the next one, not a guarantee."}
        </p>
      </section>
      <section className="mt-10" id="sec-related-work">
        <h2 className="font-serif text-2xl text-fg">
          {"7 Related work"}
        </h2>
        <p className="mt-4">
          <span className="font-medium">{"Shortcuts in NLI."}</span>{" Annotation artifacts let models answer NLI from the hypothesis alone ["}<a href="#ref-gururangan">{"8"}</a>{", "}<a href="#ref-belinkov">{"10"}</a>{"], and syntactic heuristics such as lexical overlap produce right answers for the wrong reasons ["}<a href="#ref-mccoy">{"9"}</a>{"]. Joshi et al. ["}<a href="#ref-joshi">{"11"}</a>{"] distinguish spurious features by their necessity and sufficiency; the label word in laya is sufficient for the answer but never necessary. Our setting differs in that the cue lies in the answer format rather than in the dataset."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Option order and identity."}</span>{" Order and option-ID bias are documented for decoder LLMs ["}<a href="#ref-pezeshkpour">{"12"}</a>{", "}<a href="#ref-zheng">{"13"}</a>{"], and Li and Gao ["}<a href="#ref-li">{"14"}</a>{"] trace GPT-2's preference for \"A\" to MLP value vectors. Set-based prompting ["}<a href="#ref-mcilroy">{"15"}</a>{"] removes order dependence by sharing positions and masking attention between options. Laya shows almost no option-ID bias; its order effect is positional."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Labels and confidence inside models."}</span>{" Label words act as anchors for in-context demonstrations in decoders ["}<a href="#ref-wang">{"16"}</a>{"], which is a different setting from answer-option labels in a scoring encoder. Confidence regulation neurons ["}<a href="#ref-stolfo">{"17"}</a>{"] are argued not to act as a temperature; laya's late MLPs do."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Encoders and seeds."}</span>{" Mechanistic work on encoders is rarer; the closest precedent we found is a circuit in a BERT cross-encoder that computes a semantic variant of BM25 ["}<a href="#ref-lu">{"20"}</a>{"]. Models trained from different seeds can learn different circuits for the same task ["}<a href="#ref-chughtai">{"19"}</a>{"], which matches the partial transfer of our guard."}
        </p>
        <p className="mt-4">
          <span className="font-medium">{"Safety classifiers."}</span>{" Wen et al. ["}<a href="#ref-wen">{"18"}</a>{"] localise prompt-injection compliance in five decoder LLMs and find a late representation that tracks intent. Laya shares their timing but not their robustness to style."}
        </p>
      </section>
      <section className="mt-10" id="sec-limitations">
        <h2 className="font-serif text-2xl text-fg">
          {"8 Limitations"}
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            {"Laya's training data are unknown, so the retraining shows a sufficient cause of the shortcut, not necessarily the actual one."}
          </li>
          <li>
            {"Laya was not built for multiple-choice QA, so Sections 5.1 and 5.2 describe how it handles options, not tuned QA behaviour."}
          </li>
          <li>
            {"Model-written data (contradicting edits, some items, style pairs, override edits) were generated with GPT models, checked by a second GPT model, and audited on random samples by Claude, a model from a different developer (Appendix A). The rows flagged by the audit have not yet been reviewed by a person."}
          </li>
          <li>
            {"Several arms have three seeds (D0, D2, D3 and the regimes of Section 4.1), and the training-time fix rests on three seeds."}
          </li>
          <li>
            {"The direction ablation of Section 4.5 was tested on three models and failed its criterion in all three."}
          </li>
          <li>
            {"The strict override test of Section 5.3 needed an amendment to its filter after the first run; both counts are reported."}
          </li>
        </ul>
      </section>
      <section className="mt-10" id="sec-reproducibility">
        <h2 className="font-serif text-2xl text-fg">
          {"9 Reproducibility"}
        </h2>
        <p className="mt-4">
          {"Environment: laya 0.4.1, transformers 5.19.0, torch 2.14.1, datasets 5.1.0, Modal client 1.6.1, Python 3.12 and H100 GPUs. Every file under "}<code>{"release/results"}</code>{" is produced by "}<code>{"modal run modal_interp.py --task <name>"}</code>{", and this paper is rebuilt from those files by "}<code>{"python release/scripts/build_paper.py"}</code>{". Pre-registrations and outcomes are logged in "}<code>{"NEXT_STEPS_PLAN.md"}</code>{" together with their git commits. Compute at build time: $67.34 metered on Modal, $0.00 billed. OpenAI usage for data generation and checking is listed in "}<code>{"release/README.md"}</code>{". Code, data and results: "}<a href="https://github.com/bruce249/laya-interp" target="_blank" rel="noopener noreferrer">{"github.com/bruce249/laya-interp"}</a>{"."}
        </p>
      </section>
      <section className="mt-10" id="references">
        <h2 className="font-serif text-2xl text-fg">
          {"References"}
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5">
          <li id="ref-warner">
            {"Warner, B., Chaffin, A., Clavié, B., et al. (2024). Smarter, better, faster, longer: A modern bidirectional encoder for fast, memory efficient, and long context finetuning and inference. arXiv:2412.13663."}
          </li>
          <li id="ref-roberta">
            {"Liu, Y., Ott, M., Goyal, N., et al. (2019). RoBERTa: A robustly optimized BERT pretraining approach. arXiv:1907.11692."}
          </li>
          <li id="ref-mnli">
            {"Williams, A., Nangia, N., and Bowman, S. (2018). A broad-coverage challenge corpus for sentence understanding through inference. NAACL."}
          </li>
          <li id="ref-glue">
            {"Wang, A., Singh, A., Michael, J., Hill, F., Levy, O., and Bowman, S. (2018). GLUE: A multi-task benchmark and analysis platform for natural language understanding. BlackboxNLP."}
          </li>
          <li id="ref-boolq">
            {"Clark, C., Lee, K., Chang, M.-W., Kwiatkowski, T., Collins, M., and Toutanova, K. (2019). BoolQ: Exploring the surprising difficulty of natural yes/no questions. NAACL."}
          </li>
          <li id="ref-multirc">
            {"Khashabi, D., Chaturvedi, S., Roth, M., Upadhyay, S., and Roth, D. (2018). Looking beyond the surface: A challenge set for reading comprehension over multiple sentences. NAACL."}
          </li>
          <li id="ref-geirhos">
            {"Geirhos, R., Jacobsen, J.-H., Michaelis, C., et al. (2020). Shortcut learning in deep neural networks. Nature Machine Intelligence 2, 665–673."}
          </li>
          <li id="ref-gururangan">
            {"Gururangan, S., Swayamdipta, S., Levy, O., Schwartz, R., Bowman, S., and Smith, N. A. (2018). Annotation artifacts in natural language inference data. NAACL."}
          </li>
          <li id="ref-mccoy">
            {"McCoy, T., Pavlick, E., and Linzen, T. (2019). Right for the wrong reasons: Diagnosing syntactic heuristics in natural language inference. ACL."}
          </li>
          <li id="ref-belinkov">
            {"Belinkov, Y., Poliak, A., Shieber, S., Van Durme, B., and Rush, A. (2019). Don't take the premise for granted: Mitigating artifacts in natural language inference. ACL."}
          </li>
          <li id="ref-joshi">
            {"Joshi, N., Pan, X., and He, H. (2022). Are all spurious features in natural language alike? An analysis through a causal lens. EMNLP."}
          </li>
          <li id="ref-pezeshkpour">
            {"Pezeshkpour, P. and Hruschka, E. (2024). Large language models sensitivity to the order of options in multiple-choice questions. Findings of NAACL."}
          </li>
          <li id="ref-zheng">
            {"Zheng, C., Zhou, H., Meng, F., Zhou, J., and Huang, M. (2024). Large language models are not robust multiple choice selectors. ICLR."}
          </li>
          <li id="ref-li">
            {"Li, R. and Gao, Y. (2025). Anchored answers: Unravelling positional bias in GPT-2's multiple-choice questions. Findings of ACL. arXiv:2405.03205."}
          </li>
          <li id="ref-mcilroy">
            {"McIlroy-Young, R., Brown, K., Olson, C., Zhang, L., and Dwork, C. (2024). Order-independence without fine tuning. NeurIPS. arXiv:2406.06581."}
          </li>
          <li id="ref-wang">
            {"Wang, L., Li, L., Dai, D., et al. (2023). Label words are anchors: An information flow perspective for understanding in-context learning. EMNLP."}
          </li>
          <li id="ref-stolfo">
            {"Stolfo, A., Wu, B., Gurnee, W., Belinkov, Y., Song, X., Sachan, M., and Nanda, N. (2024). Confidence regulation neurons in language models. NeurIPS."}
          </li>
          <li id="ref-wen">
            {"Wen, Liu, Yang, Sakuma, and Sun (2026). Where do LLMs decide to break the rules? Mechanistic localization of prompt injection compliance. arXiv:2609.37737."}
          </li>
          <li id="ref-chughtai">
            {"Chughtai, B., Chan, L., and Nanda, N. (2023). A toy model of universality: Reverse engineering how networks learn group operations. ICML."}
          </li>
          <li id="ref-lu">
            {"Lu, M., Chen, C., and Eickhoff, C. (2025). Pathway to relevance: How cross-encoders implement a semantic variant of BM25. arXiv:2502.04645."}
          </li>
        </ol>
      </section>
      <section className="mt-10" id="sec-appendix-a">
        <h2 className="font-serif text-2xl text-fg">
          {"Appendix A: Audit of model-written data"}
        </h2>
        <PaperTable
          id="tab-15"
          n={15}
          caption={
            <>
              {"Audit of random samples of model-written data. Judged by Claude, independently of the GPT models that generated and checked the data; flagged rows are marked for human review in "}<code>{"audit/claude_filled/"}</code>{"."}
            </>
          }
        >
          <table className="paper-table tabular-nums">
            <thead>
              <tr>
                <th>{"Sheet (random sample)"}</th>
                <th>{"Check"}</th>
                <th>{"Pass"}</th>
                <th>{"Rate (95% Wilson CI)"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{"Contradicting edits, benchmark 1"}</td>
                <td>{"edit flips the answer"}</td>
                <td>{"56/60"}</td>
                <td>{"93% (84%–97%)"}</td>
              </tr>
              <tr>
                <td>{"Contradicting edits, benchmark 2"}</td>
                <td>{"edit flips the answer"}</td>
                <td>{"58/60"}</td>
                <td>{"97% (89%–99%)"}</td>
              </tr>
              <tr>
                <td>{"Contradicting edits, BoolQ"}</td>
                <td>{"edit flips the answer"}</td>
                <td>{"57/60"}</td>
                <td>{"95% (86%–98%)"}</td>
              </tr>
              <tr>
                <td>{"GPT-written C3 items"}</td>
                <td>{"gold answer correct"}</td>
                <td>{"60/60"}</td>
                <td>{"100% (94%–100%)"}</td>
              </tr>
              <tr>
                <td>{"GPT-written C3 items"}</td>
                <td>{"answer determined by passage"}</td>
                <td>{"57/60"}</td>
                <td>{"95% (86%–98%)"}</td>
              </tr>
              <tr>
                <td>{"Style pairs"}</td>
                <td>{"same request"}</td>
                <td>{"141/150"}</td>
                <td>{"94% (89%–97%)"}</td>
              </tr>
              <tr>
                <td>{"Style pairs"}</td>
                <td>{"no override in styled version"}</td>
                <td>{"150/150"}</td>
                <td>{"100% (98%–100%)"}</td>
              </tr>
              <tr>
                <td>{"Jailbreak rewrites (first version)"}</td>
                <td>{"override removed"}</td>
                <td>{"53/60"}</td>
                <td>{"88% (78%–94%)"}</td>
              </tr>
              <tr>
                <td>{"Jailbreak rewrites (first version)"}</td>
                <td>{"only the override removed"}</td>
                <td>{"21/60"}</td>
                <td>{"35% (24%–48%)"}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <p className="mt-4">
          {"Only the first-version jailbreak rewrites failed the audit. That result was withdrawn and replaced by the strict test of Section 5.3."}
        </p>
      </section>
      <section className="mt-10" id="sec-appendix-b">
        <h2 className="font-serif text-2xl text-fg">
          {"Appendix B: Revisions made during the study"}
        </h2>
        <p className="mt-4">
          {"The following claims changed as evidence came in. We list them so that readers of earlier drafts can see what was revised."}
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            {"An early-timing account of the label read was wrong; the read is redundant and mostly late."}
          </li>
          <li>
            {"\"A confidence regulator\" became \"a logit amplifier\" under the pre-registered rule."}
          </li>
          <li>
            {"A single-seed finding of 20% less competition under RLCD became a non-significant trend with three seeds."}
          </li>
          <li>
            {"\"Label-following comes from the training data\" became \"this kind of training can create it\"."}
          </li>
          <li>
            {"\"Same behaviour, different mechanisms\" became \"the same edge classes in different layers, partly entangled with answering\"."}
          </li>
          <li>
            {"The prediction that a redundant label would go unused was wrong (4 of 6 seeds use it)."}
          </li>
          <li>
            {"The prediction that an all-layer guard would transfer to five of six retrained seeds failed (3 of 6)."}
          </li>
          <li>
            {"\"Laya flags 82% after only the override is removed\" was withdrawn after the audit and replaced by the strict test."}
          </li>
          <li>
            {"\"The training-origin result replicates in RoBERTa\", based on three seeds, was wrong: with six seeds most RoBERTa baselines also learn the shortcut."}
          </li>
          <li>
            {"The planned position-versus-token test turned out to be an identity by construction rather than evidence."}
          </li>
        </ul>
      </section>
    </article>
  )
}
