import type { ReactNode } from 'react'
import Cite from './Cite'
import Math from './Math'
import OverviewFigure from './OverviewFigure'

function TopK() {
  return (
    <>
      top-<Math tex="k" />
    </>
  )
}

function Figure({
  id,
  n,
  src,
  alt,
  caption,
  className = 'w-full',
}: {
  id: string
  n: number
  src: string
  alt: string
  caption: ReactNode
  className?: string
}) {
  return (
    <figure id={id} className="my-8">
      <img src={src} alt={alt} className={`${className} mx-auto h-auto`} />
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

function best(text: string) {
  return <span className="paper-best">{text}</span>
}

const refs: { id: number; body: ReactNode }[] = [
  {
    id: 1,
    body: (
      <>
        Will Cai, Tianneng Shi, Xuandong Zhao, and Dawn Song. Are you getting
        what you pay for? auditing model substitution in LLM APIs. In{' '}
        <em>Advances in Neural Information Processing Systems (NeurIPS)</em>,
        2025. arXiv:2504.04715.
      </>
    ),
  },
  {
    id: 2,
    body: (
      <>
        KD Conway, Cathie So, Xiaohang Yu, and Kartin Wong. opML: Optimistic
        machine learning on blockchain. <em>arXiv preprint arXiv:2401.17555</em>,
        2024.
      </>
    ),
  },
  {
    id: 3,
    body: (
      <>
        Tim Dettmers, Mike Lewis, Younes Belkada, and Luke Zettlemoyer.
        LLM.int8(): 8-bit matrix multiplication for transformers at scale. In{' '}
        <em>Advances in Neural Information Processing Systems (NeurIPS)</em>,
        2022.
      </>
    ),
  },
  {
    id: 4,
    body: (
      <>
        Tim Dettmers, Artidoro Pagnoni, Ari Holtzman, and Luke Zettlemoyer.
        QLoRA: Efficient finetuning of quantized LLMs. In{' '}
        <em>Advances in Neural Information Processing Systems (NeurIPS)</em>,
        2023.
      </>
    ),
  },
  {
    id: 5,
    body: (
      <>
        Ning Ding, Yulin Chen, Bokai Xu, Yujia Qin, Zhi Zheng, Shengding Hu,
        Zhiyuan Liu, Maosong Sun, and Bowen Zhou. Enhancing chat language
        models by scaling high-quality instructional conversations. In{' '}
        <em>
          Proceedings of the Conference on Empirical Methods in Natural Language
          Processing (EMNLP)
        </em>
        , 2023.
      </>
    ),
  },
  {
    id: 6,
    body: (
      <>
        Irena Gao, Percy Liang, and Carlos Guestrin. Model equality testing:
        Which model is this API serving? In{' '}
        <em>International Conference on Learning Representations (ICLR)</em>,
        2025. arXiv:2410.20247.
      </>
    ),
  },
  {
    id: 7,
    body: (
      <>
        Zahra Ghodsi, Tianyu Gu, and Siddharth Garg. SafetyNets: Verifiable
        execution of deep neural networks on an untrusted cloud. In{' '}
        <em>Advances in Neural Information Processing Systems (NeurIPS)</em>,
        2017.
      </>
    ),
  },
  {
    id: 8,
    body: (
      <>
        Horace He and Thinking Machines Lab. Defeating nondeterminism in LLM
        inference. Thinking Machines Lab: Connectionism, 2025.
      </>
    ),
  },
  {
    id: 9,
    body: (
      <>
        Edward J. Hu, Yelong Shen, Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi Li,
        Shean Wang, Lu Wang, and Weizhu Chen. LoRA: Low-rank adaptation of
        large language models. In{' '}
        <em>International Conference on Learning Representations (ICLR)</em>,
        2022.
      </>
    ),
  },
  {
    id: 10,
    body: (
      <>
        Jack Min Ong et al. TOPLOC: A locality sensitive hashing scheme for
        trustless verifiable inference. In{' '}
        <em>
          Proceedings of the 42nd International Conference on Machine Learning
          (ICML)
        </em>
        , volume 267 of <em>PMLR</em>, 2025. arXiv:2501.16007.
      </>
    ),
  },
  {
    id: 11,
    body: (
      <>
        Qwen Team. Qwen2.5 technical report.{' '}
        <em>arXiv preprint arXiv:2412.15115</em>, 2024.
      </>
    ),
  },
  {
    id: 12,
    body: (
      <>
        Haochen Sun, Jason Li, and Hongyang Zhang. zkLLM: Zero knowledge proofs
        for large language models. In{' '}
        <em>
          Proceedings of the ACM SIGSAC Conference on Computer and
          Communications Security (CCS)
        </em>
        , 2024. arXiv:2404.16109.
      </>
    ),
  },
  {
    id: 13,
    body: (
      <>
        Yifan Sun, Yuhang Li, Yue Zhang, Yuchen Jin, and Huan Zhang. SVIP:
        Towards verifiable inference of open-source large language models. In{' '}
        <em>Advances in Neural Information Processing Systems (NeurIPS)</em>,
        2025. arXiv:2410.22307.
      </>
    ),
  },
  {
    id: 14,
    body: (
      <>
        Rohan Taori, Ishaan Gulrajani, Tianyi Zhang, Yann Dubois, Xuechen Li,
        Carlos Guestrin, Percy Liang, and Tatsunori B. Hashimoto. Stanford
        Alpaca: An instruction-following LLaMA model.{' '}
        <a
          href="https://github.com/tatsu-lab/stanford_alpaca"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/tatsu-lab/stanford_alpaca
        </a>
        , 2023.
      </>
    ),
  },
  {
    id: 15,
    body: (
      <>
        Jason Teutsch and Christian Reitwießner. A scalable verification
        solution for blockchains. <em>arXiv preprint arXiv:1908.04756</em>, 2019.
      </>
    ),
  },
  {
    id: 16,
    body: (
      <>
        Florian Tramèr and Dan Boneh. Slalom: Fast, verifiable and private
        execution of neural networks in trusted hardware. In{' '}
        <em>International Conference on Learning Representations (ICLR)</em>,
        2019.
      </>
    ),
  },
]

export default function ProofOfWeights() {
  return (
    <article className="paper">
      <h1 className="font-serif text-3xl tracking-tight text-fg sm:text-4xl">
        Proof of Weights: Per-Layer Activation Profiles for Attributing Weight
        Tampering in Verifiable LLM Inference
      </h1>
      <p className="mt-6">
        Vignesh Kanike
        <br />
        Indian Institute of Technology Delhi
        <br />
        <a href="mailto:ms1240669@iitd.ac.in">ms1240669@iitd.ac.in</a>
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-fg">Abstract</h2>
        <p className="mt-4">
          This paper addresses the problem of verifying that an inference
          provider serves the open-weight model it was paid to serve, rather
          than a quantised or fine-tuned copy. TOPLOC (Ong et al., ICML 2025)
          commits to the <TopK /> entries of the last hidden state and checks
          them with a single prefill, using thresholds loose enough to absorb
          honest numerical noise. However, honest providers that use a different
          attention kernel produce last-layer disagreements as large as those of
          8-bit and 4-bit quantisation, so no single threshold accepts them and
          still detects the modification. Our key observation is that kernel
          noise and weight changes differ in <em>where</em> they appear in the
          network: kernel noise is largest in the early layers and fades with
          depth, quantisation is roughly constant across layers, and fine-tuning
          grows with depth. We therefore compare <TopK /> activations at every
          decoder layer and classify the resulting per-layer disagreement
          profile, which both detects tampering and identifies the modification.
          On Qwen2.5-1.5B-Instruct with four modifications and three honest
          serving configurations, the last-hidden check detects 0% of quantised
          and 55–60% of fine-tuned sequences at a 2% false-positive rate,
          whereas the per-layer profile reaches 99.3% five-class balanced
          accuracy and detects 90–100% of tampered sequences at a 1%
          false-positive rate. Restricted to the last layer, the same classifier
          falls to 78.0%. The profile does not transfer to an honest kernel
          absent from training, and we report this failure. We also attach the
          classifier to a staking contract that records the identified
          modification on chain.
        </p>
      </section>

      <section className="mt-10" id="sec-intro">
        <h2 className="font-serif text-2xl text-fg">1 Introduction</h2>
        <p className="mt-4">
          Open-weight language models are increasingly served by third parties,
          including commercial APIs, decentralised compute networks and
          peer-to-peer inference markets. The client names a model and pays per
          token, but cannot see which weights produced the answer. A provider
          can reduce memory or compute by quantising the model, or serve a
          fine-tuned copy, and the returned text still reads well. This is not
          hypothetical: Gao et al. <Cite n={6} /> found that 11 of 31 commercial
          endpoints for four Llama models served an output distribution
          different from the reference weights.
        </p>
        <p className="mt-4">
          Verifying the served weights is difficult because the check must be
          cheap enough to run on live traffic. Zero-knowledge proofs of
          inference <Cite n={12} /> are exact but take minutes per query.
          Trusted execution environments <Cite n={[1, 16]} /> are fast but move
          trust to the hardware vendor. Statistical tests on the output text{' '}
          <Cite n={6} /> need many samples per prompt and lose power against
          small changes <Cite n={1} />. TOPLOC <Cite n={10} /> offers a cheaper
          route: the provider commits to the <TopK /> values of the last hidden
          state every 32 tokens, and a validator checks them with one prefill
          pass. Because bf16 arithmetic differs across kernels and GPUs, the
          check accepts small disagreements and flags a sequence only when its
          exponent or mantissa disagreements exceed fixed thresholds. Its
          authors report perfect separation of model swaps but note that small
          fine-tuning updates are harder to detect, and leave them open.
        </p>
        <p className="mt-4">
          We find that the difficulty lies in the thresholds rather than in
          fine-tuning alone. An honest provider may use a different attention
          kernel from the validator. On Qwen2.5-1.5B-Instruct, switching from
          SDPA to eager attention produces about six times the last-layer
          exponent disagreement of a batch-size change, more than 8-bit or 4-bit
          quantisation produces. Thresholds that accept eager-kernel traffic
          therefore cannot detect quantisation, and in our measurements they
          detect 0% of quantised and 55–60% of fine-tuned sequences. Tightening
          the thresholds detects every modification but rejects every honest
          eager-kernel provider. At the last layer, honest kernel variation and
          weight tampering are not separable by magnitude.
        </p>

        <Figure
          id="fig-profiles"
          n={1}
          src="/paper/profiles.png"
          alt="Per-layer top-k disagreement profiles for honest kernels and tampered weights"
          caption={
            <>
              Honest kernel noise and weight changes have different depth
              profiles. Mean <TopK /> disagreement with the reference model at
              each decoder layer (Qwen2.5-1.5B-Instruct, 200 prompts). Grey:
              honest serving configurations. Colour: tampered weights. At layer
              27, eager-attention noise overlaps quantisation; in the early
              layers it does not.
            </>
          }
        />

        <p className="mt-4">
          Our approach is based on the observation in Figure 1: the two sources
          of disagreement differ in where they appear in the network.
          Eager-attention noise is largest in the early layers and fades with
          depth; quantisation changes every layer by a roughly constant amount;
          LoRA and full fine-tuning start near zero and grow with depth. We
          therefore compute TOPLOC&apos;s disagreement statistics at all 28
          decoder layers instead of the last one, and feed the resulting
          112-dimensional profile to a linear classifier trained on honest and
          tampered traffic. Unlike a threshold on the last layer, the classifier
          uses the shape of the profile, so it can accept a noisy honest kernel
          and still detect a quieter weight change. The same profile also
          identifies <em>which</em> modification was made, which a staking
          protocol can record when it slashes a provider.
        </p>
        <p className="mt-4">
          We evaluate on four modifications (8-bit and 4-bit quantisation, a
          merged LoRA adapter and a 300-step full fine-tune) and three honest
          configurations (eager attention, batch 4, and batch 4 with padding),
          with cross-validation grouped by prompt. The per-layer profile reaches
          99.3% five-class balanced accuracy and detects 90–100% of tampered
          sequences at a 1% false-positive rate. The last layer alone reaches
          78.0%, and the first 14 layers alone 98.6%.
        </p>
        <p className="mt-4">
          In summary, this paper makes the following contributions:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            A calibrated evaluation of the TOPLOC last-hidden check showing
            that, with mixed honest kernels, it cannot detect quantisation and
            detects about half of light fine-tuning, together with the
            measurement that explains why.
          </li>
          <li>
            A per-layer disagreement profile and classifier that detect and
            attribute four weight modifications while accepting two attention
            kernels, with ablations locating the signal in the early and middle
            layers.
          </li>
          <li>
            An honest account of its boundary: the classifier rejects an honest
            kernel it was not trained on.
          </li>
          <li>
            A staking contract that records the attributed modification on
            chain, and serving-cost measurements showing that quantisation was
            slower than bf16 on our GPU.
          </li>
        </ul>
        <p className="mt-4">
          Code and result files are available at{' '}
          <a
            href="https://github.com/bruce249/proof-of-weights"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/bruce249/proof-of-weights
          </a>
          .
        </p>
      </section>

      <section className="mt-10" id="sec-related">
        <h2 className="font-serif text-2xl text-fg">2 Related work</h2>
        <p className="mt-4">
          <span className="font-medium">Verifiable inference.</span> Proof-based
          methods guarantee correct execution. zkLLM <Cite n={12} /> proves a
          13B-parameter inference in about 15 minutes, and SafetyNets{' '}
          <Cite n={7} /> uses interactive proofs for smaller networks.
          Hardware-based methods such as Slalom <Cite n={16} /> and TEE-based
          auditing <Cite n={1} /> are faster but rely on the chip vendor. Both
          lines verify the computation exactly, which is more than detecting a
          weight change requires and costs more than serving can absorb.
        </p>
        <p className="mt-4">
          <span className="font-medium">Detecting model substitution.</span>{' '}
          Model equality testing <Cite n={6} /> runs a two-sample test on output
          text; Cai et al. <Cite n={1} /> show that such tests need many queries
          and that log-probability tests are confounded by inference
          nondeterminism. SVIP <Cite n={13} /> trains a proxy task on returned
          hidden states to detect substitution with a smaller model. TOPLOC{' '}
          <Cite n={10} /> commits to last-layer <TopK /> activations and checks
          them with fixed thresholds. These methods target model swaps; we
          target quantisation and fine-tuning of the same model, where the
          change is smaller and must be separated from honest noise.
        </p>
        <p className="mt-4">
          <span className="font-medium">
            Honest nondeterminism and enforcement.
          </span>{' '}
          LLM inference is not bitwise reproducible across batch sizes, padding
          and kernels <Cite n={8} />, so any activation check must tolerate some
          disagreement; we show that the attention kernel dominates this noise.
          Optimistic protocols such as Truebit <Cite n={15} /> and opML{' '}
          <Cite n={2} /> accept results by default and resolve disputes on
          challenge. TOPLOC specifies no stake or penalty; we add a minimal
          staking contract that records the attributed modification.
        </p>
      </section>

      <section className="mt-10" id="sec-setting">
        <h2 className="font-serif text-2xl text-fg">3 Problem setting</h2>
        <p className="mt-4">
          <span className="font-medium">Parties.</span> A provider commits to
          model weights <Math tex="\theta" /> (a Hugging Face repository at a
          pinned revision), stakes tokens, and serves requests, posting a proof
          hash on chain for each response. A trusted validator samples proofs
          and recomputes activations with <Math tex="\theta" />. Anyone can
          challenge a proof by posting a bond.
        </p>
        <p className="mt-4">
          <span className="font-medium">Adversary.</span> A dishonest provider
          serves <Math tex="\tilde\theta" />, a quantised or fine-tuned version
          of <Math tex="\theta" />, and builds its proofs honestly from{' '}
          <Math tex="\tilde\theta" />. We do not consider forged activations,
          swapped prompts or speculative decoding, which TOPLOC already
          identifies as out of reach.
        </p>
        <p className="mt-4">
          <span className="font-medium">Honest variation.</span> An honest
          provider serves <Math tex="\theta" /> but may use a different
          attention kernel, batch size or padding from the validator. The check
          must accept this traffic.
        </p>
        <p className="mt-4">
          <span className="font-medium">TOPLOC check.</span> At one position per
          32 decode steps, TOPLOC <Cite n={10} /> keeps the{' '}
          <Math tex="k{=}128" /> largest-magnitude entries of the last hidden
          state. The validator recomputes them and, over corresponding values,
          counts exponent mismatches and computes the mean and median mantissa
          difference. A sequence is flagged if the maximum of any statistic over
          its checkpoints exceeds its threshold; the published thresholds are{' '}
          <Math tex="T_{\exp}{=}38" />, <Math tex="T_{\mathrm{mean}}{=}10" /> and{' '}
          <Math tex="T_{\mathrm{median}}{=}8" />.
        </p>
      </section>

      <section className="mt-10" id="sec-method">
        <h2 className="font-serif text-2xl text-fg">4 Method</h2>
        <p className="mt-4">
          Given a served sequence, our goal is to decide whether it came from{' '}
          <Math tex="\theta" /> and, if not, which modification produced it.
          Figure 2 shows the pipeline. Section 4.1 extends TOPLOC&apos;s
          comparison from the last layer to every layer, Section 4.2 classifies
          the resulting profile, and Section 4.3 records the result on chain.
        </p>

        <OverviewFigure />

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-profile">
          4.1 Per-layer disagreement profile
        </h3>
        <p className="mt-4">
          The last layer alone cannot separate honest kernel noise from
          quantisation (Section 1), but the two differ across depth (Figure 1).
          We therefore record the same <TopK /> statistics at every decoder
          layer.
        </p>
        <p className="mt-4">
          Let <Math tex="h^{(\ell)}_t \in \mathbb{R}^{1536}" /> be the output of
          decoder layer <Math tex="\ell \in \{0,\dots,27\}" /> at position{' '}
          <Math tex="t" />. At each checkpoint{' '}
          <Math tex="t_c = |\mathrm{prompt}| + 32c" />, <Math tex="c = 0,\dots,7" />
          , we take the indices <Math tex="I" /> and values <Math tex="v" /> of
          the <Math tex="k{=}128" /> largest-magnitude entries of{' '}
          <Math tex="h^{(\ell)}_{t_c}" />, for both the model under test and the
          reference <Math tex="\theta" />, each running a prefill over the same
          tokens. For each checkpoint and layer we compute the index overlap and
          TOPLOC&apos;s three statistics:
        </p>
        <Math
          display
          tex={`\\begin{align*}
  f_{\\mathrm{idx}} &= 1 - \\tfrac{1}{k}\\,|\\tilde{I} \\cap I|, &
  f_{\\mathrm{exp}} &= \\textstyle\\sum_{i} \\mathbb{1}[\\operatorname{exp}(\\tilde{v}_i) \\neq \\operatorname{exp}(v_i)], \\\\
  f_{\\mathrm{mean}} &= \\operatorname{mean}_i |\\operatorname{mant}(\\tilde{v}_i) - \\operatorname{mant}(v_i)|, &
  f_{\\mathrm{med}} &= \\operatorname{median}_i |\\operatorname{mant}(\\tilde{v}_i) - \\operatorname{mant}(v_i)|,
\\end{align*}`}
        />
        <p>
          where <Math tex="\operatorname{exp}" /> and{' '}
          <Math tex="\operatorname{mant}" /> are the float32 exponent and
          mantissa fields and <Math tex="i" /> indexes rank. Averaging over the
          eight checkpoints gives the profile{' '}
          <Math tex="x \in \mathbb{R}^{4 \times 28}" />.
        </p>
        <p className="mt-4">
          Because every layer is compared with the same statistics as TOPLOC,
          the last row of <Math tex="x" /> is the information the original check
          uses, and the other 27 rows add the depth information that separates
          the sources of disagreement.
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-classifier">
          4.2 Attribution classifier
        </h3>
        <p className="mt-4">
          A fixed threshold on each feature would again force a single
          trade-off between honest noise and detection. Instead, we train a
          multinomial logistic regression with balanced class weights on
          profiles labelled as clean or as one of four modifications, with
          features <Math tex="z" />-scored on the training data. A linear model
          keeps the decision inspectable and needs only a few hundred labelled
          sequences per class. The predicted class gives detection (
          <Math tex="\hat y \neq 0" />) and attribution in one step, and{' '}
          <Math tex="1 - P(\mathrm{clean})" /> gives a detection score whose
          threshold sets the false-positive rate.
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-contract">
          4.3 Enforcement contract
        </h3>
        <p className="mt-4">
          A detection is useful to a market only if it has consequences.{' '}
          <span className="font-mono text-[0.95em]">ProofOfWeights</span>{' '}
          (Solidity, 142 lines) stores each provider&apos;s model hash, stake
          and list of tamper classes, and each proof&apos;s prompt hash, proof
          hash and timestamp. A challenge requires a bond and must arrive within
          two hours; only the validator can resolve it. If upheld, the stake
          goes half to the challenger and half to the validator, the bond is
          returned, and the class is appended (0 clean, 1 8-bit, 2 4-bit, 3
          LoRA, 4 fine-tune, 255 unattributed); otherwise the bond goes to the
          validator. If the validator samples a fraction <Math tex="p" /> of
          proofs, a provider saving <Math tex="\Delta" /> per request is
          deterred when <Math tex="\Delta < pS" /> for stake <Math tex="S" />.
        </p>
      </section>

      <section className="mt-10" id="sec-experiments">
        <h2 className="font-serif text-2xl text-fg">5 Experiments</h2>
        <p className="mt-4">
          We answer four questions: how the TOPLOC check performs under honest
          kernel variation (Section 5.2); whether the per-layer profile detects
          and attributes the modifications (Section 5.3); which parts of the
          profile matter (Section 5.4); and where it fails (Section 5.5).
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-exp-setup">
          5.1 Setup
        </h3>
        <p className="mt-4">
          <span className="font-medium">Model and data.</span> We use
          Qwen2.5-1.5B-Instruct <Cite n={11} /> in bf16 (revision{' '}
          <span className="font-mono text-[0.95em]">989aa79</span>) and 200
          long-answer prompts from UltraChat-200k <Cite n={5} />. Generation is
          greedy for 256 tokens with EOS suppressed, so every sequence has eight
          checkpoints; in a 20-prompt probe without suppression, 19 reached 256
          tokens anyway.
        </p>
        <p className="mt-4">
          <span className="font-medium">Modifications.</span> Table 1 lists the
          four tampered models. The trained variants use 2,400 Alpaca{' '}
          <Cite n={14} /> rows, disjoint from evaluation, with effective batch 8
          and sequence length 512.
        </p>

        <PaperTable
          id="tab-variants"
          n={1}
          caption="Tampered models. All four produce coherent text on a sanity prompt."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Variant</th>
                <th>Construction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>8-bit</td>
                <td>
                  bitsandbytes LLM.int8() <Cite n={3} />, outlier threshold 6.0
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>4-bit</td>
                <td>
                  bitsandbytes NF4 <Cite n={4} />, bf16 compute
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>LoRA</td>
                <td>
                  <Math tex="r{=}16" />, <Math tex="\alpha{=}32" /> on Q/K/V, lr{' '}
                  <Math tex="2{\times}10^{-4}" />, 300 steps, merged{' '}
                  <Cite n={9} />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Fine-tune</td>
                <td>
                  all weights, lr <Math tex="10^{-5}" />, 8-bit AdamW, 300 steps
                </td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <p className="mt-4">
          <span className="font-medium">Honest traffic.</span> The reference
          uses SDPA attention at batch 1. Honest traffic is the reference model
          with one change: eager attention, batch 4, or batch 4 with 17 extra
          padding tokens.
        </p>
        <p className="mt-4">
          <span className="font-medium">Protocol.</span> For the last-hidden
          check we use <span className="font-mono text-[0.95em]">toploc</span>{' '}
          0.1.6 unchanged (<Math tex="k{=}128" />, one proof per 32 tokens),
          calibrate thresholds as 99th percentiles on prompts 0–99, and report
          false-positive rate (FPR) on prompts 100–199. For the classifier we
          use 5-fold cross-validation grouped by prompt, so no prompt appears in
          both training and test data, and report out-of-fold balanced accuracy.
          Each honest configuration contributes its own 200 samples (600 honest,
          800 tampered). In the <em>matched</em> setting both models prefill the
          tampered model&apos;s output, as a validator would; in the{' '}
          <em>shared</em> setting both prefill the reference output. Hardware is
          one NVIDIA A10G with PyTorch 2.11, CUDA 12.8 and TF32 off.
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-exp-baseline">
          5.2 The last-hidden check under honest kernel variation
        </h3>
        <p className="mt-4">
          Table 2 evaluates the TOPLOC check with three sets of thresholds.
          Calibrated on all three honest configurations, it keeps a 2% FPR but
          detects no quantised sequence and 55–60% of fine-tuned ones. The
          published thresholds flag 23% of honest prompts. Calibrated without
          the eager kernel, the thresholds drop to{' '}
          <Math tex="(7.01, 1.80, 1.0)" />; every tampered sequence is then
          flagged, but all 200 eager-kernel prompts are rejected and the
          held-out FPR rises to 4%. The cause is the size of eager-kernel noise
          (Table 3): its last-layer exponent mismatches exceed those of 8-bit
          and 4-bit quantisation (medians 9 and 20). A re-run of the calibration
          on the same instance reproduced the first row exactly.
        </p>

        <PaperTable
          id="tab-recal"
          n={2}
          caption={
            <>
              TOPLOC last-hidden check under three sets of thresholds (
              <Math tex="T_{\exp}" />, <Math tex="T_{\mathrm{mean}}" />,{' '}
              <Math tex="T_{\mathrm{median}}" />
              ). FPR on held-out prompts of the calibration configurations; other
              columns over all 200 prompts.
            </>
          }
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th />
                <th />
                <th />
                <th colSpan={4} className="text-center">
                  Detection (%) <Math tex="\uparrow" />
                </th>
              </tr>
              <tr>
                <th>Calibrated on</th>
                <th>
                  FPR (%) <Math tex="\downarrow" />
                </th>
                <th>
                  Eager rejected (%) <Math tex="\downarrow" />
                </th>
                <th>8-bit</th>
                <th>4-bit</th>
                <th>LoRA</th>
                <th>Fine-tune</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  All three configs <Math tex="(46.02, 25.80, 20.0)" />
                </td>
                <td>{best('2')}</td>
                <td>{best('6')}</td>
                <td>0</td>
                <td>0</td>
                <td>59.5</td>
                <td>54.5</td>
              </tr>
              <tr>
                <td>
                  Batch-shape only <Math tex="(7.01, 1.80, 1.0)" />
                </td>
                <td>4</td>
                <td>100</td>
                <td>{best('100')}</td>
                <td>{best('100')}</td>
                <td>{best('100')}</td>
                <td>{best('100')}</td>
              </tr>
              <tr>
                <td>
                  Published <Math tex="(38, 10, 8)" />
                </td>
                <td>23</td>
                <td>69</td>
                <td>0</td>
                <td>50</td>
                <td>{best('100')}</td>
                <td>{best('100')}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <PaperTable
          id="tab-noise"
          n={3}
          caption="Honest disagreement on the last-hidden statistics, mean over 200 prompts of the per-sequence maximum."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Honest configuration</th>
                <th>Exponent mismatches</th>
                <th>Mantissa mean</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eager attention</td>
                <td>25.55</td>
                <td>14.22</td>
              </tr>
              <tr>
                <td>Batch 4</td>
                <td>4.35</td>
                <td>1.35</td>
              </tr>
              <tr>
                <td>Batch 4 + 17 padding</td>
                <td>4.31</td>
                <td>1.37</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-exp-main">
          5.3 Detection and attribution with per-layer profiles
        </h3>
        <p className="mt-4">
          The per-layer classifier accepts both kernels and still detects the
          modifications. Table 4 shows 99.3% balanced accuracy: all 200
          fine-tuned sequences are attributed correctly and one tampered
          sequence (8-bit) is called clean. The remaining errors are honest
          eager traffic labelled as quantised (13 of 200, 6.5%), which matches
          the early-layer overlap in Figure 1; each batch-shape configuration
          has a 0.5% FPR. As a detector, the classifier catches 90% of 8-bit and
          100% of the other modifications at 1% FPR over all 600 honest
          sequences (Figures 3 and 4; AUC 0.991 and 0.998). The comparison with
          Table 2 is not exact, since the last-hidden check compares decode
          against prefill while both sides of the profile are prefills; Section
          5.4 compares layers within one protocol.
        </p>

        <PaperTable
          id="tab-confusion"
          n={4}
          caption="Out-of-fold confusion matrix of the per-layer classifier, matched text. Rows: true source; columns: predicted class."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th />
                <th>Clean</th>
                <th>8-bit</th>
                <th>4-bit</th>
                <th>LoRA</th>
                <th>Fine-tune</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Honest: eager attention</td>
                <td>{best('187')}</td>
                <td>8</td>
                <td>5</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Honest: batch 4</td>
                <td>{best('199')}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Honest: batch 4 + padding</td>
                <td>{best('199')}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>8-bit</td>
                <td>1</td>
                <td>{best('199')}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>4-bit</td>
                <td>0</td>
                <td>0</td>
                <td>{best('200')}</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>LoRA</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>{best('199')}</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Fine-tune</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{best('200')}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <div className="grid gap-8 sm:grid-cols-2">
          <Figure
            id="fig-detection"
            n={3}
            src="/paper/detection.png"
            alt="Detection rate of the last-hidden TOPLOC check versus the per-layer classifier"
            caption={
              <>
                Detection rate. Hatched: last-hidden check with
                all-configuration thresholds. Solid: per-layer classifier at 1%
                FPR.
              </>
            }
          />
          <Figure
            id="fig-roc"
            n={4}
            src="/paper/roc.png"
            alt="ROC curves of the per-layer detection score against each modification"
            caption={
              <>
                ROC of the score <Math tex="1-P(\mathrm{clean})" />, all honest
                sequences against each modification.
              </>
            }
          />
        </div>

        <p className="mt-4">
          <span className="font-medium">Text versus weights.</span> A tampered
          model writes different text, which the classifier could learn instead
          of the weights. With shared text, where both models read identical
          tokens, balanced accuracy is 99.1%, against 99.3% with matched text.
          Using only checkpoints before the natural end of sequence gives 98.8%
          in both settings (Table 6). The signal therefore comes from the
          weights.
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-exp-ablation">
          5.4 Ablation: which layers and features matter
        </h3>
        <p className="mt-4">
          Figure 5 retrains the classifier on parts of the profile with
          everything else fixed. The last layer alone, which is the information
          TOPLOC uses, gives 78.0%: it flags 74.5% of eager traffic and misses
          27% of 8-bit sequences. The first 14 layers give 98.6% and the last 14
          give 91.6%, and removing only the last layer costs 0.4 points, so most
          of the signal lies in the early and middle layers. Mantissa features
          alone give 98.5%, and index or exponent mismatch alone about 93.5%.
          One checkpoint gives 90.9% and eight give 99.3%, mainly because eager
          false positives fall from 36% to 6.5%.
        </p>

        <Figure
          id="fig-ablation"
          n={5}
          src="/paper/ablation.png"
          alt="Ablations of layers, features, and checkpoint count on matched text"
          className="w-full sm:w-[72%]"
          caption={
            <>
              Ablations on matched text. Bars: five-class balanced accuracy.
              Right column: share of eager-attention prompts flagged.
            </>
          }
        />

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-exp-generalise">
          5.5 Generalisation and failure cases
        </h3>
        <p className="mt-4">
          <span className="font-medium">Unseen honest kernel.</span> We withhold
          one honest configuration from training and score it at test time
          (Table 7). Withholding a batch-shape configuration is harmless (0.5%
          flagged), but withholding eager attention is not: all 200 eager
          prompts are flagged, mostly as 4-bit. The classifier accepts only
          kernels it has seen, so a deployment must list the allowed kernels or
          have providers declare theirs.
        </p>
        <p className="mt-4">
          <span className="font-medium">Single honest kernel.</span> Trained
          without eager traffic, as in the second row of Table 2, the classifier
          flags none of the batch-shape traffic, detects all 800 tampered
          sequences and labels 799 correctly. With one honest kernel both
          methods detect every modification and the profile additionally
          identifies it; with two kernels only the profile works.
        </p>
        <p className="mt-4">
          <span className="font-medium">Cross-hardware.</span> On 50 honest
          sequences from an NVIDIA L4, the L4&apos;s own proofs pass the A10G
          thresholds (exponent mismatches 2–9), and the A10G-trained classifier
          labels all 50 clean when L4 prefills are compared with the stored
          A10G reference.
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-exp-cost">
          5.6 Serving cost and enforcement
        </h3>
        <p className="mt-4">
          Table 5 shows that on the A10G at batch 1, 8-bit decodes{' '}
          <Math tex="4.9\times" /> slower than bf16 and 4-bit{' '}
          <Math tex="1.3\times" /> slower, so the time saving <Math tex="\Delta" />{' '}
          is negative and <Math tex="\Delta < pS" /> holds for any stake. The
          quantised models use 39–56% less memory, which could let a provider
          run more replicas per GPU; we did not measure this. One validator
          prefill takes 0.046 s, 0.69% of a bf16 generation. In an end-to-end
          run on a local Anvil chain, a provider staked 100 mock tokens and
          served the fine-tune; the check flagged the sequence (57 exponent
          mismatches against 46.02), the classifier returned class 4, and the
          contract set the stake to zero and recorded{' '}
          <span className="font-mono text-[0.95em]">[4]</span>.
        </p>

        <PaperTable
          id="tab-cost"
          n={5}
          caption="Serving cost on an A10G, batch 1, 256 new tokens, mean of three requests."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Mode</th>
                <th>
                  Tokens/s <Math tex="\uparrow" />
                </th>
                <th>
                  Seconds/request <Math tex="\downarrow" />
                </th>
                <th>
                  Peak memory (MiB) <Math tex="\downarrow" />
                </th>
                <th>
                  <Math tex="\Delta" /> vs bf16 (s)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>bf16</td>
                <td>{best('38.4')}</td>
                <td>{best('6.66')}</td>
                <td>3183</td>
                <td>—</td>
              </tr>
              <tr>
                <td>8-bit</td>
                <td>7.9</td>
                <td>32.34</td>
                <td>1936</td>
                <td>
                  <Math tex="-25.7" />
                </td>
              </tr>
              <tr>
                <td>4-bit</td>
                <td>29.6</td>
                <td>8.66</td>
                <td>{best('1387')}</td>
                <td>
                  <Math tex="-2.0" />
                </td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
      </section>

      <section className="mt-10" id="sec-conclusion">
        <h2 className="font-serif text-2xl text-fg">6 Conclusion</h2>
        <p className="mt-4">
          This paper addressed the verification of served LLM weights when
          honest providers use different attention kernels. The key idea is that
          honest kernel noise and weight changes leave different depth profiles
          in the network, which a last-layer threshold cannot see but a
          per-layer classifier can. On Qwen2.5-1.5B-Instruct, the per-layer
          profile detects and identifies four modifications with 99.3% balanced
          accuracy while accepting two kernels, where the last-hidden TOPLOC
          check detects no quantisation. Recording the identified modification
          on chain lets a staking protocol distinguish a cost-saving
          quantisation from a behaviour-changing fine-tune.
        </p>
        <p className="mt-4">
          <span className="font-medium">Limitations.</span> The classifier
          rejects honest kernels it was not trained on and flags 6.5% of eager
          traffic even when trained on it. The per-layer results use prefill on
          both sides; a decode-time per-layer commitment would be up to 28 times
          larger than TOPLOC&apos;s and is untested. We evaluate one 1.5B model
          on one main GPU type with one strength per modification, without GPTQ,
          AWQ or FP8, weaker fine-tunes, or an adversary that trains against the
          classifier. The enforcement uses one trusted validator on a local
          chain, and the cost timings cover bitsandbytes at batch 1 only.
          Extending the profile to larger models, decode-time commitments and an
          open set of honest kernels are the main next steps.
        </p>
      </section>

      <section className="mt-10" id="references">
        <h2 className="font-serif text-2xl text-fg">References</h2>
        <ol className="mt-4 list-none space-y-3 pl-0 text-[0.95rem]">
          {refs.map((ref) => (
            <li key={ref.id} id={`ref-${ref.id}`} className="flex gap-3">
              <span className="w-8 shrink-0 text-muted">[{ref.id}]</span>
              <span>{ref.body}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10" id="sec-appendix">
        <h2 className="font-serif text-2xl text-fg">A Additional results</h2>
        <PaperTable
          id="tab-configs"
          n={6}
          caption={
            <>
              Five-class balanced accuracy (%) by setting. Pooled: the three
              honest configurations averaged per prompt, as fixed before the
              experiment. Separate: one honest sample per configuration.
              Brackets: 95% interval over folds.
            </>
          }
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Text</th>
                <th>Checkpoints</th>
                <th>
                  LR, pooled <Math tex="\uparrow" />
                </th>
                <th>
                  <Math tex="k" />-NN, pooled <Math tex="\uparrow" />
                </th>
                <th>
                  LR, separate <Math tex="\uparrow" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matched</td>
                <td>all eight</td>
                <td>
                  99.5 <span className="text-muted">(99.1–99.9)</span>
                </td>
                <td>98.8</td>
                <td>99.3</td>
              </tr>
              <tr>
                <td>Matched</td>
                <td>pre-EOS</td>
                <td>
                  98.8 <span className="text-muted">(97.4–100)</span>
                </td>
                <td>96.7</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Shared</td>
                <td>all eight</td>
                <td>
                  99.8 <span className="text-muted">(99.5–100)</span>
                </td>
                <td>98.3</td>
                <td>99.1</td>
              </tr>
              <tr>
                <td>Shared</td>
                <td>pre-EOS</td>
                <td>
                  98.8 <span className="text-muted">(97.4–100)</span>
                </td>
                <td>97.3</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <PaperTable
          id="tab-loao"
          n={7}
          caption="Leave-one-honest-configuration-out, matched text (shared text gives the same counts)."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Withheld configuration</th>
                <th>Flagged (%)</th>
                <th>Clean</th>
                <th>8-bit</th>
                <th>4-bit</th>
                <th>LoRA</th>
                <th>Fine-tune</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eager attention</td>
                <td>100</td>
                <td>0</td>
                <td>18</td>
                <td>182</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <td>Batch 4</td>
                <td>0.5</td>
                <td>199</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Batch 4 + padding</td>
                <td>0.5</td>
                <td>199</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
      </section>

      <section className="mt-10" id="sec-repro">
        <h2 className="font-serif text-2xl text-fg">B Reproducibility</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Code and data:{' '}
            <a
              href="https://github.com/bruce249/proof-of-weights"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/bruce249/proof-of-weights
            </a>
            .
          </li>
          <li>
            Model revision{' '}
            <span className="font-mono text-[0.9em]">
              989aa7980e4cf806f80c7fef2b1adb7bc71aa306
            </span>
            .
          </li>
          <li>
            <span className="font-mono text-[0.95em]">toploc</span> 0.1.6,
            PyTorch 2.11.0, transformers 5.17.0.
          </li>
          <li>
            Seeds: prompts and classifier 20260923, LoRA 202609231, fine-tune
            202609232.
          </li>
          <li>
            Proofs are built from CPU copies of the activations; the library
            failed on CUDA tensors in our environment.
          </li>
          <li>
            The live validator and the offline tables call the same feature
            function; on 10 sequences the outputs match exactly.
          </li>
          <li>
            Thresholds, classifier settings and the pooled clean class were
            fixed before the experiments. The separate-configuration,
            leave-one-out, ablation and ROC analyses and the batch-shape
            recalibration were added afterwards on the same data; the
            recalibration run reproduced the original thresholds and detection
            rates exactly.
          </li>
        </ul>
      </section>
    </article>
  )
}
