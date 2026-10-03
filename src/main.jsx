import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Apple, ArrowRight, Check, ChevronDown, Clock3, Cloud, Crosshair,
  Gamepad2, Globe2, Headphones, Menu, Monitor, MousePointer2,
  ShieldCheck, Smartphone, Sparkles, X, Zap
} from 'lucide-react'
import './styles.css'
import { footerInfo } from './footer-info'
import { billingRules } from './billing-info'

const assetBaseUrl = (import.meta.env.VITE_ASSET_BASE_URL || import.meta.env.BASE_URL).replace(/\/+$/, '')
const assetUrl = (path) => `${assetBaseUrl}/${path.replace(/^\/+/, '').split('/').map(encodeURIComponent).join('/')}`

const features = [
  { title: '满血性能', caption: '云端性能', text: 'RTX 级云端显卡，3A 大作也能拉满画质。', image: '/assets/ChatGPT 图像 2026年10月3日 10_15_09-1.png', alt: '旗舰显卡与云端服务器置于未来游戏城市中' },
  { title: '疾速低延迟', caption: '即时响应', text: '智能节点调度，操作响应快人一步。', image: '/assets/ChatGPT 图像 2026年10月3日 10_15_21-2.png', alt: '游戏手柄通过高速光路连接云端，赛车飞驰而过' },
  { title: '即点即玩', caption: '一键启动', text: '无需下载更新，游戏库一键启动。', image: '/assets/ChatGPT 图像 2026年10月3日 10_15_26-3.png', alt: '手指点击启动按钮，开启丰富的云端游戏世界' },
  { title: '全端畅玩', caption: '多端接力', text: '电脑、手机、平板，随时接力你的战局。', image: '/assets/ChatGPT 图像 2026年10月3日 10_15_30-4.png', alt: '笔记本电脑、手机和平板连接云端，显示同一游戏世界' },
]

const plans = [
  { name: '轻享版', tag: '轻量畅玩', price: '2.9', gpu: 'RTX 级云端显卡', cpu: null, memory: null, resolution: '1080P 高清', frameRate: null, games: ['热门网游', '独立游戏'], description: '轻松娱乐，日常畅玩' },
  { name: '电竞版', tag: '竞技之选', price: '4.9', hot: true, gpu: 'RTX 高性能显卡', cpu: null, memory: null, resolution: '2K 超清', frameRate: null, games: ['FPS 射击', 'MOBA 竞技'], description: '适合重视画质与操作响应的玩家' },
  { name: '旗舰版', tag: '极致性能', price: '7.9', gpu: 'RTX 旗舰级显卡', cpu: null, memory: null, resolution: '2K 超清', frameRate: '120 FPS', games: ['3A 大作', '光追游戏'], description: '沉浸冒险，探索细腻光影' },
]

const planSpecFields = [
  ['gpu', '显卡'], ['cpu', 'CPU'], ['memory', '内存'], ['resolution', '分辨率'], ['frameRate', '帧率'],
]

