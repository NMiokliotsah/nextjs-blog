import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IPost } from '../models/posts';

const postDirectory = path.join(process.cwd(), 'posts');

function getPostData(fileName: string) {
  const filePath = path.join(postDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const slug = fileName.replace(/\.md$/, '');

  return {
    slug,
    ...data,
    content,
  };
}

function getAllPosts() {
  const postFiles = fs.readFileSync(postDirectory);

  return postFiles.map((post) => getPostData(post))
    .sort((a, b) => a.date > b.date ? -1 : 1);
}

function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
