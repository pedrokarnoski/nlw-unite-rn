import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

type CredentialProps = {
  image?: string;
  onChangeAvatar?: () => void;
};

export function Credential({ image, onChangeAvatar }: CredentialProps) {
  return (
    <View className="w-full self-start items-center">
      <Image
        source={require("@/assets/ticket/band.png")}
        className="w-24 h-52 z-10"
      />

      <View className="bg-black/20 self-stretch items-center pb-6 border border-white/10 mx-3 rounded-2xl -mt-5">
        <ImageBackground
          source={require("@/assets/ticket/header.png")}
          className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10 overflow-hidden"
        >
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-zinc-50 text-sm font-bold">Unite Summit</Text>
            <Text className="text-zinc-50 text-sm font-bold">#123</Text>
          </View>

          <View className="h-40 w-40 bg-zinc-950 rounded-full" />
        </ImageBackground>

        {image ? (
          <TouchableOpacity onPress={onChangeAvatar}>
            <Image
              source={{ uri: image }}
              className="w-36 h-36 rounded-full -mt-24"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity activeOpacity={0.9} onPress={onChangeAvatar}>
            <View className="w-36 h-36 rounded-full -mt-24 bg-zinc-500 items-center justify-center">
              <MaterialCommunityIcons
                name="camera-outline"
                color={colors.green[500]}
                size={32}
              />
            </View>
          </TouchableOpacity>
        )}

        <Text className="font-bold text-2xl text-zinc-50 mt-4">
          Pedro Karnoski
        </Text>
        <Text className="font-regular text-base text-zinc-300 mb-4">
          pedrokarnoski@gmail.com
        </Text>

        <Image
          source={require("@/assets/ticket/qrcode.png")}
          className="w-32 h-32"
        />

        <TouchableOpacity activeOpacity={0.7}>
          <Text className="font-body text-orange-500 text-sm mt-6">
            Ampliar QRCode
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
