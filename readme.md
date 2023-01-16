Projeto com o intuito de aprender a utilizar o onesignal e o expo-linking para criar notificações push e deeplinks no dispositivo do usuário.

## Instalar o projeto
`npm i`

## instalar o onesignal plugin
`npx expo install onesignal-expo-plugin`

## configurar o app.json
`
  "plugins": [
      ["onesignal-expo-plugin",
      {
        "mode": "development"
      }]
    ]
`

## instalar o onesignal
`npm install --save react-native-onesignal`

## Adicionar o id do onesignal do app.tsx
`OneSignal.setAppId('');`

## Adicionar schema no app.json
`"scheme": "shoesapp"`

## executar o deeplink
`npx uri-scheme open shoesapp://192.168.1.5:8081 --android`
`npx uri-scheme open shoesapp://details/7 --android`

## instalar o expo-linking
`npx expo install expo-linking`