const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'content', 'blog');
const publicBlogDir = path.join(__dirname, 'public', 'blog');

if (!fs.existsSync(publicBlogDir)) {
    fs.mkdirSync(publicBlogDir, { recursive: true });
}

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

for (const file of files) {
    const slug = file.replace('.md', '');
    const mdPath = path.join(blogDir, file);
    let content = fs.readFileSync(mdPath, 'utf8');

    // Create the directory in public/blog/<slug>
    const imageDir = path.join(publicBlogDir, slug);
    if (!fs.existsSync(imageDir)) {
        fs.mkdirSync(imageDir, { recursive: true });
        // Create a .gitkeep so it gets tracked and we know it exists
        fs.writeFileSync(path.join(imageDir, '.gitkeep'), '');
    }

    // Replace ![Alt Text](/blog/slug/image-X.webp)
    // with ![Alt Text](/blog/slug/Alt-Text.webp)
    // And also fix the frontmatter image to be cover.webp if we want, or keep cover.jpg
    content = content.replace(/!\[([^\]]+)\]\(\/blog\/[^\/]+\/image-\d+\.([a-zA-Z]+)\)/g, (match, alt, ext) => {
        // Convert alt to PascalCase with hyphens
        let newName = alt.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-');
        // Remove weird characters
        newName = newName.replace(/[^a-zA-Z0-9-]/g, '');
        return `![${alt}](/blog/${slug}/${newName}.${ext})`;
    });

    fs.writeFileSync(mdPath, content);
    console.log(`Updated ${file}`);
}
