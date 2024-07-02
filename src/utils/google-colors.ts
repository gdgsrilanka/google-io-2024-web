const colors = [
  "#4285F4",
  "#34A853",
  "#FBBC04",
  "#EA4335",
  "#9F6CD4",
  "#F46831",
];

export function getRandomGoogleColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
