import imageCompression from "browser-image-compression";

export async function compressImage(file, quality) {
  const options = {
    maxSizeMB: quality,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Compression error:", error);
    throw error;
  }
}
