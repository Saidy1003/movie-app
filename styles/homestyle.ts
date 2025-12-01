import { StyleSheet } from "react-native";

// Paleta aproximada do Figma fornecido
const BACKGROUND_APP = "#C9BDBD"; // tom acinzentado-rosado
const INPUT_BG = "#6B1A1A"; // bordô escuro dos campos
const BUTTON_PINK = "#F08C8C"; // botão coral/rosa claro
const TEXT_DARK = "#222222ff";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_APP,
    alignItems: "center",
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  text: {
    color: TEXT_DARK,
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
  },

  imageContainer: {
    width: 100,
    height: 100,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
  },

  form: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 4,
    marginTop: 12,
  },
  formItem: {
    paddingHorizontal: 4,
    marginBottom: 18,
    position: "relative",
  },
  input: {
    backgroundColor: INPUT_BG,
    borderRadius: 24,
    height: 48,
    width: "100%",
    paddingLeft: 16,
    color: "#fff",
  },
  icone: {
    position: "absolute",
    top: 40,
    right: 18,
  },

  forgot: {
    color: TEXT_DARK,
    fontSize: 12,
    alignSelf: "flex-end",
    marginTop: 6,
  },

  botao: {
    backgroundColor: BUTTON_PINK,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 8,
    width: 120,
    alignSelf: "center",
  },

  botaoTexto: {
    color: TEXT_DARK,
    fontSize: 14,
    fontWeight: "600",
  },

  divisorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 18,
    justifyContent: "center",
  },
  linha: {
    height: 1,
    flex: 1,
    backgroundColor: "#bfb2b2",
    marginHorizontal: 8,
  },
  divisorTexto: {
    color: "#6d6060",
    fontSize: 12,
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  socialIcon: {
    marginHorizontal: 8,
  },
});

export { styles };

