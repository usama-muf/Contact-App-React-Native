import React, {useEffect} from 'react'
import {createContactsTable,deleteContact,listAllContacts, listContactsBySearchedName} from './src/database/db-service'
import { Alert } from 'react-native'; // Import Alert here
import AppNavigator from './src/navigation/AppNavigator'


const App = () => {
  useEffect(() => {
    createContactsTable();
    // const result = deleteContact(12);

    // createUser();
    // const fetchData = async () => {
    //   try {
    //     const data = await listAllContacts();
    //     console.log("list all contacts data: ");
    //     data.map((d: any)=> console.log(d));
    //   } catch (error) {
    //     console.error("Error retrieving contacts: ", error);
    //   }
    // };

    // fetchData();
  }, []);

  return (
    <AppNavigator />
  );
};

export default App;