"use client";

import React, { useState, useRef } from "react";
import QRCode from "qrcode.react";

interface ContactData {
  name: string;
  phone: string;
  email: string;
  company: string;
  title: string;
}

interface VCardDisplayProps {
  contact: ContactData;
}

export default function VCardDisplay({ contact }: VCardDisplayProps) {
  const [logo, setLogo] = useState<string | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  const vCardUrl = `/api/vcard?name=${encodeURIComponent(contact.name)}&phone=${encodeURIComponent(contact.phone)}&email=${encodeURIComponent(contact.email)}&company=${encodeURIComponent(contact.company)}&title=${encodeURIComponent(contact.title)}&openExternalBrowser=1`;

  const handleDownload = () => {
    window.open(vCardUrl, "_blank");
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogo(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const downloadQR = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector("canvas");
      if (canvas) {
        const pngUrl = canvas
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${contact.name}_QR.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
    }
  };

  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">{contact.name}</h2>
      <p className="mb-2 text-gray-300">{contact.phone}</p>
      <p className="mb-2 text-gray-300">{contact.email}</p>
      <p className="mb-2 text-gray-300">{contact.company}</p>
      <p className="mb-4 text-gray-300">{contact.title}</p>
      <div ref={qrRef}>
        <QRCode
          value={`${window.location.origin}${vCardUrl}`}
          size={256}
          level="H"
          imageSettings={
            logo
              ? {
                  src: logo,
                  x: undefined,
                  y: undefined,
                  height: 40,
                  width: 40,
                  excavate: true,
                }
              : undefined
          }
        />
      </div>
      <p className="mt-4 text-sm text-gray-400">
        Scan this QR code with your phone&apos;s camera, QR scanner, or Line app
        to download the vCard
      </p>
      <div className="mt-4 space-y-2">
        <button
          onClick={handleDownload}
          className="w-full px-4 py-2 bg-lime-400 text-gray-900 rounded font-bold hover:bg-lime-500 transition-colors"
        >
          Download vCard
        </button>
        <button
          onClick={downloadQR}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded font-bold hover:bg-blue-600 transition-colors"
        >
          Download QR Code
        </button>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-600 hover:bg-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <p className="mb-2 text-sm text-gray-300">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-300">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              className="hidden"
              onChange={handleLogoUpload}
              accept="image/*"
            />
          </label>
        </div>
      </div>
    </div>
  );
}
