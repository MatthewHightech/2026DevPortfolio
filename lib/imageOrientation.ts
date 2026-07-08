export type ImageDimensions = {
  width: number;
  height: number;
};

export function isPortraitImage(dims: ImageDimensions | null): boolean {
  if (!dims) return false;
  return dims.height > dims.width;
}

export function isLandscapeImage(dims: ImageDimensions | null): boolean {
  if (!dims) return false;
  return dims.width > dims.height;
}
