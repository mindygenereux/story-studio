// app/sandbox/page.tsx
import Button from "./components/button";
import Card from "@/components/Card";

export default function Sandbox() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Sandbox Page 🧪</h2>
          <p className="text-slate-600 mb-6">
            This is your test page for trying components. Below you can see the Button and Card components in action.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-4">Button Component</h3>
            <div className="space-x-3">
              <Button label="Primary Button" />
              <Button label="Another Button" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Card Component</h3>
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
}