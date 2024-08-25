export default function About() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">About vCard Generator</h1>
        <p>This is a simple tool to create vCards with QR codes for easy sharing of contact information.</p>
      </div>
    </div>
  );
}