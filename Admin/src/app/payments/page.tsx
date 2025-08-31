import { Payment,columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<Payment[]> => {
  return [
  { id: "f390967", amount: 5435152881, status: "pending", fullName: "Erik Allen", email: "ellisjohn@leonard.info", userId: "96044" },
  { id: "a3560fe", amount: 6384743547, status: "failed", fullName: "Joshua Benjamin", email: "phillip13@whitehead-smith.com", userId: "14203" },
  { id: "3fb377e", amount: 7501508066, status: "pending", fullName: "Alexandra Montgomery", email: "nyang@cox-leonard.com", userId: "33423" },
  { id: "f9e8331", amount: 7606750890, status: "success", fullName: "Jennifer Moreno", email: "jamesjames@brooks-mann.org", userId: "56359" },
  { id: "cfa703e", amount: 5666448442, status: "success", fullName: "Natalie Harper", email: "thompsonrhonda@anderson-bennett.biz", userId: "40433" },
  { id: "bf605b6", amount: 2328924663, status: "failed", fullName: "Hector Johnson", email: "hollybarron@downs.com", userId: "91689" },
  { id: "64412b8", amount: 7628931395, status: "failed", fullName: "Jon Kerr", email: "uherrera@gonzalez-gibson.net", userId: "91433" },
  { id: "883c255", amount: 2299657184, status: "success", fullName: "Chelsea Burns", email: "michelle86@hotmail.com", userId: "36876" },
  { id: "7426aa5", amount: 2320920813, status: "pending", fullName: "Jose Byrd", email: "ekelley@morgan.com", userId: "54252" },
  { id: "025e615", amount: 4834497899, status: "failed", fullName: "Kimberly Davis", email: "codyjohnson@bush.biz", userId: "57494" },
  { id: "93c914a", amount: 688755018, status: "pending", fullName: "Justin Miller", email: "chloe61@daniels-woodard.org", userId: "95192" },
  { id: "8329b99", amount: 763637860, status: "success", fullName: "Deborah Brewer", email: "ndalton@hanna-gonzalez.com", userId: "37723" },
  { id: "f810700", amount: 1036019713, status: "failed", fullName: "Michelle Harrison", email: "davisjerry@moran.com", userId: "14316" },
  { id: "ee3bbff", amount: 2298408613, status: "success", fullName: "Rachel Ayers", email: "angela89@jacobs.biz", userId: "59930" },
  { id: "d1d5a9a", amount: 5432261197, status: "pending", fullName: "Anthony Collins", email: "jimjohnson@gmail.com", userId: "28415" },
  { id: "7739285", amount: 3352893769, status: "failed", fullName: "Ryan Johnson", email: "georgegordon@yahoo.com", userId: "93021" },
  { id: "f3e2914", amount: 1888768063, status: "success", fullName: "Barry Chang", email: "rdavila@todd.net", userId: "55173" },
  { id: "cf74eab", amount: 736781343, status: "failed", fullName: "Katherine Warren", email: "martinezmary@fleming-moore.com", userId: "51707" },
  { id: "3284eb8", amount: 7325696363, status: "pending", fullName: "Richard Phillips", email: "nathanbrewer@wyatt.com", userId: "88959" },
  { id: "76a534f", amount: 615062735, status: "failed", fullName: "Lynn Carlson", email: "leejason@garcia-hamilton.org", userId: "35431" }
]

};

const PaymentsPage = async () => {
  const data = await getData();
  return (
    <div className="">
      <div className="mb-8 px-4 py-2 bg-primary text-black rounded-md">
        <h1 className="font-semibold flex justify-center text-center ">All Payments</h1>
      </div>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default PaymentsPage;