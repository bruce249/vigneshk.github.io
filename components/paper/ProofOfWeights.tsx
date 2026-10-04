import type { ReactNode } from 'react'
import Cite from './Cite'
import Math from './Math'

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
        machine learning on blockchain. <em>arXiv preprint arXiv:2401.17555</em>
        , 2024.
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
        inference. <em>Thinking Machines Lab: Connectionism</em>, 2025.
      </>
    ),
  },
  {
    id: 9,
    body: (
      <>
        Edward J. Hu, Yelong Shen, Phillip Wallis, Zeyuan Allen-Zhu, Yuanzhi
        Li, Shean Wang, Lu Wang, and Weizhu Chen. LoRA: Low-rank adaptation of
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
        , volume 267 of PMLR, 2025. arXiv:2501.16007.
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
          Proceedings of the ACM SIGSAC Conference on Computer and Communications
          Security (CCS)
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
        <a href="https://github.com/tatsu-lab/stanford_alpaca">
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
        solution for blockchains. <em>arXiv preprint arXiv:1908.04756</em>,
        2019.
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
      <h1 className="font-display text-[clamp(2.15rem,4.6vw,3.25rem)] font-medium leading-[1.05] tracking-[-0.03em] text-fg">
        Detecting Weight Tampering in Verifiable LLM Inference: Per-Layer
        Activation Profiles and the Attention-Kernel Loophole
      </h1>
      <p className="mt-6">
        Vignesh Kanike
        <br />
        Indian Institute of Technology Delhi
      </p>

      <section className="mt-10">
        <h2 className="font-serif text-2xl text-fg">Abstract</h2>
        <p className="mt-4">
          Clients of inference providers usually cannot tell whether the
          open-weight model they paid for was run, or a cheaper quantised or
          fine-tuned copy. TOPLOC (Ong et al., ICML 2025) lets a provider
          commit to the largest entries of the last hidden state, which a
          validator checks with one prefill, using thresholds loose enough to
          absorb honest numerical noise. On Qwen2.5-1.5B-Instruct we find that
          this tolerance is the weak point: serving the reference model with
          eager attention changes the last layer more than 8-bit or 4-bit
          quantisation, so thresholds that accept it flag no quantised sequence
          and 55–60% of fine-tuned ones. Kernel noise and weight changes differ
          across depth, and a linear classifier on TOPLOC’s statistics at all
          28 layers attributes four known modifications with 99.3% balanced
          accuracy (99.0% from decode-time activations), against 78.0% from the
          last layer alone. We then test it as an integrity check against three
          kinds of provider. It is not one in general: 8-bit quantisation left
          out of training is accepted on every test prompt, and a provider that
          serves quantised weights with eager attention is accepted on 92%
          (8-bit) and 68% (4-bit) of prompts at a 1% false-rejection target.
          With the kernel enforced to SDPA, no tampered model served on it was
          accepted: not the four known modifications at batch 1 or 4, six
          unseen partial or combined modifications, or a detector-guided choice
          of layers to quantise (0 of 50 per case). On a second model,
          SmolLM2-1.7B, eager noise is small, the last layer alone suffices,
          and the loophole does not appear. A per-layer TOPLOC commitment costs
          57.8 kB per 256 tokens. Neither check binds the served text to the
          weights that generated it, so the results bound what activation checks
          can establish rather than provide an integrity guarantee.
        </p>
      </section>

      <section className="mt-10" id="sec-intro">
        <h2 className="font-serif text-2xl text-fg">1 Introduction</h2>
        <p className="mt-4">
          Open-weight language models are now served by many third parties:
          commercial APIs, decentralised compute networks and peer-to-peer
          inference markets. A client names a model and pays per token, but it
          sees only text. A provider that quantises the model or swaps in a
          fine-tuned copy saves memory or compute, and the text still reads
          well. Gao et al. <Cite n={6} /> tested 31 commercial endpoints for
          four Llama models and found 11 serving a different output distribution
          from the published weights.
        </p>
        <p className="mt-4">
          TOPLOC <Cite n={10} /> offers a cheap check. Every 32 tokens the
          provider commits to the 128 largest entries of the last hidden state,
          and a validator recomputes them in a single prefill. Because bf16
          arithmetic differs slightly between GPUs and kernels, the validator
          accepts small exponent and mantissa disagreements and flags a sequence
          only above fixed thresholds. That tolerance is where the difficulty
          lies. A verifier has to accept every authorised execution, including
          honest providers on different kernels, and reject every unauthorised
          one. If honest variation and weight tampering produce disagreements of
          the same size, no threshold does both.
        </p>
        <p className="mt-4">
          We find exactly this overlap on Qwen2.5-1.5B-Instruct. Serving the
          reference model with eager attention, a kernel TOPLOC did not
          evaluate, changes the last layer about six times as much as a
          batch-size change and more than 8-bit or 4-bit quantisation. With
          thresholds calibrated to accept eager traffic, the check flags no
          quantised sequence and 55–60% of fine-tuned ones.
        </p>
        <Figure
          id="fig-profiles"
          n={1}
          src="/paper/fig1.png"
          alt="Two line charts of top-k index mismatch and mean mantissa disagreement across 28 decoder layers, for honest serving and tampered weights."
          caption={
            <>
              Kernel noise and weight changes peak at different depths. Mean
              top-<Math tex="k" /> disagreement with the reference model at each
              decoder layer (Qwen2.5-1.5B-Instruct, 200 prompts). Grey lines are
              honest serving configurations; coloured lines are tampered
              weights. At layer 27, eager-attention noise sits among the
              quantised models; in the early layers it stands apart.
            </>
          }
        />
        <p className="mt-4">
          The two sources do differ in where they appear (Figure 1).
          Eager-attention noise is largest in the first layers and fades with
          depth, quantisation shifts every layer by about the same amount, and
          fine-tuning grows toward the output. We compute TOPLOC’s statistics at
          all 28 layers and train a linear classifier on the resulting profile.
          On the four modifications we trained on, it identifies the
          modification with 99.3% balanced accuracy while accepting both
          kernels.
        </p>
        <p className="mt-4">
          That number answers a narrower question than integrity verification,
          and most of this paper is about the gap. We evaluate the profile
          against three kinds of provider (Section 3): one that tampers without
          regard to the detector, one that also chooses its kernel and batch
          size, and one that uses the detector’s own score to choose what to
          quantise. We also test modifications the classifier never saw, report
          false acceptance and false rejection rates at a fixed operating point
          with intervals, and separate what our implementation checks from what
          a deployed protocol would still have to guarantee.
        </p>
        <p className="mt-4">Our findings, each tested in Section 6:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            With thresholds calibrated on mixed honest kernels, TOPLOC’s
            last-layer check misses 8-bit and 4-bit quantisation and about half
            of light fine-tuning in our setup (Section 6.1).
          </li>
          <li>
            The per-layer profile identifies four known modifications with 99.3%
            balanced accuracy, 99.0% from decode-time activations, and most of
            its signal lies in the early and middle layers (Sections 6.2 to
            6.4).
          </li>
          <li>
            It does not establish integrity against unknown modifications: 8-bit
            quantisation left out of training is accepted as clean on every
            test prompt (Section 6.6).
          </li>
          <li>
            A provider that serves quantised weights with eager attention passes
            as honest on most prompts, even when the verifier uses a detector
            specific to the declared kernel. With the kernel enforced, no tested
            attack was accepted (Section 6.7).
          </li>
          <li>
            Six modifications never seen in training, including LoRA with 4-bit
            weights and partial quantisation, and a detector-guided choice of
            layers to quantise were all rejected with the kernel enforced; on
            SmolLM2-1.7B the kernel loophole does not appear and the last layer
            alone suffices, so both the problem and the benefit are
            model-dependent (Sections 6.6, 6.8 and 6.9).
          </li>
          <li>
            A real per-layer TOPLOC commitment costs 57.8 kB per 256 tokens and
            0.5 s of CPU time per sequence, and at batch 32 4-bit decoding
            reaches 96% of bf16 throughput with less memory (Section 6.10).
          </li>
        </ul>
        <p className="mt-4">
          Code and result files are at{' '}
          <a href="https://github.com/bruce249/proof-of-weights">
            https://github.com/bruce249/proof-of-weights
          </a>
          .
        </p>
      </section>

      <section className="mt-10" id="sec-related">
        <h2 className="font-serif text-2xl text-fg">
          2 Background and related work
        </h2>
        <p className="mt-4">
          <span className="font-medium">TOPLOC.</span> TOPLOC <Cite n={10} />{' '}
          records the last hidden state at one position per 32 decode steps,
          keeps its <Math tex="k=128" /> largest-magnitude entries, and encodes
          them in a polynomial commitment of a few hundred bytes. The validator
          prefills the prompt and the claimed output with the committed weights,
          counts exponent mismatches between corresponding values, and takes the
          mean and median mantissa difference. A sequence fails if the largest
          value of any statistic across its checkpoints exceeds a threshold; the
          published thresholds are <Math tex="T_{\mathrm{exp}}=38" />,{' '}
          <Math tex="T_{\mathrm{mean}}=10" /> and{' '}
          <Math tex="T_{\mathrm{median}}=8" />. Its robustness tests covered
          A100 and RTX 4090 GPUs, Flash Attention 2, SDPA and FlexAttention, and
          tensor parallelism on Llama-3.1-8B and larger models, with no false
          positives <Cite n={10} />, §5.6, Table 2. It did not test quantisation,
          notes that small fine-tuning updates are harder to detect{' '}
          <Cite n={10} />, §6.5, and cannot detect speculative decoding{' '}
          <Cite n={10} />, §6.2.
        </p>
        <p className="mt-4">
          <span className="font-medium">Statistical detection versus proof.</span>{' '}
          Zero-knowledge proofs of inference such as zkLLM <Cite n={12} />{' '}
          establish that a specific computation was performed, at minutes per
          query for a 13B model; SafetyNets <Cite n={7} /> uses interactive
          proofs for smaller networks. Trusted execution <Cite n={[1, 16]} />{' '}
          instead relies on the hardware vendor. TOPLOC and the method in this
          paper are statistical tests: they bound how far observed activations
          may deviate from a recomputation, and their guarantees are only as
          strong as the separation between honest and dishonest deviations,
          which is what we measure.
        </p>
        <p className="mt-4">
          <span className="font-medium">Detecting substitution.</span> Model
          equality testing <Cite n={6} /> compares output text with a two-sample
          test; Cai et al. <Cite n={1} /> show such tests need many queries and
          that log-probability tests are confused by nondeterministic inference.
          SVIP <Cite n={13} /> trains a proxy task on returned hidden states to
          detect substitution with a smaller model. These methods target swaps
          between different models, whereas we study quantisation and
          fine-tuning of the same model.
        </p>
        <p className="mt-4">
          <span className="font-medium">Nondeterminism and enforcement.</span>{' '}
          Inference is not bitwise reproducible across batch sizes, padding and
          kernels <Cite n={8} />, so every activation check needs some
          tolerance. Optimistic protocols such as Truebit <Cite n={15} /> and
          opML <Cite n={2} /> accept results by default and settle disputes on
          challenge; TOPLOC has no stake or penalty.
        </p>
      </section>

      <section className="mt-10" id="sec-threat">
        <h2 className="font-serif text-2xl text-fg">
          3 Threat model and problem
        </h2>
        <p className="mt-4">
          <span className="font-medium">Assets and parties.</span> The asset is
          the client’s assurance that a response was produced by the committed
          weights <Math tex="\theta" />, a model repository at a pinned
          revision. A provider stakes tokens, serves requests and posts a
          commitment for each response. A validator samples commitments,
          recomputes activations with <Math tex="\theta" />, and resolves
          challenges. We trust the validator to run <Math tex="\theta" /> and to
          report its verdict honestly. The contract enforces the stake, the bond
          and the dispute window; it does not check the verdict.
        </p>
        <p className="mt-4">
          <span className="font-medium">Authorised variation.</span> An honest
          provider runs <Math tex="\theta" /> but may use a different attention
          kernel, batch size or padding from the validator. In our experiments
          the authorised set is SDPA at batch 1 (the validator’s own setting),
          eager attention at batch 1, SDPA at batch 4, and SDPA at batch 4 with
          extra padding.
        </p>
        <p className="mt-4">
          <span className="font-medium">Attacker.</span> A dishonest provider
          wants to serve weights <Math tex="\tilde\theta \neq \theta" /> to save
          memory or compute, or to change behaviour, without losing its stake.
          It controls its weights, kernel and batch configuration, and computes
          its commitments honestly from what it actually ran. We distinguish
          three levels of knowledge and control:
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium">A1, non-adaptive:</span> serves a
            quantised or fine-tuned model on the reference kernel, without
            regard to the detector.
          </li>
          <li>
            <span className="font-medium">A2, configuration-adaptive:</span>{' '}
            additionally chooses an authorised kernel or batch size to look
            honest.
          </li>
          <li>
            <span className="font-medium">A3, detector-adaptive:</span> knows
            the detector and uses its score to choose the modification.
          </li>
        </ul>
        <p className="mt-4">
          We evaluate A1 and A2 fully. For A3 we evaluate one constrained
          strategy, choosing which layers to quantise (Section 6.8); we do not
          optimise weights against the detector by gradient, and we make no
          claim of robustness to that.
        </p>
        <p className="mt-4">
          <span className="font-medium">Out of scope.</span> We do not address
          forged or replayed commitments, a provider that answers verification
          samples differently from ordinary traffic, or a provider that
          generates with <Math tex="\tilde\theta" /> and then computes its
          commitment by a prefill with <Math tex="\theta" />. The last case
          defeats both TOPLOC and our check, and is discussed in Section 7.
        </p>
        <p className="mt-4">
          <span className="font-medium">Detection and attribution.</span>{' '}
          Integrity verification is a binary decision: accept a sequence as
          produced by <Math tex="\theta" /> under authorised variation, or reject
          it. We report it as the false acceptance rate (FAR, tampered sequences
          accepted) and the false rejection rate (FRR, honest sequences
          rejected). Attribution, naming which known modification was made, is a
          separate closed-set task and is reported as balanced accuracy.
        </p>
      </section>

      <section className="mt-10" id="sec-method">
        <h2 className="font-serif text-2xl text-fg">4 Method</h2>
        <Figure
          id="fig-overview"
          n={2}
          src="/paper/fig2.png"
          alt="Pipeline from provider activations and a validator prefill to a disagreement profile, a classifier, and a staking contract."
          caption={
            <>
              Overview. The provider’s per-layer top-<Math tex="k" /> activations
              are compared with a validator prefill under the committed weights
              (Section 4.1). A classifier turns the profile into a verdict
              (Section 4.2), and an upheld challenge slashes the stake and
              stores the label (Section 4.3).
            </>
          }
        />

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-profile">
          4.1 Per-layer disagreement profile
        </h3>
        <p className="mt-4">
          Let <Math tex="h^{(\ell)}_t \in \mathbb{R}^{1536}" /> be the output of
          decoder layer <Math tex="\ell \in \{0,\ldots,27\}" /> at position{' '}
          <Math tex="t" />. At each checkpoint{' '}
          <Math tex="t_c = |\mathrm{prompt}| + 32c" /> with{' '}
          <Math tex="c = 0,\ldots,7" />, we take the indices <Math tex="I" /> and
          values <Math tex="v" /> of the 128 largest-magnitude entries of{' '}
          <Math tex="h^{(\ell)}_{t_c}" />, for the model under test and for{' '}
          <Math tex="\theta" /> on the same tokens. For each checkpoint and layer
          we compute the overlap of the index sets and TOPLOC’s three
          statistics:
        </p>
        <Math
          display
          tex="f_{\mathrm{idx}} = 1 - \frac{1}{k}\,|\tilde I \cap I|,"
        />
        <Math
          display
          tex="f_{\mathrm{exp}} = \sum_i \mathbb{1}[\exp(\tilde v_i) \neq \exp(v_i)],"
        />
        <Math
          display
          tex="f_{\mathrm{mean}} = \mathrm{mean}_i \,|\mathrm{mant}(\tilde v_i) - \mathrm{mant}(v_i)|,"
        />
        <Math
          display
          tex="f_{\mathrm{med}} = \mathrm{median}_i \,|\mathrm{mant}(\tilde v_i) - \mathrm{mant}(v_i)|."
        />
        <p className="mt-4">
          Here exp and mant are the exponent and mantissa fields of the float32
          value, and <Math tex="i" /> runs over rank. Averaging over the eight
          checkpoints gives a profile <Math tex="x \in \mathbb{R}^{4 \times 28}" />.
          Its last row is what TOPLOC already uses.
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-classifier">
          4.2 Classifier and decision rule
        </h3>
        <p className="mt-4">
          We train a multinomial logistic regression with balanced class weights
          on profiles labelled clean or with one of four modifications, with
          features standardised on the training data. A linear model is easy to
          inspect and needs only a few hundred examples per class. The predicted
          class gives attribution. For the binary verdict we accept a sequence
          when <Math tex="P(\mathrm{clean}) \ge \tau" />. The threshold{' '}
          <Math tex="\tau" /> is chosen on training prompts only: we compute
          out-of-fold <Math tex="P(\mathrm{clean})" /> for honest training
          sequences by prompt-grouped cross-validation and set{' '}
          <Math tex="\tau" /> at their 1st percentile, a target FRR of 1%. Test
          prompts are never used to choose <Math tex="\tau" />.
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-contract">
          4.3 Verification protocol
        </h3>
        <p className="mt-4">
          Table 1 separates what we implemented from what a deployment would
          need. TOPLOC’s last-layer commitment, the validator’s recomputation,
          the classifier and the staking contract are implemented; a per-layer
          commitment is not integrated into the protocol, and its cost is
          measured separately (Section 6.10). In our main experiments the
          provider side is also a prefill, which isolates the effect of the
          weights; Section 6.4 repeats them with decode-time activations, which
          is what a provider would commit to.
        </p>
        <p className="mt-4">
          The contract (142 lines of Solidity) stores each provider’s model
          hash, stake and history of tamper classes, and each proof’s prompt
          hash, proof hash and timestamp. A challenger posts a bond within two
          hours of a proof, and only the validator can resolve it. If upheld,
          the stake is split between challenger and validator, the bond is
          returned and the class is recorded (0 clean, 1 8-bit, 2 4-bit, 3 LoRA,
          4 fine-tune, 255 unattributed); otherwise the validator keeps the
          bond. For a sampling rate <Math tex="p" />, stake <Math tex="S" /> and
          a saving <Math tex="\Delta" /> per request from tampering, a
          risk-neutral provider facing certain detection on sampled requests is
          deterred when <Math tex="\Delta < pS" />. The system is not trustless:
          its verdicts are as trustworthy as the validator.
        </p>
        <PaperTable
          id="tab-protocol"
          n={1}
          caption="Protocol steps, what each relies on, and what we implemented."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Step</th>
                <th>Mechanism</th>
                <th>Relies on</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Provider commits to activations</td>
                <td>TOPLOC polynomial commitment, last layer</td>
                <td>cryptographic binding of the proof to its hash</td>
                <td>implemented</td>
              </tr>
              <tr>
                <td>per-layer commitment (28 proofs)</td>
                <td>same</td>
                <td />
                <td>measured separately, not integrated</td>
              </tr>
              <tr>
                <td>Commitment bound to the served text</td>
                <td>validator recomputes on the served tokens</td>
                <td>validator honesty</td>
                <td>implemented</td>
              </tr>
              <tr>
                <td>Commitment bound to the model that generated the text</td>
                <td>none</td>
                <td />
                <td>not provided (Section 7)</td>
              </tr>
              <tr>
                <td>Verdict</td>
                <td>last-layer thresholds; per-layer classifier</td>
                <td>statistical separation, validator honesty</td>
                <td>implemented</td>
              </tr>
              <tr>
                <td>Authorised kernel</td>
                <td>declaration or enforcement</td>
                <td>not specified</td>
                <td>proposed</td>
              </tr>
              <tr>
                <td>Penalty</td>
                <td>stake, bond, dispute window</td>
                <td>smart contract; single trusted validator</td>
                <td>implemented (local chain)</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
      </section>

      <section className="mt-10" id="sec-setup">
        <h2 className="font-serif text-2xl text-fg">5 Experimental setup</h2>
        <p className="mt-4">
          Table 2 lists the setup and Table 4 the controls. Each prompt gets a
          greedy 256-token answer with the end-of-sequence token suppressed, so
          every sequence has eight checkpoints; in a 20-prompt probe without
          suppression, 19 answers ran to 256 tokens anyway. The two trained
          modifications see 2,400 Alpaca <Cite n={14} /> examples, with effective
          batch 8 and sequence length 512.
        </p>
        <PaperTable id="tab-setup" n={2} caption="Setup of the main experiments.">
          <table className="paper-table">
            <tbody>
              <tr>
                <th>Model</th>
                <td>
                  Qwen2.5-1.5B-Instruct <Cite n={11} />, rev. 989aa79
                </td>
              </tr>
              <tr>
                <th>Shape</th>
                <td>28 layers, hidden size 1536, bf16</td>
              </tr>
              <tr>
                <th>Hardware</th>
                <td>NVIDIA A10G (24 GB)</td>
              </tr>
              <tr>
                <th>Software</th>
                <td>
                  PyTorch 2.11, CUDA 12.8, transformers 5.17, toploc 0.1.6, TF32
                  off
                </td>
              </tr>
              <tr>
                <th>Prompts</th>
                <td>
                  200 from UltraChat-200k <Cite n={5} />
                </td>
              </tr>
              <tr>
                <th>Answers</th>
                <td>greedy, 256 tokens, 8 checkpoints</td>
              </tr>
              <tr>
                <th>Reference</th>
                <td>SDPA attention, batch 1</td>
              </tr>
              <tr>
                <th>Honest</th>
                <td>eager; batch 4; batch 4 + 17 padding</td>
              </tr>
              <tr>
                <th>Tampered</th>
                <td>4 models (Table 3)</td>
              </tr>
              <tr>
                <th>Splits</th>
                <td>
                  5-fold CV grouped by prompt, or a train/test split by prompt
                  id (stated per table)
                </td>
              </tr>
              <tr>
                <th>Threshold</th>
                <td>1% FRR on training prompts only</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <PaperTable
          id="tab-tampered"
          n={3}
          caption="Tampered models. All four write coherent text on a sanity prompt."
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
                  <Math tex="r=16" />, <Math tex="\alpha=32" /> on Q/K/V, lr{' '}
                  <Math tex="2\times 10^{-4}" />, 300 steps, merged{' '}
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
        <PaperTable
          id="tab-controls"
          n={4}
          caption="Controls and the confound each addresses."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Control</th>
                <th>Confound</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Grouped by prompt</td>
                <td>same prompt in train and test</td>
              </tr>
              <tr>
                <td>Shared text</td>
                <td>classifier learns the text, not the weights</td>
              </tr>
              <tr>
                <td>Pre-EOS checkpoints</td>
                <td>effect of suppressing end of sequence</td>
              </tr>
              <tr>
                <td>Decode-time activations</td>
                <td>prefill on both sides is unrealistic</td>
              </tr>
              <tr>
                <td>Layer, feature, checkpoint, k ablations</td>
                <td>where the signal comes from</td>
              </tr>
              <tr>
                <td>Held-out modification</td>
                <td>closed-set accuracy mistaken for integrity</td>
              </tr>
              <tr>
                <td>Held-out honest kernel</td>
                <td>classifier only knows seen kernels</td>
              </tr>
              <tr>
                <td>Kernel attack</td>
                <td>provider exploits authorised variation</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
      </section>

      <section className="mt-10" id="sec-results">
        <h2 className="font-serif text-2xl text-fg">6 Results</h2>
        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-last-layer">
          6.1 The last-layer check under honest kernel noise
        </h3>
        <p className="mt-4">
          Table 5 shows the check with three sets of thresholds. Calibrated on
          all three honest configurations, it keeps a 2% FPR on held-out prompts
          but flags no quantised sequence and only 55–60% of fine-tuned ones.
          The published thresholds reject 23% of honest prompts. Calibrating
          without eager traffic gives much tighter thresholds, which flag every
          tampered sequence but reject all 200 eager prompts and 4% of the
          remaining honest traffic. A second calibration run reproduced the
          first row exactly.
        </p>
        <PaperTable
          id="tab-thresholds"
          n={5}
          caption={
            <>
              TOPLOC’s last-layer check under three sets of thresholds (
              <Math tex="T_{\mathrm{exp}}" />, <Math tex="T_{\mathrm{mean}}" />,{' '}
              <Math tex="T_{\mathrm{median}}" />
              ). FPR is on held-out prompts of the calibration configurations;
              the other columns cover all 200 prompts.
            </>
          }
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th rowSpan={2}>Calibrated on</th>
                <th rowSpan={2}>FPR (%) ↓</th>
                <th rowSpan={2}>Eager rejected (%) ↓</th>
                <th colSpan={4}>Detection (%) ↑</th>
              </tr>
              <tr>
                <th>8-bit</th>
                <th>4-bit</th>
                <th>LoRA</th>
                <th>Fine-tune</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>All three configs (46.02, 25.80, 20.0)</td>
                <td>2</td>
                <td>6</td>
                <td>0</td>
                <td>0</td>
                <td>59.5</td>
                <td>54.5</td>
              </tr>
              <tr>
                <td>Batch-shape only (7.01, 1.80, 1.0)</td>
                <td>4</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Published (38, 10, 8)</td>
                <td>23</td>
                <td>69</td>
                <td>0</td>
                <td>50</td>
                <td>100</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <p className="mt-4">
          Table 6 explains why. On all three statistics, eager attention moves
          the last layer further than 4-bit quantisation does, and 8-bit
          quantisation falls between batch-size noise and eager noise. These
          results do not contradict TOPLOC’s. Our batch-size noise falls inside
          the range TOPLOC reports, and the published thresholds raise no false
          alarms on it. Eager attention is the outlier: its mantissa statistics
          are more than twice the largest TOPLOC reports. Our model is also
          smaller; with a hidden size of 1536, the 128 recorded entries cover
          8.3% of the hidden state, against at most 3.6% for the models TOPLOC
          tested.
        </p>
        <PaperTable
          id="tab-last-stats"
          n={6}
          caption={
            <>
              Last-layer statistics for honest configurations and tampered
              models, as the mean over 200 prompts of each sequence’s maximum.
              TOPLOC’s range spans the maxima in its Table 2 <Cite n={10} />.
            </>
          }
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Source</th>
                <th>Exponent mismatches</th>
                <th>Mantissa mean</th>
                <th>Mantissa median</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={4}>Honest</th>
              </tr>
              <tr>
                <td>Eager attention</td>
                <td>25.55</td>
                <td>14.22</td>
                <td>10.64</td>
              </tr>
              <tr>
                <td>Batch 4</td>
                <td>4.35</td>
                <td>1.35</td>
                <td>1.00</td>
              </tr>
              <tr>
                <td>Batch 4 + 17 padding</td>
                <td>4.30</td>
                <td>1.37</td>
                <td>1.02</td>
              </tr>
              <tr>
                <th colSpan={4}>Tampered</th>
              </tr>
              <tr>
                <td>8-bit</td>
                <td>8.88</td>
                <td>3.47</td>
                <td>2.71</td>
              </tr>
              <tr>
                <td>4-bit</td>
                <td>21.67</td>
                <td>10.59</td>
                <td>8.59</td>
              </tr>
              <tr>
                <td>LoRA</td>
                <td>43.19</td>
                <td>25.70</td>
                <td>22.72</td>
              </tr>
              <tr>
                <td>Fine-tune</td>
                <td>41.05</td>
                <td>24.05</td>
                <td>20.46</td>
              </tr>
              <tr>
                <td>TOPLOC honest range</td>
                <td>12–28</td>
                <td>3.15–6.30</td>
                <td>2–4</td>
              </tr>
              <tr>
                <td>Published thresholds</td>
                <td>38</td>
                <td>10</td>
                <td>8</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-attribution">
          6.2 Attribution with the per-layer profile
        </h3>
        <p className="mt-4">
          With the full profile, the classifier accepts both kernels and still
          separates the known modifications. Table 7 gives the out-of-fold
          result on matched text, with each honest configuration as a separate
          example. Balanced accuracy is 99.3%; the 95% t-interval across the
          five folds is 98.7–99.9%. This interval reflects variation between
          prompt folds within one model, GPU and software stack, not variation
          between deployments. Per-class precision and recall are at least 0.96
          for every class (Table 8). Most errors fall on honest eager traffic:
          13 of 200 prompts (6.5%) are labelled as quantised. Table 9 lists
          other settings; the pooled one we fixed before the experiment averages
          each prompt’s three honest profiles and scores 99.5%, but averaging
          hides the eager errors.
        </p>
        <PaperTable
          id="tab-confusion"
          n={7}
          caption="Out-of-fold confusion matrix of the per-layer classifier on matched text, prefill on both sides. Rows are the true source; columns are the predicted class."
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
                <th>Honest: eager attention</th>
                <td>{best('187')}</td>
                <td>8</td>
                <td>5</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th>Honest: batch 4</th>
                <td>{best('199')}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <th>Honest: batch 4 + padding</th>
                <td>{best('199')}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>1</td>
              </tr>
              <tr>
                <th>8-bit</th>
                <td>1</td>
                <td>{best('199')}</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th>4-bit</th>
                <td>0</td>
                <td>0</td>
                <td>{best('200')}</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th>LoRA</th>
                <td>0</td>
                <td>0</td>
                <td>1</td>
                <td>{best('199')}</td>
                <td>0</td>
              </tr>
              <tr>
                <th>Fine-tune</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>{best('200')}</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <PaperTable
          id="tab-precision"
          n={8}
          caption="Per-class precision and recall, same predictions as Table 7."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Class</th>
                <th>Precision ↑</th>
                <th>Recall ↑</th>
                <th>Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Clean</td>
                <td>0.998</td>
                <td>0.975</td>
                <td>600</td>
              </tr>
              <tr>
                <td>8-bit</td>
                <td>0.961</td>
                <td>0.995</td>
                <td>200</td>
              </tr>
              <tr>
                <td>4-bit</td>
                <td>0.971</td>
                <td>1.000</td>
                <td>200</td>
              </tr>
              <tr>
                <td>LoRA</td>
                <td>1.000</td>
                <td>0.995</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Fine-tune</td>
                <td>0.990</td>
                <td>1.000</td>
                <td>200</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <PaperTable
          id="tab-settings"
          n={9}
          caption="Five-class balanced accuracy (%) by setting, with the 95% interval across the five folds. Separate: one honest example per configuration (main setting). Pooled: the three honest configurations averaged per prompt, as fixed before the experiment."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Text</th>
                <th>Checkpoints</th>
                <th>LR, separate ↑</th>
                <th>LR, pooled ↑</th>
                <th>k-NN, pooled ↑</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Matched</td>
                <td>all eight</td>
                <td>{best('99.3 (98.7–99.9)')}</td>
                <td>99.5 (99.1–99.9)</td>
                <td>98.8</td>
              </tr>
              <tr>
                <td>Matched</td>
                <td>pre-EOS</td>
                <td>—</td>
                <td>98.8 (97.4–100)</td>
                <td>96.7</td>
              </tr>
              <tr>
                <td>Shared</td>
                <td>all eight</td>
                <td>99.1 (98.5–99.6)</td>
                <td>99.8 (99.5–100)</td>
                <td>98.3</td>
              </tr>
              <tr>
                <td>Shared</td>
                <td>pre-EOS</td>
                <td>—</td>
                <td>98.8 (97.4–100)</td>
                <td>97.3</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <Figure
          id="fig-detection"
          n={3}
          src="/paper/fig3.png"
          alt="Grouped bars of tampered sequences detected for 8-bit, 4-bit, LoRA, and full fine-tune, comparing the last-hidden check with the per-layer profile."
          caption="Detection rate. Hatched: last-layer check with thresholds calibrated on all honest configurations. Solid: per-layer classifier at 1% FPR, out of fold."
        />
        <Figure
          id="fig-roc"
          n={4}
          src="/paper/fig4.png"
          alt="ROC curves of tampered sequences detected against honest sequences flagged, for 8-bit, 4-bit, LoRA, and full fine-tune."
          caption={
            <>
              ROC of the score <Math tex="1-P(\mathrm{clean})" /> for all honest
              sequences against each known modification.
            </>
          }
        />

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-ablation">
          6.3 Controls and ablations
        </h3>
        <p className="mt-4">
          A tampered model writes different text, and the classifier might learn
          the text. When both models read identical tokens (shared text)
          balanced accuracy is 99.1%, and using only checkpoints before the
          natural end of the answer gives 98.8% in both settings (Table 9).
        </p>
        <p className="mt-4">
          Figure 5 retrains the classifier on parts of the profile. The last
          layer alone, the information TOPLOC uses, gives 78.0%, flagging 74.5%
          of eager traffic and missing 27% of 8-bit sequences. The first 14
          layers give 98.6% and the last 14 only 91.6%. The classifier’s weights
          agree (Figure 6): layers 0–4 carry 28% of the absolute standardised
          coefficient mass and layer 27 another 7%, against 3.6% for a uniform
          split. Index overlap and mantissa median carry most of it (31% each).
          Smaller <Math tex="k" /> costs accuracy: 96.2% at <Math tex="k=16" />,
          98.4% at 32, 98.6% at 64 and 99.3% at 128, mainly through more eager
          false alarms (12.5% at <Math tex="k=16" /> against 6.5% at 128).
        </p>
        <Figure
          id="fig-ablation"
          n={5}
          src="/paper/fig5.png"
          alt="Horizontal bars of five-class balanced accuracy for layer, feature, and checkpoint ablations, with an eager false-positive column."
          caption="Ablations on matched text. Bars show five-class balanced accuracy; the right column shows the share of eager-attention prompts flagged."
        />
        <Figure
          id="fig-weights"
          n={6}
          src="/paper/fig6.png"
          alt="Bar chart of the classifier weight share at each decoder layer, with a dashed uniform line."
          caption="Share of the classifier’s absolute standardised coefficients per layer, summed over classes and features."
        />

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-decode">
          6.4 Decode-time activations
        </h3>
        <p className="mt-4">
          A real provider would commit to activations recorded while decoding.
          We repeated the experiment with the provider side taken from decoding:
          each tampered model’s own generations and teacher-forced decoding for
          the honest configurations. We added a fourth honest configuration, the
          reference model decoding on the reference kernel, so that the honest
          class includes the decode–prefill gap. The validator side stays a
          prefill with <Math tex="\theta" />.
        </p>
        <p className="mt-4">
          Cross-validated balanced accuracy is 99.0% (98.4–99.6%), against 80.6%
          for the last layer alone (Table 10). None of the reference model’s own
          decodes is flagged; eager traffic is flagged on 12% of prompts. A
          classifier trained only on prefill profiles also works on decode-time
          profiles without retraining, at 99.2%.
        </p>
        <PaperTable
          id="tab-decode"
          n={10}
          caption="Per-layer classifier with the provider’s activations recorded during decoding, 200 prompts per source. Out of fold except in the last row."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th rowSpan={2}>Training data</th>
                <th rowSpan={2}>Balanced accuracy (%) ↑</th>
                <th colSpan={2}>Honest flagged (%) ↓</th>
                <th colSpan={2}>Detected at 1% FPR (%) ↑</th>
              </tr>
              <tr>
                <th>Ref. decode</th>
                <th>Eager</th>
                <th>8-bit</th>
                <th>4-bit / LoRA / FT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Decode, all layers</td>
                <td>99.0 (98.4–99.6)</td>
                <td>0</td>
                <td>12</td>
                <td>85</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Decode, last layer only</td>
                <td>80.6 (79.7–81.5)</td>
                <td>0</td>
                <td>90</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Prefill only (no retraining)</td>
                <td>99.2</td>
                <td>0</td>
                <td>3</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-operating">
          6.5 Operating point
        </h3>
        <p className="mt-4">
          Balanced accuracy averages over classes and decision rules; a verifier
          needs FAR and FRR at one threshold. Table 11 trains on prompts 0–99,
          chooses <Math tex="\tau" /> on those prompts only, and tests on
          prompts 100–199. Intervals are Wilson 95% intervals with the sequence
          as the sampling unit. At the 1% FRR target the verifier rejects 0.7%
          of honest prefill sequences but accepts 47% of 8-bit sequences; 4-bit,
          LoRA and fine-tune are never accepted. On decode-time data the 8-bit
          FAR falls to 22% at an FRR of 1.8%. Taking the most likely class
          instead of thresholding <Math tex="P(\mathrm{clean})" /> accepts no
          8-bit prefill sequence but rejects 4.3% of honest ones. 8-bit
          quantisation is the binding case: its profile is the one closest to
          honest eager traffic, so any operating point trades 8-bit acceptance
          against eager rejection. <Math tex="P(\mathrm{clean})" /> is
          reasonably calibrated on the test split (expected calibration error
          0.021, Brier score 0.015).
        </p>
        <PaperTable
          id="tab-operating"
          n={11}
          caption={
            <>
              Verdicts at a fixed threshold. Train prompts 0–99, test prompts
              100–199 (100 per source); <Math tex="\tau" /> set for 1% FRR on
              training prompts. FRR: honest sequences rejected. FAR: tampered
              sequences accepted. Brackets: Wilson 95% intervals.
            </>
          }
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th rowSpan={2}>Provider activations</th>
                <th>FRR (%) ↓</th>
                <th colSpan={4}>FAR (%) ↓</th>
              </tr>
              <tr>
                <th>all honest</th>
                <th>8-bit</th>
                <th>4-bit</th>
                <th>LoRA</th>
                <th>Fine-tune</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Prefill, threshold</td>
                <td>0.7 [0.2–2.4]</td>
                <td>47 [37.5–56.7]</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
              </tr>
              <tr>
                <td>Prefill, most likely class</td>
                <td>4.3 [2.5–7.3]</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
              </tr>
              <tr>
                <td>Decode, threshold</td>
                <td>1.8 [0.9–3.6]</td>
                <td>22 [15.0–31.1]</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
              </tr>
              <tr>
                <td>Decode, most likely class</td>
                <td>3.2 [1.9–5.5]</td>
                <td>3 [1.0–8.5]</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-unknown">
          6.6 Unknown modifications
        </h3>
        <p className="mt-4">
          A verifier must reject modifications it was never trained on. We left
          each known modification out of training in turn and tested whether it
          is accepted as clean (Table 13). Held-out 4-bit, LoRA and fine-tuned
          sequences are still rejected, with at most 1 of 100 accepted; the
          classifier simply gives them a neighbouring label. Held-out 8-bit
          quantisation is accepted on all 100 test prompts, with prefill or
          decode-time data. The classifier separates 8-bit from clean only
          because it has seen 8-bit; it does not learn a general notion of “not <Math tex="\theta" />”.
        </p>
        <p className="mt-4">
          We also served six modifications that never appeared in training
          (Table 12): the LoRA model loaded with 4-bit weights, and 4-bit
          quantisation of only some layers (the first 14, the last 14, even
          layers, odd layers, or only the MLPs). These share 4-bit quantisation
          with a training class, so they test variation around a known
          modification rather than an unrelated one. With the detector
          restricted to SDPA traffic, none of the 300 test sequences was
          accepted. The detector that also accepts eager traffic accepted 4 of
          50 sequences quantised in the first 14 layers. The mixed-kernel
          last-layer check caught 66% of the LoRA model but at most 2% of the
          partial quantisations.
        </p>
        <PaperTable
          id="tab-unseen"
          n={12}
          caption="Modifications never seen in training, test prompts 150–199 (50 sequences each), decode-time activations, threshold rule. Detectors trained on prompts 0–149. Brackets: Wilson 95% intervals."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th rowSpan={2}>Modification</th>
                <th rowSpan={2}>Share of linear params in 4-bit</th>
                <th colSpan={2}>Per-layer FAR (%) ↓</th>
                <th colSpan={3}>Last-layer detected (%) ↑</th>
              </tr>
              <tr>
                <th>Unrestricted</th>
                <th>SDPA only</th>
                <th>All configs</th>
                <th>Batch-shape only</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LoRA + 4-bit</td>
                <td>100%</td>
                <td>0 [0–7.1]</td>
                <td>0 [0–7.1]</td>
                <td>66</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>4-bit, layers 0–13</td>
                <td>50%</td>
                <td>8 [3.2–18.8]</td>
                <td>0 [0–7.1]</td>
                <td>0</td>
                <td>100</td>
                <td>26</td>
              </tr>
              <tr>
                <td>4-bit, layers 14–27</td>
                <td>50%</td>
                <td>0 [0–7.1]</td>
                <td>0 [0–7.1]</td>
                <td>0</td>
                <td>100</td>
                <td>16</td>
              </tr>
              <tr>
                <td>4-bit, even layers</td>
                <td>50%</td>
                <td>0 [0–7.1]</td>
                <td>0 [0–7.1]</td>
                <td>0</td>
                <td>100</td>
                <td>10</td>
              </tr>
              <tr>
                <td>4-bit, odd layers</td>
                <td>50%</td>
                <td>0 [0–7.1]</td>
                <td>0 [0–7.1]</td>
                <td>2</td>
                <td>100</td>
                <td>12</td>
              </tr>
              <tr>
                <td>4-bit, MLPs only</td>
                <td>88%</td>
                <td>0 [0–7.1]</td>
                <td>0 [0–7.1]</td>
                <td>2</td>
                <td>100</td>
                <td>40</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <PaperTable
          id="tab-heldout"
          n={13}
          caption="Held-out modification accepted as clean (FAR, %), threshold rule, test prompts 100–199, 100 sequences each, with Wilson 95% intervals. FRR on honest test traffic was 0.5–1.8%."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Held out</th>
                <th>Prefill</th>
                <th>Decode</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>8-bit</td>
                <td>100 [96.3–100]</td>
                <td>100 [96.3–100]</td>
              </tr>
              <tr>
                <td>4-bit</td>
                <td>1 [0.2–5.4]</td>
                <td>1 [0.2–5.4]</td>
              </tr>
              <tr>
                <td>LoRA</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
              </tr>
              <tr>
                <td>Fine-tune</td>
                <td>0 [0–3.7]</td>
                <td>0 [0–3.7]</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-kernel">
          6.7 Configuration-adaptive provider (A2)
        </h3>
        <p className="mt-4">
          Because eager traffic counts as honest, a provider can tamper with the
          weights and serve the result with eager attention. We replayed each
          tampered model’s own generations by decoding, with eager attention at
          batch 1 and with SDPA at batch 4, on prompts 100–199.
        </p>
        <p className="mt-4">
          Table 14 uses a classifier trained on decode-time data from prompts
          0–99 without attack examples, taking the most likely class. Eager
          attention hides the quantisation: 77% of 8-bit and 66% of 4-bit
          sequences are called clean, and LoRA and fine-tuned sequences, though
          still flagged on 71–78% of prompts, usually get the wrong label. The
          last-layer check with mixed-kernel thresholds catches only 12% of
          eager-served 8-bit. Batch 4 does not help the attacker; 96–100% of
          those sequences are caught and correctly named.
        </p>
        <PaperTable
          id="tab-kernel-attack"
          n={14}
          caption={
            <>
              Tampered models served with a non-reference kernel, 100 held-out
              prompts each. Per-layer: most likely class from a classifier
              trained on decode-time data from prompts 0–99 without attack
              examples. Last-layer: the thresholds of Table 5.
            </>
          }
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th rowSpan={2}>Kernel</th>
                <th rowSpan={2}>Variant</th>
                <th colSpan={2}>Per-layer (%)</th>
                <th colSpan={3}>Last-layer detected (%) ↑</th>
              </tr>
              <tr>
                <th>Detected ↑</th>
                <th>Called clean ↓</th>
                <th>All configs</th>
                <th>Batch-shape only</th>
                <th>Published</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th rowSpan={4}>Eager, batch 1</th>
                <td>8-bit</td>
                <td>23</td>
                <td>77</td>
                <td>12</td>
                <td>100</td>
                <td>77</td>
              </tr>
              <tr>
                <td>4-bit</td>
                <td>34</td>
                <td>66</td>
                <td>64</td>
                <td>100</td>
                <td>99</td>
              </tr>
              <tr>
                <td>LoRA</td>
                <td>71</td>
                <td>29</td>
                <td>91</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Fine-tune</td>
                <td>78</td>
                <td>22</td>
                <td>77</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <th rowSpan={4}>SDPA, batch 4</th>
                <td>8-bit</td>
                <td>96</td>
                <td>4</td>
                <td>0</td>
                <td>100</td>
                <td>1</td>
              </tr>
              <tr>
                <td>4-bit</td>
                <td>100</td>
                <td>0</td>
                <td>0</td>
                <td>100</td>
                <td>50</td>
              </tr>
              <tr>
                <td>LoRA</td>
                <td>100</td>
                <td>0</td>
                <td>59</td>
                <td>100</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Fine-tune</td>
                <td>100</td>
                <td>0</td>
                <td>57</td>
                <td>100</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <p className="mt-4">
          <span className="font-medium">Kernel policy.</span> Table 15 compares
          three policies at the threshold rule, training on prompts 0–149 and
          testing on 150–199 (50 sequences per cell). Under the unrestricted
          policy, one detector accepts every authorised kernel; it accepts 92%
          of eager-served 8-bit and 68% of eager-served 4-bit. Under a declared
          policy, each provider names its kernel and the verifier uses a
          detector trained for that kernel, including on eager-served tampering;
          the attacker declares whichever kernel is accepted more often. This
          catches eager-served 4-bit, LoRA and fine-tuning (accepted on 2–8% of
          prompts) while rejecting 2% of honest eager traffic, but it still
          accepts 96% of eager-served 8-bit. A declaration is also only a claim:
          nothing in our protocol checks it. Under an enforced policy, the
          provider must serve with SDPA; the verifier then accepts none of the
          400 tampered test sequences, at the default batch or at batch 4, and
          rejects none of the 150 honest ones. With 50 sequences per cell, the
          95% upper bound on each of these zero rates is 7.1%. In this
          experiment the validator’s reference is always an SDPA prefill, since
          we did not record eager reference prefills. Adding attack examples to
          a single detector for all kernels instead raises eager-attack
          detection to 62% for 8-bit and 98–100% for the others, but it then
          flags 38% of honest eager traffic.
        </p>
        <PaperTable
          id="tab-policy"
          n={15}
          caption="Kernel policies, threshold rule, test prompts 150–199 (50 sequences per cell). FAR on eager-served tampering; under the declared policy the attacker’s better declaration is shown. Brackets: Wilson 95% intervals."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th rowSpan={2}>Policy</th>
                <th colSpan={2}>FRR (%) ↓</th>
                <th colSpan={4}>FAR on eager-served tampering (%) ↓</th>
              </tr>
              <tr>
                <th>eager</th>
                <th>SDPA configs</th>
                <th>8-bit</th>
                <th>4-bit</th>
                <th>LoRA</th>
                <th>Fine-tune</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unrestricted</td>
                <td>4 [1.1–13.5]</td>
                <td>0 [0–7.1]</td>
                <td>92 [81.2–96.8]</td>
                <td>68 [54.2–79.2]</td>
                <td>28 [17.5–41.7]</td>
                <td>28 [17.5–41.7]</td>
              </tr>
              <tr>
                <td>Declared</td>
                <td>2 [0.4–10.5]</td>
                <td>0 [0–7.1]</td>
                <td>96 [86.5–98.9]</td>
                <td>6 [2.1–16.2]</td>
                <td>2 [0.4–10.5]</td>
                <td>8 [3.2–18.8]</td>
              </tr>
              <tr>
                <td>Enforced</td>
                <td>SDPA not allowed</td>
                <td>0 [0–7.1]</td>
                <td colSpan={4}>
                  not possible; SDPA-served tampering: 0 [0–7.1] for all 8
                  attacks
                </td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <p className="mt-4">
          <span className="font-medium">Unseen honest kernels.</span> The
          classifier only accepts kernels it has seen. Left out of training, a
          batch-size configuration is still accepted (0.5% flagged), but all 200
          eager prompts are flagged, mostly as 4-bit. A small honest-only check
          on an NVIDIA L4 raised no false alarms on 50 sequences under either
          check; we did not run tampered models on the L4.
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-a3">
          6.8 Detector-guided quantisation (A3)
        </h3>
        <p className="mt-4">
          An attacker who can query the detector can choose what to quantise. We
          gave the attacker the five partial quantisations of Table 12, each
          covering at least half of the linear parameters, and let it score them
          on calibration prompts 0–19 with the detector it faces, picking the
          one accepted most often (ties broken by mean{' '}
          <Math tex="P(\mathrm{clean})" />
          ). Against the SDPA-only detector no candidate was accepted on any
          calibration prompt; the search picked the last-14-layer variant, which
          was accepted on 0 of 50 test prompts. Against the detector that also
          accepts eager traffic, the search picked the first-14-layer variant
          (accepted on 1 of 20 calibration prompts), which was accepted on 4 of
          50 test prompts (8%, [3.2–18.8]). This is a weak attacker with five
          discrete choices, and it does not show robustness to an attacker that
          optimises the weights against the detector.
        </p>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-smol">
          6.9 A second model
        </h3>
        <p className="mt-4">
          We repeated the core experiment on SmolLM2-1.7B-Instruct, a
          Llama-architecture model from a different family (24 layers, hidden
          size 2048, revision 31b70e2), with 100 prompts, 128-token answers and
          decode-time activations. Honest traffic was the reference decode,
          eager attention and batch 4; tampered traffic was 4-bit and 8-bit
          quantisation, and the eager attack used prompts 50–99.
        </p>
        <p className="mt-4">
          The picture differs from Qwen (Table 16). Eager attention barely
          changes this model: its mean index mismatch is within 0.002 of the
          reference decode at every layer, while 8-bit and 4-bit sit at
          0.08–0.12 and 0.14–0.22 respectively across layers. The full profile
          reaches 98.7% balanced accuracy and the last layer alone 98.4%; no
          honest sequence is flagged and no tampered sequence is called clean in
          cross-validation. At the threshold rule, trained on prompts 0–49 and
          tested on 50–99, eager-served quantisation is never accepted, and a
          detector trained without eager traffic still accepts all honest eager
          traffic. On this model, then, there is no kernel loophole and no need
          for the full profile. Whether a model shows the overlap seen on Qwen
          has to be measured per model.
        </p>
        <PaperTable
          id="tab-smol"
          n={16}
          caption="SmolLM2-1.7B-Instruct, decode-time activations. CV: 5-fold grouped by prompt, 100 prompts. FAR and FRR: train prompts 0–49, test 50–99 (50 per cell), threshold rule, detector accepting all honest configurations."
        >
          <table className="paper-table">
            <tbody>
              <tr>
                <th>Balanced accuracy, all 24 layers (CV)</th>
                <td>98.7%</td>
              </tr>
              <tr>
                <th>Balanced accuracy, last layer only (CV)</th>
                <td>98.4%</td>
              </tr>
              <tr>
                <th>FRR: reference / eager / batch 4</th>
                <td>0 / 0 / 2%</td>
              </tr>
              <tr>
                <th>FAR: 4-bit / 8-bit</th>
                <td>0 / 0%</td>
              </tr>
              <tr>
                <th>FAR: eager-served 4-bit / 8-bit</th>
                <td>0 / 0%</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>

        <h3 className="mt-8 font-serif text-xl text-fg" id="sec-cost">
          6.10 Cost
        </h3>
        <p className="mt-4">
          <span className="font-medium">Commitment.</span> We built real TOPLOC
          commitments for all 28 layers of 10 reference generations (256 tokens
          each, <Math tex="k=128" />
          ). One commitment per layer takes 2,064 bytes per sequence, the same
          as TOPLOC’s last-layer commitment, so the full profile costs 57,792
          bytes per 256 tokens, or 226 bytes per token. Building all 28
          commitments took 0.22 s and verifying them 0.29 s per sequence on the
          instance’s CPU, and capturing every layer during the validator’s
          prefill added no measurable time to its 0.042 s. We did not integrate
          these commitments into the contract or measure them under load.
        </p>
        <p className="mt-4">
          <span className="font-medium">Serving.</span> Table 17 shows decoding
          throughput at three batch sizes. At batch 1, 8-bit is 4.9× and 4-bit
          1.3× slower than bf16, as in our earlier measurement, so the time
          saving <Math tex="\Delta" /> is negative. At batch 32, 4-bit reaches
          96% of bf16 throughput with 29% less peak memory, which leaves room
          for more replicas or larger batches per GPU; 8-bit stays three times
          slower. Whether cheating pays therefore depends on the serving load,
          and the condition <Math tex="\Delta < pS" /> has to be evaluated at
          the provider’s own operating point.
        </p>
        <PaperTable
          id="tab-throughput"
          n={17}
          caption="Decoding throughput (tokens/s, all sequences) and peak memory on an A10G, 128 new tokens, mean of two runs after one warm-up."
        >
          <table className="paper-table">
            <thead>
              <tr>
                <th>Batch</th>
                <th>bf16</th>
                <th>8-bit</th>
                <th>4-bit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>39.1</td>
                <td>8.0</td>
                <td>29.4</td>
              </tr>
              <tr>
                <th>8</th>
                <td>258.3</td>
                <td>55.3</td>
                <td>203.1</td>
              </tr>
              <tr>
                <th>32</th>
                <td>494.2</td>
                <td>163.9</td>
                <td>476.5</td>
              </tr>
              <tr>
                <th>Peak MiB, batch 32</th>
                <td>6209</td>
                <td>6236</td>
                <td>4413</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
        <p className="mt-4">
          We also ran the whole pipeline once on a local Anvil chain: a provider
          staked 100 mock tokens and served the fine-tuned model, the last-layer
          check flagged the sequence (57 exponent mismatches against 46.02), the
          classifier returned class 4, and the contract zeroed the stake and
          recorded [4].
        </p>
      </section>

      <section className="mt-10" id="sec-security">
        <h2 className="font-serif text-2xl text-fg">7 Security analysis</h2>
        <p className="mt-4">
          <span className="font-medium">What the 99.3% measures.</span> It is
          closed-set attribution among four modifications, in one model, on one
          GPU type, with prompt folds as the only source of variation. It does
          not bound the acceptance of unknown modifications, which can be
          complete (Section 6.6), and the fold interval is not a deployment
          interval.
        </p>
        <p className="mt-4">
          <span className="font-medium">
            Commitments and selective disclosure.
          </span>{' '}
          A TOPLOC commitment binds activations to the tokens the validator
          recomputes, so a provider cannot report activations that do not match
          those tokens under <Math tex="\theta" />. It does not bind the tokens
          to the weights that chose them. A provider can generate with{' '}
          <Math tex="\tilde\theta" />, then run one prefill with{' '}
          <Math tex="\theta" /> on its own output and commit to those
          activations; both checks then pass. This costs one prefill per sampled
          response, far less than generation, and it is the same gap TOPLOC
          reports for speculative decoding. Closing it needs a binding between
          sampling and the committed weights, for example output-distribution
          tests on the served text <Cite n={6} /> or trusted execution{' '}
          <Cite n={1} />. A provider that serves verification requests
          differently from ordinary ones is also outside what any per-response
          check can see, unless verification requests are indistinguishable from
          traffic.
        </p>
        <p className="mt-4">
          <span className="font-medium">Kernel enforcement.</span> Enforcing the
          kernel closed the A2 attack in our data, but we have not shown how to
          enforce it. A declared kernel is a claim; verifying it needs either a
          kernel signature in the activations, which our eager results suggest
          exists but which an attacker could imitate, or attested execution.
          Other execution choices we did not vary, such as precision, continuous
          batching and tensor parallelism, could open similar gaps.
        </p>
        <p className="mt-4">
          <span className="font-medium">Detector-aware attacks.</span> Our A3
          attacker searches over a small, discrete set of layer subsets. An
          attacker that optimises the weights directly against a known linear
          detector, for example by fine-tuning with a penalty on the detector’s
          score, is likely to do better, and we did not test it.
        </p>
        <p className="mt-4">
          <span className="font-medium">Generalisation and statistics.</span> Our
          evidence covers two models of 1.5–1.7B parameters, one GPU type for
          tampering, and 50–200 prompts per source. The second model behaved
          differently from the first, so neither the kernel loophole nor the
          value of the full profile can be assumed for a new model. Wilson
          intervals on 50–100 sequences cannot certify rates below a few
          percent; a zero count out of 50 only bounds the rate below 7.1%.
        </p>
      </section>

      <section className="mt-10" id="sec-conclusion">
        <h2 className="font-serif text-2xl text-fg">8 Conclusion</h2>
        <p className="mt-4">
          Honest kernel noise and weight tampering can look the same at the last
          layer of a language model and still differ across its depth. On
          Qwen2.5-1.5B-Instruct, a per-layer profile of TOPLOC’s statistics
          attributes four known modifications with 99.3% balanced accuracy while
          accepting two attention kernels, where the last-layer check with
          mixed-kernel thresholds catches no quantisation. The profile is not an
          integrity guarantee. It accepts an unseen 8-bit model on every test
          prompt, a provider that switches to eager attention passes on most
          quantised prompts, and neither check binds the served text to the
          weights that generated it. With the kernel enforced, no tested attack
          passed, including six unseen modifications and a detector-guided
          choice of layers, which suggests that verification protocols should
          fix the execution configuration rather than tolerate it. On
          SmolLM2-1.7B the overlap between kernel noise and quantisation did not
          occur, so the need for a per-layer profile is a property of the model,
          to be measured before deployment. A per-layer commitment is cheap to
          build and check, but it is 28 times larger than TOPLOC’s. Table 18
          summarises what is established.
        </p>
        <PaperTable id="tab-claims" n={18} caption="Status of the paper’s claims.">
          <table className="paper-table">
            <thead>
              <tr>
                <th>Claim</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Last-layer check misses quantisation under mixed-kernel
                  thresholds
                </td>
                <td>measured</td>
              </tr>
              <tr>
                <td>Per-layer attribution of 4 known modifications</td>
                <td>measured</td>
              </tr>
              <tr>
                <td>Holds for decode-time activations</td>
                <td>measured</td>
              </tr>
              <tr>
                <td>Rejects unknown modifications</td>
                <td>not established (fails for 8-bit)</td>
              </tr>
              <tr>
                <td>Robust to kernel choice (A2)</td>
                <td>not established</td>
              </tr>
              <tr>
                <td>Kernel enforcement closes A2</td>
                <td>measured if enforced; enforcement proposed</td>
              </tr>
              <tr>
                <td>Robust to detector-aware attacks (A3)</td>
                <td>
                  one discrete search: no evasion with enforced kernel; weight
                  optimisation untested
                </td>
              </tr>
              <tr>
                <td>Other models and hardware</td>
                <td>
                  second model: attribution holds, loophole absent; tampering on
                  other GPUs untested
                </td>
              </tr>
              <tr>
                <td>Per-layer commitment is practical</td>
                <td>commitment measured; not integrated</td>
              </tr>
              <tr>
                <td>Penalty enforcement</td>
                <td>implemented, trusted validator</td>
              </tr>
            </tbody>
          </table>
        </PaperTable>
      </section>

      <section className="mt-10" id="references">
        <h2 className="font-serif text-2xl text-fg">References</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5">
          {refs.map((ref) => (
            <li key={ref.id} id={`ref-${ref.id}`}>
              {ref.body}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-10" id="sec-repro">
        <h2 className="font-serif text-2xl text-fg">A Reproducibility</h2>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            Code and data:{' '}
            <a href="https://github.com/bruce249/proof-of-weights">
              https://github.com/bruce249/proof-of-weights
            </a>
            .
          </li>
          <li>
            Model revision: 989aa7980e4cf806f80c7fef2b1adb7bc71aa306.
          </li>
          <li>toploc 0.1.6, PyTorch 2.11.0, transformers 5.17.0.</li>
          <li>
            Seeds: prompts and classifier 20260923, LoRA 202609231, fine-tune
            202609232.
          </li>
          <li>
            Analysis scripts in <span className="font-mono">paper/</span>:{' '}
            <span className="font-mono">analysis.py</span>,{' '}
            <span className="font-mono">decode_analysis.py</span>,{' '}
            <span className="font-mono">review_analysis.py</span>,{' '}
            <span className="font-mono">review_gpu_analysis.py</span>.
          </li>
          <li>
            GPU runs in <span className="font-mono">inference/</span>:{' '}
            <span className="font-mono">task02.py</span>,{' '}
            <span className="font-mono">task04.py</span>,{' '}
            <span className="font-mono">recalibrate.py</span>,{' '}
            <span className="font-mono">kernel_attack.py</span>,{' '}
            <span className="font-mono">review_gpu.py</span>.
          </li>
          <li>
            Proofs are built from CPU copies of the activations, because the
            library failed on CUDA tensors in our environment.
          </li>
          <li>
            The thresholds, classifier settings and pooled clean class were
            fixed before the experiments. All other analyses, including every
            result in Sections 6.5 to 6.7, were added afterwards and are
            exploratory.
          </li>
        </ul>
      </section>
    </article>
  )
}
