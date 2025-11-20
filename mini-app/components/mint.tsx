'use client';
import { useState, useContext } from 'react';
import { Button } from '@/components/ui/button';
import { Share } from '@/components/share';
import { url } from '@/lib/metadata';
import { MiniAppContext } from '@/components/context/miniapp-provider';

export default function Mint() {
  const context = useContext(MiniAppContext);
  const { sdk, isInMiniApp } = context ?? {};
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleMint = async () => {
    setLoading(true);
    try {
      // Simulate a $1.25 minting transaction
      await new Promise((r) => setTimeout(r, 2000));

      // Simulate AI image generation (placeholder)
      const aiImage = '/logo.png';
      setImageUrl(aiImage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={handleMint} disabled={loading}>
        {loading ? 'Minting...' : 'Mint $1.25 NFT'}
      </Button>
      {imageUrl && (
        <img src={imageUrl} alt="Generated action figure" width={512} height={512} />
      )}
      {imageUrl && (
        <Share text={`Check out my Warplet action figure! ${url}`} />
      )}
    </div>
  );
}
