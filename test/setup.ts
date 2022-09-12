import { rm } from 'fs/promises';
import { join } from 'path';

global.beforeEach(async () => {
  const testDbPath = join(__dirname, '..', 'test.sqlite');

  if (testDbPath) {
    await rm(testDbPath);
  }
});
