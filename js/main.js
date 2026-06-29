const {useState,useEffect,useCallback,memo,useRef}=React;

/* ════════════════════════════════════════════════════
   CONSTANTS — ALL REAL CHURCH DATA
════════════════════════════════════════════════════ */
const FORMSPREE_ID        = "xqenlekg";
const YOUTUBE_CHANNEL_ID  = "UCro161-C4FkHbjJkPSyMh-Q";
const YOUTUBE_URL         = "https://www.youtube.com/@RCCGRevivalCenterDallasTX";
const IG_HANDLE           = "revivalcentertexas";
const FACEBOOK_URL        = "https://www.facebook.com/profile.php?id=61576666061879";
const TIKTOK_URL          = "https://www.tiktok.com/@rccgrevivalcentertexas";
const MAPS_URL            = "https://www.google.com/maps/dir/?api=1&destination=351+Market+Center+Dr,+Terrell,+TX+75160";
const ADDRESS             = "351 Market Center Dr, Terrell, TX 75160";
const PHONE               = "+1-734-545-5493";
const EMAIL               = "revivalcentertexas@gmail.com";
const ZOOM_ID             = "818 0873 5923";
const ZOOM_PASS           = "revival";

/* Logo files */
const LOGO_DARK   = "./logo-dark.png";   
const LOGO_WHITE  = "./logo-white.png";  
const PASTOR_PROFILE = "./pastor-samuel-profile.png";
const PASTOR_OLU     = "./pastor-oluwatobi-profile.png";

const FALLBACK_VIDEOS = [
  {id:"M79OObkmp50",  title:"The Rain of Holy Fire: Zeal, Prayer, Purpose & Revival", subtitle:"Revival Messages", duration:"1:10:30", date:"2026-04-26"},
  {id:"f0sXb3WBVFM",  title:"The Power of Speaking God's Word in Faith for Victory", subtitle:"Sunday School", duration:"54:47", date:"2026-04-19"},
  {id:"AlkiOCP5Mhg",  title:"Who You Are in Christ and Overcoming Identity Crisis", subtitle:"Sunday School", duration:"1:00:07", date:"2026-04-12"},
  {id:"LEnF7OZolwA",  title:"Nehemiah Sermon: Fulfilling Purpose Amid Opposition", subtitle:"Sermon", duration:"1:08:45", date:"2026-04-05"},
  {id:"RKvZLCW25tw",  title:"Preparing for Christ's Return: What Jesus Expects", subtitle:"Sunday School", duration:"48:11", date:"2026-03-29"},
  {id:"2TePbd6TqbE",  title:"Come Up Higher in God Through Prayer and the Word", subtitle:"Sunday School", duration:"35:36", date:"2026-03-22"},
  {id:"cvr2Po1Lk3s",  title:"Exercising Our Spiritual Senses", subtitle:"Sunday School", duration:"40:35", date:"2026-03-15"},
  {id:"8s_oE9vqJw0",  title:"Get Knowledge: The Pathway to Preservation", subtitle:"Sunday School", duration:"1:04:31", date:"2026-03-08"}
];

const BELIEFS = [
  {n:"The Holy Bible", t:"We believe the entire Bible, both Old and New Testaments, is the written and revealed Word of God. It is infallible, inspired, authoritative, and the supreme standard for faith and conduct."},
  {n:"The Trinity", t:"We believe in one true God who eternally exists in three divine persons: God the Father, God the Son, and God the Holy Spirit. He is one God in Trinity and Trinity in Unity."},
  {n:"Jesus Christ", t:"We believe Jesus Christ is the only begotten Son of God. He was conceived by the Holy Spirit, born of the Virgin Mary, lived a sinless life, died as an atoning sacrifice for sin, rose on the third day, ascended into heaven, and now intercedes for us."},
  {n:"Salvation", t:"We believe all people need salvation. Salvation is God’s gift of grace through faith in Jesus Christ and is received through repentance and confession of Jesus as Lord and Savior."},
  {n:"The Holy Spirit", t:"We believe the Holy Spirit dwells in believers, teaches, comforts, empowers for service and holy living, and works through spiritual gifts and holy fruit in the Church."},
  {n:"Water Baptism", t:"We practice water baptism by immersion in the name of the Father, Son, and Holy Spirit as an outward symbol of inward transformation in Christ."},
  {n:"Sanctification and Holiness", t:"We believe sanctification begins at the new birth and continues as a progressive work of grace. God calls believers to holy living through the power of the Holy Spirit."},
  {n:"Divine Healing", t:"We believe divine healing is provided through the redemptive work of Christ. We pray for the sick and trust in God’s power to heal according to His will."},
  {n:"The Second Coming and Eternity", t:"We believe in the visible return of Jesus Christ, the resurrection of the dead, eternal life for the righteous, and eternal separation from God for the unrighteous."},
  {n:"Heaven and Hell", t:"We believe heaven is the eternal home of born-again believers and hell is the place of eternal separation and punishment for the devil, his angels, and all who die outside of Christ."},
  {n:"The Church", t:"We believe the Church is the Body of Christ. The local church gathers believers for worship, fellowship, discipleship, prayer, and the spread of the Gospel, observing baptism and the Lord’s Supper in obedience to Christ."}
];

const MINISTRIES = [
  {name: 'Men ministries', focus: 'Raising strong, prayerful, and responsible men who lead with Christlike character.', highlights: ['Prayer', 'Leadership', 'Discipleship']},
  {name: 'Women ministries', focus: 'Strengthening women in faith, wisdom, fellowship, service, and spiritual growth.', highlights: ['Fellowship', 'Care', 'Growth']},
  {name: 'Young Adult and Youth Ministries', focus: 'Helping young people grow in truth, purpose, purity, and bold faith in Jesus Christ.', highlights: ['Identity', 'Mentorship', 'Purpose']}
];

const DEPARTMENTS = [
  'Sunday School', 'Prayer', 'Evangelism', 'Follow Up and Visitation', 
  'Children', 'Media and Publicity', 'Social Media', 'Technical', 
  'Hospitality', 'Counseling', 'Choir'
];

const SOCIAL_LINKS = [
  {name:"YouTube",   url:YOUTUBE_URL,                              color:"#FF0000",
   icon:<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
   desc:"Sermons, teachings & revival messages"},
  {name:"Instagram", url: `https://www.instagram.com/${IG_HANDLE}/`, color:"#E1306C",
   icon:<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>,
   desc:"Service updates & church moments"},
  {name:"Facebook",  url:FACEBOOK_URL,                             color:"#1877F2",
   icon:<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
   desc:"Community news, events & streams"},
  {name:"TikTok",    url:TIKTOK_URL,                               color:"#000000",
   icon:<svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>,
   desc:"Short clips & worship highlights"},
];

const ROUTE_MAP = {
  '/': {id:'home', purpose:'prayer'},
  '/home': {id:'home', purpose:'prayer'},
  '/about': {id:'about', purpose:'prayer'},
  '/ministries': {id:'ministries', purpose:'prayer'},
  '/pastors': {id:'pastors', purpose:'prayer'},
  '/worldwide': {id:'worldwide', purpose:'prayer'},
  '/beliefs': {id:'beliefs', purpose:'prayer'},
  '/visit': {id:'visit', purpose:'prayer'},
  '/events': {id:'events', purpose:'prayer'},
  '/sermons': {id:'sermons', purpose:'prayer'},
  '/give': {id:'give', purpose:'prayer'},
  '/socials': {id:'socials', purpose:'prayer'},
  '/testimonies': {id:'testimonies', purpose:'prayer'},
  '/contact': {id:'contact', purpose:'general'},
  '/contact/prayer': {id:'contact', purpose:'prayer'},
  '/contact/testimony': {id:'contact', purpose:'testimony'},
  '/contact/general': {id:'contact', purpose:'general'}
};

const PAGE_META = {
  home: {title:"RCCG Revival Center Texas — God's Purpose & His Fire", description:"RCCG Revival Center Texas is a Christ-centered church in Terrell, Texas devoted to worship, prayer, revival, discipleship, and growth in God's purpose."},
  about: {title:"Our Story — RCCG Revival Center Texas", description:"Learn about RCCG Revival Center Texas, a Christ-centered church family rooted in worship, prayer, the Word, holiness, and revival."},
  ministries: {title:"Ministries — RCCG Revival Center Texas", description:"Explore ministries and departments at RCCG Revival Center Texas for growth, service, discipleship, and spiritual maturity."},
  pastors: {title:"Leadership — RCCG Revival Center Texas", description:"Meet the pastors and leadership serving RCCG Revival Center Texas."},
  worldwide: {title:"RCCG Worldwide — Revival Center Texas", description:"Learn about the global mission and history of The Redeemed Christian Church of God."},
  beliefs: {title:"What We Believe — RCCG Revival Center Texas", description:"Read the doctrinal foundation and statement of faith of RCCG Revival Center Texas."},
  visit: {title:"Plan Your Visit — RCCG Revival Center Texas", description:"Plan your visit to RCCG Revival Center Texas for Sunday worship in Terrell, Texas."},
  events: {title:"Events — RCCG Revival Center Texas", description:"See Sunday service, Bible study, prayer meeting, and upcoming gatherings at RCCG Revival Center Texas."},
  sermons: {title:"Sermons — RCCG Revival Center Texas", description:"Watch sermons, Sunday School lessons, and revival messages from RCCG Revival Center Texas."},
  give: {title:"Give — RCCG Revival Center Texas", description:"Give to support worship, discipleship, outreach, care, and ministry at RCCG Revival Center Texas."},
  socials: {title:"Socials — RCCG Revival Center Texas", description:"Follow RCCG Revival Center Texas on YouTube, Instagram, Facebook, and TikTok."},
  testimonies: {title:"Testimonies — RCCG Revival Center Texas", description:"Share and celebrate testimonies of salvation, healing, answered prayer, and transformation."},
  contact: {title:"Contact — RCCG Revival Center Texas", description:"Contact RCCG Revival Center Texas, send a prayer request, or share your testimony."}
};

const pageToPath = (id, purpose='prayer') => {
  if(id==='home') return '/';
  if(id==='contact') return purpose==='prayer' ? '/contact/prayer' : purpose==='testimony' ? '/contact/testimony' : '/contact';
  return `/${id}`;
};

const useHashRoutes = () => window.location.protocol === 'file:' || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

const getPageFromLocation = () => {
  if(useHashRoutes() && window.location.hash){
    const hashPath = window.location.hash.replace(/^#/,'').replace(/\/+$/,'') || '/';
    return ROUTE_MAP[hashPath] || ROUTE_MAP['/'];
  }
  const path = window.location.pathname.replace(/\/+$/,'') || '/';
  return ROUTE_MAP[path] || ROUTE_MAP['/'];
};

/* ════════════════════════════════════════════════════
   UTILITIES
════════════════════════════════════════════════════ */
const fmtDate = d => {
  try{ return new Date(d).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}); }
  catch{ return String(d).slice(0,10); }
};

function nextDay(targetDay, cutoffHour=23){
  const now = new Date();
  let diff = (targetDay - now.getDay() + 7) % 7;
  if(diff===0 && now.getHours()>=cutoffHour) diff=7;
  const d = new Date(now);
  d.setDate(now.getDate()+diff);
  return d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
}

/* ════════════════════════════════════════════════════
   REUSABLE COMPONENTS
════════════════════════════════════════════════════ */
function Logo({light=false, height=50}){
  const src = light ? LOGO_WHITE : LOGO_DARK;
  return(
    <img src={src} alt="RCCG Revival Center Texas"
      style={{height:height,width:'auto',display:'block',objectFit:'contain',transition:'height .3s ease'}}
      onError={e=>{
        e.target.src = light ? LOGO_DARK : LOGO_WHITE;
        e.target.onerror=()=>{ e.target.style.display='none'; };
      }}/>
  );
}

