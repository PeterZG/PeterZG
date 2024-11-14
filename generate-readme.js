const fs = require('fs');

const header = `
<!-- 顶部动态星空效果 -->
<div align="center">
  <style>
    .star {
      position: absolute;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      animation: twinkle 1.5s infinite ease-in-out alternate;
    }
    @keyframes twinkle {
      from { opacity: 0.2; }
      to { opacity: 1; }
    }
  </style>
  <div style="position: relative; height: 100px; overflow: hidden;">
    <div class="star" style="top: 20px; left: 50px;"></div>
    <div class="star" style="top: 40px; left: 150px;"></div>
    <div class="star" style="top: 10px; left: 250px;"></div>
    <div class="star" style="top: 50px; left: 350px;"></div>
    <div class="star" style="top: 30px; left: 450px;"></div>
  </div>
</div>
`;

const footer = `
<!-- 底部流星效果 -->
<div align="center">
  <style>
    .meteor {
      position: absolute;
      width: 2px;
      height: 2px;
      background: white;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.6);
      animation: shoot 2s linear infinite;
    }
    @keyframes shoot {
      0% { transform: translate(0, 0); opacity: 1; }
      100% { transform: translate(-400px, 400px); opacity: 0; }
    }
  </style>
  <div style="position: relative; height: 100px; overflow: hidden;">
    <div class="meteor" style="top: 10px; left: 200px;"></div>
    <div class="meteor" style="top: 20px; left: 400px;"></div>
    <div class="meteor" style="top: -10px; left: 600px;"></div>
  </div>
</div>
`;

// 你的 README 主内容，可以在这里添加原有的介绍
const mainContent = `
# Welcome to WZ_Crypt's Profile!

A Full-Stack Developer | Web3 Enthusiast

- 🎓 Graduate from UNSW
- 🌏 Based in Shenzhen, China
- 💻 Experienced in Java, Python, and JavaScript

## Contact Me

- GitHub: [WZ_Crypt](https://github.com/WZ_Crypt)
- Email: weihouzeng@gmail.com
`;

const fullContent = `${header}\n${mainContent}\n${footer}`;

// 写入 README.md 文件
fs.writeFileSync('README.md', fullContent);
