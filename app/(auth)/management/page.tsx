import RouteTitle from "@/components/management/RouteTitle";
import SectionCard from "@/components/management/section-card";
import Temporary from "@/components/management/temporary";

const DashboardManagement = () => {
  return (
    <>
      <RouteTitle text="Dashboard" />
      <SectionCard className="text-center">
        <b>
          <h1 className="text-3xl">Dashboard Management</h1>
        </b>{" "}
        Coming soon...
        <Temporary />
      </SectionCard>
    </>
  );
};

export default DashboardManagement;
