import container from "../storageContainer.js";

export const getHandler = async (req, res) => {
  try {
    const { name } = req.params;
    const blob = container.getBlobClient(`${name}.mp4`);
    const properties = await blob.getProperties();
    const content = await blob.download();
    res.writeHead(200, {
      "Content-Type": "video/mp4",
      "content-Length": properties.contentLength,
    });
    content.readableStreamBody.pipe(res);
  } catch (e) {
    console.error(e);
    res.sendStatus(404);
  }
};
