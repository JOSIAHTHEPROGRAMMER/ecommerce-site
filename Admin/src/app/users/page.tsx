import { User,columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
  return [
    { id: "f390967", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", fullName: "Erik Allen", email: "ellisjohn@leonard.info", status: "active" },
    { id: "a3560fe", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", fullName: "Joshua Benjamin", email: "phillip13@whitehead-smith.com", status: "inactive" },
    { id: "3fb377e", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", fullName: "Alexandra Montgomery", email: "nyang@cox-leonard.com", status: "active" },
    { id: "f9e8331", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face", fullName: "Jennifer Moreno", email: "jamesjames@brooks-mann.org", status: "active" },
    { id: "cfa703e", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", fullName: "Natalie Harper", email: "thompsonrhonda@anderson-bennett.biz", status: "inactive" },
    { id: "bf605b6", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", fullName: "Hector Johnson", email: "hollybarron@downs.com", status: "active" },
    { id: "64412b8", avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face", fullName: "Jon Kerr", email: "uherrera@gonzalez-gibson.net", status: "inactive" },
    { id: "883c255", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", fullName: "Chelsea Burns", email: "michelle86@hotmail.com", status: "active" },
    { id: "7426aa5", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", fullName: "Jose Byrd", email: "ekelley@morgan.com", status: "active" },
    { id: "025e615", avatar: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=150&h=150&fit=crop&crop=face", fullName: "Kimberly Davis", email: "codyjohnson@bush.biz", status: "inactive" },
    { id: "93c914a", avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face", fullName: "Justin Miller", email: "chloe61@daniels-woodard.org", status: "active" },
    { id: "8329b99", avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face", fullName: "Deborah Brewer", email: "ndalton@hanna-gonzalez.com", status: "active" },
    { id: "f810700", avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face", fullName: "Michelle Harrison", email: "davisjerry@moran.com", status: "inactive" },
    { id: "ee3bbff", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face", fullName: "Rachel Ayers", email: "angela89@jacobs.biz", status: "active" },
    { id: "d1d5a9a", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", fullName: "Anthony Collins", email: "jimjohnson@gmail.com", status: "active" },
    { id: "7739285", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face", fullName: "Ryan Johnson", email: "georgegordon@yahoo.com", status: "inactive" },
    { id: "f3e2914", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", fullName: "Barry Chang", email: "rdavila@todd.net", status: "active" },
    { id: "cf74eab", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face", fullName: "Katherine Warren", email: "martinezmary@fleming-moore.com", status: "inactive" },
    { id: "3284eb8", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face", fullName: "Richard Phillips", email: "nathanbrewer@wyatt.com", status: "active" },
    { id: "76a534f", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face", fullName: "Lynn Carlson", email: "leejason@garcia-hamilton.org", status: "inactive" }
  ];
};
const UsersPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-primary text-black rounded-md">
        <h1 className="font-semibold flex justify-center text-center ">All Users</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default UsersPage;