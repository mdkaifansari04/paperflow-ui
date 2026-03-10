import { CrowdCanvas } from "@/components/ui/skiper-ui/skiper39";

const CustomCrowd = () => {
  return (
    <div className="relative w-full pt-24">
      <CrowdCanvas
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png"
        rows={15}
        cols={7}
      />
    </div>
  );
};

export default CustomCrowd;
