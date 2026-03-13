'use client'; // Keeping this though mostly for Next.js, harmless in Vite

import React, { useState } from 'react';
import ImageCropper from './ImageCropper';

interface CloudinaryUploadWidgetProps {
  onUploadSuccess: (url: string) => void;
  onSuccess?: (url: string) => void; // Support for alias
  label?: string;
  defaultImage?: string; // Added to support editing
  folder?: string;
  aspectRatio?: number | null; // Configurable crop aspect ratio
}

export default function CloudinaryUploadWidget({
  onUploadSuccess,
  onSuccess,
  label = "Ảnh bìa",
  defaultImage,
  folder = 'school_uploads',
  aspectRatio = null // Default to free crop, since users want to adjust
}: CloudinaryUploadWidgetProps) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(defaultImage || null);
  const [cropImage, setCropImage] = useState<string | null>(null);

  const actualOnSuccess = onSuccess || onUploadSuccess;

  // Cấu hình Cloudinary của bạn
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dkkvom3um';
  const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'school_uploads';

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chỉ chọn file ảnh!');
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        setCropImage(reader.result as string);
    });
    reader.readAsDataURL(file);
    e.target.value = ''; // reset input
  };

  const handleCropDone = async (croppedBlob: Blob) => {
      setCropImage(null);
      setLoading(true);

      const formData = new FormData();
      // Ensure the blob is treated as a File with a correct filename and mime type,
      // as some uploads fail without it.
      const file = new File([croppedBlob], "cropped_image.jpg", { type: "image/jpeg" });
      formData.append('file', file);

      // We will just use the default preset since Cloudinary allows folder overrides if unsigned preset permits it
      formData.append('upload_preset', UPLOAD_PRESET);
      // Optional: add folder if your preset supports dynamic folders, otherwise it goes to default
      if (folder !== 'school_uploads') {
          formData.append('folder', folder);
      }

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        const data = await response.json();

        if (data.secure_url) {
          setPreview(data.secure_url);
          actualOnSuccess(data.secure_url);
        } else {
          throw new Error('Upload failed');
        }
      } catch (error) {
        console.error('Lỗi upload:', error);
        alert('Có lỗi xảy ra khi tải ảnh lên. Vui lòng thử lại.');
      } finally {
        setLoading(false);
      }
  };

  const removeImage = () => {
    setPreview(null);
    actualOnSuccess('');
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      {/* 1. Trạng thái: Đang tải */}
      {loading && (
        <div className="flex items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50">
          <div className="flex flex-col items-center">
            {/* Loading Spinner Icon */}
            <svg className="animate-spin h-8 w-8 text-blue-500 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-sm text-gray-500">Đang tải lên...</span>
          </div>
        </div>
      )}

      {/* 2. Trạng thái: Đã có ảnh (Preview) */}
      {!loading && preview && (
        <div className="relative w-full h-40 rounded-lg overflow-hidden border border-gray-200 group bg-slate-100">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          {/* Nút xóa ảnh */}
          <button
            type="button"
            onClick={removeImage}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-1.5 rounded-full shadow-lg transition-all"
            title="Xóa ảnh"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* 3. Trạng thái: Chưa có ảnh (Upload Button) */}
      {!loading && !preview && (
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-border border-dashed rounded-xl cursor-pointer bg-muted/30 hover:bg-muted/50 transition-colors">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-3 text-muted-foreground" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Bấm để tải ảnh</span></p>
              <p className="text-xs text-muted-foreground/70">PNG, JPG (Cho phép cắt ảnh)</p>
            </div>
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
        </div>
      )}

      {cropImage && (
          <ImageCropper
             imageSrc={cropImage}
             onCropDone={handleCropDone}
             onCancel={() => setCropImage(null)}
             aspect={aspectRatio}
          />
      )}
    </div>
  );
}
