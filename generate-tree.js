const fs = require('fs');
const path = require('path');

/**
 * 递归扫描目录
 * @param {string} dir 
 * @param {string} basePath 用于生成相对路径
 * @returns {Array} 文件列表对象 { name, path, children }
 */
function scanDir(dir, basePath = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  const result = [];

  items.forEach(item => {
    if (item.name.startsWith('.')) return; // 忽略隐藏文件

    const fullPath = path.join(dir, item.name);
    const relativePath = path.join(basePath, item.name);

    if (item.isDirectory()) {
      result.push({
        name: item.name,
        path: relativePath,
        children: scanDir(fullPath, relativePath)
      });
    } else {
      result.push({
        name: item.name,
        path: relativePath
      });
    }
  });

  return result;
}

/**
 * 生成 Markdown 目录
 * @param {Array} list 文件列表
 * @param {number} level 缩进等级
 * @returns {string} Markdown 字符串
 */
function generateMarkdown(list, level = 0) {
  let md = '';
  const indent = '  '.repeat(level);
  list.forEach(item => {
    if (item.children) {
      md += `${indent}- **${item.name}**\n`;
      md += generateMarkdown(item.children, level + 1);
    } else {
      // 替换空格和特殊字符方便跳转
      const link = item.path.replace(/ /g, '%20');
      md += `${indent}- [${item.name}](${link})\n`;
    }
  });
  return md;
}

// 主程序
const projectTitle = '# Javascript实现数据结构和算法 & LeetCode刷题\n\n';
const dirTree = scanDir('.');
const markdownContent = projectTitle + generateMarkdown(dirTree);

fs.writeFileSync('README.md', markdownContent, 'utf-8');

console.log('README.md 已生成！');
