#!/usr/bin/env node

import sharp from 'sharp';
import path from 'path';
import fs from 'node:fs/promises';

const IMAGES = [
	{
		path: './src/lib/assets/profile.png',
		newFilename: 'profile.min.webp',
		overrideNewfile: false,
		width: 192,
		height: 192,
		srcs: ['./src/routes/+page.svelte']
	}
];
async function fixImports(src, imagePath, newFilename) {
	const oldFilenameRE = new RegExp(path.basename(imagePath), 'g');
	const data = await fs.readFile(src, 'utf8');
	const newContent = data.replace(oldFilenameRE, newFilename);
	await fs.writeFile(src, newContent);
	console.log(`Imports now have: '${newFilename}'`);
}

async function minifyImages(image) {
	const format = path.extname(image.newFilename);
	const imagePath = image.path;
	const newImagePath = path.resolve(path.dirname(imagePath), image.newFilename);

	if (!image.overrideNewfile) {
		try {
			await fs.access(newImagePath);
			console.log(`File '${image.newFilename}' already exists. Ignoring...`);
			return;
		} catch (error) {
			// This means that the file doesn't exists, so we keep going.
		}
	}

	try {
		console.log(`Trying to convert: '${imagePath}'...`);
		await sharp(imagePath)
			.resize({ width: image.width, height: image.height })
			.toFormat(format.slice(1))
			.toFile(newImagePath);

		const importsToFix = image.srcs.map(
			async (src) => await fixImports(src, imagePath, image.newFilename)
		);

		await Promise.all(importsToFix);
		console.log('Success!');
	} catch (error) {
		console.log('Failed :(. The error:');
		console.log(error);
	}
}

IMAGES.forEach((image) => minifyImages(image));
