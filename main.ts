ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("MyWifi", "My pass")
basic.showIcon(IconNames.Yes)
basic.pause(1000)
basic.forever(function () {
    ESP8266_IoT.connectThingSpeak()
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    ESP8266_IoT.setData(
    "12345",
    Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C),
    Environment.octopus_BME280(Environment.BME280_state.BME280_humidity),
    Environment.octopus_BME280(Environment.BME280_state.BME280_pressure)
    )
    ESP8266_IoT.uploadData()
    basic.pause(500)
})
