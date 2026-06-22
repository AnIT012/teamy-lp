"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const DESIGN = "https://github.com/AnIT012/TeaMy-design";
const GITHUB = "https://github.com/AnIT012";

const TEAM = [
  { role: "CEO", name: "シズカ", img: "shizuka", view: "最終決裁。優先順位を決める。" },
  { role: "PM", name: "ナオ", img: "nao", view: "受付と温度感。議論をまとめる。" },
  { role: "Engineer", name: "タクト", img: "takuto", view: "実装の現実性を見る。" },
  { role: "Designer", name: "ハルカ", img: "haruka", view: "使う人の温度を拾う。" },
  { role: "Marketer", name: "リクト", img: "rikuto", view: "届け方と市場を見る。" },
  { role: "Security", name: "ケンジ", img: "kenji", view: "リスクと安全。穴を突く。" },
  { role: "Weirdo", name: "フウ", img: "fuu", view: "前提を壊す。" },
  { role: "Researcher", name: "ユウキ", img: "yuuki", view: "事実とデータで支える。" },
];

const CONVERT = [
  { n: "v0", cat: "Web App", c: "#ec4899" },
  { n: "Cursor", cat: "Code", c: "#3b9eff" },
  { n: "kintone", cat: "Business", c: "#22c55e" },
  { n: "Canva", cat: "Design", c: "#a855f7" },
  { n: "Figma", cat: "UI", c: "#ff7a45" },
  { n: "Midjourney", cat: "Image", c: "#f43f7a" },
  { n: "Lovable", cat: "Web App", c: "#14b8a6" },
  { n: "Bolt", cat: "Web App", c: "#f4b400" },
  { n: "Notion", cat: "Doc", c: "#9aa0a6" },
  { n: "Slides", cat: "Pitch", c: "#ec4899" },
];

const STEPS = [
  { e: "🎬", t: "下調べ" }, { e: "💬", t: "会議" }, { e: "💣", t: "フウの爆弾" },
  { e: "🔍", t: "整理" }, { e: "🧩", t: "結論まとめ" }, { e: "✍", t: "清書" },
];

const FLOW = [
  { n: 1, t: "依頼をひとことで", d: "「タスク受付」に、やりたいことを投げるだけ。" },
  { n: 2, t: "奥の会議室で議論", d: "8人が裏で議論。あなたは進捗だけ見ていればいい。" },
  { n: 3, t: "必要なときだけ確認", d: "判断を左右する未知だけ質問。答えなくても前へ進む。" },
  { n: 4, t: "成果物を納品", d: "結論ではなく、そのまま使える一本のドキュメントを。" },
];

