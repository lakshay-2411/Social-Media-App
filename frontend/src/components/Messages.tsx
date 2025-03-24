import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Messages = () => {
  const { selectedUser } = useSelector((state: RootState) => state.auth);
  return (
    <div className="overflow-y-auto flex-1 p-4">
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <Avatar className="h-20 w-20">
            <AvatarImage
              src={selectedUser?.profilePicture}
              alt="profileImage"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>{selectedUser?.username}</span>
          <Link to={`/profile/${selectedUser?._id}`}>
            <Button variant={"secondary"} className="h-8 my-2">
              View Profile
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {[1, 2, 3, 4, 5].map((msg) => {
          return (
            <div className={`flex `}>
              <div>{msg}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
