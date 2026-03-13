import { useState, useCallback } from "react";
import Cropper, { Area } from "react-easy-crop";
import { Check, X, ZoomIn, ZoomOut, Maximize, SplitSquareHorizontal } from "lucide-react";

interface ImageCropperProps {
  imageSrc: string;
  onCropDone: (croppedBlob: Blob) => void;
  onCancel: () => void;
  aspect?: number | null; // null means free aspect ratio
}

const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => resolve(img));
    img.addEventListener("error", reject);
    img.crossOrigin = "anonymous";
    img.src = url;
  });

async function getCroppedImg(imageSrc: string, pixelCrop: Area): Promise<Blob> {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(
    image,
    pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height,
    0, 0, pixelCrop.width, pixelCrop.height
  );
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.9);
  });
}

const ImageCropper = ({ imageSrc, onCropDone, onCancel, aspect = 1 }: ImageCropperProps) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [currentAspect, setCurrentAspect] = useState<number | undefined>(aspect === null ? undefined : aspect);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback((_: Area, croppedPixels: Area) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleDone = async () => {
    if (!croppedAreaPixels) return;
    const blob = await getCroppedImg(imageSrc, croppedAreaPixels);
    onCropDone(blob);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/90">
      <div className="relative flex-1">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          aspect={currentAspect}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
        />
      </div>

      {/* Aspect Ratio Toolbar */}
      <div className="flex justify-center gap-2 bg-black/90 p-2 overflow-x-auto">
        {[
            { label: 'Tự do', value: undefined, icon: <Maximize className="w-4 h-4"/> },
            { label: '1:1', value: 1, icon: <SplitSquareHorizontal className="w-4 h-4"/> },
            { label: '4:3', value: 4/3, icon: <SplitSquareHorizontal className="w-4 h-4"/> },
            { label: '16:9', value: 16/9, icon: <SplitSquareHorizontal className="w-4 h-4"/> },
            { label: '3:4', value: 3/4, icon: <SplitSquareHorizontal className="w-4 h-4"/> },
        ].map(ratio => (
            <button
                key={ratio.label}
                onClick={() => setCurrentAspect(ratio.value)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currentAspect === ratio.value
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
            >
                {ratio.icon}
                {ratio.label}
            </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between bg-background p-4 gap-4">
        <button onClick={onCancel} className="w-full sm:w-auto flex justify-center items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted">
          <X className="h-4 w-4" /> Hủy
        </button>
        <div className="flex items-center gap-3">
          <ZoomOut className="h-4 w-4 text-muted-foreground" />
          <input
            type="range"
            min={1}
            max={3}
            step={0.05}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-28 accent-primary"
          />
          <ZoomIn className="h-4 w-4 text-muted-foreground" />
        </div>
        <button onClick={handleDone} className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90">
          <Check className="h-4 w-4" /> Xong
        </button>
      </div>
    </div>
  );
};

export default ImageCropper;