const MILESTONES = [
  { v: "v1", t: "原型", d: "8人が相槌を打つだけの、表面的な議論。" },
  { v: "v2–3", t: "議論を構造化", d: "ラウンド制・分科会で、決まる形へ。" },
  { v: "v4", t: "土台を作り直す", d: "状態を中心に据えた設計へ全面書き換え。" },
  { v: "v5", t: "体験を作り込む", d: "人格・成果物の変換・記憶・カフェ。" },
  { v: "v6", t: "ボードで議論する", d: "共有ボードを核にした新アーキテクチャ。" },
  { v: "v6.5 / 7", t: "未知への対応 → 商品品質", d: "知ったふりをやめ、必ず完走する標準へ。" },
];

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.65, ease, delay }} className={className}>
      {children}
    </motion.div>
  );
}
function Avatar({ img, size = 56 }: { img: string; size?: number }) {
  return <Image src={`/teamy/${img}.png`} alt="" width={size} height={size} className="rounded-full object-cover" />;
}
function Kicker({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bg-card px-4 py-1.5 text-sm font-semibold">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
      </span>
      {children}
    </span>
  );
}
function Eyebrow({ no, children }: { no: string; children: ReactNode }) {
  return (
    <p className="text-center text-xs font-bold tracking-[0.25em] text-brand">
      <span className="text-ink/30 mr-2">{no}</span>{children}
    </p>
  );
}
function H2({ children }: { children: ReactNode }) {
  return <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mt-3">{children}</h2>;
}
function Section({ id, children, soft = false }: { id?: string; children: ReactNode; soft?: boolean }) {
  return (
    <section id={id} className={`px-6 py-16 ${soft ? "border-y border-line bg-bg-card/50" : ""}`}>
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="text-ink">
      <Nav />
      <Hero />
      <Problem />
      <OpenSet />
      <Team />
      <Flow />
      <Convert />
      <UseCases />
      <Craft />
      <Story />
      <Foot />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-bg/80 border-b border-line">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/teamy/logo_circle.png" alt="TeaMy" width={28} height={28} className="rounded-full" />
          <span className="font-bold tracking-tight">TeaMy</span>
        </div>
        <nav className="flex items-center gap-5 text-sm font-medium text-ink-soft">
          <a href="#team" className="hidden sm:inline hover:text-ink transition">チーム</a>
          <a href="#flow" className="hover:text-ink transition">動き</a>
          <a href="#craft" className="hidden sm:inline hover:text-ink transition">こだわり</a>
          <a href={DESIGN} target="_blank" className="rounded-full bg-ink text-bg px-4 py-1.5 hover:-translate-y-0.5 transition">設計ログ</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 sm:pt-36 text-center">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-brand-2/25 blur-3xl"
          animate={{ y: [0, -28, 0], x: [0, -16, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <div className="mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease }} className="floaty inline-block">
          <Image src="/teamy/logo_main.png" alt="TeaMy" width={104} height={104} className="mx-auto" priority />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="mt-7">
          <Kicker>Your Team, Brewed. · 個人開発プロダクト</Kicker>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7, ease }}
          className="mt-6 text-[2.4rem] font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
          ひとりのAIに<br />聞くのをやめた。
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38, duration: 0.7, ease }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          役割の異なる<b className="text-ink">8人のAI</b>がDiscordで議論し、知ったふりをせず、
          <b className="text-brand">結論ではなく「成果物」</b>を返す。あなただけのAIチーム。
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a href="#flow" className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-semibold text-bg hover:-translate-y-0.5 transition">
            動いている様子を見る <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href={DESIGN} target="_blank" className="rounded-full border border-ink/20 bg-bg-card px-6 py-3 font-semibold hover:-translate-y-0.5 hover:border-ink/40 transition">
            設計ログを読む
          </a>
        </motion.div>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {TEAM.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 + i * 0.06, duration: 0.4, ease }}>
              <div className="floaty rounded-full ring-2 ring-bg-card shadow-sm" style={{ animationDelay: `${i * 0.25}s` }}><Avatar img={m.img} size={46} /></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    { t: "知らないことも知った顔で", d: "確信ありげな答えほど危うい。気づく頃には、もう信じられない。" },
    { t: "視点がひとつだけ", d: "技術もデザインもリスクも同じ目線で素通り。死角に気づけない。" },
    { t: "出して終わり", d: "アイデアは出る。でも“使える形”に直すのは結局また自分。" },
  ];
  return (
    <Section soft>
      <Reveal><Eyebrow no="01">THE LIMITS OF ONE</Eyebrow></Reveal>
      <Reveal delay={0.05}><H2>ひとつの頭脳にぜんぶは無理がある</H2></Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.1}>
            <div className="rounded-2xl border border-line bg-bg-card p-7 h-full transition hover:-translate-y-1 hover:shadow-lg">
              <div className="text-5xl font-extrabold text-brand/20 leading-none">”</div>
              <h3 className="font-bold text-lg mt-1">{c.t}</h3>
              <p className="text-sm text-ink-soft mt-3 leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function OpenSet() {
  const routes = [
    { t: "調べる", d: "外部検索で裏を取る" },
    { t: "人に聞く", d: "効く未知だけ確認" },
    { t: "仮説で進む", d: "暫定と明示して前へ" },
    { t: "後で確認", d: "今は脇に置く" },
    { t: "捨てる", d: "効かないものは流す" },
  ];
  return (
    <Section>
      <Reveal><Eyebrow no="02">THE CORE</Eyebrow></Reveal>
      <Reveal delay={0.05}><H2>「分からない」をちゃんと分ける</H2></Reveal>
      <Reveal delay={0.1}><p className="text-center text-ink-soft mt-5 max-w-2xl mx-auto leading-relaxed">
        多くのAIは知らないことにも答えを埋める。TeaMyは逆。未知を「未知」と検出し、
        <b className="text-ink">「誰が答えられるか × 戦略に効くか」</b>で仕分けて、正しい行き先へ送る。
      </p></Reveal>
      <div className="mt-12 flex flex-col items-center">
        <Reveal><div className="rounded-full bg-ink text-bg px-6 py-2.5 font-bold shadow-sm">未知を検出</div></Reveal>
        <div className="h-8 w-px bg-line" />
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 w-full max-w-3xl">
          {routes.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.07}>
              <div className="rounded-xl border border-line bg-bg-card p-4 text-center h-full transition hover:-translate-y-1 hover:border-brand/50">
                <p className="font-bold text-brand">{r.t}</p>
                <p className="text-[11px] text-ink-soft mt-1.5 leading-relaxed">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Team() {
  return (
    <Section id="team" soft>
      <Reveal><Eyebrow no="03">MEET THE TEAM</Eyebrow></Reveal>
      <Reveal delay={0.05}><H2>8人それぞれに、譲れない視点がある</H2></Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={(i % 4) * 0.07}>
            <div className="rounded-2xl border border-line bg-bg-card p-5 h-full transition hover:-translate-y-1.5 hover:shadow-lg">
              <div className="flex items-center gap-3">
                <div className="floaty rounded-full ring-2 ring-line"><Avatar img={m.img} size={46} /></div>
                <div className="min-w-0">
                  <h3 className="font-bold leading-tight">{m.role}</h3>
                  <p className="text-[11px] text-ink-soft/70">{m.name}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{m.view}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Flow() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 4), 4200);
    return () => clearInterval(id);
  }, []);
  return (
    <Section id="flow">
      <Reveal><Eyebrow no="04">HOW IT WORKS</Eyebrow></Reveal>
      <Reveal delay={0.05}><H2>Discordに投げると、チームが動く</H2></Reveal>
      <Reveal delay={0.1}><p className="text-center text-ink-soft mt-4 max-w-xl mx-auto text-sm">ステップを選ぶと画面が切り替わります。これは実際に動いている画面です。</p></Reveal>

      <div className="mt-12 grid lg:grid-cols-[1fr_auto] gap-10 items-center">
        <ol className="space-y-3 order-2 lg:order-1 max-w-md mx-auto w-full">
          {FLOW.map((f, i) => {
            const active = step === i;
            return (
              <li key={f.n}>
                <button onClick={() => setStep(i)}
                  className={`w-full text-left flex gap-4 rounded-2xl border p-4 transition ${active ? "border-ink bg-bg-card shadow-md" : "border-line bg-bg-card/40 hover:border-ink/30"}`}>
                  <span className={`grid place-items-center h-9 w-9 rounded-full font-bold shrink-0 transition ${active ? "bg-brand text-white" : "bg-line/60 text-ink-soft"}`}>{f.n}</span>
                  <div>
                    <h3 className="font-bold">{f.t}</h3>
                    <p className="text-sm text-ink-soft mt-1 leading-relaxed">{f.d}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="order-1 lg:order-2 mx-auto w-[330px] rounded-[2.4rem] border-[9px] border-ink bg-ink shadow-2xl">
          <div className="rounded-[1.8rem] overflow-hidden bg-white">
            <div className="px-4 py-2.5 border-b border-[#ebedef] flex items-center gap-2 text-[#313338]">
              <span className="text-[#80848e] text-lg">#</span>
              <span className="text-[13px] font-semibold truncate">{step === 0 ? "📥-タスク受付" : "📋-12-新サービスの打ち出し方を"}</span>
              <span className="ml-auto text-[10px] text-[#80848e]">メンバー2人</span>
            </div>
            <div className="px-3 py-3.5 h-[450px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div key={step} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.32, ease }} className="space-y-3.5">
                  <Scene step={step} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Scene({ step }: { step: number }) {
  if (step === 0) return (
    <>
      <Req lines={["新サービスの打ち出し方を整理したい。誰に・どう伝えるか迷ってて。"]} />
      <Msg img="nao" name="ナオ" color="#c0894a" time="22:12" lines={["了解です。メンバーと奥で会議してきますね 🍵", "進捗はここで更新します → # 📋-12-新サービスの…"]} />
    </>
  );
  if (step === 1) return (
    <>
      <Msg img="nao" name="ナオ" color="#c0894a" time="22:12" lines={["メンバーと奥で会議してくるね！🍵"]} />
      <ProgressCard done={2} />
      <p className="ml-[48px] text-[11px] text-[#80848e]">※ 議論そのものは奥の会議室で。あなたが見るのは進捗だけ。</p>
    </>
  );
  if (step === 2) return (
    <>
      <Msg img="nao" name="ナオ" color="#c0894a" time="22:14" lines={["方向性、ほぼ固まりました。1点だけ——"]} />
      <Confirm />
    </>
  );
  return (
    <>
      <ProgressCard done={6} />
      <Msg img="shizuka" name="シズカ" color="#c0392b" time="22:15" lines={["成果物、もってきたわよ。どうぞ。"]} />
      <FileCard />
    </>
  );
}

function Convert() {
  return (
    <Section soft>
      <Reveal><Eyebrow no="05">ONE MORE STEP</Eyebrow></Reveal>
      <Reveal delay={0.05}><H2>成果物はそのまま“次の道具”へ</H2></Reveal>
      <div className="mt-12 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <p className="text-ink-soft leading-relaxed">
              ボタンひとつで各ツール向けに整え直せる。コードなら <b className="text-ink">v0・Cursor</b>、
              画面なら <b className="text-ink">Figma・Canva</b>、共有なら <b className="text-ink">Slides・Notion</b> へ。「考えて終わり」にしない。
            </p>
            <div className="mt-6 grid grid-cols-2 gap-2.5">
              {CONVERT.map((p) => (
                <div key={p.n} className="rounded-lg border border-line bg-bg-card border-l-4 pl-3 pr-2 py-2" style={{ borderLeftColor: p.c }}>
                  <p className="font-bold text-sm leading-tight">{p.n}</p>
                  <p className="text-[10px] font-bold mt-0.5" style={{ color: p.c }}>{p.cat}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm font-semibold text-brand">TeaMy は「実装ツールの上流レイヤー」。</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto w-[320px] rounded-[2.4rem] border-[9px] border-ink bg-ink shadow-2xl overflow-hidden">
            <div className="bg-[#787c82] pt-7">
              <div className="rounded-t-[1.4rem] bg-white px-4 pt-3 pb-2">
                <div className="mx-auto h-1 w-9 rounded-full bg-[#d3d5d8]" />
                <p className="mt-3 text-[13px] font-semibold text-[#313338] text-center leading-snug">別形式に変換（v0 / Canva / Figma / Slides / Notion …）</p>
                <div className="mt-2 max-h-[340px] overflow-hidden">
                  {CONVERT.map((p) => <div key={p.n} className="py-3 border-t border-[#ececec] text-[14px] text-[#313338]">{p.n}</div>)}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function UseCases() {
  const cases = [
    { t: "素早くたたき台が欲しい", d: "時間がない中でも、考える出発点を一気に。" },
    { t: "壁打ち相手がいない", d: "一人で多角的に詰めるのは難しい。8人が代わりに。" },
    { t: "思いつきを形にしたい", d: "アイデアを、そのまま使えるドキュメントまで。" },
  ];
  return (
    <Section>
      <Reveal><Eyebrow no="06">WHO IT&apos;S FOR</Eyebrow></Reveal>
      <Reveal delay={0.05}><H2>こんなときチームが効く</H2></Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {cases.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.1}>
            <div className="rounded-2xl border border-line bg-bg-card p-7 h-full transition hover:-translate-y-1 hover:shadow-lg">
              <span className="grid place-items-center h-9 w-9 rounded-full bg-brand/10 text-brand font-bold">{i + 1}</span>
              <h3 className="font-bold text-lg mt-4">{c.t}</h3>
              <p className="text-sm text-ink-soft mt-3 leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Craft() {
  const cards = [
    { icon: <IconHonest />, t: "知ったふりをしない", d: "未知を検出して仕分け、置いた仮定は必ず明示する。" },
    { icon: <IconFinish />, t: "切らさず最後まで", d: "途中で壊れた成果物は出さない。完走を構造で保証する。" },
    { icon: <IconCup />, t: "依頼する体験ごと", d: "人格・進捗の演出・世界観。頼んだ手触りまで設計した。" },
  ];
  const details = [
    { t: "カフェで雑談", d: "タスク以外の時間も、そこにいる。" },
    { t: "打ち上げで一言ずつ", d: "終わったあと、今回を振り返る。" },
    { t: "はじめましては一度だけ", d: "流れや関係を覚えている。" },
  ];
  return (
    <Section id="craft" soft>
      <Reveal><Eyebrow no="07">CRAFT</Eyebrow></Reveal>
      <Reveal delay={0.05}><H2>賢さより信頼を大事にした</H2></Reveal>
      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.1}>
            <div className="rounded-2xl border border-line bg-bg-card p-7 h-full transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-11 w-11 rounded-xl bg-brand/10 grid place-items-center text-brand">{c.icon}</div>
              <h3 className="font-bold text-lg mt-4">{c.t}</h3>
              <p className="text-sm text-ink-soft mt-3 leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}><p className="text-center text-sm font-bold text-ink mt-14">タスクの外にも、世界がある</p></Reveal>
      <div className="mt-5 grid gap-3 sm:grid-cols-3 max-w-3xl mx-auto">
        {details.map((c, i) => (
          <Reveal key={c.t} delay={i * 0.07}>
            <div className="rounded-xl border border-line bg-bg-card/60 p-4 text-center h-full">
              <h4 className="font-bold text-sm">{c.t}</h4>
              <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}><p className="text-center mt-12 text-sm text-ink-soft">
        設計判断（課題 → 判断 → 理由）は <a href={DESIGN} target="_blank" className="font-semibold text-brand underline underline-offset-4">設計ログ</a> に公開しています。
      </p></Reveal>
    </Section>
  );
}

function Story() {
  return (
    <Section>
      <Reveal><Eyebrow no="08">STORY</Eyebrow></Reveal>
      <Reveal delay={0.05}><H2>なぜ作って、どう育てたか</H2></Reveal>

      <div className="max-w-2xl mx-auto text-center mt-8">
        <Reveal delay={0.1}><p className="text-ink-soft leading-relaxed">
          AIを毎日使う中で、ひとりに聞くと視点が偏る。知ったかぶりも多い。開発やアイデア出しの工程を、
          <b className="text-ink">もっと信頼できる形で楽にしたかった</b>。だから「自分が頼みたいチーム」を、そのまま作った。
        </p></Reveal>
        <Reveal delay={0.16}><p className="mt-5 inline-block rounded-full border border-line bg-bg-card px-5 py-2 text-sm text-ink-soft">
          いまは——<b className="text-ink">時間に追われて、素早く・多角的にアイデアが欲しい人</b>へ。
        </p></Reveal>
      </div>

      <Reveal delay={0.2}><p className="text-center text-sm font-bold text-ink mt-16">作って終わりにしなかった — v1 から v7 まで</p></Reveal>
      <div className="mt-8 max-w-2xl mx-auto">
        {MILESTONES.map((m, i) => (
          <Reveal key={m.v} delay={i * 0.06}>
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="grid place-items-center h-11 w-11 rounded-full bg-ink text-bg text-xs font-bold shrink-0">{m.v}</span>
                {i < MILESTONES.length - 1 && <span className="w-px flex-1 bg-line my-1" />}
              </div>
              <div className="pb-6">
                <h3 className="font-bold">{m.t}</h3>
                <p className="text-sm text-ink-soft mt-1 leading-relaxed">{m.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.3}><p className="text-center text-sm text-ink-soft">
          各バージョンの設計判断は <a href={DESIGN} target="_blank" className="font-semibold text-brand underline underline-offset-4">設計ログ</a> に。
        </p></Reveal>
      </div>
    </Section>
  );
}

function Foot() {
  const tech = ["LangGraph", "Blackboard ＋ 5操作", "discord.py", "Docker / 24h常駐", "Claude・GPT・Gemini を用途別", "Tavily 検索"];
  return (
    <footer className="border-t border-line px-6 py-16 text-center">
      <p className="text-xs font-bold tracking-[0.25em] text-brand">TECH</p>
      <div className="mt-5 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
        {tech.map((t) => <span key={t} className="rounded-full border border-line bg-bg-card px-3.5 py-1.5 text-xs">{t}</span>)}
      </div>

      <div className="mt-14">
        <Image src="/teamy/logo_circle.png" alt="TeaMy" width={44} height={44} className="mx-auto rounded-full" />
        <p className="mt-4 font-bold text-lg">TeaMy</p>
        <p className="text-sm text-brand font-medium mt-1">あなたの問いに、チームで向き合うAI。</p>
        <p className="text-xs text-ink-soft mt-1.5">Your Team, Brewed. ／ 設計：自分・実装：AIを駆使</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href={DESIGN} target="_blank" className="rounded-full bg-ink text-bg px-5 py-2.5 text-sm font-semibold hover:-translate-y-0.5 transition">設計ログを見る</a>
          <a href={GITHUB} target="_blank" className="rounded-full border border-ink/20 bg-bg-card px-5 py-2.5 text-sm font-semibold hover:-translate-y-0.5 transition">GitHub</a>
        </div>
      </div>
      <p className="mt-12 text-xs text-ink-soft/60">© 2026 AnIT — TeaMy</p>
    </footer>
  );
}

/* ───────── Discord パーツ（実画面に忠実：ライト・モバイル） ───────── */
function Badge() {
  return <span className="text-[9px] font-bold bg-[#5865f2] text-white rounded-[3px] px-1 py-[1px] ml-1 align-[1px]">アプリ</span>;
}
function Msg({ img, name, color, time, lines }: { img: string; name: string; color: string; time: string; lines: string[] }) {
  return (
    <div className="flex gap-2.5">
      <Image src={`/teamy/${img}.png`} alt="" width={38} height={38} className="h-[38px] w-[38px] rounded-full object-cover shrink-0" />
      <div className="min-w-0">
        <p className="text-[13px] leading-none mb-1"><b style={{ color }}>{name}</b><Badge /><span className="text-[10px] text-[#a3a6aa] ml-1.5">2026/06/04 {time}</span></p>
        {lines.map((l, i) => <p key={i} className="text-[12.5px] leading-snug text-[#313338]">{l}</p>)}
      </div>
    </div>
  );
}
function Req({ lines }: { lines: string[] }) {
  return (
    <div className="flex gap-2.5">
      <div className="h-[38px] w-[38px] rounded-full bg-gradient-to-br from-[#ff8a6b] to-[#ff5d3b] grid place-items-center text-white text-[10px] font-bold shrink-0">YOU</div>
      <div className="min-w-0">
        <p className="text-[13px] leading-none mb-1"><b className="text-[#313338]">あなた</b><span className="text-[10px] text-[#a3a6aa] ml-1.5">2026/06/04 22:11</span></p>
        {lines.map((l, i) => <p key={i} className="text-[12.5px] leading-snug text-[#313338]">{l}</p>)}
      </div>
    </div>
  );
}
function ProgressCard({ done }: { done: number }) {
  const pct = Math.round((done / STEPS.length) * 100);
  return (
    <div className="ml-[48px] rounded-[6px] bg-[#f2f3f5] border-l-[4px] border-[#f0833c] px-3 py-3 shadow-sm">
      <p className="text-[12px] font-semibold text-[#313338] leading-snug">{done >= 6 ? "🎉" : "⏳"} 新サービスの打ち出し方を整理したい・{done >= 6 ? "完了！" : "進行中"}</p>
      <div className="mt-2 flex items-center gap-2">
        <div className="flex-1 flex gap-[2px]">
          {Array.from({ length: 14 }).map((_, i) => <div key={i} className={`h-3 flex-1 rounded-[1px] ${i < Math.round(14 * done / 6) ? "bg-[#2b2d31]" : "bg-[#d6d8dc]"}`} />)}
        </div>
        <span className="text-[11px] text-[#313338] whitespace-nowrap">{pct}%{done >= 6 ? " · ✅ 完了" : ""}</span>
      </div>
      <div className="mt-2.5 space-y-1">
        {STEPS.map((s, i) => (
          <p key={s.t} className={`text-[12px] ${i < done ? "text-[#313338]" : "text-[#b3b6bb]"}`}>{i < done ? "✅" : "◻️"} {s.e} {s.t}</p>
        ))}
      </div>
      {done >= 6 && <p className="mt-2.5 text-[11px] text-[#5c5e66] leading-snug">TeaMy 🍵 奥の会議室から戻りました。成果物をどうぞ（議事録は #teamy-admin）</p>}
    </div>
  );
}
function Confirm() {
  return (
    <div className="relative">
      <div className="absolute -left-3 top-0 bottom-0 w-[3px] bg-[#f0b429]" />
      <div className="bg-[#fff8e6] rounded-r-[4px] px-3 py-2">
        <p className="text-[12.5px] text-[#313338]"><span className="text-[#5865f2] bg-[#e7e9fd] rounded px-1">@あなた</span> ひとつだけ確認させてください…！</p>
        <p className="text-[12.5px] text-[#313338] mt-0.5">想定する相手は「既存ユーザー」で合っていますか？（違っても、仮で進めます）</p>
        <div className="mt-2 flex gap-2">
          <span className="rounded bg-[#5865f2] text-white text-[11px] px-2.5 py-1">合ってる</span>
          <span className="rounded bg-[#e3e5e8] text-[#313338] text-[11px] px-2.5 py-1">仮で進めて</span>
        </div>
      </div>
    </div>
  );
}
function FileCard() {
  return (
    <div className="ml-[48px] rounded-[8px] border border-[#e3e5e8] bg-[#f8f9fa] px-3 py-2.5 flex items-center gap-3 shadow-sm w-[230px]">
      <div className="h-9 w-7 rounded bg-[#d8dadd] shrink-0" />
      <div className="min-w-0">
        <p className="text-[12px] font-medium text-[#3b6fd4] truncate">打ち出し方_成果物.md</p>
        <p className="text-[10px] text-[#80848e]">5.38 KB</p>
      </div>
    </div>
  );
}

/* ───────── アイコン（絵文字不使用・自作SVG） ───────── */
function IconHonest() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M9.3 9.2a2.7 2.7 0 1 1 3.6 2.6c-.7.3-1.1 1-1.1 1.7" /><circle cx="12" cy="16.6" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconFinish() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 21V4" /><path d="M6 5h11l-2.2 3.2L17 11.5H6" />
    </svg>
  );
}
function IconCup() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9h13v3.5A5.5 5.5 0 0 1 11.5 18h-2A5.5 5.5 0 0 1 4 12.5V9Z" /><path d="M17 10h1.6a2.2 2.2 0 0 1 0 4.4H17" /><path d="M8 3c-.5 1 .5 1.5 0 2.6M11.5 3c-.5 1 .5 1.5 0 2.6" />
    </svg>
  );
}
