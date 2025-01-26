import Image from 'next/image';

export default function Images({ type }) {
  const images = {
    logo: {
      src: '/images/logo.png',
      width: 14,
      height: 16,
      alt: 'Logo image',
    },
    login: {
      src: '/images/login.png',
      width: 20,
      height: 20,
      alt: 'Login image',
    },
    exclude1: {
      src: '/images/Exclude1.svg',
      width: 80,
      height: 80,
      alt: 'Exclude 1 image',
    },
    exclude2: {
      src: '/images/Exclude2.svg',
      width: 80,
      height: 80,
      alt: 'Exclude 2 image',
    },
    exclude3: {
      src: '/images/Exclude3.svg',
      width: 80,
      height: 80,
      alt: 'Exclude 3 image',
    },
    exclude4: {
      src: '/images/Exclude4.svg',
      width: 80,
      height: 80,
      alt: 'Exclude 4 image',
    },
    exclude5: {
      src: '/images/Exclude5.svg',
      width: 80,
      height: 80,
      alt: 'Exclude 5 image',
    },
    exclude6: {
      src: '/images/Exclude6.svg',
      width: 80,
      height: 80,
      alt: 'Exclude 6 image',
    },
  };

  const selectedImage = images[type];

  if (!selectedImage) {
    console.error('Invalid image type provided');
    return null;
  }

  return (
    <Image
      src={selectedImage.src}
      width={selectedImage.width}
      height={selectedImage.height}
      alt={selectedImage.alt}
    />
  );
}
