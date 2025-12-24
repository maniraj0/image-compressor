export default function ImageUpload({ onSelect }) {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={(e) => onSelect(e.target.files[0])}
    />
  );
}
