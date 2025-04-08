"use client";
import { MagicPenIcon } from "@/assets/icons";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch } from "@/hooks/redux";
import { createApiKey } from "@/lib/react-query/api-key";
import { isApiKeyRetrieved, setApiKey } from "@/lib/redux/features/api-key";
import {
  createAPISchema,
  ExpirationUnitEnums,
  TCreateAPISchema,
} from "@/lib/zod/create-api";
import { useAuthentication } from "@/providers/account.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CreateAPIForm() {
  const { identityToken: accessToken, login } = useAuthentication();
  const [checked, setIsChecked] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<TCreateAPISchema>(
    {
      resolver: zodResolver(createAPISchema),
    },
  );
  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const { mutate: createAPIKeyMutation } = useMutation({
    mutationFn: createApiKey,
    onSuccess(data) {
      dispatch(
        setApiKey({
          key: data.key,
          name: data.name,
        }),
      );
      dispatch(isApiKeyRetrieved(true));
      queryClient.invalidateQueries({
        queryKey: ["retrieve-api-keys"],
      });
      toast.success("Successfully created API Key");
    },
  });

  function onSubmit(formValues: TCreateAPISchema) {
    const data = formValues;
    if (!checked && data?.expiresIn) {
      delete data.expiresIn;
    }

    if (!accessToken) {
      login();
      return;
    }

    console.log(data);
    createAPIKeyMutation({
      accessToken,
      input: data,
    });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (error) => {
        console.log(error);
      })}
    >
      <Label className="uppercase text-xs font-medium ">key name</Label>
      <div className="w-full pt-1">
        <Input
          {...register("name")}
          className="py-2.5 text-lg h-auto border-gray-700"
          placeholder="Enter key name"
        />
        <div className="mt-3">
          <div className="flex justify-end items-center gap-2 pr-2 ">
            <Label htmlFor="set-expiresIn" className="text-xs font-medium">
              This API Key has expiration
            </Label>
            <Checkbox
              checked={checked}
              onCheckedChange={(value) => {
                if (typeof value === "boolean") {
                  setIsChecked(value);
                  setValue("expiresIn.units", "days");
                  setValue("expiresIn.value", 1);
                }
              }}
              id="set-expiresIn"
              className="rounded-[4px] 
              data-[state=checked]:bg-buu
              data-[state=checked]:text-primary
              border border-gray-700"
            />
          </div>
        </div>
        <div className="py-1 flex gap-2 w-full  items-center justify-center">
          <div className="w-full">
            <Label className="uppercase text-xs font-medium ">
              SET EXPIRATION
            </Label>
            <Input
              disabled={!checked}
              {...register("expiresIn.value", {
                valueAsNumber: true,
              })}
              className="py-2.5 text-lg h-auto border-gray-700"
              placeholder="30"
            />
          </div>
          <div className=" h-full">
            <Label className="uppercase text-xs font-medium opacity-0">
              SET DATE
            </Label>
            <Select
              value={watch("expiresIn.units")}
              // eslint-disable-next-line  @typescript-eslint/no-explicit-any
              onValueChange={(value: any) => {
                if (ExpirationUnitEnums.includes(value)) {
                  setValue("expiresIn.units", value);
                }
              }}
              defaultValue="days"
              disabled={!checked}
            >
              <SelectTrigger className="w-[95px] text-base h-auto py-2 border-gray-700">
                <SelectValue placeholder="Days" />
              </SelectTrigger>
              <SelectContent
                align="center"
                className="flex px-2 min-w-full  items-center justify-center   text-center bg-buu-opacity-100"
              >
                <SelectItem
                  hideIndicator
                  className="border-none  text-sm focus:bg-buu-secondary   flex items-center justify-center pl-4 pr-4 text-center  mx-auto"
                  value="months"
                >
                  Months
                </SelectItem>
                <SelectItem
                  hideIndicator
                  className="border-none text-sm focus:bg-buu-secondary flex items-center justify-center pl-4 pr-4 text-center  mx-auto "
                  value="weeks"
                >
                  Weeks
                </SelectItem>
                <SelectItem
                  hideIndicator
                  className="border-none text-sm focus:bg-buu-secondary flex items-center justify-center pl-4 pr-4 text-center  mx-auto"
                  value="days"
                >
                  Days
                </SelectItem>
                <SelectItem
                  hideIndicator
                  className="border-none text-sm focus:bg-buu-secondary flex items-center justify-center pl-4 pr-4 text-center  mx-auto"
                  value="hours"
                >
                  Hours
                </SelectItem>
                <SelectItem
                  hideIndicator
                  className="border-none text-sm focus:bg-buu-secondary flex items-center justify-center pl-4 pr-4 text-center  mx-auto"
                  value="minutes"
                >
                  Minutes
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="w-full mt-4">
          <Button className="w-full" size={"special"}>
            <div className="">
              <MagicPenIcon className="fill-black" />
            </div>
            <p>Generate</p>
          </Button>
        </div>
      </div>
    </form>
  );
}
