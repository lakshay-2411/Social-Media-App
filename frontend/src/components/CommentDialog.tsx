import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState } from "react";
import IPostFrontend from "@/interfaces/postInterface";
import { useSelector } from "react-redux";
import Comment from "./Comment";

const CommentDialog: React.FC<{
  showDialog: boolean;
  setShowDialog: (value: boolean) => void;
}> = ({ showDialog, setShowDialog }) => {
  const [comment, setComment] = useState("");
  const selectedPost: IPostFrontend = useSelector(
    (state: any) => state.post.selectedPost
  );

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = e.target.value;
    if (inputText.trim()) {
      setComment(inputText);
    } else {
      setComment("");
    }
  };

  const postCommentHandler = async () => {
    alert(comment);
  };

  return (
    <Dialog open={showDialog}>
      <DialogContent
        onInteractOutside={() => setShowDialog(false)}
        className="w-full lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] p-0 flex flex-col"
      >
        <div className="flex flex-1">
          <div className="w-1/2">
            <img
              className="rounded-l-lg w-full h-full aspect-square object-cover"
              src={selectedPost.image}
              alt="post_image"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-between">
            <div className="flex items-center justify-between p-4">
              <div className="flex gap-3 items-center">
                <Link to="">
                  <Avatar>
                    <AvatarImage src={selectedPost?.author?.profilePicture} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </Link>
                <div>
                  <Link className="font-semibold text-xs" to="">
                    {selectedPost.author?.username}
                  </Link>
                  {/* <span className="text-gray-600 text-sm">Bio here...</span> */}
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <MoreHorizontal className="cursor-pointer" />
                </DialogTrigger>
                <DialogContent className="flex flex-col items-center text-sm text-center">
                  <div className="cursor-pointer w-full text-[#ED4956] font-bold">
                    Unfollow
                  </div>
                  <div className="cursor-pointer w-full">Add to favourites</div>
                </DialogContent>
              </Dialog>
            </div>
            <hr />
            <div className="flex-1 overflow-y-auto text-sm max-h-96 p-4">
              {selectedPost.comments.map((comment) => (
                <Comment key={comment._id} comment={comment} />
              ))}
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Add comment..."
                  value={comment}
                  onChange={handleComment}
                  className="w-full outline-none border border-gray-300 p-2 rounded"
                />
                <Button
                  disabled={!comment.trim()}
                  onClick={postCommentHandler}
                  variant="outline"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommentDialog;
