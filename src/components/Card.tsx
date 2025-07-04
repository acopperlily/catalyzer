import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';

interface CardProps {
  imageUrl: string;
  funFact: string;
}

import axios from 'axios';

const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const fetchImageAsBase64 = async (imageUrl: string): Promise<string> => {
  try {
    const response = await axios.get(`${proxyUrl}${imageUrl}`, { responseType: 'blob' });
    const blob = response.data;

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error fetching image via proxy:', error);
    throw error;
  }
};


const Card: React.FC<CardProps> = ({ imageUrl, funFact }) => {
  const [base64Image, setBase64Image] = useState<string>(''); // Store the Base64 image
  const [isSharing, setIsSharing] = useState(false); // Control card visibility
  const cardRef = useRef<HTMLDivElement>(null);

  const shareCard = async () => {
    try {
      // Convert image to Base64 if not already done
      if (!base64Image) {
        const base64 = await fetchImageAsBase64(imageUrl);
        setBase64Image(base64);
      }

      setIsSharing(true); // Render the card for sharing

      setTimeout(async () => {
        if (!cardRef.current) return;

        // Convert the card to an image
        const dataUrl = await toPng(cardRef.current, { cacheBust: true });
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const file = new File([blob], 'cat-card.png', { type: 'image/png' });

        // Use Web Share API or fallback to download
        if (navigator.share && navigator.canShare({ files: [file] })) {
          await navigator.share({
            files: [file],
            title: 'Check out this cat!',
            text: funFact,
          });
        } else {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'cat-card.png';
          link.click();
        }
      }, 100); // Ensure the card is rendered before capturing
    } catch (error) {
      console.error('Error sharing card:', error);
    } finally {
      setIsSharing(false); // Hide the card after sharing
    }
  };

  return (
    <div>
      {/* Share Button */}
      <button onClick={shareCard} style={styles.button}>
        Share
      </button>

      {/* Render the card dynamically */}
      {isSharing && (
        <div
          ref={cardRef}
          style={{
            position: 'absolute',
            top: '-9999px',
            left: '-9999px',
            opacity: 0, // Hide visually
          }}
        >
          <div
            style={{
              width: '300px',
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#fff',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={base64Image} // Use the Base64 image
              alt="Cute cat"
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#333' }}>
              {funFact}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Card;
