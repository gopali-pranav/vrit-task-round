import { useState } from "react";
import ReactQRCode from "react-qr-code";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Append custom slug as a query parameter to the long URL
      const urlWithCustomSlug = customSlug
        ? `${longUrl}?custom=${customSlug}`
        : longUrl;

      const response = await fetch(
        `http://tinyurl.com/api-create.php?url=${encodeURIComponent(
          urlWithCustomSlug
        )}`
      );

      if (!response.ok) {
        throw new Error("Failed to shorten URL");
      }

      const data = await response.text();
      setShortUrl(data);
      setError("");
    } catch (error) {
      setError("Failed to shorten URL");
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 p-4"
        >
          <h1 className="text-3xl font-semibold">URL Shortener</h1>
          <input
            type="text"
            placeholder="Enter long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="border border-black rounded-md p-2 w-96"
          />
          <input
            type="text"
            placeholder="Custom slug (optional)"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
            className="border border-black rounded-md p-2 w-96"
          />
          <div>
            <button
              type="submit"
              className="border bg-blue-400 text-white font-semibold p-2 rounded-md"
            >
              Shorten URL
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        {error && <p>{error}</p>}
      </div>
      {shortUrl && (
        <div className="flex flex-col justify-center items-center gap-4 p-4">
          <p>Shortened URL: {shortUrl}</p>
          <ReactQRCode value={shortUrl} />
        </div>
      )}
    </div>
  );
}

export default App;
