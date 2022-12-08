import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get('https://cloudflare.businessql.workers.dev');
  // http.get('https://test.nubo.dev');
  sleep(1);
}
