import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  return (
    <main>
      <AddUser />
      <UserList />
      <ErrorModal />
      {/* display conditionally modal screen */}
    </main>
  );
}

export default App;
