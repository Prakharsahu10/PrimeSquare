import { Property } from "@/types";
import { openAuthSessionAsync } from "expo-web-browser";
import {
  Account,
  Avatars,
  Client,
  Databases,
  OAuthProvider,
  Query,
} from "react-native-appwrite";

export const config = {
  platform: "com.primesquare.app",
  endpoint:
    process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1",
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID || "",
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID || "",
  galleriesCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID || "",
  reviewsCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID || "",
  agentsCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID || "",
  propertiesCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID || "",
};

export const client = new Client();

if (config.endpoint && config.projectId) {
  client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId)
    .setPlatform(config.platform);
}

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);

export async function login() {
  try {
    // Try multiple redirect URIs for better compatibility
    const possibleRedirectURIs = [
      "primesquare://auth",
      "primesquare://",
      "primesquare://oauth",
    ];

    let loginSuccess = false;

    for (const redirectUri of possibleRedirectURIs) {
      try {
        console.log("Trying Redirect URI:", redirectUri);

        const response = await account.createOAuth2Token(
          OAuthProvider.Google,
          redirectUri
        );
        if (!response) continue;

        const browserResult = await openAuthSessionAsync(
          response.toString(),
          redirectUri
        );

        if (browserResult.type === "dismiss") {
          console.log("User dismissed the login");
          return false;
        }

        if (browserResult.type !== "success") {
          console.error("Browser result:", browserResult);
          continue;
        }

        const url = new URL(browserResult.url);
        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();
        if (!secret || !userId) {
          console.error(
            "Missing parameters in callback URL:",
            browserResult.url
          );
          continue;
        }

        const session = await account.createSession(userId, secret);
        if (session) {
          console.log("Login successful with URI:", redirectUri);
          loginSuccess = true;
          break;
        }
      } catch (uriError) {
        console.log(`Failed with ${redirectUri}:`, uriError);
        continue;
      }
    }

    return loginSuccess;
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
}
export async function logout() {
  try {
    const result = await account.deleteSession("current");
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getCurrentUser() {
  try {
    const result = await account.get();
    if (result.$id) {
      const userAvatar = avatar.getInitials(result.name);

      return {
        ...result,
        avatar: userAvatar.toString(),
      };
    }

    return null;
  } catch (error: any) {
    // Handle specific error cases
    if (error?.code === 401 || error?.type === "general_unauthorized_scope") {
      console.log("User not authenticated");
      return null;
    }
    console.log("Error getting current user:", error);
    return null;
  }
}

export async function getLatestProperties(): Promise<Property[]> {
  try {
    if (!config.databaseId || !config.propertiesCollectionId) {
      console.warn("Database configuration missing");
      return [];
    }

    const result = await databases.listDocuments(
      config.databaseId,
      config.propertiesCollectionId,
      [Query.orderAsc("$createdAt"), Query.limit(5)]
    );

    return result.documents as unknown as Property[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProperties({
  filter,
  query,
  limit,
}: {
  filter: string;
  query: string;
  limit?: number;
}): Promise<Property[]> {
  try {
    if (!config.databaseId || !config.propertiesCollectionId) {
      console.warn("Database configuration missing");
      return [];
    }

    const buildQuery = [Query.orderDesc("$createdAt")];

    if (filter && filter !== "All")
      buildQuery.push(Query.equal("type", filter));

    if (query)
      buildQuery.push(
        Query.or([
          Query.search("name", query),
          Query.search("address", query),
          Query.search("type", query),
        ])
      );

    if (limit) buildQuery.push(Query.limit(limit));

    const result = await databases.listDocuments(
      config.databaseId,
      config.propertiesCollectionId,
      buildQuery
    );

    return result.documents as unknown as Property[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

// write function to get property by id
export async function getPropertyById({
  id,
}: {
  id: string;
}): Promise<Property | null> {
  try {
    if (!config.databaseId || !config.propertiesCollectionId) {
      console.warn("Database configuration missing");
      return null;
    }

    const result = await databases.getDocument(
      config.databaseId,
      config.propertiesCollectionId,
      id
    );
    return result as unknown as Property;
  } catch (error) {
    console.error(error);
    return null;
  }
}
