import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

export default function UserList() {
  const [users, setUsers] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(
        "https://movie-rating-and-review.onrender.com/admin/user-list",
      );
      const userData = await res.data;
      setUsers(userData);
    };
    getUsers();
  }, []);

  return (
    <div className="m-3 border ">
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>User Name</Th>
              <Th>Email</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users &&
              users.map((user, index) => (
                <>
                  <Tr key={index}>
                    <Th>{user.firstName} {user.lastName}</Th>
                    <Th>{user.email}</Th>
                    <Th>
                      <button
                        onClick={async () => {
                          const res = await axios.delete(
                            `http://localhost:4600/api/v1/admin/delete-user/${user._id}`
                          );
                          const data = await res.data;
                          console.log(data);
                          if (data.message === "User deleted successfully") {
                            window.location.reload();
                          }
                        }}
                        className="rounded-md bg-red-500 px-2 py-1 text-white"
                      >
                        Remove
                      </button>
                    </Th>
                  </Tr>
                </>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

