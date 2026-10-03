import { copyFileSync, mkdirSync } from 'node:fs';

mkdirSync('dist', { recursive: true });
copyFileSync('public/.assetsignore', 'dist/.assetsignore');