const scenes = [
  { num: '01', icon: Crosshair, title: '竞技上分', text: '稳定高帧、低延迟，把每一次反应都化成制胜操作。', image: '/assets/scene-esports.png' },
  { num: '02', icon: Gamepad2, title: '3A 沉浸', text: '无需高配主机，在云端开启电影级的冒险世界。', image: '/assets/scene-aaa.png' },
  { num: '03', icon: Headphones, title: '移动开黑', text: '一部手机也能接入你的游戏宇宙，随时与队友并肩。', image: '/assets/scene-mobile.png' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState(false)
  const [activeSection, setActiveSection] = useState('features')
  const download = () => { setNotice(true); window.setTimeout(() => setNotice(false), 3200) }
  const nav = [['产品优势', 'features'], ['云端套餐', 'plans'], ['应用场景', 'scenes'], ['计费说明', 'billing'], ['新手指南', 'guide']]
  const go = (id) => { setActiveSection(id); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  useEffect(() => {
    const sections = nav.map(([, id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-22% 0px -62% 0px', threshold: [0.05, 0.2, 0.5] })
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="navbar">
      <button className="brand" onClick={() => go('top')} aria-label="回到首页"><span className="brand-mark"><Zap size={18} fill="currentColor" /></span><span>欧竞<span>云电竞</span></span></button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{nav.map(([label, id]) => <button className={activeSection === id ? 'active' : ''} key={id} onClick={() => go(id)}>{label}</button>)}</nav>
      <div className="nav-actions"><button className="download compact" onClick={download}>下载客户端 <ArrowRight size={15} /></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="切换菜单">{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <main id="top">
      <section className="hero" style={{ '--hero-image': `url("${assetUrl('/assets/cloud-esports-future-battlefield.png')}")` }}>
        <div className="hero-inner section">
          <div className="hero-copy">
            <div className="eyebrow"><Sparkles size={14} /> 新一代云端电竞平台</div>
            <h1>硬件不设限<br /><em>热爱，即刻上云</em></h1>
            <p>欧竞云电竞将旗舰游戏主机带到每一块屏幕。无需等待下载，无需昂贵设备，点击即刻进入你的主场。</p>
            <div className="hero-cta"><button className="download large" onClick={download}>立即下载客户端 <ArrowRight size={18} /></button><button className="text-button" onClick={() => go('plans')}>查看套餐 <ChevronDown size={16} /></button></div>
            <div className="trust-row"><span><ShieldCheck size={17} /> 安全稳定</span><span><Clock3 size={17} /> 按时计费</span><span><Cloud size={17} /> 云端存档</span></div>
          </div>
        </div>
      </section>

      <section id="downloads" className="download-section section">
        <div className="client-downloads" aria-label="客户端下载平台">
          <div className="client-download-title"><span>选择你的设备，马上进入云端战场</span></div>
          <div className="client-grid">
            <button className="client-card" onClick={download}><Monitor size={34} /><b>Windows</b><small>Windows 10 及以上</small><i>立即下载 <ArrowRight size={15} /></i></button>
            <button className="client-card" onClick={download}><Apple size={34} /><b>macOS</b><small>macOS 12 及以上</small><i>立即下载 <ArrowRight size={15} /></i></button>
            <button className="client-card" onClick={download}><Smartphone size={34} /><b>Android</b><small>Android 10.0 及以上</small><i>扫码下载 <ArrowRight size={15} /></i></button>
            <button className="client-card web-card" onClick={download}><Globe2 size={29} /><b>H5 网页版</b><small>手机浏览器扫码体验</small><i>立即体验 <ArrowRight size={15} /></i></button>
          </div>
        </div>
      </section>

      <section id="features" className="section block-section">
        <div className="section-heading"><span className="section-kicker">CORE ADVANTAGES</span><h2>为胜利，注入云端战力</h2><p>每一个环节都为流畅游戏体验而设计。</p></div>
        <div className="feature-grid">
          {features.map(({ title, caption, text, image, alt }, i) => <article className="feature-card feature-visual" key={title}>
            <div className="feature-media"><img src={assetUrl(image)} alt={alt} loading="lazy" decoding="async" /></div>
            <div className="feature-copy"><span className="feature-caption">0{i + 1} / {caption}</span><h3>{title}</h3><p>{text}</p></div>
          </article>)}
        </div>
      </section>

      <section id="plans" className="section block-section plans-section">
        <div className="section-heading"><span className="section-kicker">CLOUD PLANS</span><h2>选好装备，马上开战</h2><p>从轻松娱乐到极致画质，总有一档适合你的战场。</p></div>
        <div className="plan-grid">{plans.map(plan => <article className={'plan-card ' + (plan.hot ? 'featured' : '')} key={plan.name}>
          {plan.hot && <div className="popular"><Sparkles size={13} /> 推荐套餐</div>}
          <div className="plan-head"><span>{plan.tag}</span><h3>{plan.name}</h3><p>{plan.description}</p></div>
          <div className="price"><strong>¥{plan.price}</strong><small>/ 小时起</small></div>
          <dl className="plan-specs">{planSpecFields.map(([field, label]) => <div className="plan-spec-row" key={field}><dt>{label}</dt><dd className={plan[field] ? '' : 'spec-pending'}>{plan[field] || '待确认'}</dd></div>)}</dl>
          <div className="plan-games"><h4>适合的游戏类型</h4><div>{plan.games.map(game => <span key={game}>{game}</span>)}</div></div>
          <button onClick={download} className={plan.hot ? 'download plan-button' : 'outline-button plan-button'}>{plan.hot ? '选择电竞版' : '选择' + plan.name} <ArrowRight size={16} /></button>
        </article>)}</div>
        <p className="plans-note">具体显卡型号、CPU 与内存配置待确认；游戏帧率会因游戏设置与网络环境而有所变化。</p>
      </section>

      <section id="scenes" className="section block-section"><div className="section-heading left-heading"><span className="section-kicker">PLAY YOUR WAY</span><h2>不止一个战场</h2></div><div className="scene-grid">{scenes.map(({ num, icon: Icon, title, text, image }) => <article key={title} className="scene-card" style={{ backgroundImage: `url("${assetUrl(image)}")` }}><span className="scene-number">{num}</span><Icon className="scene-icon" size={32} /><div><h3>{title}</h3><p>{text}</p><button onClick={download}>探索场景 <ArrowRight size={15} /></button></div></article>)}</div></section>

      <section id="billing" className="section billing-section">
        <div className="billing-copy"><span className="section-kicker">FLEXIBLE BILLING</span><h2>什么时候计费，怎样扣费</h2><p>按使用时长计费，云主机关机后停止计费。</p>
          <div className="billing-rules">{billingRules.map(({ title, text, detail, confirmed }, i) => <article className="billing-rule" key={title}><span className="billing-rule-number">0{i + 1}</span><div><h3>{title}{!confirmed && <small>待确认</small>}</h3><p>{text}</p><span className="billing-rule-detail">{detail}</span></div></article>)}</div>
          <p className="billing-verification-note">尚未确认的规则将在运营方提供实际说明后补充。</p>
        </div>
        <aside className="billing-aside">
          <div className="billing-card"><div className="bill-top"><span><Clock3 size={14} /> 使用时长</span><b>界面示意</b></div><div className="bill-time">00<span>:</span>24<span>:</span>36</div><div className="bill-line"><span>所选套餐</span><strong>电竞版</strong></div><div className="bill-line bill-rate"><span>每小时单价</span><strong>¥4.9 / 小时起</strong></div><p className="bill-demo-note">示例时长，不代表实际账单。</p></div>
          <button className="outline-button" onClick={download}>下载客户端 <ArrowRight size={16} /></button>
        </aside>
      </section>

      <section id="guide" className="section block-section guide-section"><div className="section-heading"><span className="section-kicker">GET STARTED</span><h2>四步，进入你的游戏宇宙</h2></div><div className="steps">{[['01', '下载客户端', '覆盖 Windows、macOS、iOS、Android'], ['02', '注册欧竞账号', '新用户即可领取体验时长'], ['03', '选择心仪游戏', '海量游戏，一键启动云端主机'], ['04', '即刻开始畅玩', '连接成功，马上投入战斗']].map(([num, title, text], i) => <div className="step" key={num}><span>{num}</span>{i < 3 && <i />}<MousePointer2 size={21} /><h3>{title}</h3><p>{text}</p></div>)}</div><button className="download large final-cta" onClick={download}>现在就开始 <ArrowRight size={18} /></button></section>
    </main>
    <footer className="site-footer">
      <div className="footer-main section">
        <div className="footer-intro"><div className="footer-brand"><span className="brand-mark"><Zap size={17} fill="currentColor" /></span><b>欧竞云电竞</b></div><p>让每一份热爱，都拥有顶级战力。</p><span className="footer-tagline">随时上云，即刻开战</span></div>
        <div className="footer-column"><h3>探索欧竞</h3>{nav.slice(0, 3).map(([label, id]) => <a href={'#' + id} key={id}>{label}</a>)}</div>
        <div className="footer-column"><h3>帮助与支持</h3><a href="#guide">新手指南</a><a href="#billing">计费说明</a><a href="#downloads">客户端下载</a></div>
        <div className="footer-column"><h3>联系客服</h3>{footerInfo.customerService ? <a href={footerInfo.customerService.href}><span>{footerInfo.customerService.label}</span>{footerInfo.customerService.value}</a> : <span className="footer-pending">客服信息待提供</span>}{footerInfo.serviceHours && <span>{footerInfo.serviceHours}</span>}</div>
        <div className="footer-column"><h3>协议与隐私</h3>{[['用户协议', footerInfo.userAgreementUrl], ['隐私政策', footerInfo.privacyPolicyUrl]].map(([label, url]) => url ? <a key={label} href={url}>{label}</a> : <span key={label} className="footer-pending">{label}（待提供）</span>)}</div>
      </div>
      <div className="footer-bottom section"><small>© 2026 OUJING CLOUD GAMING. All rights reserved.</small><div className="footer-registration">{footerInfo.operatorName && <span>{footerInfo.operatorName}</span>}{[footerInfo.icp, footerInfo.publicSecurity].filter(Boolean).map(({ number, href }) => <a key={number} href={href} target="_blank" rel="noopener noreferrer">{number}</a>)}</div></div>
    </footer>
    {notice && <div className="toast"><Check size={18} /> 下载通道即将开放，敬请期待！</div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
