import React, { useRef, useState } from 'react';
import { Upload, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../config/firebase';
import { cn } from '../../lib/utils';
import { toast } from 'sonner';
import imageCompression from 'browser-image-compression';
import { useAuth } from '../../hooks/useAuth';

interface ImageUploaderProps {
  value?: string;
  onChange: (url: string) => void;
  className?: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ value, onChange, className }) => {
  const { user } = useAuth();
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate type
    if (!file.type.startsWith('image/')) {
        toast.error('Please upload an image file');
        return;
    }

    if (!user) {
        toast.error('You must be logged in to upload');
        return;
    }

    setUploading(true);
    try {
      // Compress image
      const options = {
        maxSizeMB: 0.2, // ~200KB as requested for optimization
        maxWidthOrHeight: 1200,
        useWebWorker: true,
      };

      let uploadFile = file;
      try {
          uploadFile = await imageCompression(file, options);
      } catch (compressionError) {
          console.error("Compression failed, uploading original", compressionError);
      }

      // Upload path: assignments/{teacherId}/{timestamp}_{filename}
      // This matches the storage.rules: match /assignments/{teacherId}/{imageId}
      const storagePath = `assignments/${user.uid}/${Date.now()}_${uploadFile.name}`;
      const storageRef = ref(storage, storagePath);

      const snapshot = await uploadBytes(storageRef, uploadFile);
      const url = await getDownloadURL(snapshot.ref);
      onChange(url);
      toast.success('Image uploaded successfully');
    } catch (error: any) {
      console.error("Upload failed", error);
      if (error.code === 'storage/unauthorized') {
          toast.error('Permission denied: You can only upload to your own folder.');
      } else {
          toast.error('Failed to upload image');
      }
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      onChange('');
      if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
        <div
            onClick={() => inputRef.current?.click()}
            className={cn(
                "relative flex flex-col items-center justify-center w-full h-48 rounded-lg border-2 border-dashed border-slate-300 cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors overflow-hidden",
                uploading && "opacity-50 pointer-events-none"
            )}
        >
            {value ? (
                <>
                    <img src={value} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                         <p className="text-white font-medium flex items-center gap-2"><Upload className="w-4 h-4" /> Change Image</p>
                    </div>
                    <button
                        onClick={handleRemove}
                        className="absolute top-2 right-2 p-1.5 bg-white/90 text-red-600 rounded-full hover:bg-white transition-colors z-10"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-slate-500">
                    {uploading ? (
                        <Loader2 className="w-8 h-8 animate-spin mb-2 text-blue-600" />
                    ) : (
                        <ImageIcon className="w-8 h-8 mb-2 text-slate-400" />
                    )}
                    <p className="mb-2 text-sm font-semibold">
                        {uploading ? 'Compressing & Uploading...' : 'Click to upload cover image'}
                    </p>
                    <p className="text-xs text-slate-400">Auto-compressed (&lt;200KB)</p>
                </div>
            )}
            <input
                ref={inputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
            />
        </div>
    </div>
  );
};
