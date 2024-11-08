import React from 'react';
import { Link2 } from 'lucide-react';

interface QRCodeControlsProps {
  url: string;
  size: number;
  bgColor: string;
  fgColor: string;
  onUrlChange: (url: string) => void;
  onSizeChange: (size: number) => void;
  onBgColorChange: (color: string) => void;
  onFgColorChange: (color: string) => void;
}

export function QRCodeControls({
  url,
  size,
  bgColor,
  fgColor,
  onUrlChange,
  onSizeChange,
  onBgColorChange,
  onFgColorChange,
}: QRCodeControlsProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Website URL
        </label>
        <div className="relative">
          <Link2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="url"
            value={url}
            onChange={(e) => onUrlChange(e.target.value)}
            placeholder="Enter website URL"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Size: {size}x{size}
        </label>
        <input
          type="range"
          min="128"
          max="512"
          value={size}
          onChange={(e) => onSizeChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Background Color
          </label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => onBgColorChange(e.target.value)}
            className="h-10 w-full rounded-lg cursor-pointer"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            QR Code Color
          </label>
          <input
            type="color"
            value={fgColor}
            onChange={(e) => onFgColorChange(e.target.value)}
            className="h-10 w-full rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}