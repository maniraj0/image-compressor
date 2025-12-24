export default function DownloadButton({ file }) {
  if (!file) return null;

  const download = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "compressed-image.jpg";
    link.click();
  };

  return <button onClick={download}>Download Compressed Image</button>;
}
