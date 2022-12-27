export const AppwriteBackend = {
  clientEndpoint: process.env.REACT_APP_APPWRITE_CLIENT_ENDPOINT,
  projectId: process.env.REACT_APP_APPWRITE_PROJECT_ID,
  databaseId: process.env.REACT_APP_APPWRITE_DATABASE_ID,
  brandCollectionId: process.env.REACT_APP_APPWRITE_BRAND_COLLECTION_ID,
  storeCollectionId: process.env.REACT_APP_APPWRITE_STORE_COLLECTION_ID,
  productCollectionId: process.env.REACT_APP_APPWRITE_PRODUCT_COLLECTION_ID,
  productDataForAnalysisAndVerificationCollectionId:
    process.env
      .REACT_APP_APPWRITE_PRODUCT_DATA_FOR_ANALYSIS_AND_VERIFICATION_COLLECTION_ID,
  brandImagesBucketId: process.env.REACT_APP_APPWRITE_BRAND_IMAGES_BUCKET_ID,
  storeImagesBucketId: process.env.REACT_APP_APPWRITE_STORE_IMAGES_BUCKET_ID,
  productImagesBucketId:
    process.env.REACT_APP_APPWRITE_PRODUCT_IMAGES_BUCKET_ID,
};
