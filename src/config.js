export const CONFIG = {
  formspree: {
    id: "xqenlekg",
  },
  youtube: {
    channelId: "UCro161-C4FkHbjJkPSyMh-Q",
    channelUrl: "https://www.youtube.com/@RCCGRevivalCenterDallasTX",
  },
  social: {
    instagram: "revivalcentertexas",
    facebook: "https://www.facebook.com/profile.php?id=61576666061879",
    tiktok: "https://www.tiktok.com/@rccgrevivalcentertexas",
  },
  contact: {
    address: "351 Market Center Dr, Terrell, TX 75160",
    phone: "+1-734-545-5493",
    email: "revivalcentertexas@gmail.com",
    zoom: {
      id: "818 0873 5923",
      passcode: "revival",
    },
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=351+Market+Center+Dr,+Terrell,+TX+75160",
  },
  assets: {
    logo: "./logo-header.png",
    pastorSamuelHome: "./pastor-samuel-home.png",
    pastorSamuelProfile: "./pastor-samuel-profile.png",
    pastorOluwatobiProfile: "./pastor-oluwatobi-profile.png",
  },
};

export const FALLBACK_VIDEOS = [
  { id: "M79OObkmp50", title: "The Rain of Holy Fire", date: "2026-04-26", category: "Revival" },
  { id: "f0sXb3WBVFM", title: "The Power of Speaking God's Word in Faith", date: "2026-04-19", category: "Sunday School" },
  { id: "AlkiOCP5Mhg", title: "Who You Are in Christ", date: "2026-04-12", category: "Sunday School" },
  { id: "LEnF7OZolwA", title: "Nehemiah: Fulfilling Purpose Amid Opposition", date: "2026-04-05", category: "Sermon" },
];

export const BELIEFS = [
  { title: "The Holy Bible", body: "We believe the entire Bible, both Old and New Testaments, is the written and revealed Word of God. It is infallible, inspired, authoritative, and the supreme standard for faith and practice." },
  { title: "The Trinity", body: "We believe in one true God who eternally exists in three divine persons: God the Father, God the Son, and God the Holy Spirit." },
  { title: "Jesus Christ", body: "We believe Jesus Christ is the only begotten Son of God. He was conceived by the Holy Spirit, born of the Virgin Mary, lived a sinless life, died as an atoning sacrifice for our sins, rose from the dead, and ascended to heaven." },
  { title: "Salvation", body: "We believe all people need salvation. Salvation is God's gift of grace through faith in Jesus Christ and is received through repentance and confession of Jesus as Lord and Savior." },
  { title: "The Holy Spirit", body: "We believe the Holy Spirit dwells in believers, teaches, comforts, empowers for service and holy living, and works through spiritual gifts and fruit in the Church." },
  { title: "Water Baptism", body: "We practice water baptism by immersion in the name of the Father, Son, and Holy Spirit as an outward symbol of inward transformation in Christ." },
  { title: "Sanctification and Holiness", body: "We believe sanctification begins at the new birth and continues as a progressive work of grace. God calls believers to holy living through the power of the Holy Spirit." },
  { title: "Divine Healing", body: "We believe divine healing is provided through the redemptive work of Christ. We pray for the sick and trust in God's power to heal according to His will." },
  { title: "The Second Coming and Eternity", body: "We believe in the visible return of Jesus Christ, the resurrection of the dead, and eternal life for the righteous." },
];

export const GIVING_OPTIONS = [
  { label: "Zelle", value: "revivalcentertexas@gmail.com" },
  { label: "Bank of America", value: "488134628967" },
  { label: "Routing (paper)", value: "111000025" },
  { label: "Routing (electronic)", value: "026009593" },
  { label: "SWIFT", value: "BOFAUS3N" },
];

export const SOCIAL_LINKS = [
  { name: "YouTube", url: "https://www.youtube.com/@RCCGRevivalCenterDallasTX", icon: "▶", color: "#FF0000", desc: "Watch sermons, Sunday School & revival messages" },
  { name: "Instagram", url: "https://www.instagram.com/revivalcentertexas/", icon: "◻", color: "#E1306C", desc: "Service updates, announcements & church moments" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61576666061879", icon: "f", color: "#1877F2", desc: "Community updates, events & live streams" },
  { name: "TikTok", url: "https://www.tiktok.com/@rccgrevivalcentertexas", icon: "♪", color: "#000000", desc: "Short clips, worship moments & church highlights" },
];

export const NAV_ITEMS = [
  { id: "home", label: "Home" },
  {
    id: "about_menu",
    label: "The Church",
    dropdown: [
      { id: "about", label: "Our Story" },
      { id: "pastors", label: "Leadership" },
      { id: "worldwide", label: "RCCG Worldwide" },
      { id: "beliefs", label: "Beliefs" },
    ],
  },
  { id: "visit", label: "I'm New" },
  { id: "events", label: "Events" },
  { id: "sermons", label: "Sermons" },
  { id: "give", label: "Give" },
  { id: "socials", label: "Socials" },
];
