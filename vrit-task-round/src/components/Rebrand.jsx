import React, { useState } from "react";
import ReactQRCode from "react-qr-code";

function Rebrand() {
  const [longUrl, setLongUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Construct the payload for Rebrandly API
      const payload = {
        destination: longUrl,
        domain: { fullName: "rebrand.ly" },
        slashtag: customSlug || undefined, // Use customSlug if provided
      };

      // Make request to Rebrandly API
      const response = await fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: "2c38627e2c9f4de9a64ea7c59917dcb6", // Replace with your Rebrandly API key
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.json();
      setShortUrl(data.shortUrl);
      setError("");
    } catch (error) {
      setError("Failed to shorten URL");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Custom slug (optional)"
          value={customSlug}
          onChange={(e) => setCustomSlug(e.target.value)}
        />
        <button type="submit">Shorten URL</button>
      </form>
      {error && <p>{error}</p>}
      {shortUrl && (
        <div>
          <p>Shortened URL: {shortUrl}</p>
          <ReactQRCode value={shortUrl} />
        </div>
      )}
    </div>
  );
}

export default Rebrand;
