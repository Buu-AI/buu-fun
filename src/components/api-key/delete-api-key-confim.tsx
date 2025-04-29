import { Button } from "../ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export default function DeleteApiKeyConfirm() {
  return (
    <div>
      <DialogHeader className="flex items-center justify-center ">
        <DialogTitle className="text-2xl text-center font-medium max-w-xs">
          API Key deleted{" "}
        </DialogTitle>
        <DialogDescription className="text-center font-medium max-w-md">
          Your API key has been successfully deleted. If you need a new one, you
          can generate it from the API key management page{" "}
        </DialogDescription>
      </DialogHeader>
      <div className="w-full mt-4 ">
        <DialogClose asChild>
          <Button className="w-full">Done</Button>
        </DialogClose>
      </div>
    </div>
  );
}
