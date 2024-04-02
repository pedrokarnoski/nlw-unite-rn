import { useState } from "react";
import {
  StatusBar,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";

import { colors } from "@/styles/colors";

import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
import { Button } from "@/components/button";

export default function Ticket() {
  const [image, setImage] = useState("");

  async function handleSelectImage() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (result.assets) {
        setImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Foto", "Não foi possível selecionar a imagem.");
    }
  }

  return (
    <View className="flex-1 bg-green-500">
      <StatusBar barStyle="light-content" />

      <Header title="Minha credencial" />

      <ScrollView
        className="-mt-28 -z-10"
        contentContainerClassName="px-8 pb-8"
        showsVerticalScrollIndicator={false}
      >
        <Credential image={image} onChangeAvatar={handleSelectImage} />

        <MaterialCommunityIcons
          name="chevron-double-down"
          color={colors.gray[300]}
          size={24}
          className="self-center my-6"
        />

        <Text className="text-white font-bold text-2xl mt-4">
          Compartilhar credencial
        </Text>

        <Text className="text-white font-regular text-base mb-6">
          Mostre ao mundo que você vai participar do Unite Summit!
        </Text>

        <Button title="Compartilhar" />

        <TouchableOpacity activeOpacity={0.7}>
          <Text className="text-base text-white font-bold text-center mt-10">
            Remover ingresso
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
