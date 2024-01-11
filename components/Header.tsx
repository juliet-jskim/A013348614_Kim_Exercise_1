import Image from "next/image";

export default function Header() {
    return(
        <>
            <div
                style = {{
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'flex-start', 
                    padding: '20px'
                }}
            >
                <div
                    style = {{
                        display: 'flex', 
                        flexDirection: 'row', 
                        alignItems: 'flex-start', 
                        gap: '5px'
                    }}
                >
                    <Image 
                        src='/images/logo.svg' 
                        alt='logo svg'
                        width={55}
                        height={55}
                        style={{display:'flex', flexDirection:'row', alignContent:'left'}}
                    />
                    <h1 
                    style ={{
                        color:'#2CDBBE',
                        fontFamily: 'Hastro-italic',
                        fontSize: '40px'
                    }}>
                        n Transit
                    </h1>
                </div>
                <div>
                    <p
                    style ={{
                        color:'#2CDBBE',
                        fontFamily: 'Hastro-italic',
                        fontSize: '16px',
                        position: 'relative',
                        top: '-19px',
                        left: '57px'
                    }}>
                        Canada line stations
                    </p>
                </div>
            </div>
        </>
    )
}