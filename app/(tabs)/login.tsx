import { styles } from "@/styles/homestyle";
import Entypo from '@expo/vector-icons/Entypo';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const loginImage = require("../../assets/images/Profile.png");

export default function LoginScreen() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    // Navegação simples sem autenticação: vai para a Home
    router.push('/home' as any);
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity style={{ alignSelf: 'flex-start', marginLeft: 16, marginTop: 8 }} onPress={() => router.back()}>
        <Entypo name="chevron-left" size={28} color="#111" />
      </TouchableOpacity>

      <View style={[styles.imageContainer, { marginBottom: 20 }]}>
        <Image 
          style={styles.image}
          source={loginImage}
        />
      </View>

      <Text style={styles.text}>Login</Text>

      <View style={styles.form}>
        <View style={styles.formItem}>
          <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" placeholderTextColor="#fff" />
        </View>

        <View style={styles.formItem}>
          <Text style={styles.text}>Senha</Text>
            <TextInput secureTextEntry={!showPassword} style={styles.input} placeholder="Digite sua senha" placeholderTextColor="#fff" />
          <TouchableOpacity onPress={() => setShowPassword(p => !p)} style={styles.icone}>
            <Entypo name="eye" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.forgot}>Esqueci senha</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.botaoTexto}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.divisorContainer}>
        <View style={styles.linha} />
        <Text style={styles.divisorTexto}>Entrar com</Text>
        <View style={styles.linha} />
      </View>

      <View style={styles.socialContainer}>
        <Entypo style={styles.socialIcon} name="facebook" size={28} color="#3b5998" />
        <Entypo style={styles.socialIcon} name="twitter" size={28} color="#1DA1F2" />
        <Entypo style={styles.socialIcon} name="share" size={28} color="#25D366" />
        <Entypo style={styles.socialIcon} name="instagram" size={28} color="#C13584" />
      </View>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => router.push('/' as any) }>
        <Text style={{ textAlign: 'center', color: '#222' }}>Ainda não tenho uma conta</Text>
      </TouchableOpacity>

    </View>
  );
}
