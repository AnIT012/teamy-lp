import Image from "next/image";

const DESIGN = "https://github.com/annonymousIT/TeaMy-design";
const GITHUB = "https://github.com/annonymousIT";

const TEAM = [
  { name: "シズカ", role: "意思決定 / CEO", img: "shizuka", line: "数を追うより、まず定着する1件ね。" },
  { name: "タクト", role: "実装 / Engineer", img: "takuto", line: "実装の勘所と落とし穴、先に潰しとく。" },
  { name: "ハルカ", role: "体験設計 / Designer", img: "haruka", line: "使う人の現場、ちゃんと見よ？" },
  { name: "リクト", role: "届け方 / Marketer", img: "rikuto", line: "誰に・どう届くか、で決めよ。" },
  { name: "ケンジ", role: "リスク / Guard", img: "kenji", line: "一番危ないのはそこ。冷静にいこう。" },
  { name: "フウ", role: "前提破壊 / 変人", img: "fuu", line: "あ、でもさ〜、その前提ほんとに要る？" },
  { name: "ユウキ", role: "調査 / Researcher", img: "yuuki", line: "公開情報ベースでは、ね。ただし要確認。" },
  { name: "ナオ", role: "進行・まとめ / PM", img: "nao", line: "今日の要点、ひとつ拾っておくね。" },
];

const CONVERT = ["v0", "Cursor", "kintone", "Bolt", "Lovable", "Replit"];

function Avatar({ img, size = 56 }: { img: string; size?: number }) {
  return (
    <Image
      src={`/teamy/${img}.png`}
      alt=""
      width={size}
      height={size}
      className="rounded-full object-cover ring-2 ring-washi shadow-sm"
    />
  );
}

