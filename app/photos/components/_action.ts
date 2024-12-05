"use server"

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
	secure: true,
});

interface Props {
    file: File;
  }

export async function saveToDatabase({file}:Props){
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, function (error, result) {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        })
        .end(buffer);
      });
}

