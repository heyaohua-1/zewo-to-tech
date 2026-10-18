import Nav from "../../../Downloads/zero-to-tech-demos-main/zero-to-tech-demos-main/zero-to-tech-4-4/src/components/Nav.jsx";
import PageHeading from "../../../Downloads/zero-to-tech-demos-main/zero-to-tech-demos-main/zero-to-tech-4-4/src/components/PageHeading.jsx";
import AnimatedCardGrid from "../../../Downloads/zero-to-tech-demos-main/zero-to-tech-demos-main/zero-to-tech-4-4/src/components/AnimatedCardGrid.jsx";
import InputCard from "../../../Downloads/zero-to-tech-demos-main/zero-to-tech-demos-main/zero-to-tech-4-4/src/components/InputCard.jsx";
import ResultCard from "../../../Downloads/zero-to-tech-demos-main/zero-to-tech-demos-main/zero-to-tech-4-4/src/components/ResultCard.jsx";
import { textLab } from "../../../Downloads/zero-to-tech-demos-main/zero-to-tech-demos-main/zero-to-tech-4-4/src/data/site.js";

// 整页就是几块积木拼起来的：导航、标题、输入卡、结果卡。
// TextLabPage 这个"大组件"，把这些小组件摆在一起，拼成一整页。
export default function TextLabPage({ current, onNavigate }) {
  return (
    <AnimatedCardGrid className="dashboard-grid">
      {/* 顶部 hero：导航 + 大标题，两块都是两页共用的组件 */}
      <article className="hero-stage panel-full">
        <Nav current={current} onNavigate={onNavigate} />
        {/* 标题也从 site.js 里读，不再写死 */}
        <PageHeading title={textLab.heroTitle} subtitle={textLab.heroSubtitle} />
      </article>

      <InputCard />
      <ResultCard />
    </AnimatedCardGrid>
  );
}
