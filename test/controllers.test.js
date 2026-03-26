import { jest } from "@jest/globals";

describe("video resource", () => {
  describe("getHandler", () => {
    it("mock test", async () => {
      const mockGetProperties = jest.fn(async () => ({ contentLength: "1" }));

      const mockBodyPipe = jest.fn();
      const mockDownload = jest.fn(async () => ({
        readableStreamBody: { pipe: mockBodyPipe },
      }));

      jest.unstable_mockModule("../src/storageContainer.js", () => ({
        default: {
          getBlobClient: () => ({
            getProperties: mockGetProperties,
            download: mockDownload,
          }),
        },
      }));

      const { getHandler } = await import("../src/video/controllers");

      const mockResWriteHead = jest.fn();

      await getHandler(
        { params: { name: "name" } },
        { writeHead: mockResWriteHead },
      );

      expect(mockGetProperties).toHaveBeenCalled();
      expect(mockDownload).toHaveBeenCalled();
      expect(mockResWriteHead).toHaveBeenCalled();
      expect(mockBodyPipe).toHaveBeenCalled();

      jest.unstable_unmockModule("../src/storageContainer.js");
    });
  });
});
