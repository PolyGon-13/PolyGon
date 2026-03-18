import fs from 'fs/promises';
import path from 'path';
import * as cheerio from 'cheerio';

const BACKUP_DIR = path.join(process.cwd(), 'public/blog_data');
const OUT_DIR = path.join(process.cwd(), 'src/data');
const OUT_FILE = path.join(OUT_DIR, 'posts.json');

async function parsePosts() {
  const entries = await fs.readdir(BACKUP_DIR, { withFileTypes: true });
  const postDirs = entries.filter(e => e.isDirectory() && /^\d+$/.test(e.name));
  
  const posts = [];

  for (const dir of postDirs) {
    const postPath = path.join(BACKUP_DIR, dir.name);
    const files = await fs.readdir(postPath);
    const htmlFile = files.find(f => f.endsWith('.html'));
    
    if (!htmlFile) continue;
    
    const htmlContent = await fs.readFile(path.join(postPath, htmlFile), 'utf8');
    const $ = cheerio.load(htmlContent, null, false); // Don't add html/head body wrappers
    
    const title = $('.title-article').text().trim() || $('title').text().trim();
    const category = $('.category').text().trim() || 'Uncategorized';
    const date = $('.date').text().trim() || 'Unknown Date';
    
    // Process content: rewrite image paths
    const contentDiv = $('.contents_style');
    contentDiv.find('img').each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.startsWith('./img')) {
        $(el).attr('src', `/blog_data/${dir.name}/${src.replace('./img', 'img')}`);
      }
    });

    // Extract an excerpt and a thumbnail image
    const firstImgUrl = contentDiv.find('img').first().attr('src');
    const textContent = contentDiv.text().replace(/\s+/g, ' ').trim();
    const excerpt = textContent.slice(0, 150) + (textContent.length > 150 ? '...' : '');
    
    const contentHtml = contentDiv.html() || '';

    posts.push({
      id: parseInt(dir.name, 10),
      title,
      category,
      date,
      excerpt,
      thumbnail: firstImgUrl || null,
      content: contentHtml
    });
  }

  // Sort posts by date or ID descending
  posts.sort((a, b) => b.id - a.id);

  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.writeFile(OUT_FILE, JSON.stringify(posts, null, 2), 'utf8');
  console.log(`Successfully parsed ${posts.length} posts and saved to ${OUT_FILE}`);
}

parsePosts().catch(console.error);
