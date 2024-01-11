import {MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Header from './Header'

const icon = L.icon ({ iconUrl: "/images/map-icon.svg" })

const polyLine:[number, number][] = [
    [49.28615486403128, -123.11154792871443], //waterfront
    [49.282658137149426, -123.11860197385731], // vancouver city centre
    [49.27464307040649, -123.12191601803659], // yaletown-roundhouse
    [49.26667299031823, -123.11555562967925], //olympic village

    [49.262871917333385, -123.11425096549864], //broadway city hall
    [49.2493547543243, -123.11577117200862], //king edward 
    [49.233323408894556, -123.11677084872503], //oakridge - 41st
    [49.22640474513121, -123.11595918550255], //langara - 49th

    [49.20981015261487, -123.11690198550343], //marine drive
    [49.19566829212829, -123.1258705995363] //bridgeport 
]

const multiPolyLine:[number, number][][] =[
    //Bridgeport to YVR airport
    [   
        [49.19566829212829, -123.1258705995363], //bridgeport
        [49.196835511221515, -123.146259629683], //templeton
        [49.193165265513024, -123.15792218929766], //sea island
        [49.194376778159494, -123.1781975133994] //yvr airport
    ],

    //Bridgeport to Richmond-Brighouse
    [
        [49.19566829212829, -123.1258705995363], //bridgeport
        [49.18415081433682, -123.1364489315342], //
        [49.17494095145259, -123.13634582968405],
        [49.16821555554378, -123.13627797386332]
    ],
]



const blueOptions = { color: "teal" }

const center:[number, number] = [ 49.246292, -123.116226]

const Map = () => {
    return(
        <>
        <MapContainer
            style = {{height: '85vh'}}
            center={[ 49.246292, -123.116226]} zoom={14} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/juliet-jskim/A013348614_Kim_Exercise_1">By Juliet Kim</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            <Marker position={[49.28615486403128, -123.11154792871443]} icon={icon}>
                <Popup>
                    Waterfront Station
                </Popup>
            </Marker>
            <Marker position={[49.282658137149426, -123.11860197385731]} icon={icon}>
                <Popup>
                    Vancouver City Centre Station
                </Popup>
            </Marker>
            <Marker position={[49.27464307040649, -123.12191601803659]} icon={icon}>
                <Popup>
                    Yaletown-Roundhouse Station
                </Popup>
            </Marker>
            <Marker position={[49.26667299031823, -123.11555562967925]} icon={icon}>
                <Popup>
                    Olympic Village Station
                </Popup>
            </Marker>
            <Marker position={[49.262871917333385, -123.11425096549864]} icon={icon}>
                <Popup>
                    Broadway City Hall Station
                </Popup>
            </Marker>
            <Marker position={[49.2493547543243, -123.11577117200862]} icon={icon}>
                <Popup>
                    King Edward Station
                </Popup>
            </Marker>
            <Marker position={[49.233323408894556, -123.11677084872503]} icon={icon}>
                <Popup>   
                    Oakridge - 41st Avenue Station
                </Popup>
            </Marker>
            <Marker position={[49.22640474513121, -123.11595918550255]} icon={icon}>
                <Popup>
                    Langara – 49th Avenue Station
                </Popup>
            </Marker>
            <Marker position={ [49.20981015261487, -123.11690198550343]} icon={icon}>
                <Popup>
                    Marine Drive Station
                </Popup>
            </Marker>

            {/** MultiPolyLine 1 */}
            <Marker position={[49.19566829212829, -123.1258705995363]} icon={icon}>
                <Popup>
                    Bridgeport Station
                </Popup>
            </Marker>

            <Marker position={[49.196835511221515, -123.146259629683]} icon={icon}>
                <Popup>
                    Templeton Station 
                </Popup>
            </Marker>
            <Marker position={[49.193165265513024, -123.15792218929766]} icon={icon}>
                <Popup>
                    Sea Island Station 
                </Popup>
            </Marker>
            <Marker position={[49.194376778159494, -123.1781975133994]} icon={icon}>
                <Popup>
                    YVR-Airport Station
                </Popup>
            </Marker>

            {/** MultiPolyLine 2*/}
            <Marker position={[49.18415081433682, -123.1364489315342]} icon={icon}>
                <Popup>
                    Aberdeen Station
                </Popup>
            </Marker>
            <Marker position={[49.17494095145259, -123.13634582968405]} icon={icon}>
                <Popup>
                    Lansdowne Station
                </Popup>
            </Marker>
            <Marker position={[49.16821555554378, -123.13627797386332]} icon={icon}>
                <Popup>
                    Richmond-Brighouse Station
                </Popup>
            </Marker>

            <Polyline pathOptions={blueOptions} positions={polyLine}/>
            <Polyline pathOptions={blueOptions} positions={multiPolyLine}/>

        </MapContainer>
        </>
    )
        
}

export default Map;