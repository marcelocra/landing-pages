#!/usr/bin/env node

import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

const IMAGES = [
	{
		path: './src/lib/assets/profile.png',
		newFilename: 'profile.min.webp',
		width: 192,
		height: 192,
		srcs: ['./src/routes/+page.svelte']
	}
];

async function minifyImages(image) {
	const format = path.extname(image.newFilename);
	const imagePath = image.path;

	try {
		console.log(`Trying to convert: '${imagePath}'...`);
		await sharp(imagePath)
			.resize({ width: image.width, height: image.height })
			.toFormat(format)
			.toFile(path.resolve(path.dirname(imagePath), image.newFilename));

		image.srcs.forEach(async (src) => {
			const oldFilenameRe = new RegExp(path.basename(imagePath), 'g');
			const data = await fs.readFile(src, 'utf8');
			const newContent = data.replace(oldFilenameRe, image.newFilename);
			await fs.writeFile(src, newContent, 'utf8');
		});

		console.log('Success!');
	} catch (error) {
		console.log('Failed :(. The error:');
		console.log(error);
	}
}

IMAGES.forEach((image) => minifyImages(image));
