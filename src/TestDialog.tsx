import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

export default function TestDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Open Test Modal</button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Test Modal</h2>
          <p>This modal should be perfectly centered on the screen.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
