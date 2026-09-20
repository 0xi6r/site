import { cp } from 'node:fs/promises';

await cp('public', 'dist', { recursive: true, force: true });
