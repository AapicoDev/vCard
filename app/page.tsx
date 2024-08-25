import VCardForm from "../components/VCardForm";
import FeatureHighlights from "../components/FeatureHighlights";

export default function Home() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">
          Create Your vCard
        </h1>
        <VCardForm />
        <FeatureHighlights />
      </div>
    </div>
  );
}
