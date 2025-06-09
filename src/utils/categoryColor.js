export function getCategoryColor(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 70%, 92%)`;
}

export function getCategoryColorVibrant(slug) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Use a wider hue range, higher saturation, and lower lightness for vibrancy
  const hue = Math.abs(hash) % 360;
  const saturation = 85; // more vibrant
  const lightness = 55; // a bit darker for punch
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
