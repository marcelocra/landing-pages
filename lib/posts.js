import fs from 'fs';
import html from 'remark-html';
import matter from 'gray-matter';
import path from 'path';
import remark from 'remark';

const postsDirectory = path.join(process.cwd(), 'posts');

const shouldShowPost = (post) => (process.env.NODE_ENV === 'development' || !post.draft);

function getPostsData() {
  // Get files under /posts.
  const fileNames = fs.readdirSync(postsDirectory);
  const postsData = fileNames.map((fileName) => {
    // Remove .md from files to get an id.
    const id = fileName.replace(/\.md$/, '');

    // Read md as string.
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse metadata.
    const matterResult = matter(fileContents);
    if (!matterResult.data.link) {
      matterResult.data.link = null;
    }

    // Combine the data with the id.
    return {
      id,
      ...matterResult.data,
    };
  });

  return postsData.filter((post) => shouldShowPost(post));
}

export function getSortedPostsData() {
  return getPostsData().sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }

    return -1;
  });
}

export function getAllPostIds() {
  return getPostsData().map((post) => ({
    params: { id: post.id },
  }));
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
