import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  "categories": categories[]->title,
  "author": author->name,
  file,
  
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  mainImage,
  publishedAt,
  body,
  "author": author->{name, image, bio},
  "categories": categories[]->title
}`;
