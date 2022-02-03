import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Montlake Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Just getting started" />
	<div>
		<ul>
			<li><a href=5Minute/5Minute.html>5-Minute Tours</a></li>
			<li><a href=MontlakeBlog/default.html>Blog</a></li>
			<li><a href=journals/journals.html>Travel Journals</a></li>
			<li><a href=WebTopics/default.html>Web topics</a></li>
			<li><a href=LongviewChristmas/LongviewChristmas.html><b><span style="{color:red}">Latest:</span></b>&nbsp;Christmas in Longview, WA</a></li>
		</ul>
	</div>

    <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
