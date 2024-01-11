import dynamic from "next/dynamic"
import Head from "next/head";
import Header from "../../components/Header";

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});

//reason for dynamic is becasue the map will render on the client side

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/logo.svg"></link>
      </Head>
      <div 
      style={{
        display:'flex', 
        justifyContent:'left', 
        height:'15vh', 
        backgroundColor: 'rgb(227,252,245)',
        paddingTop: '4px',
        paddingLeft:'4px'
        }}>
        <Header/>
      </div>
      <DynamicMap/>
    </>
  )
}
