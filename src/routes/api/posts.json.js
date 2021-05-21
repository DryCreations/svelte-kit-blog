import { base } from '$app/paths';


export async function get() {

    let imports = import.meta.globEager('./../../posts/*/index.svelte.md');
    let blog = Object.entries(imports);

    let posts = blog.map(([slug, { metadata }]) => ({
        metadata: metadata,
        link: `${base}/blog/${slug.split('/').slice(-2)[0]}/`
    })).sort((a,b)=>{
        return new Date(b.metadata.date) - new Date(a.metadata.date);
    })

  return {
    body: posts,
  };
}