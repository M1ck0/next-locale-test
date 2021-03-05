import Head from 'next/head'
import {useRouter} from "next/router"

const Home = ()=> {
	const router = useRouter()

	console.log(router)

	const setCookie = lang => {
		document.cookie=`NEXT_LOCALE=${lang}`
	}

  return (
		<button onClick={() => setCookie('en')}>Change cookie</button>
  )
}

export default Home
