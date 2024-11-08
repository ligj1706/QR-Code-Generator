import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QRCodeControls } from './components/QRCodeControls';
import { QRCodePreview } from './components/QRCodePreview';

function App() {
  const [url, setUrl] = useState('https://stackblitz.com');
  const [size, setSize] = useState(256);
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [fgColor, setFgColor] = useState('#000000');

  const downloadQRCode = useCallback(() => {
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Header />
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <QRCodeControls
                url={url}
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                onUrlChange={setUrl}
                onSizeChange={setSize}
                onBgColorChange={setBgColor}
                onFgColorChange={setFgColor}
              />
              
              <QRCodePreview
                url={url}
                size={size}
                bgColor={bgColor}
                fgColor={fgColor}
                onDownload={downloadQRCode}
              />
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;