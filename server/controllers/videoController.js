const Video = require("../models/videoSchem");

exports.createVideo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!req.files || !req.files.video || !req.files.thumbnail) {
      return res.status(400).json({ error: "Video and Thumbnail are required." });
    }

    const videoFile = req.files.video[0];
    const thumbnailFile = req.files.thumbnail[0];

    const video = await Video.create({
      title,
      description,
      videoUrl: `/uploads/${videoFile.filename}`,
      thumbnail: `/uploads/${thumbnailFile.filename}`,
      channel: {
        id: req.user?.id || null,  // safe optional chaining
        name: req.user?.name || "Guest",
        avatar: req.user?.avatar || "https://i.pravatar.cc/150",
      },
    });

    res.json(video);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
