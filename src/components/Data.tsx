// import getFormFields from "@/api/magento/quotes/get-form-fields";
// import getProductAttributesViaGroup from "@/utils/magento/quotes/get-product-attributes-via-group";

// async function Data() {

//     const formdata = async () => {
//         let formFieldsData: any;
//         await Promise.all([
//             getFormFields("Body Picks", "1")
//         ])
//         .then(([fetchedFormFieldsData]) => {
//             formFieldsData = fetchedFormFieldsData;
//         })
//         .catch((error) => {
//             console.error("Error fetching data", error);
//         })
//         // console.log("formFieldsData", formFieldsData.data.GetFormFields.bodyAttributes);
//     }

//     const data2 = async () => {
//      const productAttViaGrp = await getProductAttributesViaGroup(
//             "TCM-88PG-N7",
//             "Global Options",
//             "1"
//           );
//         //   console.log("productAttViaGrp", productAttViaGrp.data.GetProductAttributesViaGroup.groupAttributes);
//     }

// const repsonse = formdata();
// const response2 = data2();
//     return (
//       <div>
//         check123
//       </div>
//     )

//   }

//   export default Data;

import { IoMdAdd } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";

export default function Data() {
  return (
    <div className="mb-10">
      <div className="w-[90%] mx-auto h-screen border border-gray-300">iframe</div>
      <div className="bg-[#E5E5E5] w-[90%] mx-auto border border-gray-300">
        <div className="flex space-x-10 justify-center">
          <div>
            <div>
              <span className="font-bold">
                Add Product/Configuration to Quote{" "}
              </span>
              Adds your designed product/configuration to your quote.
            </div>
            <div>
              <span className="font-bold">View Quotes </span>
              See all your saved/completed quotes.
            </div>
            <div>
              <span className="font-bold">Reset the Configurator </span>
              Reset the Configurator Clears the configurator and so you can
              start from scratch.
            </div>
          </div>
          <div>
            <div className="flex space-x-2">
              <div>
                <button className="flex gap-2 bg-[#FF9E8C] p-3">
                  <IoMdAdd className="h-5 w-5" />
                  <div>Add Product/Configuration to Quote</div>
                </button>
              </div>
              <div>
                <button className="flex gap-2 bg-[#FF9E8C] p-3">
                  <GrPowerReset className="h-5 w-5" />
                  <div>Reset the Configurator</div>
                </button>
              </div>
            </div>
            <div>
              <div>
              <form action="/action_page.php">
  <div><label className="font-bold">Change Configurator:</label></div>
  <select id="configurator" name="configurator">
    <option value="Herc Door Entrances1">Herc Door Entrances1</option>
    <option value="Herc Door Entrances2">Herc Door Entrances2</option>
    <option value="Herc Door Entrances3">Herc Door Entrances3</option>
    <option value="Herc Door Entrances4">Herc Door Entrances4</option>
  </select>
  {/* <div><input type="submit" /></div> */}
</form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
