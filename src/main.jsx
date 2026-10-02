import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Apple, ArrowRight, Check, ChevronDown, Clock3, Cloud, Cpu, Crosshair,
  Gamepad2, Globe2, Headphones, Menu, Monitor, MousePointer2, Rocket,
  ShieldCheck, Smartphone, Sparkles, Wifi, X, Zap
} from 'lucide-react'
import './styles.css'

const features = [
  { icon: Cpu, title: '满血性能', text: 'RTX 级云端显卡，3A 大作也能拉满画质。' },
  { icon: Wifi, title: '疾速低延迟', text: '智能节点调度，操作响应快人一步。' },
  { icon: Rocket, title: '即点即玩', text: '无需下载更新，游戏库一键启动。' },
  { icon: Monitor, title: '全端畅玩', text: '电脑、手机、平板，随时接力你的战局。' },
]

const plans = [
  { name: '轻享版', tag: '轻量畅玩', price: '2.9', specs: ['RTX 级云端显卡', '1080P 高清画质', '适合热门网游与独立游戏'] },
  { name: '电竞版', tag: '人气推荐', price: '4.9', hot: true, specs: ['RTX 高性能显卡', '2K 超清画质', '高帧率电竞游戏体验'] },
  { name: '旗舰版', tag: '极致性能', price: '7.9', specs: ['RTX 旗舰级显卡', '2K / 120 FPS', '为 3A 光追大作而生'] },
]

