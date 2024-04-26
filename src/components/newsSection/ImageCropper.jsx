import React, { useState, useEffect } from 'react';

const ImageCropper = ({ imageUrl, coordinates }) => {
  const [croppedImageUrl, setCroppedImageUrl] = useState('');

  useEffect(() => {
    if (imageUrl && coordinates) {
      cropImage(imageUrl, coordinates);
    }
  }, [imageUrl, coordinates]);

  const cropImage = (url, coords) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
  
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      // Set canvas size to the width and height of the cropped region
      canvas.width = coords.width;
      canvas.height = coords.height;
  
      // Calculate the scaling factor to cover the entire width or height
      const scaleX = coords.width / img.width;
      const scaleY = coords.height / img.height;
      const scale = Math.max(scaleX, scaleY);
  
      // Calculate the new width and height to cover the entire area
      const newWidth = img.width * scale;
      const newHeight = img.height * scale;
  
      // Calculate the offset to center the image
      const offsetX = (canvas.width - newWidth) / 2;
      const offsetY = (canvas.height - newHeight) / 2;
  
      // Draw the scaled image onto the canvas
      ctx.drawImage(img, 0, 0, img.width, img.height, offsetX, offsetY, newWidth, newHeight);
  
      // Convert the canvas content to a data URL
      const croppedUrl = canvas.toDataURL();
      setCroppedImageUrl(croppedUrl);
    };
  
    img.src = url;
  };

  return (
    <div>
      <img loading="lazy" className='h-64 w-64 rounded-t-2xl object-cover' src={croppedImageUrl} />
    </div>
  );
};

export default ImageCropper;