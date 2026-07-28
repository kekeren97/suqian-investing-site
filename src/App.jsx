import { useState } from "react";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const offers = [
  {
    index: "01 / PROBABILITY",
    title: "概率交易系统",
    copy: "抓住具备长期概率优势的机会，靠规则不靠运气。",
    points: ["长期概率优势的识别方法", "精准交易提高赢面", "规则化的入场与出场"],
    action: "进入课程 →",
  },
  {
    index: "02 / TOOLS",
    title: "苏倩工具表",
    copy: "把“分析企业”标准化、自动化，不再满网扒财报。",
    points: ["企业财务对比分析", "多维雷达图评估", "科技 / 消费行业排行榜"],
    action: "体验工具 →",
  },
  {
    index: "03 / CONTENT",
    title: "视频 + 文章",
    copy: "十多年实践的经验和技巧，方法论不藏私。",
    points: ["投资交易的认知与方法", "实盘案例拆解", "学会用规则做交易管理"],
    action: "进入频道 →",
  },
];

const cases = [
  ["贵州茅台", "SH600519", "2016.05 → 2018.08", "+125.3%", "一笔最经典的“等状态A再买”"],
  ["海康威视", "SZ002415", "2017.03 → 2018.02", "+88.8%", "得概率优势，守株待兔"],
  ["伟星新材", "SZ002372", "2016.07 → 2018.09", "+64.5%", "建材行业隐藏的优等生"],
  ["爱尔眼科", "SZ300015", "2017.11 → 2018.08", "+52.3%", "医疗器械的“长潜”样本"],
  ["海天味业", "SH603288", "2017.05 → 2020.02", "+128.3%", "食品消费类龙头"],
  ["谷歌", "GOOG", "2020.07 → 2022.01", "+74.6%", "科技巨头，盈利能力高"],
  ["英伟达", "NVDA", "2023.05 → 2025.01", "+287.0%", "全球市值最高的公司"],
  ["台积电", "TSM", "2023.11 → 2025.02", "+62%", "垄断芯片市场，每股收益极高"],
];

const faq = [
  ["适合什么人学习？", <>对未来有更高追求，<strong>希望凭自己的智慧独立去做投资交易</strong>的人。<ul><li>萌新手：能少走 5 年弯路</li><li>多年老手：对比一下，是否殊途同归</li><li>所有人：都会成为更好的自己</li></ul></>],
  ["会不会很难？", "不难。真正需要练习的，是建立规则、等待机会并坚持执行。"],
  ["能学到什么？", "从企业分析、价格判断，到一套能反复执行的交易管理方法。"],
  ["有荐股群吗？", "没有。苏倩不提供荐股服务，而是帮助你建立自己的判断。"],
  ["课程怎么收费？有免费内容先看吗？", "有免费的公开内容；系统课程以实际页面展示的会员方案为准。"],
  ["状态 A 是什么意思？看不懂", "这是价格处于长期上涨初期的一类规则化信号，课程会循序解释。"],
  ["跟其他投资课程有什么不同？", "重点不在预测，而在概率、入场规则和风险管理。"],
  ["课程内容如何使用？", "可先从公开内容开始，再根据自己的节奏安排系统学习。"],
];

function LinkButton({ children, className = "", onClick }) {
  return <button className={`button ${className}`} onClick={onClick}>{children}</button>;
}

