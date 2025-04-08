"use client";
import ApiKeyHeaderIcon from "@/assets/icons/api-key-header-icon";
import TrashIcon from "@/assets/icons/trash-icon";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppDispatch } from "@/hooks/redux";
import { useRetrieveApikeys } from "@/hooks/use-api-key";
import {
  setDeleteApiKeyData,
  setIsDeleteModalOpen,
} from "@/lib/redux/features/api-key";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Pill from "../elements/pill";
import Bounded from "../ui/Bounded";
import DeleteApiKeyModal from "./delete-api-key-modal";
import StatusPill from "./status-pill";

export default function APIKeyTable() {
  const { data } = useRetrieveApikeys();
  const dispatch = useAppDispatch();
  // Custom function to intelligently truncate API key
  const formatApiKey = (key: string) => {
    if (!key) return "";
    // If key is longer than 20 characters, show more meaningful truncation
    if (key.length > 20) {
      return `${key.slice(0, 10)}...${key.slice(-8)}`;
    }
    return key;
  };

  return (
    <Bounded className="w-full max-w-max">
      <div
        style={{
          overflow: "hidden",
        }}
        className={cn(
          "w-full bg-api-key-table-radius overflow-x-auto mt-8 border  border-muted-foreground/10",
        )}
      >
        <div className="">
          <div className="max-h-[40vh] relative w-full overflow-scroll scrollbar-w-hidden scrollbar-thumb-orange scrollbar-thumb-rounded">
            <Table className="w-full min-w-[750px]">
              <TableHeader className="h-auto bg-api-key-table-header  sticky top-0 left-2 z-10">
                <TableRow className="hover:bg-muted/0 h-auto !border-b-0 bg-clip-border !border-0 rounded-t-xl">
                  <TableHead className="min-w-[100px] px-4 text-xs h-auto py-4 text-white/60 font-semibold uppercase w-1/4">
                    name
                  </TableHead>
                  <TableHead className="min-w-[150px] text-xs text-white/60 font-semibold uppercase w-1/4">
                    key snippet
                  </TableHead>
                  <TableHead className="min-w-[150px] text-xs text-white/60 font-semibold uppercase w-1/4 whitespace-nowrap">
                    creation date
                  </TableHead>
                  <TableHead className="min-w-[150px] text-xs text-white/60 font-semibold uppercase w-1/4">
                    status
                  </TableHead>
                  {/* <TableHead className="min-w-[100px] text-xs text-white/60 font-semibold uppercase w-1/4">
                    actions
                  </TableHead> */}
                  <TableHead className="max-w-[80px]   text-xs text-white/60 font-semibold uppercase">
                    {/* Empty header for trash icon */}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* .sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt)) */}
                {/* {data && data.items && data.items.length ? ( */}
                {data && data.items && data.items.length
                  ? data?.items?.map((item, index) => {
                      return (
                        <TableRow
                          key={`${item._id}`}
                          className="h-auto border-[#1c202788]"
                        >
                          <TableCell className="h-auto py-7 ">
                            <div className="flex items-center gap-1 pl-2 ">
                              <Pill className="text-[10px] truncate text-white/40 font-medium py-0 px-2">
                                {index.toLocaleString()}
                              </Pill>
                              {item?.name}
                            </div>
                          </TableCell>
                          <TableCell className="text-muted-foreground/40 overflow-ellipsis font-medium whitespace-nowrap">
                            {formatApiKey(item?.key)}
                          </TableCell>

                          <TableCell className="text- font-medium text-muted-foreground/40 whitespace-nowrap">
                            <p className="w-full line-clamp-1">
                              {format(
                                new Date(item.createdAt),
                                "MMMM dd, yyyy hh:mm:a",
                              )}
                            </p>
                          </TableCell>
                          <TableCell className="text- ">
                            <StatusPill
                              createdAt={item.createdAt}
                              expiresAt={item.expiresAt}
                            />
                          </TableCell>
                          {/* <TableCell className="w-full">
                            <Button variant={"special"} size={"special"}>
                              View Details
                            </Button>
                          </TableCell> */}
                          <TableCell className="w-[80px] text-right pr-4">
                            <button
                              onClick={() => {
                                dispatch(
                                  setDeleteApiKeyData({
                                    id: item._id,
                                    key: item.key,
                                    name: item.name,
                                  }),
                                );
                                dispatch(setIsDeleteModalOpen(true));
                              }}
                              className="ml-auto w-5 h-5 opacity-40"
                            >
                              <TrashIcon />
                            </button>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  : null}
              </TableBody>
            </Table>
            <div
              className={cn(" hidden items-center justify-center w-full ", {
                flex: !data || !data.items,
              })}
            >
              <div className="flex flex-col items-center gap-2 py-4">
                <div className="w-8 h-8">
                  <ApiKeyHeaderIcon fill="#78DBFF" />
                </div>
                <h4 className="text-xl font-medium">No API keys found</h4>
              </div>
            </div>
          </div>
          {/* ) : null} */}
        </div>
        <DeleteApiKeyModal />
      </div>
    </Bounded>
  );
}
