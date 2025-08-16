import SkillBadge from '../components/SkillBadge';

export default function About() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">I’m a hands-on and data-driven product leader with a track record of building and scaling high-performance trading platforms. At MarketAxess, I oversee a fixed-income trading system processing over $4B in daily volume, where I lead cross-functional teams of engineers, analysts, and designers to deliver institutional-grade digital products.</p>
      <p className="mb-4">With a background in chemical engineering and strong technical fluency in Python, SQL, and analytics, I bridge the gap between strategy and implementation — from defining product vision to executing roadmap priorities. My expertise spans electronic trading, UI/UX optimization, data analysis, and blockchain-based innovations, reflecting both my professional and personal interests in financial markets and emerging technologies.</p>
      <h2 className="text-2xl font-bold mt-4 mb-2">Skills</h2>
      <div className="flex flex-wrap">
        <SkillBadge skill="React" />
        <SkillBadge skill="Node.js" />
        <SkillBadge skill="Electron" />
        <SkillBadge skill="Blockchain" />
      </div>
    </div>
  );
}