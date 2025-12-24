export default function ImagePreview({ title, file }) {
  if (!file) return null;

  const sizeKB = (file.size / 1024).toFixed(2);
  const url = URL.createObjectURL(file);

  return (
    <div>
      <h3>{title}</h3>
      <img src={url} alt="preview" width="250" />
      <p>Size: {sizeKB} KB</p>
    </div>
  );
}
