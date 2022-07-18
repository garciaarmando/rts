import { useState } from "react";

const users = [
  { name: "Minus", age: 7 },
  { name: "Fili", age: 7 },
  { name: "Chipo", age: 9 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");
  //We're saying to TS that the value user could be and object with name and age props or undefined, both at the same time
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find(user => {
      return user.name === name;
    });

    setUser(foundUser);
    setName("");
  };

  return (
    <div>
      <h3>User Search</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>

      <div>
        {/* truthy and falsy validations to avoid the message saying that the value could be undefined */}
        {user && user.name} {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
