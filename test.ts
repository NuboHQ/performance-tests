import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  // deno
  // http.get('https://whole-deer-68.deno.dev');
  // http.get('https://bright-kingfisher-55.deno.dev');

  // vercel
  // http.get('https://performance-tests.vercel.app/api');
  // http.get('https://performance-tests.vercel.app/api/items');

  // cloudflare
  // http.get('https://cloudflare.businessql.workers.dev');
  // http.get('https://cloudflare.businessql.workers.dev/items');

  // nubo
  http.get('https://test.nubo.dev');

  sleep(1);
}
