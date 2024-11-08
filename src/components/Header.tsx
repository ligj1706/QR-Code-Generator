import React from 'react';
import { QrCode } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-4">
        <QrCode className="w-12 h-12 text-indigo-600" />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        QR Code Generator
      </h1>
      <p className="text-gray-600">
        Generate beautiful QR codes for any website instantly
      </p>
    </div>
  );
}