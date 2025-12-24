export default function CompressionControls({ quality, setQuality, onCompress }) {
  return (
    <div>
      <label>Compression Level (MB): {quality}</label>
      <input
        type="range"
        min="0.1"
        max="2"
        step="0.1"
        value={quality}
        onChange={(e) => setQuality(e.target.value)}
      />
      <br />
      <button onClick={onCompress}>Compress Image</button>
    </div>
  );
}