export function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [query, setQuery] = useState("");

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const handleSearch = (event) => {
    if (event.key === "Enter" && query.trim()) window.alert(`演示搜索：${query.trim()}`);
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="nav-wrap">
          <button className="brand" onClick={() => scrollTo("top")}>苏倩</button>
          <label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleSearch} placeholder="搜索股票代码或名称..." /></label>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"}>
            <button onClick={() => scrollTo("method")}>金字塔</button><button onClick={() => scrollTo("offers")}>交易课</button><button onClick={() => scrollTo("about")}>视频</button><button onClick={() => scrollTo("faq")}>加入会员</button><button onClick={() => scrollTo("about")}>关于</button><LinkButton className="login">登录</LinkButton>
          </nav>
          <button className="menu-button" aria-label="切换菜单" onClick={() => setMenuOpen(!menuOpen)}><img src={asset("menu.svg")} alt="" /></button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-art" src={asset("hero-woman.png")} alt="" />
          <div className="hero-copy wrap">
            <p className="eyebrow">SU QIAN · INVESTMENT NOTES</p>
            <h1>苏倩 <span>（长期投资学习社区）</span></h1>
            <p className="hero-tagline">用清晰的规则，认真对待每一次投资决策。</p>
            <p className="hero-intro">我是苏倩，专注于长期投资与交易方法。<br />这里整理企业分析、价格判断和交易管理的实用工具。<br />不追逐热点，也不依赖运气。<br />把复杂的问题，变成可以重复执行的步骤。</p>
            <div className="hero-actions"><LinkButton className="dark">观看投资分享</LinkButton><LinkButton>开始学习</LinkButton><LinkButton>使用苏倩工具</LinkButton><LinkButton onClick={() => setContactOpen(true)}>给苏倩写信</LinkButton></div>
          </div>
        </section>

        <section className="letter-section narrow" id="letter">
          <p className="eyebrow">A NOTE FOR PATIENT INVESTORS</p><h2>致每一位认真投资的朋友</h2><p className="subtle">关于耐心、规则与长期主义</p>
          <button className="letter-toggle" onClick={() => setLetterOpen(!letterOpen)}><span>{letterOpen ? "收起全文" : "阅读全文"}</span><b>{letterOpen ? "−" : "+"}</b></button>
          {letterOpen && <div className="letter-body">市场始终喧闹，但投资不必跟着喧闹。这里想分享一套更笨、更稳、能让人睡得着的交易方法。</div>}
        </section>

        <section className="section wrap" id="offers"><p className="eyebrow">WHAT WE OFFER</p><h2>苏倩：把长期主义变成可执行的工具</h2><p className="subtle">不是“每日牛股”，不是“短线秘籍”。是概率交易系统、长期经验与一套清晰的工具。</p><div className="offer-grid">{offers.map((item) => <article className="card offer-card" key={item.index}><p className="eyebrow">{item.index}</p><h3>{item.title}</h3><p>{item.copy}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul><button className="text-link">{item.action}</button></article>)}</div></section>

        <section className="section wrap" id="method"><p className="eyebrow">METHODOLOGY</p><h2>怎么在股市里“先活下来”？</h2><p className="subtle">把它分成两层概率</p><div className="method-grid"><article className="card method-card"><p className="eyebrow">PROBABILITY · LAYER 01</p><h3>分析企业</h3><p className="italic">这家企业是否具备长期上涨的潜力？</p><ul><li>看盈利能力（ROE、毛利、净利）</li><li>看财务结构（负债、现金流）</li><li>看增长持续性</li><li>工具能帮你做对比，省掉 80% 的资料搜集时间</li></ul></article><article className="card method-card"><p className="eyebrow">PROBABILITY · LAYER 02</p><h3>分析价格</h3><p className="italic">入场价格是否处于长期上涨初期？</p><ul><li>状态 A / B / C / D 信号识别</li><li>多周期图（月 / 周 / 日）综合判断</li><li>等买点出现，而不是猜涨跌</li><li>按规则执行，不被情绪左右</li></ul></article></div><div className="method-quote"><strong>先选对股票，再选对时机。</strong><span>有了这层逻辑打底，你不会轻易怀疑自己的判断，也更容易拿得住。</span></div></section>

        <section className="section wrap cases"><p className="eyebrow">CASE CLOSED · 已结案案例</p><h2>历史战绩</h2><p className="subtle">按苏倩方法完整执行的公开案例。每笔都有明确的入场规则和出场规则。</p><div className="table-card"><div className="table-title"><span>已结案案例 · 8 笔</span><span>已结案</span></div><div className="table-scroll"><table><thead><tr><th>股票</th><th>区间</th><th>收益</th><th>一句话备注</th></tr></thead><tbody>{cases.map(([name, code, period, gain, note]) => <tr key={code}><td><strong>{name}</strong> <small>{code}</small></td><td>{period}</td><td className="gain">↑ {gain}</td><td>{note}</td></tr>)}</tbody></table></div><div className="notes">※ 以上案例均为按苏倩方法完整执行并已结案的盈利案例。<br />※ 这些案例里，有些是个人操作，有些是会员朋友按方法完成的。来源不同，但方法论是同一套。<br />※ 过去的战绩不代表未来。但方法论的有效性需要长期检验。<br />※ 希望这套方法能成为你长期使用的工具，而不是短期暴富的承诺。</div></div></section>

        <section className="section wrap" id="about"><p className="eyebrow">ABOUT THE AUTHOR</p><h2>关于我</h2><p className="subtle">投资学习者、工具创作者与长期主义实践者</p><article className="author-card"><img src={asset("founder.jpg")} alt="苏倩" /><div className="author-content"><p className="eyebrow">FOUNDER · BUILDER</p><h3>苏倩</h3><p>苏倩主理人 / 投资学习内容创作者</p><div className="tags"><span>长期投资</span><span>企业分析 / 价格判断</span><span>规则化交易管理</span><span>持续学习与复盘</span></div><p>投资并不要求每一次判断都正确，更重要的是建立一套可以反复使用的思考框架，并在不确定中保持纪律。</p><p>我希望通过内容、工具与案例拆解，帮助你把注意力放在真正重要的事情上：<strong>看清企业、等待机会、管理风险。</strong></p><blockquote>说实话：<br /><strong>投资中更困难的，不是预测每一次涨跌。<br />而是学会静静地等待，<br />等待计划中的事情自己出现，自己去发展。</strong></blockquote><div className="history"><b>关于这套方法</b><br />它不承诺捷径，也不替你做决定。它只是把分析、等待和执行拆成可练习的步骤，让每一次选择都更清醒。</div></div></article></section>

        <section className="section narrow faq" id="faq"><p className="eyebrow">FAQ</p><h2>常见问题</h2><p className="subtle">你可能想问的</p><div className="faq-list">{faq.map(([question, answer], index) => <div className={openFaq === index ? "faq-item active" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span className="q-mark">Q</span><strong>{question}</strong><span>{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <div className="faq-answer">{answer}</div>}</div>)}</div></section>
      </main>

      <footer><div className="footer-grid wrap"><div><h4>苏倩</h4><p>欢迎留下。欢迎思考。欢迎在市场里做一个清醒的人。</p><p>投资最终不是找到一个答案<br />而是建立面对未知的方法</p></div><div><h5>导航</h5><button onClick={() => scrollTo("top")}>首页</button><button onClick={() => scrollTo("method")}>金字塔</button><button onClick={() => scrollTo("offers")}>交易课</button><button onClick={() => scrollTo("faq")}>加入会员</button><button onClick={() => scrollTo("about")}>关于</button></div><div><h5>内容</h5><a href="#about">投资分享</a><a href="#offers">课程内容</a><a href="#method">方法论</a></div><div><h5>联系</h5><p>网站留言<br />合作邮箱：hello@suqian.com</p></div></div><div className="footer-bottom wrap"><span>© 2026 苏倩 ｜ 本网站不提供投资建议，投资有风险，决策需谨慎</span><button onClick={() => scrollTo("top")}>返回顶部 ↑</button></div></footer>
      <button className="float-contact" onClick={() => setContactOpen(true)}>留言</button>
      {contactOpen && <div className="modal-backdrop" onClick={() => setContactOpen(false)}><div className="contact-modal" onClick={(e) => e.stopPropagation()}><button className="close" onClick={() => setContactOpen(false)}>×</button><p className="eyebrow">WRITE TO SU QIAN</p><h3>给苏倩写信</h3><p>这是前端演示版，留言提交功能暂未连接。</p><textarea placeholder="想说的话…" /><LinkButton className="dark" onClick={() => setContactOpen(false)}>发送</LinkButton></div></div>}
    </div>
  );
}
