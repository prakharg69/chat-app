import cloudinary from "../lib/cloudnary.js";
import Message from "../modules/message-modle.js";
import User from "../modules/user-module.js";

export const getUserforSidebar = async (req, res) => {
  try {
    const logedInUserId = req.user._id;
    const filterUser = await User.find({ _id: { $ne: logedInUserId } }).select(
      "-password"
    );
    res.status(200).json(filterUser);
  } catch (error) {
    console.error("Sidebar user fetch error:", error.message);
    res.status(500).json({ message: "Failed to fetch users for sidebar." });
  }
};
export const getMessage = async (req, res) => {
  try {
    const { id: userToChat } = req.params;
    const myId = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderId: myId, receiverId: userToChat },
        { senderId: userToChat, receiverId: myId },
      ],
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Sidebar user fetch error:", error.message);
    res.status(500).json({ message: "Failed to fetch users for sidebar." });
  }
};export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      const uploadImage = await cloudinary.uploader.upload(image);
      imageUrl = uploadImage.secure_url;
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await newMessage.save();
    res.status(200).json(newMessage);

  } catch (error) {
    console.error("Message send error:", error.message);
    res.status(500).json({ message: "Failed to send message." });
  }
};
