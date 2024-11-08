import React from 'react';
import QRCode from 'qrcode.react';
import { Download } from 'lucide-react';

interface QRCodePreviewProps {
  url: string;
  size: number;
  bgColor: string;
  fgColor: string;
  onDownload: () => void;
}

export function QRCodePreview({ url, size, bgColor, fgColor, onDownload }: QRCodePreviewProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6">
      <div
        className="p-4 rounded-xl"
        style={{ backgroundColor: bgColor }}
      >
        <QRCode
          value={url}
          size={size}
          bgColor={bgColor}
          fgColor={fgColor}
          level="H"
          includeMargin={true}
        />
      </div>
      <button
        onClick={onDownload}
        className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Download className="w-4 h-4 mr-2" />
        Download QR Code
      </button>
    </div>
  );
}