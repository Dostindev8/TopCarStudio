export function loadImage(src: string, onProgress?: () => void): Promise<void> {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.decoding = "async";
    img.onload = () => {
      onProgress?.();
      resolve();
    };
    img.onerror = () => {
      onProgress?.();
      resolve();
    };
    img.src = src;
  });
}
