/**
 * @file App.tsx
 * @author Cerror
 * @description 主应用组件，包含首页布局和核心导航
 * @created 2025-01-20
 * @updated 2025-01-20
 */

import React, { useEffect } from 'react'
import './App.scss'
import analytics from './utils/analytics'

/**
 * 主应用组件
 * 提供首页布局和导航功能
 */
const App: React.FC = () => {
  // 初始化百度统计
  useEffect(() => {
    analytics.init();
    analytics.trackPageView(); // 跟踪首页访问
  }, []);

  /**
   * 处理按钮点击事件
   * 跟踪用户交互行为
   */
  const handleStartClick = () => {
    analytics.trackEvent('Button', 'Click', '现在开始', 1);
  };

  /**
   * 处理Github链接点击事件
   */
  const handleGithubClick = () => {
    analytics.trackEvent('Navigation', 'Click', 'Github链接', 1);
  };

  /**
   * 处理关于我链接点击事件
   */
  const handleAboutClick = () => {
    analytics.trackEvent('Navigation', 'Click', '关于我', 1);
  };

  return (
    <div className='app'>
      {/* 顶部导航栏 */}
      <nav className='navbar'>
        <div className='nav-left'>
          <img
            src='/public/images/logo.png'
            alt='Cerebro3D Logo'
            className='logo'
          />
          <span className='brand-name'>Cerebro3D</span>
        </div>
        <div className='nav-right'>
          <a href='#about' className='nav-link' onClick={handleAboutClick}>
            关于我
          </a>
          <span className='nav-divider'>|</span>
          <a
            href='https://github.com/Cerrorr/Cerebro3D'
            target='_blank'
            rel='noopener noreferrer'
            className='nav-link github-link'
            title='Github'
            onClick={handleGithubClick}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c0.6 0.105 0.825-0.255 0.825-0.57c0-0.285-0.015-1.23-0.015-2.235c-3.015 0.555-3.795-0.735-4.035-1.41c-0.135-0.345-0.72-1.41-1.23-1.695c-0.42-0.225-1.02-0.78-0.015-0.795c0.945-0.015 1.62 0.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495 0.99c0.105-0.78 0.42-1.305 0.765-1.605c-2.67-0.3-5.46-1.335-5.46-5.925c0-1.305 0.465-2.385 1.23-3.225c-0.12-0.3-0.54-1.53 0.12-3.18c0 0 1.005-0.315 3.3 1.23c0.96-0.27 1.98-0.405 3-0.405s2.04 0.135 3 0.405c2.295-1.56 3.3-1.23 3.3-1.23c0.66 1.65 0.24 2.88 0.12 3.18c0.765 0.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c0.435 0.375 0.81 1.095 0.81 2.22c0 1.605-0.015 2.895-0.015 3.3c0 0.315 0.225 0.69 0.825 0.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
            </svg>
          </a>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className='main-content'>
        {/* 英雄区域 */}
        <section className='hero-section'>
          <div className='hero-content'>
            <h1 className='hero-title'>
              <span className='title-main'>Cerebro 3D Engine</span>
              <span className='title-sub'>Cerebro 3D Editor</span>
            </h1>
            <div className='hero-buttons'>
              <a 
                href='https://cerebro3d.cerror.cn' 
                target='_blank' 
                rel='noopener noreferrer' 
                className='btn btn-primary'
                onClick={handleStartClick}
              >
                现在开始 →
              </a>
            </div>
          </div>
        </section>

        {/* 功能特性区域 */}
        <section className='features-section'>
          <div className='features-grid'>
            <div className='feature-card'>
              <div className='feature-icon'>🚀</div>
              <h3>最新技术栈</h3>
              <p>基于React18、TypeScript、React Three Fiber等最新技术栈开发</p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'>🌹</div>
              <h3>基于Three.JS</h3>
              <p>
                Three.js
                是基于webGL的简装的一个易于使用且轻量级的3D库，是前端开发者开发3D项目的主要工具
              </p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'>☀️</div>
              <h3>简洁易用</h3>
              <p>
                高效进行场景处理，并且提供网络压缩存储功能，在项目中快速选取加载
              </p>
            </div>

            <div className='feature-card'>
              <div className='feature-icon'>🍊</div>
              <h3>粒子系统</h3>
              <p>
                内置多种粒子效果，如：烟花、火焰、烟雾、雪花虫等，丰富的配置项可以满足用户各种需求
              </p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'>🎬</div>
              <h3>动画系统</h3>
              <p>支持在线编辑动画关键帧，完善的动画编辑器将支持你的创作</p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'>☀️</div>
              <h3>天气系统</h3>
              <p>支持多种天气效果，如：晴天、雾天、雨天、雪天等</p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'>🛡️</div>
              <h3>资源中心</h3>
              <p>模型、材质、粒子、广告牌...</p>
            </div>
            <div className='feature-card'>
              <div className='feature-icon'>🚩</div>
              <h3>WebGPU (开发阶段)</h3>
              <p>更快的计算...</p>
            </div>
          </div>
        </section>
      </main>

      {/* 底部版权信息 */}
      <footer className='footer'>
        <div className='footer-content'>
          <p>&copy; 2025 Cerror</p>
          <p>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" className="beian-link">
              备案号：京ICP备2025130821号
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
