import axios from "axios";
import React, { useEffect, useState } from "react";
import Card, { CardVariant } from "./components/Card";
import List from "./components/List";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <Card
        width='200px'
        height='200px'
        variant={CardVariant.primary}
        onClick={(num) => console.log(num)}
      >
        <button>Click Me!</button>
        <div>Hello</div>
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
};

export default App;
