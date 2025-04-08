import ApiKeyHeaderIcon from "@/assets/icons/api-key-header-icon";
import APIKeyTable from "@/components/api-key/api-key-table";
import CreateAPIDialog from "@/components/api-key/create-api-dialog";
export default function ApiKeyPage() {
  return (
    <div>
      <div className="w-10 mx-auto h-10 mt-10">
        <ApiKeyHeaderIcon />
      </div>
      <div className="flex items-center justify-center gap-6 flex-col pt-9">
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-xs lg:text-base">Connect to MCP servers</p>
          <h2 className="grayish-text-gradient font-medium text-2xl lg:text-5xl tracking-tighter">
            Your API Keys{" "}
          </h2>
        </div>
        <CreateAPIDialog />
      </div>
      <div className="flex   items-center flex-col justify-center pt-10 pb-2">
        <APIKeyTable />
      </div>
    </div>
  );
}
