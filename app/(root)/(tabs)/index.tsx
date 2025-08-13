import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="font-rubik-bold text-lg my-10 text-black-300">
        Welcome to PrimeSquare
      </Text>
      <View className="space-y-4">
        <Link href="/sign-in" className="text-primary-300 text-base">
          Sign In
        </Link>
        <Link href="/explore" className="text-primary-300 text-base">
          Explore
        </Link>
        <Link href="/profile" className="text-primary-300 text-base">
          Profile
        </Link>
        <Link href="/properties/1" className="text-primary-300 text-base">
          Property
        </Link>
      </View>
    </View>
  );
}
