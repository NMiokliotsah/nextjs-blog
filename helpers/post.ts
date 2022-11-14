import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost } from '../models/posts';

const postDirectory = path.join(process.cwd(), 'posts');

export function getAllFiles() {
  return fs.readdirSync(postDirectory);
}

export function getPostData(id: string) {
  const postSlug = id.replace(/\.md$/, '');
  const filePath = path.join(postDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    content,
    ...data as IPost,
  };
}

export function getAllPosts() {
  const postFiles = getAllFiles();

  return postFiles.map((post) => getPostData(post))
    .sort((a, b) => a.date > b.date ? -1 : 1);
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
