---
title: Send ESP32 alerts to Telegram
tag: IoT
icon: chip
summary: A Telegram bot is the quickest way to get a push alert from a microcontroller.
sample: false
---

A Telegram bot lets an ESP32 send you a push notification without building a mobile app.

1. Message **@BotFather** on Telegram, send `/newbot` and copy the token it gives you.
2. Send your new bot a message, then look up your chat ID with a bot such as **@myidbot**.
3. In the Arduino IDE, install the _UniversalTelegramBot_ and _ArduinoJson_ libraries, connect the board to Wi-Fi with a `WiFiClientSecure` client, then send a message:

```cpp
bot.sendMessage(CHAT_ID, "Door opened!", "");
```

Call it when a sensor changes and the alert lands on your phone.
