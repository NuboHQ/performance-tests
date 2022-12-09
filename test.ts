import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  // code
  // http.get('https://whole-deer-68.deno.dev'); // deno
  // http.get('https://performance-tests.vercel.app/api'); // vercel
  // http.get('https://cloudflare.businessql.workers.dev'); // cloudflare

  // code + database
  http.get('https://bright-kingfisher-55.deno.dev'); // deno
  // http.get('https://performance-tests.vercel.app/api/items'); // vercel
  // http.get('https://cloudflare.businessql.workers.dev/items'); // cloudflare

  // nubo
  // http.get('https://test.nubo.dev');
  // http.get('https://test.nubo.dev/items');

  sleep(1);
}
