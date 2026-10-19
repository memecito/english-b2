// Carga grammar.js en Node (los const de un <script> clásico no se ven desde page.evaluate).
import fs from 'fs'; import vm from 'vm';
const root = new URL('../../', import.meta.url).pathname;
const c = {}; vm.createContext(c);
vm.runInContext(fs.readFileSync(root + 'grammar.js', 'utf8').replace(/^const /mg, 'var '), c);
export const GRAMMAR = c.GRAMMAR;
export const findItem = (q, items) => items.find(i => { const [a, b] = i.text.split('___').map(x => x.trim()); return q.includes(a) && q.includes(b); });
