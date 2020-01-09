// Temperature and Humidity 
FarmDeck_Temperature.queryData(
DHTtype.DHT11,
DigitalPin.P0,
true,
true,
true
)
if (FarmDeck_Temperature.readDataSuccessful()) {
    basic.showString("T: " + ("" + FarmDeck_Temperature.readData(dataType.temperature)).substr(0, 2))
    basic.showString("H: " + ("" + FarmDeck_Temperature.readData(dataType.humidity)).substr(0, 2))
}
// Light intensity 
let Intensity = 0
FarmDeck_LightSensor.SetAddress(BH1750_ADDRESS.A35)
led.plotBarGraph(
100,
100
)
basic.forever(() => {
    Intensity = FarmDeck_LightSensor.getIntensity()
    led.setBrightness(20 + Intensity / 512)
    basic.pause(500)
})

