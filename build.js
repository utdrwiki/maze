import {readFile, mkdir, writeFile} from 'node:fs/promises';

const VALID_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
const EXISTENT_LENGTH = 3;
const NONEXISTENT_LENGTH = 8;

const random = length => Array(length)
	.fill()
	.map(() => VALID_CHARS[Math.floor(Math.random() * VALID_CHARS.length)])
	.join('');

const generatePage = template => template
	.replaceAll('{{EXISTENT}}', () => random(EXISTENT_LENGTH))
	.replaceAll('{{RANDOM}}', () => random(NONEXISTENT_LENGTH));

async function main() {
	const template = await readFile('index.html', 'utf-8');
	await mkdir('out');
	for (let permutation = 0; permutation < VALID_CHARS.length ** EXISTENT_LENGTH; ++permutation) {
		const prefix = Array(EXISTENT_LENGTH)
			.fill()
			.map((_, index) =>
				VALID_CHARS[
					Math.floor(permutation / (VALID_CHARS.length ** index) % VALID_CHARS.length)
				])
			.join('');
		await mkdir(`out/${prefix}`);
		await writeFile(`out/${prefix}/index.html`, generatePage(template));
	}
	await writeFile('out/index.html', generatePage(template));
}

main();
