import {
  StorageSharedKeyCredential,
  BlobServiceClient,
} from "@azure/storage-blob";

const storageAccountName = process.env.STORAGE_ACCOUNT_NAME;

if (!storageAccountName)
  throw new Error("Missing environment variable STORAGE_ACCOUNT_NAME!");

const storageAccessKey = process.env.STORAGE_ACCESS_KEY;

if (!storageAccessKey)
  throw new Error("Missing environment variable STORAGE_ACCESS_KEY!");

const credential = new StorageSharedKeyCredential(
  storageAccountName,
  storageAccessKey,
);

const service = new BlobServiceClient(
  `https://${storageAccountName}.blob.core.windows.net`,
  credential,
);

const container = service.getContainerClient("videos");

export default container;
