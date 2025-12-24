import { useState } from "react";
import ImageUpload from "./components/ImageUpload";
import ImagePreview from "./components/ImagePreview";
import CompressionControls from "./components/CompressionControls";
import DownloadButton from "./components/DownloadButton";
import { compressImage } from "./utils/compressImage";

export default function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [quality, setQuality] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleCompress = async () => {
    if (!originalImage) return;
    setLoading(true);
    const result = await compressImage(originalImage, quality);
    setCompressedImage(result);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🖼 Image Compressor</h1>

      <ImageUpload onSelect={setOriginalImage} />

      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <ImagePreview title="Original Image" file={originalImage} />
        <ImagePreview title="Compressed Image" file={compressedImage} />
      </div>

      <CompressionControls
        quality={quality}
        setQuality={setQuality}
        onCompress={handleCompress}
      />

      {loading && <p>Compressing...</p>}

      <DownloadButton file={compressedImage} />
    </div>
  );
}
