import { Inject, Injectable } from '@nestjs/common';
import { DbModuleOptions } from './db.module';
import { access, readFile, writeFile } from 'fs/promises';
import { console } from 'inspector';

@Injectable()
export class DbService {
  @Inject('OPTIONS')
  private options: DbModuleOptions;

  async read() {
    const filepath = this.options.path;

    try {
      await access(filepath);
    } catch {
      return [];
    }

    const str = await readFile(filepath, {
      encoding: 'utf-8',
    });

    if (!str) {
      return [];
    }

    return JSON.parse(str) as [];
  }

  async write(obj: Record<string, any>) {
    console.log('write', obj);
    await writeFile(this.options.path, JSON.stringify(obj || []), {
      encoding: 'utf-8',
    });
  }
}
