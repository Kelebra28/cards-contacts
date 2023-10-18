import React, { useRef } from 'react';
import QRCode from 'qrcode.react';
import html2canvas from 'html2canvas';

const QRCodeGenerator = ({ qrData, qrNameFile }) => {
  const qrCodeRef = useRef(null);

  const downloadQRCode = () => {
    if (qrCodeRef.current) {
    html2canvas(qrCodeRef.current).then((canvas) => {
      const qrCodeImage = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = qrCodeImage;
      a.download = `${qrNameFile}.png`;
      a.click();
    });
  }
  };

  return (
    <div className='flex flex-col w-full'>
        <div ref={qrCodeRef}>
          <QRCode value={qrData} size={200} />
      </div>
      <button className='mt-2 text-sm' onClick={downloadQRCode}>Descargar Código QR</button>
    </div>
  );
};

export default QRCodeGenerator;