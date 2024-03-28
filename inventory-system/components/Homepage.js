// import React from 'react'
// import DisplayProduct from './DisplayProduct';
// import AddProduct from './AddProduct';
// import AddSales from './AddSales';
// import DisplaySales from './DisplaySales';
// import {
//   Box,
//   Container,
//   Tab,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Tabs,
//   Text,
// } from "@chakra-ui/react";

// const Homepage = () => {
//   return (
//     <Container maxW="xl" centerContent>
//       <Box
//         d="flex"
//         justifyContent="center"
//         p={3}
//         bg="gray.700"
//         w="100%"
//         m="40px 0 15px 0"
//         borderRadius="lg"
//         borderWidth="1px"
//       >
       
//       </Box>
//       <Box bg="gray.700" w="100%" p={4} borderRadius="lg" borderWidth="1px">
//         <Tabs isFitted variant="soft-rounded" >
//           <TabList mb="1em" >
//             <Tab textColor={"azure"} opacity={0.7}> Purchase Details</Tab>
//             <Tab textColor={"azure"} opacity={0.7}> Sales Details</Tab>
//           </TabList>
//           <TabPanels>
//                       <TabPanel>
//                           <AddProduct/>
//                           <DisplayProduct />
                          
//             </TabPanel>
//             <TabPanel>
//                           <AddSales />
//                           <DisplaySales/>
//             </TabPanel>
//           </TabPanels>
//         </Tabs>
//       </Box>
//     </Container>
//   )
// }

// export default Homepage
import React, { useState } from 'react';
import DisplayProduct from './DisplayProduct';
import AddProduct from './AddProduct';
import AddSales from './AddSales';
import DisplaySales from './DisplaySales';

const Homepage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
            <div className="flex flex-col text-center w-full mb-20">
                   
        <ul className="flex" role="tablist">
          <li>
            <button
              className={`sm:text-4xl text-3xl font-small title-font mb-2 text-gray-900 text-azure opacity-70 focus:outline-none ${activeTab === 0 ? 'border-b-2 border-azure' : ''}`}
              role="tab"
              onClick={() => setActiveTab(0)}
            >
              Purchase Details
            </button>
          </li>
              <li className="ml-4">
                 
            <button
              className={`sm:text-4xl text-3xl font-small title-font mb-2 text-gray-900 text-azure opacity-70 focus:outline-none ${activeTab === 1 ? 'border-b-2 border-azure' : ''}`}
              role="tab"
              onClick={() => setActiveTab(1)}
            >
              Sales Details
                      </button>
                      
          </li>
        </ul>
        <div className="mt-4">
          {activeTab === 0 && (
            <div role="tabpanel">
              <AddProduct />
              <DisplayProduct />
            </div>
          )}
          {activeTab === 1 && (
            <div role="tabpanel">
              <AddSales />
              <DisplaySales />
            </div>
          )}
        </div>
      </div>
  );
}

export default Homepage;