const scenes = [
  { num: '01', icon: Crosshair, title: '竞技上分', text: '稳定高帧、低延迟，把每一次反应都化成制胜操作。', className: 'scene-blue' },
  { num: '02', icon: Gamepad2, title: '3A 沉浸', text: '无需高配主机，在云端开启电影级的冒险世界。', className: 'scene-purple' },
  { num: '03', icon: Headphones, title: '移动开黑', text: '一部手机也能接入你的游戏宇宙，随时与队友并肩。', className: 'scene-cyan' },
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
      <div className="nav-actions"><button className="download compact" onClick={download}>下载客户端 <ArrowRight size={15}/></button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="切换菜单">{menuOpen ? <X/> : <Menu/>}</button></div>
    </header>

    <main id="top">
      <section className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14}/> 新一代云端电竞平台</div>
          <h1>硬件不设限<br/><em>热爱，即刻上云</em></h1>
          <p>欧竞云电竞将旗舰游戏主机带到每一块屏幕。无需等待下载，无需昂贵设备，点击即刻进入你的主场。</p>
          <div className="hero-cta"><button className="download large" onClick={download}>立即下载客户端 <ArrowRight size={18}/></button><button className="text-button" onClick={() => go('plans')}>查看套餐 <ChevronDown size={16}/></button></div>
          <div className="trust-row"><span><ShieldCheck size={17}/> 安全稳定</span><span><Clock3 size={17}/> 按时计费</span><span><Cloud size={17}/> 云端存档</span></div>
        </div>
      </section>

      <section className="download-section section">
        <div className="client-downloads" aria-label="客户端下载平台">
          <div className="client-download-title"><span>选择你的设备，马上进入云端战场</span></div>
          <div className="client-grid">
            <button className="client-card" onClick={download}><Monitor size={34}/><b>Windows</b><small>Windows 10 及以上</small><i>立即下载 <ArrowRight size={15}/></i></button>
            <button className="client-card" onClick={download}><Apple size={34}/><b>macOS</b><small>macOS 12 及以上</small><i>立即下载 <ArrowRight size={15}/></i></button>
            <button className="client-card" onClick={download}><Smartphone size={34}/><b>Android</b><small>Android 10.0 及以上</small><i>扫码下载 <ArrowRight size={15}/></i></button>
            <button className="client-card web-card" onClick={download}><Globe2 size={29}/><b>H5 网页版</b><small>手机浏览器扫码体验</small><i>立即体验 <ArrowRight size={15}/></i></button>
          </div>
        </div>
      </section>

      <section id="features" className="section block-section">
        <div className="section-heading"><span className="section-kicker">CORE ADVANTAGES</span><h2>为胜利，注入云端战力</h2><p>每一个环节都为流畅游戏体验而设计。</p></div>
        <div className="feature-grid">{features.map(({icon: Icon, title, text}, i) => <article className="feature-card" key={title}><span className="feature-index">0{i + 1}</span><div className="icon-box"><Icon size={25}/></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="plans" className="section block-section plans-section">
        <div className="section-heading"><span className="section-kicker">CLOUD PLANS</span><h2>选好装备，马上开战</h2><p>从轻松娱乐到极致画质，总有一档适合你的战场。</p></div>
        <div className="plan-grid">{plans.map(plan => <article className={'plan-card ' + (plan.hot ? 'featured' : '')} key={plan.name}>{plan.hot && <div className="popular">最受欢迎</div>}<div className="plan-head"><span>{plan.tag}</span><h3>{plan.name}</h3></div><div className="price"><strong>¥{plan.price}</strong><small>/ 小时起</small></div><ul>{plan.specs.map(s => <li key={s}><Check size={16}/>{s}</li>)}</ul><button onClick={download} className={plan.hot ? 'download plan-button' : 'outline-button plan-button'}>立即开玩 <ArrowRight size={16}/></button></article>)}</div>
      </section>

      <section id="scenes" className="section block-section"><div className="section-heading left-heading"><span className="section-kicker">PLAY YOUR WAY</span><h2>不止一个战场</h2></div><div className="scene-grid">{scenes.map(({num, icon: Icon, title, text, className}) => <article key={title} className={'scene-card ' + className}><span className="scene-number">{num}</span><Icon className="scene-icon" size={32}/><div><h3>{title}</h3><p>{text}</p><button onClick={download}>探索场景 <ArrowRight size={15}/></button></div><div className="scene-art"/></article>)}</div></section>

      <section id="billing" className="section billing-section"><div className="billing-copy"><span className="section-kicker">FLEXIBLE BILLING</span><h2>玩的每一分钟，都算得清楚</h2><p>按实际使用时长计费，随开随用，关机即停。没有设备门槛，也没有隐形费用。</p><button className="outline-button" onClick={download}>下载并领取体验时长 <ArrowRight size={16}/></button></div><div className="billing-card"><div className="bill-top"><span>本次云端游戏</span><b>实时计费中</b></div><div className="bill-time">01<span>:</span>24<span>:</span>36</div><div className="bill-line"><span>电竞版 · ¥4.9 / 小时</span><strong>¥0.12</strong></div><div className="bill-meter"><i/></div><p><Check size={15}/> 关机即停止计费</p></div></section>

      <section id="guide" className="section block-section guide-section"><div className="section-heading"><span className="section-kicker">GET STARTED</span><h2>四步，进入你的游戏宇宙</h2></div><div className="steps">{[['01','下载客户端','覆盖 Windows、macOS、iOS、Android'],['02','注册欧竞账号','新用户即可领取体验时长'],['03','选择心仪游戏','海量游戏，一键启动云端主机'],['04','即刻开始畅玩','连接成功，马上投入战斗']].map(([num,title,text],i) => <div className="step" key={num}><span>{num}</span>{i < 3 && <i/>}<MousePointer2 size={21}/><h3>{title}</h3><p>{text}</p></div>)}</div><button className="download large final-cta" onClick={download}>现在就开始 <ArrowRight size={18}/></button></section>
    </main>
    <footer><div className="footer-brand"><span className="brand-mark"><Zap size={17} fill="currentColor"/></span><b>欧竞云电竞</b></div><p>让每一份热爱，都拥有顶级战力。</p><div className="footer-links">{nav.slice(0,4).map(([label,id]) => <button onClick={() => go(id)} key={id}>{label}</button>)}</div><small>© 2026 OUJING CLOUD GAMING. All rights reserved.</small></footer>
    {notice && <div className="toast"><Check size={18}/> 下载通道即将开放，敬请期待！</div>}
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
