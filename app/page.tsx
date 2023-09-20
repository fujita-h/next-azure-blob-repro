import {
  BlobServiceClient,
} from '@azure/storage-blob';

// need to set these in your environment to any valid Azure Storage account
const account = process.env.STORAGE_ACCOUNT_NAME!;
const accountKey = process.env.STORAGE_ACCOUNT_KEY!;
const connectionString = `DefaultEndpointsProtocol=https;AccountName=${account};AccountKey=${accountKey};EndpointSuffix=core.windows.net`;

const getContainerCount = async () => {
  console.log('calling azure storage');
  const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
  const containers = blobServiceClient.listContainers();
  let count = 0;
  for await (const _ of containers) {
      count++;
  }
  return count;
}

export const dynamic = 'force-dynamic'; // don't do SSG

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const count = await getContainerCount();
  return <>{count}</>;
}
