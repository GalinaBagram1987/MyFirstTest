import { strict as assert } from 'node:assert'; // импортируем блок для проверки из модумля нод js
import capitalize from "../src/capitalize.js";

assert(capitalize('') === '');
assert(capitalize('hello') === 'Hello');
