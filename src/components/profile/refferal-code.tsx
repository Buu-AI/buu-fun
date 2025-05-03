import { addCreditsMutation } from "@/lib/react-query/user";
import {
  redeemVoucherSchema,
  TRedeemVoucherSchema,
} from "@/lib/zod/redeem-voucher";
import { useAuthentication } from "@/providers/account.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDisclosure } from "@mantine/hooks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2, UserCheck, UserRoundPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import CopyReferralCode from "./copy-refferal-code";

export default function ReferralCode() {
  const [open, SetIsOpen] = useDisclosure(false);
  const { identityToken, login } = useAuthentication();
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm<TRedeemVoucherSchema>({
    resolver: zodResolver(redeemVoucherSchema),
  });
  const { mutate: AddRedeemVoucher, isPending } = useMutation({
    mutationFn: addCreditsMutation,
    async onSuccess() {
      SetIsOpen.close();
      toast.success("Added Credits your Account");
      reset();
      await queryClient.invalidateQueries({
        queryKey: ["get-user-credits"],
      });
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  function handleRedeemVoucherSubmit({ code }: TRedeemVoucherSchema) {
    const accessToken = identityToken;
    if (!accessToken) {
      login();
      return;
    }

    AddRedeemVoucher({
      accessToken,
      code,
    });
  }

  return (
    <div className="flex items-center  justify-between pl-3 pr-5 py-2  gap-2 w-full border rounded-xl ">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 justify-center">
          <div className="saturate-50 border-shadow-account-linking px-2 py-2 flex items-center justify-center w-10 h-10">
            <UserRoundPlus className="text-[#78DBFF]" />
          </div>

          <h4 className="text-muted-foreground font-medium">Referral</h4>
          <div className=" px-2 py-1">
            <CopyReferralCode />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Dialog onOpenChange={SetIsOpen.toggle} open={open}>
          <DialogTrigger asChild>
            <Button className="rounded-[8px] h-8 px-5 py-2 flex items-center justify-center ">
              <p className="font-medium text-black">Link</p>
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-[20px] lg:rounded-[20px] max-w-[300px] bg-buu-opacity-100 border-buu shadow-buu-button">
            <DialogHeader>
              <DialogTitle>Link Referral</DialogTitle>
              <DialogDescription>Earn Rewards</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit(handleRedeemVoucherSubmit)}>
              <div className="items-center gap-4">
                <Label htmlFor="code" className="text-right">
                  Referral code
                </Label>
                <Input
                  placeholder="Eg: BUU-FUN-DASS"
                  id="code"
                  className="col-span-3"
                  {...register("code")}
                />
              </div>
              <Button
                disabled={isPending}
                className="px-2 group py-2 h-[40px] w-full mt-4 rounded-[10px]"
              >
                {!isPending ? (
                  <>
                    <div className="w-7 h-7 icon-blue-with-shadow blue-icon-gradient-background blue-icon-filter-effect rounded-md flex items-center p-1 justify-center">
                      <UserCheck className="text-white stroke-[2.5]" />
                    </div>
                    Confirm Referral
                  </>
                ) : (
                  <>
                    <Loader2 className="animate-spin" />
                    Loading...
                  </>
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