function Eyebrow({children, light=false, center=false}){
  return(
    <div style={{marginBottom:14,textAlign:center?'center':'left'}}>
      <span style={{fontSize:11,fontWeight:800,letterSpacing:'.2em',textTransform:'uppercase',color:light?'rgba(255,255,255,.7)':'var(--rust)'}}>{children}</span>
    </div>
  );
}

function CopyBtn({value}){
  const [ok,setOk]=useState(false);
  return(
    <button onClick={async()=>{try{await navigator.clipboard.writeText(value);}catch(_){}setOk(true);setTimeout(()=>setOk(false),1800);}}
      className="btn btn-sm"
      style={{background:ok?'#f0fdf4':'transparent',color:ok?'#16a34a':'var(--rust)',border:`1px solid ${ok?'#bbf7d0':'var(--rust)40'}`,borderRadius:4,letterSpacing:'.06em',fontFamily:'inherit'}}>
      {ok?'✓ Copied':'Copy'}
    </button>
  );
}

/* ════════════════════════════════════════════════════
   GLOBAL EVENT POPUP
════════════════════════════════════════════════════ */
function EventPopup({setPage}){
  const [show,setShow]=useState(false);
  const [closed,setClosed]=useState(false);
  useEffect(()=>{
    if(closed) return;
    const t=setTimeout(()=>setShow(true),3000);
    return()=>clearTimeout(t);
  },[closed]);
  if(!show||closed) return null;
  return(
    <div className="card popup-card" style={{position:'fixed',bottom:28,right:28,zIndex:800,maxWidth:320,padding:24,borderLeft:'4px solid var(--rust)',animation:'popIn .5s cubic-bezier(.16,1,.3,1)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:12}}>
        <span className="tag tag-ink">Upcoming</span>
        <button onClick={()=>setClosed(true)} style={{background:'none',border:'none',fontSize:18,color:'var(--muted)',cursor:'pointer',lineHeight:1,padding:0}}>✕</button>
      </div>
      <h4 className="serif" style={{fontSize:20,fontWeight:900,color:'var(--blue)',marginBottom:8,lineHeight:1.1}}>Sunday Service</h4>
      <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.65,marginBottom:16}}>Join us for praise, prayer, the Word, and fellowship.</p>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <span style={{fontSize:13,fontWeight:700,color:'var(--rust)'}}>{nextDay(0, 14)}</span>
        <button onClick={()=>{setPage('events');setClosed(true);window.scrollTo(0,0);}}
          style={{background:'none',border:'none',color:'var(--blue)',fontSize:12,fontWeight:700,cursor:'pointer',textDecoration:'underline',fontFamily:'inherit'}}>
          See all →
        </button>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   NAVBAR
════════════════════════════════════════════════════ */
const Navbar = memo(({page,setPage})=>{
  const [scrolled,setScrolled]=useState(false);
  const [open,setOpen]=useState(false);
  const [churchOpen,setChurchOpen]=useState(false);
  useEffect(()=>{
    const fn=()=>setScrolled(window.scrollY>50);
    window.addEventListener('scroll',fn,{passive:true});
    return()=>window.removeEventListener('scroll',fn);
  },[]);
  const go=useCallback((id)=>{setPage(id);setOpen(false);setChurchOpen(false);window.scrollTo({top:0,behavior:'smooth'});},[setPage]);
  const churchPages=['about','ministries','pastors','worldwide','beliefs'];
  return(
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:600,background:scrolled?'rgba(245,240,232,.97)':'var(--paper)',backdropFilter:scrolled?'blur(16px)':'none',borderBottom:`1px solid ${scrolled?'var(--border)':'transparent'}`,transition:'all .3s',boxShadow:scrolled?'0 2px 24px rgba(0,0,0,.06)':'none'}}>
        <div style={{maxWidth:1360,margin:'0 auto',padding:'0 40px',height:scrolled?80:110,transition:'height .3s',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          
          {/* Mobile Logo (Visible only on phones) */}
          <button onClick={()=>go('home')} className="mobile-btn" style={{background:'none',border:'none',cursor:'pointer',display:'none',alignItems:'center'}}>
            <Logo height={50}/>
          </button>

          {/* Desktop Left Nav */}
          <div className="desktop-nav" style={{display:'flex',alignItems:'center',gap:32,height:'100%',flex:1,justifyContent:'flex-end'}}>
            <button onClick={()=>go('home')} className={`nav-link${page==='home'?' active':''}`}>Home</button>
            <div className="dropdown-wrap">
              <button className={`nav-link${churchPages.includes(page)?' active':''}`} style={{display:'flex',alignItems:'center',gap:5}}>
                The Church
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <div className="dropdown-menu">
                {[{id:'about',l:'Our Story'},{id:'ministries',l:'Ministries'},{id:'pastors',l:'Leadership'},{id:'worldwide',l:'RCCG Worldwide'},{id:'beliefs',l:'Our Beliefs'}].map(d=>(
                  <button key={d.id} className="dropdown-item" onClick={()=>go(d.id)}>{d.l}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>go('visit')} className={`nav-link${page==='visit'?' active':''}`}>I'm New</button>
            <button onClick={()=>go('events')} className={`nav-link${page==='events'?' active':''}`}>Events</button>
          </div>

          {/* Desktop Center Logo (Massive Anchor) */}
          <div className="desktop-nav" style={{margin:'0 48px',flexShrink:0,display:'flex',alignItems:'center'}}>
            <button onClick={()=>go('home')} style={{background:'none',border:'none',cursor:'pointer',display:'flex',alignItems:'center'}}>
              <Logo height={scrolled?60:90}/>
            </button>
          </div>

          {/* Desktop Right Nav */}
          <div className="desktop-nav" style={{display:'flex',alignItems:'center',gap:32,height:'100%',flex:1,justifyContent:'flex-start'}}>
            <button onClick={()=>go('sermons')} className={`nav-link${page==='sermons'?' active':''}`}>Sermons</button>
            <button onClick={()=>go('testimonies')} className={`nav-link${page==='testimonies'?' active':''}`}>Testimonies</button>
            <button onClick={()=>go('give')} className={`nav-link${page==='give'?' active':''}`}>Give</button>
            <button onClick={()=>go('socials')} className={`nav-link${page==='socials'?' active':''}`}>Socials</button>
            <button onClick={()=>go('contact','general')} className="btn btn-rust btn-sm" style={{marginLeft:8}}>Contact Us</button>
          </div>

          {/* Mobile Menu Button */}
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <button onClick={()=>setOpen(true)} className="btn btn-outline btn-sm mobile-btn" aria-label="Open navigation menu" style={{display:'none'}}>Menu</button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div role="dialog" aria-modal="true" aria-label="Navigation menu" style={{position:'fixed',inset:0,zIndex:850,background:'var(--ink)',color:'#fff',transform:open?'translateY(0)':'translateY(-100%)',transition:'transform .4s cubic-bezier(.4,0,.2,1)',overflowY:'auto',display:'flex',flexDirection:'column'}}>
        <div style={{padding:'20px 28px',display:'flex',justifyContent:'space-between',alignItems:'center',borderBottom:'1px solid rgba(255,255,255,.1)'}}>
          <Logo light height={45}/>
          <button onClick={()=>setOpen(false)} aria-label="Close navigation menu" style={{background:'none',border:'none',color:'#fff',cursor:'pointer',fontSize:13,fontWeight:800,letterSpacing:'.1em',textTransform:'uppercase',fontFamily:'inherit'}}>
            Close ✕
          </button>
        </div>
        <div style={{padding:'32px 28px',flex:1,display:'flex',flexDirection:'column',gap:0}}>
          {[{id:'home',l:'Home'},{id:'visit',l:"I'm New"},{id:'events',l:'Events'},{id:'sermons',l:'Sermons'},{id:'testimonies',l:'Testimonies'},{id:'give',l:'Give'},{id:'socials',l:'Socials'},{id:'contact',l:'Contact'}].map(n=>(
            <button key={n.id} onClick={()=>go(n.id)}
              style={{background:'none',border:'none',borderBottom:'1px solid rgba(255,255,255,.08)',color:page===n.id?'#C84B31':'#fff',fontFamily:"'Fraunces',serif",fontSize:'clamp(28px,7vw,44px)',fontWeight:900,textAlign:'left',padding:'16px 0',cursor:'pointer',letterSpacing:'-.02em'}}>
              {n.l}
            </button>
          ))}
          <button onClick={()=>setChurchOpen(v=>!v)} style={{background:'none',border:'none',borderBottom:'1px solid rgba(255,255,255,.08)',color:'#fff',fontFamily:"'Fraunces',serif",fontSize:'clamp(28px,7vw,44px)',fontWeight:900,textAlign:'left',padding:'16px 0',cursor:'pointer',display:'flex',justifyContent:'space-between',letterSpacing:'-.02em'}}>
            The Church <span style={{fontSize:24,opacity:.6}}>{churchOpen?'−':'+'}</span>
          </button>
          <div style={{maxHeight:churchOpen?500:0,overflow:'hidden',transition:'max-height .3s ease',background:'rgba(255,255,255,.04)'}}>
            {[{id:'about',l:'Our Story'},{id:'ministries',l:'Ministries'},{id:'pastors',l:'Leadership'},{id:'worldwide',l:'RCCG Worldwide'},{id:'beliefs',l:'Our Beliefs'}].map(d=>(
              <button key={d.id} onClick={()=>go(d.id)}
                style={{display:'block',width:'100%',textAlign:'left',background:'none',border:'none',color:'rgba(255,255,255,.8)',fontSize:17,padding:'14px 20px',fontFamily:'inherit',cursor:'pointer'}}>
                {d.l}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
});

/* ════════════════════════════════════════════════════
   HOME PAGE
════════════════════════════════════════════════════ */
function HomePage({setPage}){
  return(
    <>
      {/* HERO */}
      <section
        style={{
          minHeight:'100vh',
          paddingTop:120,
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          background:'var(--paper)',
          borderBottom:'2px solid var(--ink)',
          position:'relative',
          overflow:'hidden'
        }}
      >
        {/* subtle background accent */}
        <div style={{
          position:'absolute',
          top:'-200px',
          right:'-100px',
          width:'700px',
          height:'700px',
          borderRadius:'50%',
          background:'rgba(204,91,52,.06)'
        }}/>

        <div className="hero-grid" style={{
          width:'100%',
          maxWidth:'1360px',
          padding:'8% 40px',
          position:'relative',
          zIndex:2,
          display:'grid',
          gridTemplateColumns:'1.1fr 0.9fr',
          gap:80,
          alignItems:'center'
        }}>

          {/* LEFT COLUMN: Text Content */}
          <div className="fade-up">
            <Eyebrow>Welcome</Eyebrow>
            
            <div style={{fontSize: 'clamp(12px, 1.5vw, 15px)', fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 16}}>
              The Redeemed Christian Church of God
            </div>

            <h1
              className="serif"
              style={{
                fontSize:'clamp(56px,7.5vw,100px)',
                fontWeight:900,
                lineHeight:.9,
                marginBottom:24
              }}
            >
              Revival Center
              <br/>
              Texas
            </h1>

            <h2
              className="serif"
              style={{
                fontSize:'clamp(24px,4vw,42px)',
                color:'var(--rust)',
                fontStyle:'italic',
                fontWeight:400,
                marginBottom:35
              }}
            >
              God's Purpose <span style={{fontFamily: "'Plus Jakarta Sans', sans-serif", fontStyle: 'normal', fontWeight: 600}}>&</span> His Fire.
            </h2>

            <p
              style={{
                maxWidth:'600px',
                fontSize:'clamp(16px,2vw,20px)',
                lineHeight:1.8,
                marginBottom:50,
                color:'var(--muted)'
              }}
            >
              A warm, elegant church home for worship,
              prayer, revival, and growth in Christ.
              We welcome the Holy Spirit to move in our
              lives with clarity and spiritual depth.
            </p>

            <div
              style={{
                display:'flex',
                gap:16,
                flexWrap:'wrap'
              }}
            >
             <button className="btn btn-ink" onClick={()=>setPage('visit')}>Plan Your Visit</button>
              <button className="btn btn-outline" onClick={()=>setPage('contact', 'prayer')}>Prayer Request</button>
              <button className="btn btn-outline" onClick={()=>setPage('sermons')}>Watch Sermons</button>
            </div>
          </div>

          {/* RIGHT COLUMN: The New Side Panel */}
          <div className="fade-up slide-right" style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            borderRadius: 24,
            padding: '40px 32px',
            boxShadow: '0 24px 48px rgba(0,0,0,0.05)'
          }}>
            <div style={{fontSize: 11, fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--rust)', marginBottom: 16}}>
              This week at Revival Center Texas
            </div>
            <h3 className="serif" style={{fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: 900, color: 'var(--ink)', marginBottom: 16, lineHeight: 1.2}}>
              Join us in person and online.
            </h3>
            <p style={{fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 32}}>
              Experience reverent worship, warm fellowship, clear next steps, and a welcoming path into the life of the church.
            </p>

            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
              {/* Sunday Service Box */}
              <div style={{border: '1px solid var(--border)', borderRadius: 12, padding: 20, background: 'var(--paper)'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                  <div style={{fontSize: 18, color: 'var(--rust)'}}></div>
                  <div style={{fontWeight: 700, color: 'var(--ink)'}}>Sunday Service</div>
                </div>
                <div style={{fontSize: 13, color: 'var(--muted)', paddingLeft: 34}}>
                  9:00 AM CST · <span style={{fontWeight:900}}>{ADDRESS}</span>
                </div>
              </div>

              {/* Midweek Services Box */}
              <div style={{border: '1px solid var(--border)', borderRadius: 12, padding: 20, background: 'var(--paper)'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                  <div style={{fontSize: 18, color: 'var(--rust)'}}></div>
                  <div style={{fontWeight: 700, color: 'var(--ink)'}}>Midweek online gatherings</div>
                </div>
                <div style={{fontSize: 13, color: 'var(--muted)', paddingLeft: 34}}>
                  <div style={{marginBottom: 4}}>Wednesdays and Thursdays · 7:00 PM CST</div>
                  <div>Zoom ID: {ZOOM_ID} · Password: <strong style={{fontWeight:900}}>{ZOOM_PASS}</strong></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="section-cream">
        <div className="wrap">
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}>
            <div>
              <Eyebrow>About us</Eyebrow>
              <h2 className="serif" style={{fontSize:'clamp(34px,4vw,54px)',color:'var(--ink)',lineHeight:1.05,marginBottom:24}}>
                Rooted in RCCG.<br/>Focused on revival.<br/>Committed to Christ.
              </h2>
              <p style={{color:'var(--muted)',lineHeight:1.9,fontSize:16,marginBottom:20,fontWeight:400}}>
                Revival Center Texas is a parish of The Redeemed Christian Church of God. We are a Christ-centered church family devoted to worship, prayer, the Word of God, discipleship, holiness, and the transforming power of the Holy Spirit.
              </p>
              <p style={{color:'var(--muted)',lineHeight:1.9,fontSize:16,marginBottom:32,fontWeight:400}}>
                We exist to help people know Jesus, grow in faith, walk in God's purpose, and impact their world for His glory.
              </p>
              <button className="btn btn-ink" onClick={()=>setPage('about')}>Our Full Story</button>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:1,background:'var(--border)'}}>
              {[['✦','Holiness','As a lifestyle'],['◉','Prayer','We are a praying church'],['◈','The Word','Bible-centered teaching'],['◎','Community','A place to belong']].map(([icon,label,desc])=>(
                <div key={label} style={{background:'var(--white)',padding:'32px 24px',borderBottom:'1px solid var(--border)',transition:'background .2s'}}
                  onMouseEnter={e=>e.currentTarget.style.background='var(--rust-pale)'}
                  onMouseLeave={e=>e.currentTarget.style.background='var(--white)'}>
                  <div style={{fontSize:22,color:'var(--rust)',marginBottom:12}}>{icon}</div>
                  <div style={{fontSize:13,fontWeight:700,color:'var(--ink)',marginBottom:6,textTransform:'uppercase',letterSpacing:'.06em'}}>{label}</div>
                  <div style={{fontSize:12,color:'var(--muted)',lineHeight:1.6}}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PASTOR QUOTE */}
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'center'}}>
            <div>
              <div style={{fontSize:100,fontFamily:"'Fraunces',serif",color:'var(--border)',lineHeight:.7,marginBottom:20,userSelect:'none'}}>"</div>
              <blockquote style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(20px,2.2vw,27px)',fontWeight:700,fontStyle:'italic',lineHeight:1.55,color:'var(--ink)',marginBottom:32}}>
                We are glad you are here. Revival Center Texas is a place to grow in God, love people, and walk in His purpose. Whether you are new to church, returning to God, or looking for a church family, you are welcome here. We would love to worship with you and grow together in God's presence.
              </blockquote>
              <div style={{display:'flex',alignItems:'center',gap:14}}>
                <div style={{width:50,height:50,borderRadius:'50%',overflow:'hidden',border:'2px solid var(--border)',flexShrink:0}}>
                  <img src={PASTOR_PROFILE} alt="Pastor Samuel Ayinde" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}
                    onError={e=>{e.target.parentElement.style.background='var(--blue)';e.target.style.display='none';}}/>
                </div>
                <div>
                  <div style={{fontWeight:800,fontSize:15,color:'var(--ink)'}}>Pastor Samuel Ayinde</div>
                </div>
              </div>
            </div>
            <div>
              <Eyebrow>Coming up</Eyebrow>
              <h3 className="serif" style={{fontSize:'clamp(26px,3vw,40px)',fontWeight:900,marginBottom:8,color:'var(--ink)'}}>Next Sunday</h3>
              <div style={{fontSize:14,color:'var(--muted)',marginBottom:32}}>{nextDay(0,14)}</div>
              <div style={{display:'flex',flexDirection:'column',gap:0,border:'1px solid var(--border)'}}>
                {[['Sunday Worship','9:00 AM CST · In Person'],['Bible Study','Wednesday · 7:00 PM · Zoom'],['Prayer Meeting','Thursday · 7:00 PM · Zoom']].map(([t,d])=>(
                  <div key={t} style={{display:'flex',gap:16,alignItems:'center',padding:'18px 20px',borderBottom:'1px solid var(--border)',background:'var(--white)'}}>
                    <div style={{width:3,height:36,background:'var(--rust)',flexShrink:0,borderRadius:2}}/>
                    <div>
                      <div style={{fontWeight:700,fontSize:14,color:'var(--ink)'}}>{t}</div>
                      <div style={{fontSize:12,color:'var(--muted)',marginTop:3}}>{d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="btn-group" style={{display:'flex',gap:12,marginTop:24,flexWrap:'wrap'}}>
                <button className="btn btn-rust" onClick={()=>setPage('visit')}>Plan a Visit</button>
                <button className="btn btn-outline" onClick={()=>setPage('events')}>All Events</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LATEST SERMONS STRIP */}
      <LatestSermonsStrip setPage={setPage}/>

      {/* QUICK NAV BAR */}
      <div style={{background:'var(--cream)',padding:'28px 40px',borderTop:'3px solid var(--rust)',borderBottom:'1px solid var(--border)'}}>
        <div className="wrap" style={{display:'flex',flexWrap:'wrap',gap:12,justifyContent:'center',alignItems:'center'}}>
          <span style={{color:'var(--muted)',fontSize:11,fontWeight:800,letterSpacing:'.15em',textTransform:'uppercase',marginRight:8}}>Explore:</span>
          {[['Beliefs','beliefs'],['Give','give'],['Socials','socials'],['Contact','contact']].map(([l,p])=>(
            <button key={l} onClick={()=>setPage(p)}
              style={{background:'var(--white)',border:'1px solid var(--border)',color:'var(--ink)',borderRadius:3,padding:'9px 20px',fontSize:12,fontWeight:700,cursor:'pointer',fontFamily:'inherit',letterSpacing:'.08em',textTransform:'uppercase',transition:'all .2s'}}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--rust)';e.currentTarget.style.borderColor='var(--rust)';e.currentTarget.style.color='#fff';}}
              onMouseLeave={e=>{e.currentTarget.style.background='var(--white)';e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--ink)';}}>
              {l}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════
   LATEST SERMONS STRIP 
════════════════════════════════════════════════════ */
function LatestSermonsStrip({setPage}){
  const [vids,setVids]=useState(FALLBACK_VIDEOS.slice(0,4));
  const [live,setLive]=useState(false);
  useEffect(()=>{
    let done=false;
    const tryRss=()=>fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id='+YOUTUBE_CHANNEL_ID)}&count=8`)
      .then(r=>r.json()).then(d=>{
        if(d.status==='ok'&&d.items?.length){
          const mapped=d.items.map(v=>({id:v.link?.split('v=')[1]?.split('&')[0]||v.guid?.split(':').pop()||'',title:v.title,date:v.pubDate,thumb:v.thumbnail})).filter(v=>v.id&&v.title);
          if(mapped.length&&!done){done=true;setVids(mapped.slice(0,4));setLive(true);}
          return!!mapped.length;
        }return false;
      });
    const tryDirect=()=>fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id='+YOUTUBE_CHANNEL_ID)}`)
      .then(r=>r.json()).then(d=>{
        if(!d.contents)return false;
        const xml=new DOMParser().parseFromString(d.contents,'text/xml');
        const entries=[...xml.querySelectorAll('entry')];
        if(!entries.length)return false;
        const mapped=entries.map(e=>({id:e.querySelector('videoId')?.textContent||e.querySelector('id')?.textContent?.split(':').pop()||'',title:e.querySelector('title')?.textContent||'',date:e.querySelector('published')?.textContent||'',thumb:''})).filter(v=>v.id&&v.title);
        mapped.forEach(v=>{v.thumb=`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`;});
        if(mapped.length&&!done){done=true;setVids(mapped.slice(0,4));setLive(true);}
        return!!mapped.length;
      });
    tryRss().then(ok=>ok?null:tryDirect()).catch(()=>tryDirect()).catch(()=>{});
  },[]);
  return(
    <section className="section-cream">
      <div className="wrap">
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:48,flexWrap:'wrap',gap:16}}>
          <div>
            <div style={{fontSize:11,fontWeight:800,letterSpacing:'.18em',textTransform:'uppercase',color:'var(--rust)',display:'flex',alignItems:'center',marginBottom:12}}>
              {live&&<span className="live-dot"/>}{live?'Live from YouTube':'Sermon Archive'}
            </div>
            <h2 className="serif" style={{fontSize:'clamp(30px,4vw,48px)',color:'var(--ink)',lineHeight:1}}>Latest Sermons</h2>
          </div>
          <button className="btn btn-outline" onClick={()=>setPage('sermons')}>All Sermons →</button>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20}}>
          {vids.map(v=>(
            <a key={v.id} href={`https://youtu.be/${v.id}`} target="_blank" rel="noreferrer"
              style={{display:'block',textDecoration:'none',background:'var(--white)',border:'1px solid var(--border)',transition:'all .2s'}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--rust)';e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,.08)';}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>
              <div style={{aspectRatio:'16/9',overflow:'hidden',background:'var(--blue)'}}>
                <img src={v.thumb||`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`} alt={v.title}
                  style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform .3s'}}
                  onError={e=>{e.target.src=`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`;}}/>
              </div>
              <div style={{padding:'16px 18px'}}>
                <div style={{fontSize:10,fontWeight:800,color:'var(--rust)',letterSpacing:'.12em',textTransform:'uppercase',marginBottom:6}}>{fmtDate(v.date)}</div>
                <div style={{fontSize:14,fontWeight:700,color:'var(--ink)',lineHeight:1.4,overflow:'hidden',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical'}}>{v.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════
   ABOUT PAGE
════════════════════════════════════════════════════ */
function AboutPage(){
  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--ink)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Our Story</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em',color:'var(--ink)'}}>
            A Church<br/>on <em style={{color:'var(--rust)'}}>Fire.</em>
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80,alignItems:'start',marginBottom:96}}>
            <div>
              <p style={{fontSize:'clamp(17px,2vw,21px)',lineHeight:1.8,color:'var(--ink)',marginBottom:24,fontWeight:400}}>
                Revival Center Texas is a parish of The Redeemed Christian Church of God. We are a Christ-centered church family devoted to worship, prayer, the Word of God, discipleship, holiness, and the transforming power of the Holy Spirit.
              </p>
              <p style={{fontSize:17,lineHeight:1.8,color:'var(--muted)',marginBottom:24}}>
                We are passionate about seeing lives transformed and destinies fulfilled through the undiluted teaching of the Bible and the manifestation of God's power.
              </p>
            </div>
            <div style={{background:'var(--rust-pale)',padding:48,border:'2px solid var(--rust)'}}>
              <div style={{fontSize:10,fontWeight:800,letterSpacing:'.2em',color:'var(--rust)',textTransform:'uppercase',marginBottom:16}}>Our mandate</div>
              <blockquote style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(19px,2vw,25px)',fontStyle:'italic',lineHeight:1.6,color:'var(--ink)'}}>
                "We exist to help people know Jesus, grow in faith, walk in God's purpose, and impact their world for His glory."
              </blockquote>
            </div>
          </div>

          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,borderTop:'2px solid var(--ink)',paddingTop:64}}>
            <div>
              <Eyebrow>Our vision</Eyebrow>
              <h3 className="serif" style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:900,color:'var(--ink)',lineHeight:1.1,marginBottom:28}}>The global vision of RCCG</h3>
              <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:14}}>
                {['To make heaven by making holiness our lifestyle.','To take many people with us.','To have a member of RCCG in every family of all nations.',"To plant churches within five minutes' distance in developed countries.",'To reach every nation for the Lord Jesus Christ.'].map((v,i)=>(
                  <li key={i} style={{display:'flex',gap:14,alignItems:'flex-start'}}>
                    <span style={{background:'var(--rust)',color:'#fff',width:22,height:22,borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:800,flexShrink:0,marginTop:3}}>{i+1}</span>
                    <span style={{color:'var(--muted)',lineHeight:1.75,fontSize:15}}>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Eyebrow>What drives us</Eyebrow>
              <h3 className="serif" style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:900,color:'var(--ink)',lineHeight:1.1,marginBottom:28}}>Our daily objectives</h3>
              <div style={{display:'flex',flexDirection:'column',gap:10}}>
                {['Holiness as a lifestyle','Soul-winning and evangelism','Sustainable church planting','Community and care ministries','Global impact'].map((v,i)=>(
                  <div key={i} style={{background:'var(--cream)',border:'1px solid var(--border)',padding:'16px 20px',display:'flex',alignItems:'center',gap:14}}>
                    <div style={{width:3,height:32,background:'var(--rust)',flexShrink:0,borderRadius:2}}/>
                    <span style={{color:'var(--ink)',fontSize:15,fontWeight:600}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   MINISTRIES PAGE (Extracted from Church Life)
════════════════════════════════════════════════════ */
function MinistriesPage(){
  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--ink)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Church Life</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em',color:'var(--ink)'}}>
            Our<br/><em style={{color:'var(--rust)'}}>Ministries.</em>
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <Eyebrow>Ministry details</Eyebrow>
          <h3 className="serif" style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:900,color:'var(--ink)',marginBottom:40}}>Ministries designed for growth, identity, and spiritual maturity</h3>
          
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:32,marginBottom:80}}>
            {MINISTRIES.map(m => (
              <div key={m.name} style={{border:'1px solid var(--border)', background:'var(--white)', padding:32}}>
                <div style={{fontSize:12,fontWeight:800,letterSpacing:'.15em',textTransform:'uppercase',color:'var(--rust)',marginBottom:16}}>{m.name}</div>
                <p style={{fontSize:15,color:'var(--muted)',lineHeight:1.7,marginBottom:24}}>{m.focus}</p>
                <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
                  {m.highlights.map(h => (
                     <span key={h} className="tag tag-blue">{h}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,borderTop:'2px solid var(--ink)',paddingTop:64}}>
            <div>
              <Eyebrow>Departments</Eyebrow>
              <h3 className="serif" style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:900,color:'var(--ink)',marginBottom:28}}>Places to serve and build God’s house</h3>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                {DEPARTMENTS.map(d => (
                   <div key={d} style={{background:'var(--cream)', border:'1px solid var(--border)', padding:'12px 16px', fontSize:14, fontWeight:600, color:'var(--ink)'}}>
                     {d}
                   </div>
                ))}
              </div>
            </div>
            <div>
              <Eyebrow>Serving pathway</Eyebrow>
              <h3 className="serif" style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:900,color:'var(--ink)',marginBottom:28}}>Grow, belong, and serve</h3>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                {['Join the church family', 'Grow through prayer and the Word', 'Find a ministry fit', 'Serve with excellence and love'].map((item, index) => (
                  <div key={item} style={{background:'var(--white)', border:'1px solid var(--border)', padding:'20px', display:'flex', gap:16, alignItems:'center'}}>
                    <div style={{width:32, height:32, borderRadius:'50%', background:'var(--rust)', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:14, flexShrink:0}}>
                      {index + 1}
                    </div>
                    <span style={{fontSize:15, color:'var(--ink)', fontWeight:600}}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   PASTORS PAGE
════════════════════════════════════════════════════ */
function PastorsPage(){
  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--ink)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Leadership</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em'}}>
            Our<br/><em style={{color:'var(--rust)'}}>Pastors.</em>
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {/* PASTOR SAMUEL */}
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'0.75fr 1fr',gap:72,alignItems:'center',marginBottom:96,paddingBottom:96,borderBottom:'1px solid var(--border)'}}>
            <div style={{position:'relative'}}>
              <div style={{aspectRatio:'3/4',overflow:'hidden',background:'var(--blue)',border:'1px solid var(--border)'}}>
                <img src={PASTOR_PROFILE} alt="Pastor Samuel Ayinde"
                  style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}
                  onError={e=>{e.target.style.display='none';}}/>
              </div>
              <div style={{position:'absolute',bottom:-16,right:-16,background:'var(--rust)',color:'#fff',padding:'14px 20px',minWidth:180}}>
                <div style={{fontSize:9,fontWeight:800,letterSpacing:'.18em',textTransform:'uppercase',opacity:.8,marginBottom:4}}>Pastor</div>
                <div style={{fontFamily:"'Fraunces',serif",fontSize:18,fontWeight:900,lineHeight:1.1}}>Samuel Ayinde</div>
              </div>
            </div>
            <div>
              <Eyebrow>Pastor</Eyebrow>
              <h2 className="serif" style={{fontSize:'clamp(34px,4vw,56px)',fontWeight:900,color:'var(--ink)',lineHeight:1,marginBottom:24}}>Pastor Samuel Ayinde</h2>
              <div style={{width:48,height:3,background:'var(--rust)',borderRadius:2,marginBottom:28}}/>
              <p style={{fontSize:17,lineHeight:1.8,color:'var(--muted)',marginBottom:16}}>
                Pastor Samuel Ayinde leads RCCG Revival Center Texas with a burning passion to see lives transformed through uncompromising biblical teaching, fervent prayer, and genuine worship.
              </p>
              <p style={{fontSize:17,lineHeight:1.8,color:'var(--muted)',marginBottom:16}}>
                He holds a PhD in Mechanical Engineering from the University of Michigan, Ann Arbor, and a Graduate Certificate in Counseling plus a Doctor of Ministry from Redeemer's University North America.
              </p>
              <p style={{fontSize:17,lineHeight:1.8,color:'var(--muted)'}}>
                He serves as a pastor, Bible teacher, book writer, songwriter, and academic excellence teacher. He is married to Oluwatobi.
              </p>
            </div>
          </div>
          {/* OLUWATOBI */}
          <div className="two-col-rev" style={{display:'grid',gridTemplateColumns:'1fr 0.75fr',gap:72,alignItems:'center'}}>
            <div>
              <h2 className="serif" style={{fontSize:'clamp(34px,4vw,56px)',fontWeight:900,color:'var(--ink)',lineHeight:1,marginBottom:24}}>Oluwatobi Ayinde</h2>
              <div style={{width:48,height:3,background:'var(--rust)',borderRadius:2,marginBottom:28}}/>
              <p style={{fontSize:17,lineHeight:1.8,color:'var(--muted)',marginBottom:16}}>
                Oluwatobi Ayinde serves faithfully alongside Pastor Samuel at RCCG Revival Center Texas. She holds a Master's degree in Information Systems from Central Michigan University.
              </p>
              <p style={{fontSize:17,lineHeight:1.8,color:'var(--muted)'}}>
                A Manager with Deloitte, she is married to Pastor Samuel Ayinde.
              </p>
            </div>
            <div style={{position:'relative'}}>
              <div style={{aspectRatio:'3/4',overflow:'hidden',background:'var(--blue)',border:'1px solid var(--border)'}}>
                <img src={PASTOR_OLU} alt="Oluwatobi Ayinde"
                  style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'top'}}
                  onError={e=>{e.target.style.display='none';}}/>
              </div>
              <div style={{position:'absolute',bottom:-16,left:-16,background:'var(--blue)',color:'#fff',padding:'14px 20px',minWidth:180}}>
                <div style={{fontFamily:"'Fraunces',serif",fontSize:18,fontWeight:900,lineHeight:1.1}}>Oluwatobi Ayinde</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/* ════════════════════════════════════════════════════
   WORLDWIDE PAGE
════════════════════════════════════════════════════ */
function WorldwidePage(){
  const regions=[
    {name:"RCCG THE AMERICAS-1",url:"https://rccgamericas.org/"},
    {name:"RCCG THE AMERICAS-2",url:"https://rccgamericas2.org/"},
    {name:"RCCG",url:"https://www.rccg.org/"},
  ];
  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--rust)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Global Movement</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em',color:'var(--ink)'}}>
            RCCG<br/><em style={{color:'var(--rust)'}}>Worldwide.</em>
          </h1>
        </div>
      </section>
      <section className="section-cream">
        <div className="wrap">
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:80}}>
            <div className="worldwide-border" style={{borderRight:'1px solid var(--border)',paddingRight:64}}>
              <div style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(80px,12vw,140px)',fontWeight:900,color:'var(--rust)',lineHeight:.8,marginBottom:48,letterSpacing:'-.05em'}}>1952</div>
              <h3 style={{fontSize:16,fontWeight:800,textTransform:'uppercase',letterSpacing:'.1em',marginBottom:24,color:'var(--muted)'}}>Global Network</h3>
              <div style={{display:'flex',flexDirection:'column',gap:10}}>
                {regions.map(r=>(
                  <a key={r.name} href={r.url} target="_blank" rel="noreferrer"
                    style={{border:'1px solid var(--border)',padding:'16px 22px',fontSize:14,fontWeight:700,textTransform:'uppercase',letterSpacing:'.06em',color:'var(--ink)',display:'flex',justifyContent:'space-between',alignItems:'center',transition:'all .2s',textDecoration:'none',borderRadius:3}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--rust)';e.currentTarget.style.color='var(--rust)';e.currentTarget.style.background='var(--rust-pale)';}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.color='var(--ink)';e.currentTarget.style.background='transparent';}}>
                    {r.name} <span>→</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h2 className="serif" style={{fontSize:'clamp(28px,3.5vw,42px)',color:'var(--ink)',marginBottom:24,lineHeight:1.1}}>The story of the church</h2>
              <div style={{display:'flex',flexDirection:'column',gap:20,fontSize:16,lineHeight:1.8,color:'var(--muted)',fontWeight:400}}>
                <p>In July 1909, a son was born into the Akindayomi family of Ondo State of Nigeria. Even though this child grew up surrounded by idol worshippers, he knew there existed a greater power and yearned to know, "The God who created the earth and everyone on it."</p>
                <p>This pursuit for God led him to the Church Missionary Society where he was baptized in 1927. Still spiritually unfulfilled, he joined the Cherubim and Seraphim church in 1931. Whilst there, he began to hear a voice within him saying, "You will be my servant."</p>
                <p>Today, The Redeemed Christian Church of God (RCCG) has grown into a worldwide non-denominational religious organization with millions of members distributed across the globe.</p>
              </div>
              <a href="https://www.rccg.org/our-history/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{marginTop:32, display: 'inline-flex'}}>
                Read Full History →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/* ════════════════════════════════════════════════════
   BELIEFS PAGE
════════════════════════════════════════════════════ */
function BeliefsPage(){
  const [open,setOpen]=useState(0);
  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--rust)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Doctrinal Foundation</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em',color:'var(--ink)'}}>
            What We<br/><em style={{color:'var(--rust)'}}>Believe.</em>
          </h1>
        </div>
      </section>
      <section className="section-cream">
        <div className="wrap">
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:64,alignItems:'start'}}>
            <div style={{position:'sticky',top:120}}>
              <p style={{fontSize:18,lineHeight:1.8,color:'var(--muted)',marginBottom:28,fontWeight:400}}>
                As a parish of RCCG, Revival Center Texas fully adheres to the fundamental doctrinal beliefs of The Redeemed Christian Church of God.
              </p>
              <p style={{fontSize:14,lineHeight:1.7,color:'var(--muted)'}}>
                This statement of faith remains unalterable. In any question of doctrine or interpretation, the official doctrinal stance of RCCG worldwide and RCCG The Americas-1 remains final and binding for this church.
              </p>
            </div>
            <div style={{background:'var(--white)',border:'1px solid var(--border)',maxHeight:680,overflowY:'auto',boxShadow:'0 24px 64px rgba(0,0,0,.08)'}}>
              {BELIEFS.map((b,i)=>(
                <div key={i} style={{borderBottom:i!==BELIEFS.length-1?'1px solid var(--border)':'none'}}>
                  <button onClick={()=>setOpen(open===i?-1:i)}
                    style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 24px',background:'none',border:'none',textAlign:'left',cursor:'pointer',fontFamily:'inherit'}}>
                    <span style={{display:'flex',gap:14,alignItems:'center'}}>
                      <span style={{background:open===i?'var(--rust)':'var(--ink)',color:'#fff',width:26,height:26,borderRadius:3,display:'flex',alignItems:'center',justifyContent:'center',fontSize:10,fontWeight:800,flexShrink:0,transition:'background .2s'}}>{String(i+1).padStart(2,'0')}</span>
                      <span style={{fontSize:15,fontWeight:700,color:'var(--ink)',lineHeight:1.3,textAlign:'left'}}>{b.n}</span>
                    </span>
                    <span style={{color:'var(--rust)',fontSize:20,fontWeight:300,flexShrink:0,marginLeft:12,transform:open===i?'rotate(45deg)':'none',transition:'transform .25s'}}>+</span>
                  </button>
                  <div style={{maxHeight:open===i?400:0,overflow:'hidden',transition:'max-height .3s ease'}}>
                    <div style={{background:'var(--rust-pale)',color:'var(--ink)',padding:'20px 24px 24px',fontSize:14,lineHeight:1.75,fontWeight:400}}>{b.t}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   VISIT / I'M NEW
════════════════════════════════════════════════════ */
function VisitPage({setPage}){
    
    const faq = [
  { 
    q: 'What can I expect during a Sunday service?', 
    a: 'You can expect a warm, spirit-filled atmosphere with heartfelt worship and a message focused on the power and purpose of God’s Word.' 
  },
  { 
    q: 'Are your midweek services online?', 
    a: 'Yes. We host our Bible Study every Wednesday and our Prayer Meeting every Thursday, both via Zoom at 7:00 PM CST.' 
  },
  { 
    q: 'Do I need to be a member to attend?', 
    a: 'Not at all! Our doors are open to everyone—whether you are just visiting, searching for a church home, or seeking spiritual growth.' 
  },
  { 
    q: 'How can I get involved in a ministry?', 
    a: 'We would love to help you find your place to serve! You can speak with any of our team members after the service or reach out to us through the contact page.' 
  }
];

  return(
    <>
      <section style={{paddingTop:140,background:'var(--rust)',borderBottom:'2px solid var(--ink)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow light>Plan Your Visit</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em',color:'#fff'}}>
            We'd Love<br/>to <em style={{fontStyle:'italic',opacity:.85}}>See You.</em>
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          {/* NEXT SERVICE BANNER */}
          <div style={{border:'2px solid var(--ink)',padding:'48px 44px',background:'var(--white)',marginBottom:64,display:'flex',flexWrap:'wrap',gap:40,alignItems:'center',justifyContent:'space-between'}}>
            <div style={{flex:'1 1 360px'}}>
              <div style={{fontSize:12,fontWeight:800,color:'var(--rust)',letterSpacing:'.15em',textTransform:'uppercase',marginBottom:12,display:'flex',alignItems:'center',gap:8}}>
                <span className="live-dot"/>Next Service: {nextDay(0,14)}
              </div>
              <h2 className="serif" style={{fontSize:'clamp(32px,4.5vw,52px)',fontWeight:900,lineHeight:.95,marginBottom:12}}>Sunday Service</h2>
              <div style={{width:48,height:3,background:'var(--rust)',borderRadius:2,marginBottom:20}}/>
              <p style={{fontSize:17,lineHeight:1.7,color:'var(--muted)',maxWidth:480}}>
                Join us in person for worship, prayer, the Word, and fellowship.
              </p>
            </div>
            <div style={{textAlign:'right',borderLeft:'2px solid var(--border)',paddingLeft:44,minWidth:240}} className="service-time-block">
              <div style={{fontFamily:"'Fraunces',serif",fontSize:72,fontWeight:900,color:'var(--ink)',lineHeight:1}}>9<span style={{fontSize:32,verticalAlign:'top',marginTop:8,display:'inline-block'}}>AM</span></div>
              <div style={{fontSize:12,fontWeight:800,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--rust)',marginTop:8}}>CST · In Person</div>
              <p style={{fontSize:13,color:'var(--muted)',marginTop:10,lineHeight:1.6}}><span style={{fontWeight:900}}>{ADDRESS}</span></p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn btn-ink" style={{marginTop:20,display:'inline-flex',fontSize:12}}>Get Directions</a>
            </div>
          </div>

          {/* ONLINE SERVICES */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:20,marginBottom:64}}>
            {[
              {label:'Bible Study',day:'Every Wednesday',time:'7:00 PM CST',mode:'Zoom Online',detail:<>{`ID: ${ZOOM_ID} · Password: `}<strong style={{fontWeight:900}}>{ZOOM_PASS}</strong></>, note:'Grow deeper in Scripture and in your walk with God.'},
              {label:'Prayer Meeting',day:'Every Thursday',time:'7:00 PM CST',mode:'Zoom Online',detail:<>{`ID: ${ZOOM_ID} · Password: `}<strong style={{fontWeight:900}}>{ZOOM_PASS}</strong></>, note:'Stand with us in prayer for revival, families, and the nations.'},
            ].map(s=>(
              <div key={s.label} style={{border:'1px solid var(--border)',padding:32,background:'var(--white)'}}>
                <span className="tag tag-rust">{s.mode}</span>
                <h3 className="serif" style={{fontSize:26,fontWeight:900,margin:'16px 0 8px',color:'var(--ink)'}}>{s.label}</h3>
                <div style={{fontSize:14,color:'var(--rust)',fontWeight:700,marginBottom:10}}>{s.day} · {s.time}</div>
                <p style={{fontSize:13,color:'var(--ink)',fontWeight:600,marginBottom:6}}>{s.detail}</p>
                <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.7}}>{s.note}</p>
              </div>
            ))}
          </div>

          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:64,marginBottom:64}}>
            <div>
               <h3 className="serif" style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:900,marginBottom:28,color:'var(--ink)'}}>What to expect</h3>
               <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
                 {[{t:'A welcoming atmosphere', b:'You will meet warm people, heartfelt worship, and a church family that is glad to see you.'}, {t:'Bible-centered teaching', b:'We love God’s Word and teach it with clarity, conviction, and practical application.'}, {t:'Prayer and the Holy Spirit', b:'We are a praying church. We welcome the power, presence, and work of the Holy Spirit.'}, {t:'A place to belong', b:'Whether you are new to church, returning to God, or looking for a church home, you are welcome here.'}].map(i=>(
                    <div key={i.t} style={{border:'1px solid var(--border)', padding:20, background:'var(--cream)'}}>
                      <div style={{fontSize:14,fontWeight:800,color:'var(--ink)',marginBottom:8}}>{i.t}</div>
                      <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.6}}>{i.b}</p>
                    </div>
                 ))}
               </div>
            </div>
            
            <div>
              <h3 className="serif" style={{fontSize:'clamp(26px,3vw,38px)',fontWeight:900,marginBottom:28,color:'var(--ink)'}}>Helpful answers before you arrive</h3>
              <div style={{display:'flex',flexDirection:'column',gap:0}}>
                {faq.map((f,i)=>(
                  <details key={i}>
                    <summary style={{fontFamily:'inherit'}}>
                      <span style={{fontSize:15,color:'var(--ink)'}}>{f.q}</span>
                      <span className="acc-icon">+</span>
                    </summary>
                    <div style={{paddingBottom:20,fontSize:14,color:'var(--muted)',lineHeight:1.8}}>{f.a}</div>
                  </details>
                ))}
                <div style={{height:1,background:'var(--border)'}}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   EVENTS PAGE
════════════════════════════════════════════════════ */
function EventsPage(){
  const events=[
    {title:'Sunday Service',cat:'Main Service',time:'9:00 AM CST',detail:<span style={{fontWeight:900}}>{ADDRESS}</span>,next:nextDay(0,14),day:'SUN',link:MAPS_URL, note:'Our main weekly worship gathering for praise, prayer, the Word, and fellowship.'},
    {title:'Bible Study',cat:'Teaching',time:'7:00 PM CST',detail:<>{`Zoom ID: ${ZOOM_ID} · Password: `}<strong style={{fontWeight:900}}>{ZOOM_PASS}</strong></>,next:nextDay(3,20),day:'WED', note:'Scripture-centered teaching that helps believers grow deeper in Christ.'},
    {title:'Prayer Meeting',cat:'Intercession',time:'7:00 PM CST',detail:<>{`Zoom ID: ${ZOOM_ID} · Password: `}<strong style={{fontWeight:900}}>{ZOOM_PASS}</strong></>,next:nextDay(4,20),day:'THU', note:'A dedicated time of prayer for revival, families, the Church, and the nations.'},
    {title:'Evangelism & Outreach',cat:'Outreach',time:'To Be Announced',detail:'To Be Announced',next:'To Be Announced',day:'TBA', note:''},
    {title:'Special Revival Gatherings',cat:'Revival',time:'To Be Announced',detail:'To Be Announced',next:'To Be Announced',day:'TBA', note:''},
      ];
  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--ink)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Events</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em'}}>
            Gather<br/><em style={{color:'var(--rust)'}}>With Us.</em>
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div style={{display:'flex',flexDirection:'column'}}>
            {events.map((e,i)=>(
              <div key={i} className="event-row" style={{display:'grid',gridTemplateColumns:'180px 1fr auto',gap:40,padding:'44px 0',borderBottom:'1px solid var(--border)',alignItems:'center'}}>
                <div className="event-date-border" style={{borderRight:'1px solid var(--border)',paddingRight:24}}>
                  <div style={{fontFamily:"'Fraunces',serif",fontSize:11,fontWeight:900,color:'var(--rust)',letterSpacing:'.15em',textTransform:'uppercase',marginBottom:4}}>{e.day}</div>
                  <div style={{fontFamily:"'Fraunces',serif",fontSize:'clamp(20px,2.5vw,28px)',fontWeight:900,color:'var(--ink)',lineHeight:1.1}}>{e.next}</div>
                </div>
                <div>
                  <div style={{fontSize:10,fontWeight:800,letterSpacing:'.18em',textTransform:'uppercase',color:'var(--muted)',marginBottom:8}}>{e.cat}</div>
                  <h3 className="serif" style={{fontSize:'clamp(22px,2.5vw,32px)',fontWeight:900,marginBottom:6,color:'var(--blue)'}}>{e.title}</h3>
                  <p style={{fontSize:14,color:'var(--ink)',fontWeight:600,marginBottom:4}}>{e.detail}</p>
                  {e.note && <p style={{fontSize:13,color:'var(--muted)'}}>{e.note}</p>}
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:10}}>
                  <div style={{fontFamily:"'Fraunces',serif",fontSize:18,fontWeight:900,color:'var(--ink)'}}>{e.time}</div>
                  {e.link && e.time !== 'To Be Announced' && (
                    <a href={e.link} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">Directions</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   SERMONS PAGE — Split panel with dual YouTube
════════════════════════════════════════════════════ */
function SermonsPage(){
  const [allVids,setAllVids]=useState(FALLBACK_VIDEOS);
  const [loading,setLoading]=useState(true);
  const [status,setStatus]=useState('');
  const [ssActive,setSsActive]=useState(FALLBACK_VIDEOS.find(v=>v.subtitle==='Sunday School')?.id||FALLBACK_VIDEOS[1].id);
  const [smActive,setSmActive]=useState(FALLBACK_VIDEOS.find(v=>v.subtitle!=='Sunday School')?.id||FALLBACK_VIDEOS[0].id);

  useEffect(()=>{
    let done=false;
    const tryRss=()=>fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id='+YOUTUBE_CHANNEL_ID)}&count=20`)
      .then(r=>r.json()).then(d=>{
        if(d.status==='ok'&&d.items?.length){
          const mapped=d.items.map(v=>({id:v.link?.split('v=')[1]?.split('&')[0]||v.guid?.split(':').pop()||'',title:v.title,date:v.pubDate,thumb:v.thumbnail||`https://img.youtube.com/vi/${v.link?.split('v=')[1]?.split('&')[0]}/mqdefault.jpg`})).filter(v=>v.id&&v.title);
          mapped.sort((a,b)=>new Date(b.date)-new Date(a.date));
          if(mapped.length&&!done){done=true;setAllVids(mapped);setStatus('live');
            const ss=mapped.find(v=>v.title?.toLowerCase().includes('sunday school'));
            const sm=mapped.find(v=>!v.title?.toLowerCase().includes('sunday school'));
            if(ss)setSsActive(ss.id);
            if(sm)setSmActive(sm.id);
          }return!!mapped.length;
        }return false;
      });
    const tryDirect=()=>fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id='+YOUTUBE_CHANNEL_ID)}`)
      .then(r=>r.json()).then(d=>{
        if(!d.contents)return false;
        const xml=new DOMParser().parseFromString(d.contents,'text/xml');
        const entries=[...xml.querySelectorAll('entry')];
        if(!entries.length)return false;
        const mapped=entries.map(e=>({id:e.querySelector('videoId')?.textContent||e.querySelector('id')?.textContent?.split(':').pop()||'',title:e.querySelector('title')?.textContent||'',date:e.querySelector('published')?.textContent||'',thumb:''})).filter(v=>v.id&&v.title);
        mapped.forEach(v=>{v.thumb=`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`;});
        if(mapped.length&&!done){done=true;setAllVids(mapped);setStatus('live');}
        return!!mapped.length;
      });
    tryRss().then(ok=>ok?null:tryDirect().then(ok2=>{if(!ok2)setStatus('archive');})).catch(()=>tryDirect().then(ok=>{if(!ok)setStatus('archive');}).catch(()=>setStatus('archive'))).finally(()=>setLoading(false));
  },[]);

  const ssVids=allVids.filter(v=>v.title?.toLowerCase().includes('sunday school') || v.subtitle==='Sunday School');
  const smVids=allVids.filter(v=>!v.title?.toLowerCase().includes('sunday school') && v.subtitle!=='Sunday School');
  const ssShow=ssVids.length?ssVids:allVids.slice(0,4);
  const smShow=smVids.length?smVids:allVids.slice(4,8);

  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--rust)'}}>
        <div className="wrap" style={{paddingBottom:60,display:'flex',justifyContent:'space-between',alignItems:'flex-end',flexWrap:'wrap',gap:24}}>
          <div>
            <Eyebrow>Sermons & Media</Eyebrow>
            <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em',color:'var(--ink)'}}>
              The<br/><em style={{color:'var(--rust)'}}>Message.</em>
            </h1>
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8,alignItems:'flex-end'}}>
            <span className="tag" style={{background:status==='live'?'#f0fdf4':'var(--cream)',color:status==='live'?'#16a34a':'var(--muted)'}}>
              {loading?'⏳ Fetching…':status==='live'?<><span className="live-dot"/>Live YouTube Feed</>:'📺 Sermon Archive'}
            </span>
            {status==='archive'&&!loading&&<p style={{fontSize:12,color:'var(--muted)',maxWidth:280,textAlign:'right',lineHeight:1.6}}>Latest videos are temporarily unavailable, so the saved sermon archive is showing.</p>}
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">Visit Channel →</a>
          </div>
        </div>
      </section>
      <section style={{padding:'0',background:'var(--paper)'}}>
        {loading?(
          <div style={{textAlign:'center',padding:'80px 40px'}}><div className="spinner"/><p style={{marginTop:16,color:'var(--muted)',fontSize:14}}>Fetching latest from YouTube…</p></div>
        ):(
          <div className="sermon-split" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:2,background:'var(--border)',minHeight:600}}>
            <VideoPanel title="Sunday School" tag="SCHOOL" vids={ssShow} active={ssActive} setActive={setSsActive}/>
            <div className="sermon-split-border" style={{borderLeft:'2px solid var(--border)'}}>
              <VideoPanel title="Main Sermons" tag="SERMON" vids={smShow} active={smActive} setActive={setSmActive}/>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

function VideoPanel({title,tag,vids,active,setActive}){
  const [playing,setPlaying]=useState(false);
  const current=vids.find(v=>v.id===active)||vids[0];

  useEffect(()=>setPlaying(false),[active]);
  const handleSelect=(id)=>{ setActive(id); setPlaying(false); };

  return(
    <div style={{background:'var(--white)',display:'flex',flexDirection:'column'}}>
      <div style={{padding:'16px 20px',borderBottom:'2px solid var(--ink)',background:'var(--paper)',display:'flex',alignItems:'center',gap:12}}>
        <span className="tag tag-ink">{tag}</span>
        <h2 style={{fontSize:16,fontWeight:800,letterSpacing:'.04em',color:'var(--ink)',textTransform:'uppercase'}}>{title}</h2>
      </div>

      {current&&(
        <>
          <div style={{aspectRatio:'16/9',background:'#000',position:'relative',cursor:'pointer'}}
            onClick={()=>!playing&&setPlaying(true)}>
            {playing?(
              <iframe
                title={current.title}
                src={`https://www.youtube-nocookie.com/embed/${active}?rel=0&modestbranding=1&autoplay=1`}
                style={{width:'100%',height:'100%',border:'none',position:'absolute',inset:0}}
                allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                allowFullScreen/>
            ):(
              <>
                <img
                  src={`https://img.youtube.com/vi/${active}/hqdefault.jpg`}
                  alt={current.title}
                  style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}
                  onError={e=>{e.target.src=`https://img.youtube.com/vi/${active}/mqdefault.jpg`;}}/>
                <div style={{position:'absolute',inset:0,background:'rgba(0,0,0,.35)'}}/>
                <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div style={{width:68,height:68,borderRadius:'50%',background:'#FF0000',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 24px rgba(0,0,0,.4)',transition:'transform .2s'}}
                    onMouseEnter={e=>e.currentTarget.style.transform='scale(1.1)'}
                    onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}>
                    <svg viewBox="0 0 24 24" fill="white" width="28" height="28" style={{marginLeft:4}}>
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </>
            )}
          </div>
          <div style={{padding:'14px 18px',borderBottom:'1px solid var(--border)',background:'var(--cream)',display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12}}>
            <div style={{minWidth:0}}>
              <div style={{fontSize:10,fontWeight:800,color:'var(--rust)',letterSpacing:'.12em',textTransform:'uppercase',marginBottom:4}}>{current.date ? fmtDate(current.date) : current.duration}</div>
              <div style={{fontSize:14,fontWeight:700,color:'var(--ink)',lineHeight:1.35,overflow:'hidden',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical'}}>{current.title}</div>
            </div>
            <a href={`https://www.youtube.com/watch?v=${active}`} target="_blank" rel="noreferrer"
              style={{flexShrink:0,fontSize:11,fontWeight:700,color:'var(--rust)',textDecoration:'none',letterSpacing:'.06em',textTransform:'uppercase',marginTop:2,whiteSpace:'nowrap'}}>
              YouTube ↗
            </a>
          </div>
        </>
      )}

      <div style={{flex:1,overflowY:'auto',maxHeight:320}}>
        {vids.map(v=>(
          <div key={v.id} onClick={()=>handleSelect(v.id)}
            className={`vid-row${active===v.id?' playing':''}`}>
            <div style={{position:'relative',flexShrink:0}}>
              <img src={v.thumb||`https://img.youtube.com/vi/${v.id}/default.jpg`} alt={v.title}
                style={{width:72,height:48,objectFit:'cover',display:'block',background:'var(--blue)'}}
                onError={e=>{e.target.src=`https://img.youtube.com/vi/${v.id}/default.jpg`;}}/>
              <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,.2)'}}>
                <div style={{width:22,height:22,borderRadius:'50%',background:'rgba(255,0,0,.85)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <svg viewBox="0 0 24 24" fill="white" width="10" height="10" style={{marginLeft:2}}><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
            </div>
            <div style={{minWidth:0}}>
              <div style={{fontSize:12,fontWeight:700,color:active===v.id?'var(--rust)':'var(--ink)',lineHeight:1.4,overflow:'hidden',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical'}}>{v.title}</div>
              <div style={{fontSize:10,color:'var(--muted)',marginTop:3}}>{v.date ? fmtDate(v.date) : v.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════
   GIVE PAGE 
════════════════════════════════════════════════════ */
function GivePage(){
  const BANK_DETAILS = [
    {label:"Zelle",               value:EMAIL},
    {label:"Bank of America",     value:"488134628967"},
    {label:"Routing (paper)",     value:"111000025"},
    {label:"Routing (electronic)",value:"026009593"},
    {label:"SWIFT",               value:"BOFAUS3N"},
  ];

  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--ink)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Giving</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em'}}>
            Worship<br/>Through<br/><em style={{color:'var(--rust)'}}>Giving.</em>
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,marginBottom:80}}>
            <div>
              <p style={{fontSize:'clamp(17px,2vw,21px)',lineHeight:1.8,color:'var(--ink)',marginBottom:24,fontWeight:400}}>
                Your giving supports worship, discipleship, outreach, care, and the ongoing work of God through Revival Center Texas. Give with joy, clarity, and simplicity.
              </p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
                {['Worship and church life','Discipleship and teaching','Prayer and outreach','Care and ministry support'].map(item=>(
                  <div key={item} style={{background:'var(--cream)',border:'1px solid var(--border)',padding:'14px 16px',display:'flex',gap:10,alignItems:'center',fontSize:13,fontWeight:600,color:'var(--ink)'}}>
                    <div style={{width:6,height:6,borderRadius:'50%',background:'var(--rust)',flexShrink:0}}/>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Swapped out dark background for a light theme --cream */}
            <div style={{background:'var(--cream)',padding:40, border:'1px solid var(--border)'}}>
              <Eyebrow>Giving details</Eyebrow>
              <h3 className="serif" style={{fontSize:28,color:'var(--ink)',marginBottom:28,lineHeight:1.1}}>Give by bank transfer</h3>
              <div style={{display:'flex',flexDirection:'column',gap:12}}>
                {BANK_DETAILS.map(g=>(
                  <div key={g.label} style={{borderBottom:'1px solid var(--border)',paddingBottom:12}}>
                    <div style={{fontSize:9,fontWeight:800,letterSpacing:'.2em',color:'var(--muted)',textTransform:'uppercase',marginBottom:6}}>{g.label}</div>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:10,flexWrap:'wrap'}}>
                      <span style={{fontSize:14,color:'var(--ink)',fontFamily:'monospace',fontWeight:600}}>{g.value}</span>
                      <CopyBtn value={g.value}/>
                    </div>
                  </div>
                ))}
                <div style={{paddingTop:8,fontSize:12,color:'var(--muted)',lineHeight:1.6}}>
                  Bank of America, N.A. · 222 Broadway, New York, NY 10038
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   SOCIALS PAGE
════════════════════════════════════════════════════ */
function SocialsPage(){
  useEffect(()=>{
    const s=document.createElement('script');
    s.type='module';s.src='https://w.behold.so/widget.js';
    document.head.appendChild(s);
    return()=>{try{document.head.removeChild(s);}catch(_){}};
  },[]);

  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--ink)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Stay Connected</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em'}}>
            Follow.<br/><em style={{color:'var(--rust)'}}>Engage.</em>
          </h1>
        </div>
      </section>
      <section className="section-cream">
        <div className="wrap">
          <div className="platform-grid" style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:20,marginBottom:80}}>
            {SOCIAL_LINKS.map(s=>(
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={`Follow RCCG Revival Center Texas on ${s.name}`}
                style={{background:'var(--white)',border:'1px solid var(--border)',padding:'28px 24px',display:'block',textDecoration:'none',transition:'all .2s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=s.color;e.currentTarget.style.transform='translateY(-3px)';e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,.08)';}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>
                <div style={{width:52,height:52,background:s.color+'18',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:16,color:s.color,border:`1px solid ${s.color}20`}}>
                  {s.icon}
                </div>
                <h3 style={{fontSize:18,fontWeight:800,color:'var(--ink)',marginBottom:6}}>{s.name}</h3>
                <p style={{fontSize:12,color:'var(--muted)',lineHeight:1.6,marginBottom:16}}>{s.desc}</p>
                <span style={{fontSize:11,fontWeight:800,color:s.color,letterSpacing:'.1em',textTransform:'uppercase'}}>Follow →</span>
              </a>
            ))}
          </div>

          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
            <div>
              <h2 className="serif" style={{fontSize:30,fontWeight:900,marginBottom:24,color:'var(--ink)'}}>Facebook</h2>
              <div style={{border:'2px solid var(--ink)',background:'var(--white)',overflow:'hidden'}}>
                <div id="fb-root"/>
                <div className="fb-page" data-href={FACEBOOK_URL} data-tabs="timeline" data-width="500" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"/>
                <div style={{padding:40,textAlign:'center',minHeight:280,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:16}}>
                  <div style={{width:60,height:60,borderRadius:'50%',background:'#1877F2',display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,color:'#fff',fontWeight:900}}>f</div>
                  <div>
                    <h3 style={{fontSize:18,fontWeight:800,color:'var(--ink)',marginBottom:8}}>RCCG Revival Center Texas</h3>
                    <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.6,marginBottom:20,maxWidth:280}}>Follow us on Facebook for updates, announcements & live streams.</p>
                    <a href={FACEBOOK_URL} target="_blank" rel="noreferrer"
                      style={{background:'#1877F2',color:'#fff',padding:'12px 24px',fontSize:13,fontWeight:700,display:'inline-block',borderRadius:4}}>View on Facebook →</a>
                  </div>
                  <p style={{fontSize:10,color:'#bbb'}}>ⓘ Live feed appears on the published website domain.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="serif" style={{fontSize:30,fontWeight:900,marginBottom:24,color:'var(--ink)'}}>Instagram</h2>
              <div style={{border:'2px solid var(--ink)',background:'var(--white)',overflow:'hidden',minHeight:400}}>
                <div data-behold-id="nFaFTuUpYhehaZYIdV0W" style={{minHeight:400}}/>
                <div style={{padding:40,textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',gap:16}}>
                  <div style={{width:60,height:60,borderRadius:14,background:'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,color:'#fff',fontWeight:900}}>◻</div>
                  <div>
                    <h3 style={{fontSize:18,fontWeight:800,color:'var(--ink)',marginBottom:8}}>@{IG_HANDLE}</h3>
                    <p style={{fontSize:13,color:'var(--muted)',lineHeight:1.6,marginBottom:20,maxWidth:280}}>Service updates, church moments & announcements.</p>
                    <a href={`https://www.instagram.com/${IG_HANDLE}/`} target="_blank" rel="noreferrer"
                      style={{background:'linear-gradient(135deg,#833ab4,#fd1d1d)',color:'#fff',padding:'12px 24px',fontSize:13,fontWeight:700,display:'inline-block',borderRadius:4}}>View on Instagram →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   CONTACT PAGE (Dynamic)
════════════════════════════════════════════════════ */
function ContactPage({purpose='prayer'}){
  const [form,setForm]=useState({name:'',email:'',phone:'',message:''});
  const [err,setErr]=useState({});
  const [status,setStatus]=useState('idle');

  // Dynamic titles based on where the user came from

  const title = purpose === 'prayer' ? 'Share your prayer request' : 
                purpose === 'testimony' ? 'Share your testimony' : 'Get in touch';
                
  const label = purpose === 'prayer' ? 'How can we pray with you?' : 
                purpose === 'testimony' ? 'Tell us your story' : 'How can we help?';
                
  const btn = purpose === 'prayer' ? 'Send prayer request →' : 
              purpose === 'testimony' ? 'Send testimony →' : 'Send message →';
  const validate=()=>{
    const e={};
    if(!form.name.trim()) e.name='Required';
    if(!form.email.trim()||!/\S+@\S+\.\S+/.test(form.email)) e.email='Valid email required';
    if(!form.message.trim()) e.message='Required';
    return e;
  };
  const submit=async ev=>{
    ev.preventDefault();
    const e=validate();
    if(Object.keys(e).length){setErr(e);return;}
    setErr({});setStatus('loading');
    try{
      const res=await fetch(`https://formspree.io/f/${FORMSPREE_ID}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...form,purpose})});
      if(res.ok){setStatus('success');setForm({name:'',email:'',phone:'',message:''});}
      else setStatus('idle');
    }catch{setStatus('idle');}
  };
  const inp=(key,label,type='text',area=false)=>(
    <div style={{display:'flex',flexDirection:'column',gap:5}}>
      <label style={{fontSize:10,fontWeight:800,letterSpacing:'.18em',textTransform:'uppercase',color:'var(--rust)'}}>{label}</label>
      {area?(
        <textarea rows={4} value={form[key]} onChange={e=>setForm(p=>({...p,[key]:e.target.value}))} placeholder={`Your ${label.toLowerCase()}`}
          style={{background:err[key]?'#fff8f7':'var(--white)',border:`2px solid ${err[key]?'var(--rust)':'var(--border)'}`,padding:'14px 16px',fontSize:14,outline:'none',resize:'vertical',width:'100%',fontFamily:'inherit',lineHeight:1.6,transition:'border-color .2s',borderRadius:3}}/>
      ):(
        <input type={type} value={form[key]} onChange={e=>setForm(p=>({...p,[key]:e.target.value}))} placeholder={`Your ${label.toLowerCase()}`}
          style={{background:err[key]?'#fff8f7':'var(--white)',border:`2px solid ${err[key]?'var(--rust)':'var(--border)'}`,padding:'14px 16px',fontSize:14,outline:'none',width:'100%',fontFamily:'inherit',transition:'border-color .2s',borderRadius:3}}/>
      )}
      {err[key]&&<span style={{fontSize:11,color:'var(--rust)',fontWeight:700}}>{err[key]}</span>}
    </div>
  );
  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--ink)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Contact Us</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em'}}>
            We would love<br/>to <em style={{color:'var(--rust)'}}>hear</em><br/>from you.
          </h1>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="two-col" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:72}}>
            {/* ... (Keep your existing Find Us section here) ... */}
            <div>
              <Eyebrow>Find us</Eyebrow>
              {[{icon:'📍',l:'Address',v:<span style={{fontWeight:900}}>{ADDRESS}</span>,href:MAPS_URL},{icon:'📞',l:'Phone',v:PHONE,href:`tel:${PHONE}`},{icon:'✉',l:'Email',v:EMAIL,href:`mailto:${EMAIL}`},{icon:'💻',l:'Online Gatherings',v:<>{`Wed & Thu · 7:00 PM CST · Zoom ID: ${ZOOM_ID} · Password: `}<strong style={{fontWeight:900}}>{ZOOM_PASS}</strong></>}].map(c=>(
                <div key={c.l} style={{borderBottom:'1px solid var(--border)',padding:'22px 0',display:'flex',gap:16,alignItems:'flex-start'}}>
                  <span style={{fontSize:20,marginTop:2,flexShrink:0}}>{c.icon}</span>
                  <div>
                    <div style={{fontSize:9,fontWeight:800,letterSpacing:'.2em',color:'var(--rust)',textTransform:'uppercase',marginBottom:4}}>{c.l}</div>
                    {c.href?(<a href={c.href} target="_blank" rel="noreferrer" style={{fontSize:14,color:'var(--ink)',fontWeight:600,lineHeight:1.6}}>{c.v}</a>):(<p style={{fontSize:13,color:'var(--muted)',lineHeight:1.7}}>{c.v}</p>)}
                  </div>
                </div>
              ))}
            </div>
            {/* Dynamic Form */}
            <div style={{background:'var(--cream)',padding:44,border:'1px solid var(--border)'}}>
              <Eyebrow>Get in touch</Eyebrow>
              <h3 className="serif" style={{fontSize:30,color:'var(--ink)',marginBottom:8,lineHeight:1.1}}>{title}</h3>
              {status==='success'?(
                <div style={{textAlign:'center',padding:'48px 0'}}>
                  <div style={{fontSize:48,color:'var(--rust)',marginBottom:16}}>✦</div>
                  <h4 className="serif" style={{fontSize:26,color:'var(--ink)',marginBottom:12}}>Thank you.</h4>
                  <p style={{color:'var(--muted)',fontSize:14,lineHeight:1.75,marginBottom:28}}>Your message has been received.</p>
                  <button onClick={()=>setStatus('idle')} className="btn btn-outline btn-sm">Send Another</button>
                </div>
              ):(
                <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:16,marginTop:24}}>
                  {inp('name','Your Name')}
                  {inp('email','Your Email','email')}
                  {inp('phone','Phone Number (optional)','tel')}
                  {inp('message',label,'text',true)}
                  <button type="submit" className="btn btn-rust" disabled={status==='loading'} style={{justifyContent:'center',opacity:status==='loading'?.6:1,marginTop:8}}>
                    {status==='loading'?'Sending…':btn}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
/* ════════════════════════════════════════════════════
   TESTIMONIES PAGE
════════════════════════════════════════════════════ */
function TestimoniesPage({setPage}){
  const cards=[
    {icon:'✦',title:'Salvation Stories',body:'This testimony space is ready for future stories of lives changed by Jesus Christ. If you have a salvation testimony, we would love to hear from you.'},
    {icon:'◉',title:'Answered Prayers',body:'This testimony space is ready for future stories of God\'s faithfulness and answers to prayer. Prayer changes things at Revival Center Texas.'},
    {icon:'◎',title:'Healing & Restoration',body:'This testimony space is ready for future stories of healing, restoration, and renewed hope. God still moves in power today.'},
  ];
  return(
    <>
      <section style={{paddingTop:140,background:'var(--paper)',borderBottom:'2px solid var(--rust)'}}>
        <div className="wrap" style={{paddingBottom:60}}>
          <Eyebrow>Testimonies</Eyebrow>
          <h1 className="serif" style={{fontSize:'clamp(52px,9vw,104px)',fontWeight:900,lineHeight:.88,letterSpacing:'-.03em'}}>
            Share<br/><em style={{color:'var(--rust)'}}>Your Testimony.</em>
          </h1>
          <p style={{fontSize:18,color:'var(--muted)',lineHeight:1.7,marginTop:20,maxWidth:600}}>
            God is writing beautiful stories through the lives of people at Revival Center Texas. This page is dedicated to testimonies of salvation, healing, answered prayer, and transformation.
          </p>
        </div>
      </section>
      <section className="section-cream">
        <div className="wrap">
          <div className="three-col" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:24,marginBottom:72}}>
            {cards.map(c=>(
              <div key={c.title} style={{background:'var(--white)',border:'1px solid var(--border)',padding:36,borderTop:'3px solid var(--rust)'}}>
                <div style={{fontSize:28,color:'var(--rust)',marginBottom:20}}>{c.icon}</div>
                <h3 className="serif" style={{fontSize:22,fontWeight:900,marginBottom:14,color:'var(--ink)'}}>{c.title}</h3>
                <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.8}}>{c.body}</p>
              </div>
            ))}
          </div>
          <div style={{border:'2px solid var(--ink)',background:'var(--white)',padding:'56px 48px',textAlign:'center',maxWidth:680,margin:'0 auto'}}>
            <div style={{fontSize:48,color:'var(--rust)',marginBottom:20}}>✦</div>
            <h2 className="serif" style={{fontSize:'clamp(28px,3.5vw,40px)',fontWeight:900,color:'var(--ink)',marginBottom:16,lineHeight:1.1}}>Share Your Story</h2>
            <p style={{fontSize:16,color:'var(--muted)',lineHeight:1.8,marginBottom:32,maxWidth:480,margin:'0 auto 32px'}}>
              Do you have a testimony of what God has done in your life? We would love to hear it and celebrate with you.
            </p>
            <div style={{display:'flex',gap:12,justifyContent:'center',flexWrap:'wrap',marginTop:32}}>
             
              <button className="btn btn-rust" onClick={()=>setPage('contact', 'testimony')}>Share your testimony</button>
              <button className="btn btn-outline" onClick={()=>setPage('contact', 'general')}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ════════════════════════════════════════════════════
   FOOTER
════════════════════════════════════════════════════ */
function Footer({setPage}){
  return(
    <footer style={{background:'var(--blue)',color:'rgba(255,255,255,0.75)',borderTop:'4px solid var(--rust)',padding:'72px 40px 40px'}}>
      <div className="wrap">
        <div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr 1fr',gap:48,marginBottom:64}} className="container">
          <div>
            <div style={{marginBottom:20}}><Logo light={true}/></div>
            <p style={{fontSize:13,lineHeight:1.9,maxWidth:320,color:'rgba(255,255,255,0.75)'}}>A Christ-centered church family devoted to worship, prayer, sound doctrine, revival, discipleship, and the transforming power of the Holy Spirit.</p>
            <div style={{display:'flex',flexWrap:'wrap',gap:12,marginTop:24}}>
              {SOCIAL_LINKS.map(s=>(
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={`Follow RCCG Revival Center Texas on ${s.name}`}
                  style={{display:'flex',alignItems:'center',justifyContent:'center',width:44,height:44,borderRadius:'50%',background:'rgba(255,255,255,0.1)',color:'#fff',transition:'all .3s',border:'1px solid rgba(255,255,255,0.15)'}}
                  onMouseEnter={e=>{e.currentTarget.style.background=s.color;e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.borderColor=s.color;}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,0.1)';e.currentTarget.style.transform='none';e.currentTarget.style.borderColor='rgba(255,255,255,0.15)';}}>
                  <div style={{transform: 'scale(0.85)'}}>{s.icon}</div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:9,fontWeight:800,letterSpacing:'.22em',color:'#fff',textTransform:'uppercase',marginBottom:20}}>Navigate</div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              {['home','about','ministries','pastors','beliefs','visit','events','sermons','testimonies','give','socials','contact'].map(id=>(
                <button key={id} onClick={()=>{setPage(id);window.scrollTo(0,0);}}
                  style={{background:'none',border:'none',textAlign:'left',color:'rgba(255,255,255,0.75)',fontSize:13,fontWeight:500,cursor:'pointer',fontFamily:'inherit',textTransform:'capitalize',transition:'color .2s'}}
                  onMouseEnter={e=>e.currentTarget.style.color='#fff'}
                  onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.75)'}>
                  {id==='visit'?"I'm New":id.charAt(0).toUpperCase()+id.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div style={{fontSize:9,fontWeight:800,letterSpacing:'.22em',color:'#fff',textTransform:'uppercase',marginBottom:20}}>Service Times</div>
            {[['Sunday Service','9:00 AM CST · In Person'],['Bible Study','Wed 7:00 PM · Zoom'],['Prayer Meeting','Thu 7:00 PM · Zoom']].map(([l,v])=>(
              <div key={l} style={{marginBottom:16}}>
                <div style={{fontSize:11,color:'rgba(255,255,255,0.6)',marginBottom:4}}>{l}</div>
                <div style={{fontSize:13,color:'#fff',fontWeight:600}}>{v}</div>
              </div>
            ))}
          </div>
          <div>
            <div style={{fontSize:9,fontWeight:800,letterSpacing:'.22em',color:'#fff',textTransform:'uppercase',marginBottom:20}}>Contact</div>
            <div style={{display:'flex',flexDirection:'column',gap:12}}>
              <a href={`mailto:${EMAIL}`} style={{fontSize:13,color:'rgba(255,255,255,0.75)',transition:'color .2s'}} onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.75)'}>{EMAIL}</a>
              <a href={`tel:${PHONE}`} style={{fontSize:13,color:'rgba(255,255,255,0.75)',transition:'color .2s'}} onMouseEnter={e=>e.currentTarget.style.color='#fff'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.75)'}>{PHONE}</a>
              <p style={{fontSize:12,color:'rgba(255,255,255,0.6)',lineHeight:1.6}}><span style={{fontWeight:900}}>{ADDRESS}</span></p>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn btn-rust btn-sm" style={{display:'inline-flex',marginTop:8, border: 'none'}}>Get Directions</a>
            </div>
          </div>
        </div>
        <div style={{borderTop:'1px solid rgba(255,255,255,0.15)',paddingTop:28,display:'flex',flexWrap:'wrap',gap:12,justifyContent:'space-between',alignItems:'center'}}>
          <p style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>© {new Date().getFullYear()} RCCG Revival Center Texas. All rights reserved.</p>
          <p style={{fontSize:12,color:'rgba(255,255,255,0.5)'}}>God bless you. We look forward to worshiping with you.</p>
        </div>
      </div>
    </footer>
  );
}

/* ════════════════════════════════════════════════════
   APP ROOT
════════════════════════════════════════════════════ */
function App(){
  // Initialize state as an object to hold both id and purpose
  const [pageState, setPageState] = useState(getPageFromLocation);
  
  // Custom setter to update both
  const setPage = (id, purpose = 'prayer') => {
    const next = {id, purpose};
    const path = pageToPath(id, purpose);
    if(useHashRoutes()){
      if(window.location.hash !== `#${path}`) window.location.hash = path;
    }else if(window.location.pathname !== path) window.history.pushState(next, '', path);
    setPageState(next);
  };

  useEffect(()=>{
    const syncRoute=()=>setPageState(getPageFromLocation());
    window.addEventListener('popstate',syncRoute);
    window.addEventListener('hashchange',syncRoute);
    return()=>{window.removeEventListener('popstate',syncRoute);window.removeEventListener('hashchange',syncRoute);};
  },[]);

  useEffect(()=>{
    const meta = PAGE_META[pageState.id] || PAGE_META.home;
    document.title = meta.title;
    const desc = document.querySelector('meta[name="description"]');
    if(desc) desc.setAttribute('content', meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if(ogTitle) ogTitle.setAttribute('content', meta.title);
    if(ogDesc) ogDesc.setAttribute('content', meta.description);
    if(twTitle) twTitle.setAttribute('content', meta.title);
    if(twDesc) twDesc.setAttribute('content', meta.description);
  },[pageState.id]);

  const render=()=>{
    switch(pageState.id){
      case 'about':       return <AboutPage/>;
      case 'ministries':  return <MinistriesPage/>;
      case 'pastors':     return <PastorsPage/>;
      case 'worldwide':   return <WorldwidePage/>;
      case 'beliefs':     return <BeliefsPage/>;
      case 'visit':       return <VisitPage setPage={setPage}/>;
      case 'events':      return <EventsPage/>;
      case 'sermons':     return <SermonsPage/>;
      case 'give':        return <GivePage/>;
      case 'socials':     return <SocialsPage/>;
      case 'contact':     return <ContactPage purpose={pageState.purpose}/>; // Pass purpose here
      case 'testimonies': return <TestimoniesPage setPage={setPage}/>;
      default:            return <HomePage setPage={setPage}/>;
    }
  };

  return(
    <div style={{minHeight:'100vh'}}>
      <EventPopup setPage={setPage}/>
      <Navbar page={pageState.id} setPage={setPage}/>
      <main>{render()}</main>
      <Footer setPage={setPage}/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