export default function Page() {
  return (
    <main className="text-sumi">
      {/* ── Nav ── */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-cream/80 border-b border-line">
        <div className="mx-auto max-w-5xl px-5 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/teamy/logo_circle.png" alt="TeaMy" width={28} height={28} className="rounded-full" />
            <span className="font-mincho font-bold tracking-wide">TeaMy</span>
          </div>
          <nav className="flex items-center gap-5 text-sm text-sumi-soft">
            <a href="#team" className="hover:text-matcha-deep transition">チーム</a>
            <a href="#flow" className="hover:text-matcha-deep transition">動き</a>
            <a href="#craft" className="hover:text-matcha-deep transition">こだわり</a>
            <a href={DESIGN} target="_blank" className="rounded-full bg-matcha-deep text-washi px-3 py-1.5 hover:bg-matcha transition">設計ログ</a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-5 pt-20 pb-16 text-center">
          <div className="floaty inline-block">
            <Image src="/teamy/logo_main.png" alt="TeaMy" width={120} height={120} className="mx-auto drop-shadow-md" priority />
          </div>
          <p className="mt-6 text-sm tracking-[0.3em] text-cha font-medium">YOUR OWN AI TEAM 🍵</p>
          <h1 className="mt-3 font-mincho text-4xl sm:text-5xl font-extrabold leading-tight">
            ひとりのAIに聞くの、<br className="sm:hidden" />やめた。
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sumi-soft leading-relaxed">
            役割の違う<b className="text-matcha-deep">8人のAI</b>が、ひとつのボードの上で議論する。
            知ったふりをせず、途中で投げ出さず、<b className="text-matcha-deep">成果物まで</b>つくって届けるAIチーム。
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#flow" className="rounded-full bg-cha text-washi px-6 py-3 font-medium shadow-md hover:brightness-105 transition">
              動いてる様子を見る
            </a>
            <a href={DESIGN} target="_blank" className="rounded-full border border-line bg-washi px-6 py-3 font-medium hover:border-matcha transition">
              設計の深掘り →
            </a>
          </div>

          {/* キャラ8体の帯 */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
            {TEAM.map((m, i) => (
              <div key={m.name} className="floaty" style={{ animationDelay: `${i * 0.25}s` }}>
                <Avatar img={m.img} size={52} />
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-sumi-soft">シズカ・タクト・ハルカ・リクト・ケンジ・フウ・ユウキ・ナオ</p>
        </div>
      </section>

      {/* ── 悩み ── */}
      <section className="bg-washi/60 border-y border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="text-center text-cha text-sm tracking-widest font-medium">よくある、AIへのモヤモヤ</p>
          <h2 className="text-center font-mincho text-2xl sm:text-3xl font-bold mt-2">
            「1人のAI」に聞くと、こうなりがち
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              { t: "知ったかぶりで答える", d: "分からないことにも、それっぽく断定。あとで気づいて、信用できなくなる。" },
              { t: "視点が、ひとつ", d: "技術もデザインもリスクも、ぜんぶ同じ目線。抜け漏れに気づけない。" },
              { t: "結局そのままじゃ使えない", d: "アイデアは出るけど、実装ツールに移すのは、また自分の仕事。" },
            ].map((c) => (
              <div key={c.t} className="washi-card rounded-2xl p-6">
                <div className="text-cha text-2xl font-mincho">”</div>
                <h3 className="font-bold mt-1">{c.t}</h3>
                <p className="text-sm text-sumi-soft mt-2 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 解決 ── */}
      <section className="mx-auto max-w-5xl px-5 py-20 text-center">
        <h2 className="font-mincho text-2xl sm:text-3xl font-bold">
          それ、<span className="text-matcha-deep">チームで議論</span>するから起きない。
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sumi-soft leading-relaxed">
          TeaMyでは、固有の判断基準を持った8人のAIが、共有ボードの上で
          <b className="text-sumi">主張・反論・前提破壊</b>を重ねる。
          分からないことは「分からない」と立てて、人に聞くか・調べるか・仮説で進むかを仕分けする。
          だから<b className="text-matcha-deep">知ったふりをせず、それでも止まらない。</b>
        </p>
      </section>

      {/* ── チーム ── */}
      <section id="team" className="bg-matcha-deep/[0.04] border-y border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="text-center text-cha text-sm tracking-widest font-medium">MEET THE TEAM</p>
          <h2 className="text-center font-mincho text-2xl sm:text-3xl font-bold mt-2">8人それぞれに、譲れない視点がある</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div key={m.name} className="washi-card rounded-2xl p-5 text-center">
                <div className="floaty inline-block"><Avatar img={m.img} size={72} /></div>
                <h3 className="mt-3 font-bold">{m.name}</h3>
                <p className="text-xs text-cha mt-0.5">{m.role}</p>
                <p className="mt-3 text-sm text-sumi-soft leading-relaxed">「{m.line}」</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 動く様子（Discordデモ） ── */}
      <section id="flow" className="mx-auto max-w-5xl px-5 py-20">
        <p className="text-center text-cha text-sm tracking-widest font-medium">HOW IT WORKS</p>
        <h2 className="text-center font-mincho text-2xl sm:text-3xl font-bold mt-2">Discordに投げると、チームが動きだす</h2>
        <p className="text-center text-sumi-soft mt-3 max-w-xl mx-auto text-sm">
          依頼 → 議論 → 確認 → 納品。実際に動いている画面そのまま。
        </p>

        <div className="mt-10 grid lg:grid-cols-[auto_1fr] gap-10 items-center justify-center">
          {/* Phone */}
          <div className="mx-auto w-[320px] rounded-[2.2rem] border-[8px] border-sumi/85 bg-sumi/85 shadow-2xl">
            <div className="rounded-[1.7rem] overflow-hidden bg-[#f2f3f5]">
              <div className="bg-white px-4 py-2.5 border-b border-[#e3e5e8] flex items-center gap-2 text-[#313338]">
                <span className="text-[#949ba4]">#</span>
                <span className="text-sm font-semibold">タスク-就活LP改善</span>
              </div>
              <div className="px-3 py-3 space-y-3 text-[#313338] max-h-[470px] overflow-hidden">
                <DiscordYou text="就活Hubの導入LP、もっと刺さるようにしたい。" />
                <DiscordMsg img="nao" name="ナオ" color="#5865f2" text="了解。まず“誰のどの不安に効くか”を1点に絞ろっか。みんな視点ちょうだい。" />
                <DiscordMsg img="haruka" name="ハルカ" color="#c07a45" text="最初の3秒で『自分ごと』にできるかが勝負だよ。" />
                <DiscordMsg img="fuu" name="フウ" color="#6f8f5a" text="あ、でもさ〜、“機能を並べる”前提って要る？悩みから入った方がよくない？" />
                <DiscordMsg img="kenji" name="ケンジ" color="#b5573f" text="一番危ないのは欲張って全部見せて何も伝わらないこと。1メッセージに絞る。" />
                <DiscordCard />
                <DiscordDeliver />
              </div>
            </div>
          </div>

          {/* ステップ説明 */}
          <ol className="space-y-5 max-w-sm mx-auto">
            {[
              ["①", "依頼を投げる", "Discordのチャンネルに、やりたいことを一言。"],
              ["②", "チームが議論する", "8人が主張・反論・前提破壊。知らないことは聞き返す。"],
              ["③", "必要なら確認される", "判断に効く未知だけ、あなたに質問。答えなくても暫定で進む。"],
              ["④", "成果物を納品", "結論だけじゃなく、使える形のアウトプットまで。"],
            ].map(([n, t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="font-mincho text-2xl text-cha shrink-0">{n}</span>
                <div>
                  <h3 className="font-bold">{t}</h3>
                  <p className="text-sm text-sumi-soft mt-1 leading-relaxed">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 変換機能 ── */}
      <section className="bg-washi/60 border-y border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-cha text-sm tracking-widest font-medium">ONE MORE STEP</p>
              <h2 className="font-mincho text-2xl sm:text-3xl font-bold mt-2">成果物を、そのまま“作れる形”へ変換</h2>
              <p className="text-sumi-soft mt-4 leading-relaxed">
                出てきた成果物は、ボタンひとつで各実装ツール向けのプロンプトに変換できる。
                「議論して終わり」じゃなく、<b className="text-matcha-deep">次の一手にすぐ繋がる</b>。
                エンジニア役のタクトが、ツールごとの作法に合わせて整えて渡す。
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {CONVERT.map((p) => (
                  <span key={p} className="rounded-full border border-line bg-washi px-4 py-1.5 text-sm font-medium shadow-sm">
                    {p}
                  </span>
                ))}
                <span className="rounded-full bg-matcha-deep/10 text-matcha-deep px-4 py-1.5 text-sm font-medium">ほか</span>
              </div>
            </div>
            <div className="washi-card rounded-2xl p-5">
              <DiscordMsg img="takuto" name="タクト" color="#5865f2" text="別の形式が欲しい時はここから選んでくれ↓" />
              <div className="mt-3 rounded-xl border border-[#e3e5e8] bg-white p-3">
                <div className="flex flex-wrap gap-2">
                  {CONVERT.map((p, i) => (
                    <span key={p} className={`rounded-md px-3 py-1.5 text-sm ${i === 0 ? "bg-[#5865f2] text-white" : "bg-[#f2f3f5] text-[#313338]"}`}>
                      📂 {p}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[#5c5e66]">→ v0 用に変換できたよ。貼ればそのまま動くはず。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── こだわり ── */}
      <section id="craft" className="mx-auto max-w-5xl px-5 py-20">
        <p className="text-center text-cha text-sm tracking-widest font-medium">CRAFT</p>
        <h2 className="text-center font-mincho text-2xl sm:text-3xl font-bold mt-2">力を入れたのは、賢さより“信頼”</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { e: "🙅", t: "知ったふりをしない", d: "未知を「未知」として検出し、聞く・調べる・仮説で進むに仕分け。仮定は必ず明示する。" },
            { e: "🍵", t: "切らさず、完走する", d: "成果物が途中で壊れたまま出ることはない。最後まで“使える形”で届けることを構造で保証。" },
            { e: "🎭", t: "依頼する体験ごと", d: "8人の人格・進捗の演出・世界観。ただの出力じゃなく「チームに頼んだ」感触をまるごと設計。" },
          ].map((c) => (
            <div key={c.t} className="washi-card rounded-2xl p-6">
              <div className="text-3xl">{c.e}</div>
              <h3 className="font-bold mt-3">{c.t}</h3>
              <p className="text-sm text-sumi-soft mt-2 leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm text-sumi-soft">
          設計判断のすべて（課題→判断→理由）は
          <a href={DESIGN} target="_blank" className="text-matcha-deep underline underline-offset-4 mx-1">設計ログ</a>
          に公開しています。
        </p>
      </section>

      {/* ── 技術 ── */}
      <section className="bg-matcha-deep/[0.04] border-y border-line">
        <div className="mx-auto max-w-5xl px-5 py-14">
          <h2 className="text-center font-mincho text-xl font-bold">つくりの中身</h2>
          <div className="mt-7 flex flex-wrap justify-center gap-2.5">
            {["LangGraph（状態グラフ）", "Blackboard＋5操作", "discord.py", "Docker / 24h常駐", "Claude・GPT・Gemini を用途別に", "Tavily 検索"].map((t) => (
              <span key={t} className="rounded-full border border-line bg-washi px-4 py-2 text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── フッター ── */}
      <footer className="mx-auto max-w-5xl px-5 py-16 text-center">
        <Image src="/teamy/logo_circle.png" alt="TeaMy" width={48} height={48} className="mx-auto rounded-full" />
        <p className="mt-4 font-mincho font-bold text-lg">TeaMy</p>
        <p className="text-sm text-sumi-soft mt-1">個人開発プロダクト ／ 設計：自分・実装：AIを駆使</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href={DESIGN} target="_blank" className="rounded-full bg-matcha-deep text-washi px-5 py-2.5 text-sm font-medium hover:bg-matcha transition">設計ログを見る</a>
          <a href={GITHUB} target="_blank" className="rounded-full border border-line bg-washi px-5 py-2.5 text-sm font-medium hover:border-matcha transition">GitHub</a>
        </div>
        <p className="mt-10 text-xs text-sumi-soft/70">© 2026 AnIT — TeaMy</p>
      </footer>
    </main>
  );
}

/* ── Discord パーツ（実画面の構造に忠実） ── */
function DiscordYou({ text }: { text: string }) {
  return (
    <div className="flex gap-2.5">
      <div className="h-9 w-9 rounded-full bg-[#5865f2] text-white grid place-items-center text-xs font-bold shrink-0">あ</div>
      <div>
        <p className="text-[13px]"><b>あにっと</b> <span className="text-[10px] text-[#949ba4]">今日 21:04</span></p>
        <p className="text-[13px] leading-snug">{text}</p>
      </div>
    </div>
  );
}

function DiscordMsg({ img, name, color, text }: { img: string; name: string; color: string; text: string }) {
  return (
    <div className="flex gap-2.5">
      <Image src={`/teamy/${img}.png`} alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover shrink-0" />
      <div>
        <p className="text-[13px]"><b style={{ color }}>{name}</b> <span className="text-[9px] bg-[#5865f2] text-white rounded px-1 ml-0.5 align-middle">BOT</span></p>
        <p className="text-[13px] leading-snug">{text}</p>
      </div>
    </div>
  );
}

function DiscordCard() {
  return (
    <div className="ml-11 rounded-md border-l-4 border-[#d8a23e] bg-white shadow-sm px-3 py-2.5">
      <p className="text-[12px] font-bold text-[#313338]">🙋 ひとつだけ確認させて</p>
      <p className="text-[12px] text-[#5c5e66] mt-1">想定ユーザーは「就活中の学生」で合ってる？（NoならNoで進めます）</p>
      <div className="mt-2 flex gap-2">
        <span className="rounded bg-[#5865f2] text-white text-[11px] px-2.5 py-1">合ってる</span>
        <span className="rounded bg-[#f2f3f5] text-[#313338] text-[11px] px-2.5 py-1">仮説で進めて</span>
      </div>
    </div>
  );
}

function DiscordDeliver() {
  return (
    <div className="ml-11 rounded-md border border-[#e3e5e8] bg-white shadow-sm overflow-hidden">
      <div className="bg-[#46603c] text-white text-[12px] font-bold px-3 py-2">🍵 成果物：就活LP 改善案</div>
      <div className="px-3 py-2.5 text-[12px] text-[#313338] space-y-1">
        <p>・冒頭は「機能」より「あの締切いつだっけ…」の悩みから</p>
        <p>・1スクロール＝1メッセージに絞る</p>
        <p>・CTAは「登録不要ですぐ」で心理的ハードルを下げる</p>
      </div>
      <div className="border-t border-[#e3e5e8] px-3 py-2 text-[11px] text-[#5c5e66]">📂 別の形式が欲しい時は「変換」から</div>
    </div>
  );
}
