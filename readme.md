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